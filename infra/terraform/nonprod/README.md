# ank-app Terraform

This folder is the app-scoped Terraform root for deploying ank-app to Azure Static Web Apps.

It intentionally reuses only a few safe ideas from the older shared Terraform stack:

- provider version pinning
- remote Azure backend pattern
- simple environment and region based naming
- consistent tags

It does not reuse the older shared platform state, ARO resources, SQL, network, firewall, or identity resources.

## Files

- `providers.tf`: Terraform version, backend block, and provider configuration
- `variables.tf`: input variables for the app stack
- `static-web-app.tf`: resource group and Static Web App
- `outputs.tf`: useful deployment outputs
- `terraform.tfvars`: environment-specific variable values
- `backend.hcl`: isolated backend configuration for this app

## First Run

1. Update `terraform.tfvars` with your subscription and naming values
2. Point `backend.hcl` to the storage account and container that will hold this app's Terraform state
3. Run:

```bash
terraform init -backend-config=backend.hcl
terraform plan
terraform apply
```

## Notes

- The `key` in `backend.hcl` is already app-specific so this state stays separate from the older shared Terraform root.
- The Static Web App resource is created without GitHub linkage. You can connect CI/CD after the resource exists.
- For the GitHub Actions deployment procedure for the nonprod site, see `GITHUB_ACTIONS_DEPLOYMENT.md`.
- For the custom domain setup and Terraform import notes for `ankacoresystems.com`, see `CUSTOM_DOMAIN.md`.
