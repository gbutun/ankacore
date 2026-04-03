# Custom Domain Setup for Nonprod Static Web App

This document records the custom domain work completed for the nonprod Azure Static Web App and the operational steps across Azure, Terraform, and GoDaddy.

## Summary

We added support for the apex custom domain `ankacoresystems.com` to the nonprod Azure Static Web App.

The setup uses:

- Azure Static Web Apps for hosting
- Terraform for Azure resource management
- GoDaddy for DNS
- Azure-managed TLS after successful domain binding

## Nonprod Values

- Resource group: `n-weu-rg-01-a02`
- Static Web App name: `n-weu-ank-swa-01-a02`
- Default hostname: `victorious-desert-0e019a503.2.azurestaticapps.net`
- Custom domain: `ankacoresystems.com`

## Terraform Changes Made

The nonprod Terraform was extended to support custom domain binding for Azure Static Web Apps.

### Providers

Added the `azapi` provider so Terraform can manage the Static Web App custom domain resource.

### Variables

Added these variables:

- `custom_domain_name`
- `custom_domain_validation_method`
- `enable_custom_domain_binding`

Purpose:

- `custom_domain_name`: requested custom hostname
- `custom_domain_validation_method`: validation type used by Azure
- `enable_custom_domain_binding`: safety switch so Terraform does not try to bind the domain before DNS is ready

### Resource

Added a custom domain resource using `azapi_resource` for:

- `Microsoft.Web/staticSites/customDomains`

This resource is only created when:

```hcl
custom_domain_name != "" && enable_custom_domain_binding == true
```

### Outputs

Added outputs so the deployment exposes:

- requested custom domain
- whether binding is enabled
- Static Web App default hostname

## Nonprod tfvars Settings

Configured in nonprod:

```hcl
custom_domain_name = "ankacoresystems.com"
custom_domain_validation_method = "dns-txt-token"
```

The binding flag is intentionally controlled separately:

```hcl
enable_custom_domain_binding = true
```

Set this only after DNS is ready.

## Why the Binding Was Gated

Terraform can declare the Azure custom domain resource, but GoDaddy DNS is external to the current Terraform setup.

Because of that, Azure validation and DNS routing had to be completed first.

To avoid failed applies, the custom domain resource was gated behind `enable_custom_domain_binding`.

## Azure Portal Actions Performed

The following information had to be retrieved from Azure Portal.

### TXT Validation Token

Used for DNS ownership validation in GoDaddy.

Portal path:

- Static Web App
- `Settings`
- `Custom domains`
- `+ Add`
- Enter `ankacoresystems.com`
- Choose `TXT`
- Click `Generate code`

The generated value from Azure was used as the GoDaddy TXT record value.

### stableInboundIP

Used for apex routing in GoDaddy.

Portal path:

- Static Web App
- `Overview`
- `JSON View`
- Find `stableInboundIP`

This IP was used as the GoDaddy apex `A` record target.

## GoDaddy DNS Actions Performed

Because the domain is the apex domain `ankacoresystems.com`, the required DNS records were:

### TXT Record

Used for ownership validation.

- Type: `TXT`
- Host: `@`
- Value: Azure-generated validation token
- TTL: default

### A Record

Used for apex routing.

- Type: `A`
- Host: `@`
- Value: Azure `stableInboundIP`
- TTL: default

## Important DNS Notes

- Do not use `CNAME` at the apex/root domain.
- Do not put `ankacoresystems.com` in the Host field; use `@`.
- Remove or avoid conflicting root-domain forwarding or old `A` or `AAAA` records if present.
- DNS propagation may take time before Azure validation succeeds.

## Terraform Deploy Flow Used

The repository uses `deploy.sh`.

Typical flow:

```bash
cd /home/ronin/projects/ankacore-business/infra/terraform/nonprod
./deploy.sh init nonprod
./deploy.sh plan nonprod
./deploy.sh apply nonprod <plan_timestamp>
```

The `apply` command requires the timestamp produced by the previous `plan`.

Example:

```bash
./deploy.sh apply nonprod 20260403T073758Z
```

## What Happened During Binding

When the final Azure binding was attempted, Terraform reported that the custom domain resource already existed in Azure:

- `azapi_resource.ank_app_custom_domain[0]`

This means the Azure custom domain object had already been created, but Terraform state did not yet manage it.

## Required Fix: Terraform Import

The existing Azure custom domain resource must be imported into Terraform state.

Import command:

```bash
terraform import \
  'azapi_resource.ank_app_custom_domain[0]' \
  '/subscriptions/4366f64f-0965-4607-a045-2f8df2c17ebe/resourceGroups/n-weu-rg-01-a02/providers/Microsoft.Web/staticSites/n-weu-ank-swa-01-a02/customDomains/ankacoresystems.com'
```

After import:

```bash
./deploy.sh plan nonprod
./deploy.sh apply nonprod <new_plan_timestamp>
```

## TLS / Certificate Handling

No separate Let's Encrypt automation was required for the Azure Static Web App custom domain binding itself.

Once the domain binding succeeds, Azure Static Web Apps manages the TLS certificate automatically.

## Lessons Learned

- Terraform can manage the Azure-side custom domain resource.
- GoDaddy DNS still requires manual work unless DNS automation is added separately.
- Apex domains require different handling than `www` subdomains.
- The TXT validation token is not exposed by the current Terraform outputs.
- If the domain resource is created outside Terraform state, it must be imported.

## Current State

The nonprod environment now has:

- Terraform support for custom domains
- apex-domain configuration for `ankacoresystems.com`
- Azure and GoDaddy steps identified and executed
- import required for Terraform to fully own the already-existing Azure custom domain resource
