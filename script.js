const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const langButtons = document.querySelectorAll(".lang-button");

const translations = {
  en: {
    navAbout: "About",
    navServices: "Services",
    navExperience: "Experience",
    navCertificates: "Certificates",
    navFaq: "FAQ",
    navBlog: "Blog",
    navContact: "Contact",
    heroEyebrow: "Secure Azure and Kubernetes advisory for enterprise and regulated environments",
    heroTitle: "Helping enterprises build secure, compliant, production-ready cloud and platform foundations.",
    heroText: "AnkaCore helps organizations reduce delivery risk, strengthen security posture, and modernize Azure and Kubernetes environments with senior advisory shaped by 30+ years in IT, including 18 years at Microsoft.",
    heroPrimaryCta: "Request an Advisory Call",
    heroSecondaryCta: "View Experience Highlights",
    metricOne: "Years in IT leadership",
    metricTwo: "Years at Microsoft",
    metricThree: "Workloads migrated",
    snapshotLabel: "Professional Snapshot",
    snapshotTitle: "Enterprise Cloud, Security & Platform Advisor",
    snapshotSubtitle: "AnkaCore • Independent Advisory • High-Trust Delivery",
    gridOneLabel: "Focus",
    gridOneValue: "Cloud, Cyber Security, DevOps",
    gridTwoLabel: "Specialty",
    gridTwoValue: "AKS, OpenShift, Kubernetes, Zero-Trust",
    gridThreeLabel: "Approach",
    gridThreeValue: "Strategy + Execution",
    gridFourLabel: "Reach",
    gridFourValue: "Europe, MEA & Africa",
    trustedText: "Trusted in banking, enterprise, and public sector environments where security, governance, and delivery confidence matter.",
    aboutEyebrow: "About",
    aboutTitle: "Enterprise advisory for leaders who need clearer decisions, lower risk, and stronger platform outcomes.",
    aboutIntro: "AnkaCore combines enterprise architecture depth with hands-on delivery experience, helping decision-makers move from uncertainty to a practical, secure, and executable path.",
    aboutCardOneTitle: "Our Mission",
    aboutCardOneText: "AnkaCore exists to help organizations make confident technology decisions across cloud, security, DevOps, platform engineering, and Infrastructure as Code without getting stuck between high-level strategy and weak execution. The mission is to turn complex transformation efforts into practical direction leaders can trust and teams can deliver.",
    aboutCardTwoTitle: "Our Expertise",
    aboutCardTwoText: "The expertise behind AnkaCore is built on 30+ years in IT, including 18 years at Microsoft, delivering enterprise architecture, secure cloud platforms, Kubernetes foundations, DevOps modernization, landing zones, governance, and Zero Trust-aligned operating models.",
    aboutCardTwoTextTwo: "That experience includes work shaped by the Cloud Adoption Framework (CAF), Well-Architected Framework (WAF), and Zero Trust principles, with a strong focus on regulated and large-scale environments where compliance alignment and operational readiness cannot be optional.",
    aboutCardThreeTitle: "Our Vision",
    aboutCardThreeText: "The vision is to be a trusted advisory partner that combines enterprise-grade depth with the agility of an independent firm, giving customers direct access to senior judgment, clear standards, and measurable progress.",
    aboutCardThreeTextTwo: "The long-term goal is not dependency. It is to leave customers with stronger internal capability, better platform decisions, and operating models that continue working after the engagement ends.",
    aboutFaqCta: "Read the FAQ",
    servicesEyebrow: "Services",
    servicesTitle: "Focused services for secure cloud foundations, platform modernization, and high-trust delivery.",
    servicesIntro: "AnkaCore supports organizations that need practical progress across Azure, Kubernetes, security, and engineering delivery, especially where governance and risk must be handled correctly from the start.",
    serviceOneTitle: "Cloud Architecture & Landing Zones",
    serviceOneText: "Design Azure foundations that improve governance, reduce architectural risk, and support secure growth through landing zones aligned to CAF and Well-Architected guidance.",
    serviceTwoTitle: "DevOps, Kubernetes & Platform Engineering",
    serviceTwoText: "Strengthen AKS, OpenShift, and Kubernetes platforms with delivery guardrails, modern engineering practices, and production-ready operating models that teams can sustain.",
    serviceThreeTitle: "Cyber Security, Zero-Trust & Compliance",
    serviceThreeText: "Improve security posture with Zero Trust-aligned controls, platform risk reviews, pipeline hardening, and governance approaches suited to regulated environments.",
    serviceFourTitle: "Infrastructure as Code, Automation & AI Enablement",
    serviceFourText: "Use Terraform, Ansible, GitHub, Azure DevOps, and AI-assisted workflows to make delivery more repeatable, auditable, and efficient across enterprise platforms.",
    servicesPageCta: "View Service Details",
    servicesPageEyebrow: "Services",
    servicesPageTitle: "Advisory services built to reduce risk, strengthen platforms, and support secure transformation.",
    servicesPageText: "AnkaCore turns deep cloud, security, and platform experience into practical services that help leaders understand where to start, what to fix, and how to move forward with confidence.",
    servicesFeatureEyebrow: "Positioning",
    servicesFeatureTitle: "Senior advisory depth for organizations that need business-level clarity and hands-on technical credibility in the same engagement.",
    servicesFeatureText: "AnkaCore is especially well suited to enterprises, regulated industries, and platform teams that need direct access to senior cloud, security, DevOps, and Kubernetes expertise without adding a large consultancy layer between decisions and execution.",
    servicesFeaturePointOneLabel: "Ideal for",
    servicesFeaturePointOneValue: "Banks, regulated enterprises, modernization programs, and platform teams under delivery pressure",
    servicesFeaturePointTwoLabel: "Engagement style",
    servicesFeaturePointTwoValue: "Advisory assessments, architecture leadership, security reviews, delivery acceleration, and executive guidance",
    serviceDetailOneKicker: "01",
    serviceDetailOneTitle: "Cloud Strategy, Architecture, and Landing Zones",
    serviceDetailOneText: "Design Azure foundations that balance governance, cost control, security, and delivery speed. Work can include cloud adoption planning, landing zones, subscription strategy, identity, networking, and operating model decisions that prevent expensive rework later.",
    serviceDetailOnePointOne: "CAF-aligned landing zone design and architecture reviews",
    serviceDetailOnePointTwo: "Azure governance, identity, networking, and management group structure",
    serviceDetailOnePointThree: "Roadmap support for migration, modernization, and platform foundation programs",
    serviceDetailTwoKicker: "02",
    serviceDetailTwoTitle: "DevOps, Platform Engineering, and Kubernetes Enablement",
    serviceDetailTwoText: "Build or improve internal platform capabilities with delivery pipelines, GitOps or CI/CD patterns, Kubernetes operating models, and platform guardrails. The focus is on helping engineering teams ship faster without weakening reliability, security, or control.",
    serviceDetailTwoPointOne: "AKS, OpenShift, and Kubernetes platform architecture",
    serviceDetailTwoPointTwo: "Azure DevOps and GitHub workflow design for enterprise teams",
    serviceDetailTwoPointThree: "Operational readiness, platform standards, and team enablement",
    serviceDetailThreeKicker: "03",
    serviceDetailThreeTitle: "Cyber Security Architecture, Zero-Trust, and Compliance Readiness",
    serviceDetailThreeText: "Strengthen security posture across cloud platforms and engineering workflows with practical architecture guidance. Engagements can cover identity, access, Zero Trust architecture, pipeline hardening, platform risk reviews, and secure operating patterns for regulated sectors.",
    serviceDetailThreePointOne: "Security architecture reviews for Azure and Kubernetes environments",
    serviceDetailThreePointTwo: "Zero-Trust controls, access strategy, and governance recommendations",
    serviceDetailThreePointThree: "Compliance-oriented delivery patterns for banking and enterprise programs",
    serviceDetailFourKicker: "04",
    serviceDetailFourTitle: "Automation, IaC, and AI-Assisted Delivery Improvement",
    serviceDetailFourText: "Improve consistency and delivery speed with Terraform, Ansible, reusable templates, automation standards, and modern AI-assisted engineering workflows. The objective is better throughput without compromising governance, control, or auditability.",
    serviceDetailFourPointOne: "Terraform and automation standards for repeatable delivery",
    serviceDetailFourPointTwo: "Pipeline hardening and platform automation opportunities",
    serviceDetailFourPointThree: "Practical AI enablement inside engineering and operations workflows",
    deliverablesEyebrow: "What Clients Receive",
    deliverablesTitle: "Every engagement is tailored, but the work consistently produces clearer decisions, stronger technical direction, and more confident delivery.",
    deliverableOneTitle: "Executive Clarity",
    deliverableOneText: "A clearer decision-making path for cloud, security, modernization, or platform investments.",
    deliverableTwoTitle: "Architecture Direction",
    deliverableTwoText: "Actionable recommendations, target-state designs, and standards that internal teams can implement with confidence.",
    deliverableThreeTitle: "Team Enablement",
    deliverableThreeText: "Stronger internal capability through coaching, working sessions, and delivery guidance that helps teams become more self-sufficient.",
    deliverableFourTitle: "Risk Reduction",
    deliverableFourText: "Better security posture, more consistent governance, and fewer surprises in regulated or high-stakes environments.",
    engagementEyebrow: "Engagement Options",
    engagementTitle: "Services can start with a focused assessment and expand into longer-term leadership support only when the outcome justifies it.",
    engagementOneLabel: "Option 01",
    engagementOneTitle: "Focused Advisory Sprint",
    engagementOneText: "Best for architecture reviews, security assessments, landing zone direction, or platform decisions that need quick senior input.",
    engagementTwoLabel: "Option 02",
    engagementTwoTitle: "Transformation Leadership Support",
    engagementTwoText: "Best for enterprise programs that need sustained architecture leadership, stakeholder alignment, and delivery oversight.",
    engagementThreeLabel: "Option 03",
    engagementThreeTitle: "Team Uplift and Enablement",
    engagementThreeText: "Best for organizations that want stronger platform, DevOps, Kubernetes, or security capability inside their own teams.",
    servicesCtaEyebrow: "Next Step",
    servicesCtaTitle: "If the problem space is already visible, the next step is usually a short advisory discussion or architecture review.",
    servicesCtaText: "AnkaCore can support discovery, architecture review, modernization planning, secure platform design, and delivery acceleration. Engagements can start with a focused assessment and expand only when there is clear value in doing so.",
    servicesCtaPrimary: "Request an Advisory Discussion",
    servicesCtaSecondary: "Review Experience Highlights",
    portfolioEyebrow: "Experience Highlights",
    portfolioTitle: "Selected examples that demonstrate enterprise-scale delivery, security depth, and platform leadership.",
    portfolioOneTag: "Banking Transformation",
    portfolioOneTitle: "5,000+ Workloads Migrated for a Major South African Bank",
    portfolioOneText: "Led migration and modernization work at enterprise scale, combining governance, security, and operational resilience across a high-volume workload estate.",
    portfolioTwoTitle: "Secure Banking Platforms on Azure",
    portfolioTwoText: "Led cloud infrastructure and DevOps teams to deliver secure Azure-based banking platforms with Terraform, strong controls, and Zero Trust-aligned architecture.",
    portfolioThreeTitle: "CAF & Well-Architected Assessments at Scale",
    portfolioThreeText: "Delivered repeated advisory outcomes across architecture, governance, security, DevOps, and modernization, helping enterprise customers move forward with clearer standards and lower risk.",
    portfolioFourTag: "Platform Security",
    portfolioFourTitle: "Kubernetes, OpenShift, AKS, and Enterprise Security Reviews",
    portfolioFourText: "Designed microservices platforms, performed Kubernetes security reviews, and introduced more secure DevOps and AI-assisted engineering practices across enterprise environments.",
    certPageEyebrow: "Certificates",
    certPageTitle: "Selected certifications shown as icons and names.",
    certPageText: "This page uses the local certificate files in the folder and keeps the presentation intentionally simple.",
    faqPageEyebrow: "FAQ",
    faqPageTitle: "Answers to the questions clients usually ask before starting a cloud, security, or platform engagement.",
    faqPageText: "This FAQ helps serious buyers move faster by reducing uncertainty around fit, working style, and how AnkaCore approaches cloud, security, and platform engagements.",
    faqOneQuestion: "What types of organizations is AnkaCore best suited for?",
    faqOneAnswer: "AnkaCore is especially well suited to enterprises, banks, regulated sectors, modernization programs, and product or platform teams that need senior cloud, security, DevOps, or Kubernetes guidance without the overhead of a large consulting layer.",
    faqTwoQuestion: "Do you work only at strategy level, or can you also support delivery?",
    faqTwoAnswer: "Both. AnkaCore connects executive-level decision-making with practical delivery support. Engagements can include architecture direction, reviews, roadmaps, hands-on advisory, and team enablement when implementation needs stronger technical leadership.",
    faqThreeQuestion: "What kinds of services are most commonly requested?",
    faqThreeAnswer: "The most common requests are cloud architecture and landing zones, DevOps and platform engineering improvement, Kubernetes and OpenShift guidance, cyber security and Zero-Trust reviews, and automation or IaC standardization.",
    faqFourQuestion: "Can AnkaCore support regulated or high-trust environments?",
    faqFourAnswer: "Yes. The background behind AnkaCore includes work across banking, public sector, and enterprise environments where governance, security posture, resilience, and compliance expectations are high.",
    faqFiveQuestion: "How do engagements usually start?",
    faqFiveAnswer: "Most engagements start with a short discovery conversation focused on business context, technical landscape, risk, urgency, and desired outcomes. From there, the work usually begins with a focused assessment, architecture review, or advisory sprint.",
    faqSixQuestion: "Can you work with internal engineering and leadership teams?",
    faqSixAnswer: "Yes. A large part of the work is helping internal teams align faster, strengthen architecture decisions, improve delivery patterns, and build lasting capability rather than dependency.",
    faqSevenQuestion: "Do you support remote and international engagements?",
    faqSevenAnswer: "Yes. The profile behind AnkaCore has operated across Europe, MEA, and Africa, and is designed to support both remote collaboration and broader international consulting relationships.",
    faqEightQuestion: "What makes AnkaCore different from a larger consultancy?",
    faqEightAnswer: "The difference is direct senior involvement, less communication overhead, and a tighter connection between advice and execution. Clients get enterprise-grade experience with a more focused, responsive, and accountable working model.",
    faqCtaEyebrow: "Next Step",
    faqCtaTitle: "If your main question is whether the fit is right, a short advisory call is usually the fastest answer.",
    faqCtaText: "The initial discussion can stay practical: your priorities, your current platform reality, the risks you want to reduce, and whether an assessment, architecture review, or broader engagement makes the most sense.",
    faqCtaPrimary: "Request an Advisory Call",
    faqCtaSecondary: "Review Services",
    processEyebrow: "Process",
    processTitle: "A simple engagement model for advisory work that turns uncertainty into a practical delivery path.",
    processOneTitle: "Executive Discovery",
    processOneText: "Clarify the business objective, platform landscape, risk profile, and delivery priorities before recommending action.",
    processTwoTitle: "Architecture & Advisory Plan",
    processTwoText: "Define the roadmap, governance model, security approach, and engineering operating pattern needed for confident execution.",
    processThreeTitle: "Delivery & Enablement",
    processThreeText: "Support implementation, strengthen internal teams, and drive measurable outcomes across the engagement.",
    blogEyebrow: "Blog",
    blogTitle: "Field insights on cloud architecture, security, Kubernetes, and platform transformation.",
    blogIntro: "The blog supports the advisory brand by showing how AnkaCore thinks through architecture, security, networking, and practical platform decisions in real environments.",
    blogPageCta: "Explore the Blog",
    blogPageEyebrow: "Blog",
    blogPageTitle: "Architecture patterns and field insights from cloud, security, and platform transformation work.",
    blogPageText: "This page curates selected Medium articles so visitors can quickly see how AnkaCore approaches Azure networking, firewall design, secure infrastructure, and practical platform guidance.",
    blogOneTag: "Cloud Strategy",
    blogOneTitle: "Azure Firewall basics",
    blogOneText: "A practical breakdown of Azure Firewall fundamentals, useful for readers who want a cleaner understanding of how to position this service inside enterprise network architecture.",
    blogTwoTag: "Azure Security",
    blogTwoTitle: "Azure Firewall Rules",
    blogTwoText: "A focused follow-up on rule handling in Azure Firewall, useful for teams shaping policy control, filtering logic, and secure traffic patterns.",
    blogThreeTag: "Secure Infrastructure",
    blogThreeTitle: "The what, where, how of SSH",
    blogThreeText: "A practical explainer on SSH concepts, key exchange, authentication, and real environment usage across Linux and Windows systems.",
    blogFourTag: "Azure Networking",
    blogFourTitle: "Azure VWAN route tables, route intent and policies, route maps",
    blogFourText: "A more advanced Azure networking article focused on routing intent, route tables, and policy behavior inside Azure Virtual WAN.",
    blogReadCta: "Read on Medium",
    blogProfileCta: "Explore on Medium",
    blogCtaEyebrow: "Continue the Discussion",
    blogCtaTitle: "If a topic here reflects a challenge you are facing, it can be the starting point for a practical advisory discussion.",
    blogCtaText: "Cloud architecture, Kubernetes platforms, Zero Trust, IaC, DevOps modernization, and AI-assisted delivery all benefit from a conversation grounded in real operating constraints and business goals.",
    blogCtaPrimary: "Request an Advisory Discussion",
    blogCtaSecondary: "Review Services",
    contactEyebrow: "Contact",
    contactTitle: "Discuss the cloud, security, platform, or modernization priorities you need to get right.",
    contactText: "AnkaCore supports advisory discussions, architecture reviews, secure cloud foundations, platform modernization, DevOps improvement, Zero Trust-aligned programs, and enterprise Kubernetes work across Azure and hybrid environments.",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    namePlaceholder: "Your client name",
    emailPlaceholder: "name@example.com",
    messagePlaceholder: "Tell me about your platform, cloud, security, or modernization challenge",
    contactButton: "Send Inquiry",
    contactSuccess: "Inquiry Received",
    contactError: "There was a problem sending your inquiry.",
    contactConfigError: "Add your Formspree form ID to activate this form."
  },
  tr: {
    navAbout: "Hakkında",
    navServices: "Hizmetler",
    navExperience: "Deneyim",
    navCertificates: "Sertifikalar",
    navFaq: "SSS",
    navBlog: "Blog",
    navContact: "İletişim",
    heroEyebrow: "Kurumsal ve regülasyona tabi ortamlar için güvenli Azure ve Kubernetes danışmanlığı",
    heroTitle: "Kurumların güvenli, uyumlu ve üretime hazır bulut ile platform temelleri kurmasına yardımcı olur.",
    heroText: "AnkaCore; teslimat riskini azaltmak, güvenlik duruşunu güçlendirmek ve Azure ile Kubernetes ortamlarını modernize etmek isteyen kurumlara, BT'de 30+ yıl ve bunun 18 yılı Microsoft'ta geçmiş deneyime dayanan kıdemli danışmanlık sunar.",
    heroPrimaryCta: "Danışmanlık Görüşmesi Talep Et",
    heroSecondaryCta: "Deneyim Başlıklarını Gör",
    metricOne: "BT liderliğinde yıl",
    metricTwo: "Microsoft'ta yıl",
    metricThree: "Taşınan iş yükü",
    snapshotLabel: "Profesyonel Özet",
    snapshotTitle: "Kurumsal Bulut, Güvenlik ve Platform Danışmanı",
    snapshotSubtitle: "AnkaCore • Bağımsız Danışmanlık • Yüksek Güvenli Teslimat",
    gridOneLabel: "Odak",
    gridOneValue: "Bulut, Siber Güvenlik, DevOps",
    gridTwoLabel: "Uzmanlık",
    gridTwoValue: "AKS, OpenShift, Kubernetes, Zero-Trust",
    gridThreeLabel: "Yaklaşım",
    gridThreeValue: "Strateji + Uygulama",
    gridFourLabel: "Kapsam",
    gridFourValue: "Avrupa, MEA ve Afrika",
    trustedText: "Güvenlik, yönetişim ve teslimat güveninin kritik olduğu bankacılık, kurumsal yapı ve kamu ortamlarında edinilmiş güvenilir deneyim.",
    aboutEyebrow: "Hakkında",
    aboutTitle: "Daha net kararlar, daha düşük risk ve daha güçlü platform sonuçları isteyen liderler için kurumsal danışmanlık.",
    aboutIntro: "AnkaCore; kurumsal mimari derinliğini uygulamaya yakın teslimat deneyimiyle birleştirir ve karar vericilerin belirsizlikten güvenli, uygulanabilir ve pratik bir yola geçmesine yardımcı olur.",
    aboutCardOneTitle: "Misyonumuz",
    aboutCardOneText: "AnkaCore; kurumların bulut, güvenlik, DevOps, platform mühendisliği ve Infrastructure as Code alanlarında yüksek seviyeli strateji ile zayıf uygulama arasında sıkışmadan güvenle teknoloji kararları almasına yardımcı olmak için vardır. Misyon, karmaşık dönüşüm çalışmalarını yöneticilerin güvenebileceği ve ekiplerin hayata geçirebileceği pratik bir yöne dönüştürmektir.",
    aboutCardTwoTitle: "Uzmanlık",
    aboutCardTwoText: "AnkaCore'un arkasındaki uzmanlık; BT'de 30+ yıl ve Microsoft'ta 18 yılın üzerine kurulu olup kurumsal mimari, güvenli bulut platformları, Kubernetes temelleri, DevOps modernizasyonu, landing zone tasarımı, yönetişim ve Zero Trust uyumlu işletim modellerini kapsar.",
    aboutCardTwoTextTwo: "Bu deneyim; Cloud Adoption Framework (CAF), Well-Architected Framework (WAF) ve Zero Trust prensipleriyle şekillenmiş, özellikle uyumluluk beklentilerinin ve operasyonel hazırlığın kritik olduğu regülasyona tabi ve büyük ölçekli ortamlara odaklanmıştır.",
    aboutCardThreeTitle: "Vizyon",
    aboutCardThreeText: "Vizyon; müşterilere bağımsız bir iş ortağının çevikliğiyle kurumsal düzeyde derinlik sunan güvenilir bir danışmanlık yapısı oluşturmaktır: doğrudan kıdemli bakış, daha net standartlar ve ölçülebilir ilerleme.",
    aboutCardThreeTextTwo: "Uzun vadeli hedef bağımlılık yaratmak değil; müşterinin içinde daha güçlü yetkinlik, daha iyi platform kararları ve çalışma bittikten sonra da işlemeye devam eden işletim modelleri bırakmaktır.",
    aboutFaqCta: "SSS Sayfasını İncele",
    servicesEyebrow: "Hizmetler",
    servicesTitle: "Güvenli bulut temelleri, platform modernizasyonu ve yüksek güvenli teslimat için odaklı hizmetler.",
    servicesIntro: "AnkaCore; özellikle yönetişim ve riskin en baştan doğru ele alınması gereken ortamlarda Azure, Kubernetes, güvenlik ve mühendislik teslimatı konusunda kurumlara pratik ilerleme sağlar.",
    serviceOneTitle: "Bulut Mimarisi ve Landing Zone Tasarımı",
    serviceOneText: "Yönetişimi güçlendiren, mimari riski azaltan ve güvenli büyümeyi destekleyen Azure temellerini CAF ve Well-Architected rehberliğiyle tasarlayın.",
    serviceTwoTitle: "DevOps, Kubernetes ve Platform Mühendisliği",
    serviceTwoText: "AKS, OpenShift ve Kubernetes platformlarını; teslimat guardrail'leri, modern mühendislik pratikleri ve ekiplerin sürdürebileceği üretime hazır işletim modelleriyle güçlendirin.",
    serviceThreeTitle: "Siber Güvenlik, Zero-Trust ve Uyumluluk",
    serviceThreeText: "Zero Trust uyumlu kontroller, platform risk incelemeleri, pipeline sertleştirme ve regülasyona tabi ortamlara uygun yönetişim yaklaşımlarıyla güvenlik duruşunu güçlendirin.",
    serviceFourTitle: "Infrastructure as Code, Otomasyon ve Yapay Zeka Etkinleştirme",
    serviceFourText: "Terraform, Ansible, GitHub, Azure DevOps ve yapay zeka destekli iş akışlarıyla teslimatı daha tekrarlanabilir, denetlenebilir ve verimli hale getirin.",
    servicesPageCta: "Hizmet Detaylarını Gör",
    servicesPageEyebrow: "Hizmetler",
    servicesPageTitle: "Riski azaltmak, platformları güçlendirmek ve güvenli dönüşümü desteklemek için tasarlanmış danışmanlık hizmetleri.",
    servicesPageText: "AnkaCore; derin bulut, güvenlik ve platform deneyimini, liderlerin nereden başlayacağını, neyi düzeltmesi gerektiğini ve nasıl güvenle ilerleyeceğini anlamasına yardımcı olan pratik hizmetlere dönüştürür.",
    servicesFeatureEyebrow: "Konumlandırma",
    servicesFeatureTitle: "Aynı çalışmada hem iş düzeyinde netlik hem de uygulamaya yakın teknik güvenilirlik isteyen kurumlar için kıdemli danışmanlık derinliği.",
    servicesFeatureText: "AnkaCore; karar ile uygulama arasına büyük bir danışmanlık katmanı koymadan, doğrudan kıdemli bulut, güvenlik, DevOps ve Kubernetes uzmanlığına ihtiyaç duyan kurumsal yapılar, regülasyona tabi sektörler ve platform ekipleri için güçlü bir seçenektir.",
    servicesFeaturePointOneLabel: "Uygun olduğu yapılar",
    servicesFeaturePointOneValue: "Bankalar, regülasyona tabi kurumlar, modernizasyon programları ve teslimat baskısı altındaki platform ekipleri",
    servicesFeaturePointTwoLabel: "Çalışma biçimi",
    servicesFeaturePointTwoValue: "Değerlendirme odaklı danışmanlık, mimari liderlik, güvenlik incelemeleri, teslimat hızlandırma ve yönetici rehberliği",
    serviceDetailOneKicker: "01",
    serviceDetailOneTitle: "Bulut Stratejisi, Mimari ve Landing Zone Tasarımı",
    serviceDetailOneText: "Yönetişim, maliyet kontrolü, güvenlik ve teslimat hızını dengeleyen Azure temelleri tasarlayın. Buna bulut adaptasyon planlaması, landing zone tasarımı, abonelik stratejisi, kimlik, ağ yapısı ve sonradan pahalı yeniden iş yükü yaratmayacak işletim modeli kararları dahildir.",
    serviceDetailOnePointOne: "CAF uyumlu landing zone tasarımı ve mimari değerlendirmeleri",
    serviceDetailOnePointTwo: "Azure yönetişimi, kimlik, ağ ve management group yapısı",
    serviceDetailOnePointThree: "Geçiş, modernizasyon ve platform temeli programları için yol haritası desteği",
    serviceDetailTwoKicker: "02",
    serviceDetailTwoTitle: "DevOps, Platform Mühendisliği ve Kubernetes Etkinleştirme",
    serviceDetailTwoText: "Teslimat pipeline'ları, GitOps veya CI/CD kalıpları, Kubernetes işletim modelleri ve platform guardrail'leri ile iç platform yeteneklerini kurun veya geliştirin. Odak, güvenilirlik, güvenlik veya kontrolü zayıflatmadan mühendislik ekiplerinin daha hızlı teslimat yapmasını sağlamaktır.",
    serviceDetailTwoPointOne: "AKS, OpenShift ve Kubernetes platform mimarisi",
    serviceDetailTwoPointTwo: "Kurumsal ekipler için Azure DevOps ve GitHub iş akışı tasarımı",
    serviceDetailTwoPointThree: "Operasyonel hazırlık, platform standartları ve ekip yetkinleştirme",
    serviceDetailThreeKicker: "03",
    serviceDetailThreeTitle: "Siber Güvenlik Mimarisi, Zero-Trust ve Uyumluluk Hazırlığı",
    serviceDetailThreeText: "Pratik mimari rehberlikle bulut platformları ve mühendislik iş akışları genelinde güvenlik duruşunu güçlendirin. Çalışmalar; kimlik, erişim, Zero Trust mimarisi, pipeline sertleştirme, platform risk incelemeleri ve regülasyona tabi sektörler için güvenli işletim kalıplarını kapsayabilir.",
    serviceDetailThreePointOne: "Azure ve Kubernetes ortamları için güvenlik mimarisi değerlendirmeleri",
    serviceDetailThreePointTwo: "Zero-Trust kontrolleri, erişim stratejisi ve yönetişim önerileri",
    serviceDetailThreePointThree: "Bankacılık ve kurumsal programlar için uyumluluk odaklı teslimat kalıpları",
    serviceDetailFourKicker: "04",
    serviceDetailFourTitle: "Otomasyon, IaC ve Yapay Zeka Destekli Teslimat İyileştirmesi",
    serviceDetailFourText: "Terraform, Ansible, yeniden kullanılabilir şablonlar, otomasyon standartları ve modern yapay zeka destekli mühendislik iş akışlarıyla tutarlılığı ve teslimat hızını artırın. Amaç, yönetişim, kontrol veya denetlenebilirlikten ödün vermeden daha yüksek verim elde etmektir.",
    serviceDetailFourPointOne: "Tekrarlanabilir teslimat için Terraform ve otomasyon standartları",
    serviceDetailFourPointTwo: "Pipeline sertleştirme ve platform otomasyonu fırsatları",
    serviceDetailFourPointThree: "Mühendislik ve operasyon iş akışlarında pratik yapay zeka etkinleştirme",
    deliverablesEyebrow: "Müşterilerin Aldığı Çıktılar",
    deliverablesTitle: "Her çalışma özel olarak şekillenir; ancak sonuçlar genellikle daha net kararlar, daha güçlü teknik yön ve daha güvenli teslimat biçiminde ortaya çıkar.",
    deliverableOneTitle: "Yönetici Netliği",
    deliverableOneText: "Bulut, güvenlik, modernizasyon veya platform yatırımları için daha net bir karar alma yolu.",
    deliverableTwoTitle: "Mimari Yön",
    deliverableTwoText: "İç ekiplerin güvenle uygulayabileceği eyleme dönük öneriler, hedef durum tasarımları ve standartlar.",
    deliverableThreeTitle: "Ekip Yetkinleştirme",
    deliverableThreeText: "Koçluk, çalışma oturumları ve teslimat rehberliği sayesinde daha güçlü ve kendi başına ilerleyebilen iç yetkinlik.",
    deliverableFourTitle: "Risk Azaltma",
    deliverableFourText: "Regülasyona tabi veya yüksek öneme sahip ortamlarda daha iyi güvenlik duruşu, daha tutarlı yönetişim ve daha az sürpriz.",
    engagementEyebrow: "Çalışma Seçenekleri",
    engagementTitle: "Hizmetler odaklı bir değerlendirme ile başlayabilir ve yalnızca sonuç bunu haklı çıkarıyorsa daha uzun süreli liderlik desteğine genişleyebilir.",
    engagementOneLabel: "Seçenek 01",
    engagementOneTitle: "Odaklı Danışmanlık Sprinti",
    engagementOneText: "Hızlı kıdemli görüş gerektiren mimari değerlendirmeleri, güvenlik analizleri, landing zone yönlendirmesi veya platform kararları için uygundur.",
    engagementTwoLabel: "Seçenek 02",
    engagementTwoTitle: "Dönüşüm Liderliği Desteği",
    engagementTwoText: "Sürekli mimari liderlik, paydaş hizalaması ve teslimat gözetimi gerektiren kurumsal programlar için uygundur.",
    engagementThreeLabel: "Seçenek 03",
    engagementThreeTitle: "Ekip Gelişimi ve Yetkinleştirme",
    engagementThreeText: "Kendi ekipleri içinde platform, DevOps, Kubernetes veya güvenlik yetkinliğini güçlendirmek isteyen kurumlar için uygundur.",
    servicesCtaEyebrow: "Sonraki Adım",
    servicesCtaTitle: "Sorun alanı zaten görünür durumdaysa, bir sonraki adım genellikle kısa bir danışmanlık görüşmesi veya mimari değerlendirmedir.",
    servicesCtaText: "AnkaCore; keşif, mimari değerlendirme, modernizasyon planlaması, güvenli platform tasarımı ve teslimat hızlandırma konularında destek verebilir. Çalışmalar odaklı bir değerlendirme ile başlayabilir ve yalnızca net değer varsa genişletilir.",
    servicesCtaPrimary: "Danışmanlık Görüşmesi Talep Et",
    servicesCtaSecondary: "Deneyim Başlıklarını İncele",
    portfolioEyebrow: "Deneyim Başlıkları",
    portfolioTitle: "Kurumsal ölçekte teslimat, güvenlik derinliği ve platform liderliğini gösteren seçilmiş örnekler.",
    portfolioOneTag: "Bankacılık Dönüşümü",
    portfolioOneTitle: "Güney Afrika'da Büyük Bir Banka İçin 5.000+ İş Yükü Taşındı",
    portfolioOneText: "Yüksek hacimli iş yükü ortamında yönetişim, güvenlik ve operasyonel dayanıklılığı bir araya getiren büyük ölçekli geçiş ve modernizasyon çalışmalarına liderlik edildi.",
    portfolioTwoTitle: "Azure Üzerinde Güvenli Bankacılık Platformları",
    portfolioTwoText: "Terraform, güçlü kontroller ve Zero Trust uyumlu mimari ile güvenli Azure tabanlı bankacılık platformları teslim etmek için bulut altyapı ve DevOps ekiplerine liderlik edildi.",
    portfolioThreeTitle: "Ölçekli CAF ve Well-Architected Değerlendirmeleri",
    portfolioThreeText: "Mimari, yönetişim, güvenlik, DevOps ve modernizasyon alanlarında tekrarlanan danışmanlık çıktıları üretilerek kurumsal müşterilerin daha net standartlarla ve daha düşük riskle ilerlemesi sağlandı.",
    portfolioFourTag: "Platform Güvenliği",
    portfolioFourTitle: "Kubernetes, OpenShift, AKS ve Kurumsal Güvenlik İncelemeleri",
    portfolioFourText: "Mikroservis platformları tasarlandı, Kubernetes güvenlik incelemeleri yapıldı ve kurumsal ortamlarda daha güvenli DevOps ile yapay zeka destekli mühendislik pratikleri devreye alındı.",
    certPageEyebrow: "Sertifikalar",
    certPageTitle: "Seçilmiş sertifikalar yalnızca ikon ve isim olarak gösterilir.",
    certPageText: "Bu sayfa klasördeki yerel sertifika dosyalarını kullanır ve sunumu bilerek sade tutar.",
    faqPageEyebrow: "SSS",
    faqPageTitle: "Müşterilerin bulut, güvenlik veya platform çalışmasına başlamadan önce en sık sorduğu soruların yanıtları.",
    faqPageText: "Bu SSS, ciddi alıcıların uyum, çalışma biçimi ve AnkaCore'un bulut, güvenlik ve platform çalışmalarına nasıl yaklaştığı konularındaki belirsizliği azaltarak daha hızlı ilerlemesine yardımcı olur.",
    faqOneQuestion: "AnkaCore en çok hangi tür kurumlar için uygundur?",
    faqOneAnswer: "AnkaCore; özellikle kurumsal yapılar, bankalar, regülasyona tabi sektörler, modernizasyon programları ve büyük bir danışmanlık katmanının yükü olmadan kıdemli bulut, güvenlik, DevOps veya Kubernetes rehberliğine ihtiyaç duyan ürün ya da platform ekipleri için uygundur.",
    faqTwoQuestion: "Yalnızca strateji düzeyinde mi çalışıyorsunuz, yoksa teslimatı da destekliyor musunuz?",
    faqTwoAnswer: "Her ikisi de. AnkaCore, yönetici düzeyindeki karar alma süreci ile pratik teslimat desteğini birleştirir. Çalışmalar; uygulama daha güçlü teknik liderlik gerektirdiğinde mimari yönlendirme, değerlendirmeler, yol haritaları, uygulamaya yakın danışmanlık ve ekip yetkinleştirmeyi kapsayabilir.",
    faqThreeQuestion: "En sık hangi hizmetler talep ediliyor?",
    faqThreeAnswer: "En sık talep edilen konular bulut mimarisi ve landing zone tasarımı, DevOps ve platform mühendisliği iyileştirmeleri, Kubernetes ve OpenShift rehberliği, Siber Güvenlik ve Zero-Trust değerlendirmeleri ile otomasyon veya IaC standardizasyonudur.",
    faqFourQuestion: "AnkaCore regülasyona tabi veya yüksek güven gerektiren ortamlarda destek verebilir mi?",
    faqFourAnswer: "Evet. AnkaCore'un arkasındaki geçmiş; yönetişim, güvenlik duruşu, dayanıklılık ve uyumluluk beklentilerinin yüksek olduğu bankacılık, kamu ve kurumsal ortamlardaki çalışmaları içerir.",
    faqFiveQuestion: "Çalışmalar genelde nasıl başlıyor?",
    faqFiveAnswer: "Çoğu çalışma; iş bağlamı, teknik yapı, risk, aciliyet ve hedeflenen çıktılara odaklanan kısa bir keşif görüşmesiyle başlar. Sonrasında çalışma çoğunlukla odaklı bir değerlendirme, mimari inceleme veya danışmanlık sprinti olarak başlar.",
    faqSixQuestion: "İç mühendislik ekipleri ve liderlik ekipleriyle birlikte çalışabiliyor musunuz?",
    faqSixAnswer: "Evet. Çalışmaların önemli bir bölümü, iç ekiplerin daha hızlı hizalanmasına, mimari kararların güçlenmesine, teslimat kalıplarının iyileşmesine ve bağımlılık yerine kalıcı yetkinlik oluşmasına yardımcı olmaktır.",
    faqSevenQuestion: "Uzaktan ve uluslararası çalışmaları destekliyor musunuz?",
    faqSevenAnswer: "Evet. AnkaCore'un arkasındaki profil Avrupa, MEA ve Afrika genelinde çalışmıştır ve hem uzaktan iş birliğini hem de uluslararası danışmanlık ilişkilerini destekleyecek şekilde yapılandırılmıştır.",
    faqEightQuestion: "AnkaCore'u büyük bir danışmanlık şirketinden ayıran nedir?",
    faqEightAnswer: "Fark; doğrudan kıdemli katılım, daha az iletişim yükü ve tavsiye ile uygulama arasındaki daha sıkı bağdır. Müşteriler daha odaklı, hızlı yanıt veren ve hesap verebilir bir çalışma modeliyle kurumsal düzeyde deneyim alır.",
    faqCtaEyebrow: "Sonraki Adım",
    faqCtaTitle: "Ana sorunuz uyumun doğru olup olmadığıysa, kısa bir danışmanlık görüşmesi genellikle en hızlı yanıttır.",
    faqCtaText: "İlk görüşme pratik kalabilir: öncelikleriniz, mevcut platform gerçekliğiniz, azaltmak istediğiniz riskler ve bir değerlendirme, mimari inceleme veya daha geniş bir çalışmanın hangisinin daha uygun olduğu.",
    faqCtaPrimary: "Danışmanlık Görüşmesi Talep Et",
    faqCtaSecondary: "Hizmetleri İncele",
    processEyebrow: "Süreç",
    processTitle: "Belirsizliği uygulanabilir bir teslimat yoluna dönüştüren sade bir danışmanlık modeli.",
    processOneTitle: "Yönetici Keşif Görüşmesi",
    processOneText: "Aksiyon önermeden önce iş hedefi, platform yapısı, risk profili ve teslimat öncelikleri netleştirilir.",
    processTwoTitle: "Mimari ve Danışmanlık Planı",
    processTwoText: "Güvenli uygulama için gereken yol haritası, yönetişim modeli, güvenlik yaklaşımı ve mühendislik çalışma biçimi tanımlanır.",
    processThreeTitle: "Teslimat ve Yetkinleştirme",
    processThreeText: "Uygulama desteklenir, iç ekipler güçlendirilir ve çalışma boyunca ölçülebilir sonuçlar üretilir.",
    blogEyebrow: "Blog",
    blogTitle: "Bulut mimarisi, güvenlik, Kubernetes ve platform dönüşümü üzerine saha içgörüleri.",
    blogIntro: "Blog; AnkaCore'un mimari, güvenlik, ağ ve pratik platform kararlarını gerçek ortamlarda nasıl ele aldığını göstererek danışmanlık markasını destekler.",
    blogPageCta: "Blogu İncele",
    blogPageEyebrow: "Blog",
    blogPageTitle: "Bulut, güvenlik ve platform dönüşüm çalışmalarından mimari kalıplar ve saha içgörüleri.",
    blogPageText: "Bu sayfa, ziyaretçilerin AnkaCore'un Azure ağ yapıları, firewall tasarımı, güvenli altyapı ve pratik platform rehberliğine nasıl yaklaştığını hızlıca görebilmesi için seçilmiş Medium yazılarını öne çıkarır.",
    blogOneTag: "Bulut Stratejisi",
    blogOneTitle: "Azure Firewall basics",
    blogOneText: "Azure Firewall temellerini sade şekilde ele alan, bu servisin kurumsal ağ mimarisi içinde nasıl konumlandırılacağını daha net anlamaya yardımcı olan bir yazı.",
    blogTwoTag: "Azure Güvenliği",
    blogTwoTitle: "Azure Firewall Rules",
    blogTwoText: "Azure Firewall içinde kural mantığını ele alan, politika kontrolü, filtreleme yapısı ve güvenli trafik akışlarını şekillendiren ekipler için odaklı bir devam yazısı.",
    blogThreeTag: "Güvenli Altyapı",
    blogThreeTitle: "The what, where, how of SSH",
    blogThreeText: "SSH kavramları, anahtar değişimi, kimlik doğrulama ve Linux ile Windows ortamlarındaki gerçek kullanım senaryolarını açıklayan pratik bir yazı.",
    blogFourTag: "Azure Ağ Mimarisi",
    blogFourTitle: "Azure VWAN route tables, route intent and policies, route maps",
    blogFourText: "Azure Virtual WAN içinde routing intent, route table ve policy davranışlarına odaklanan daha ileri seviye bir Azure ağ mimarisi yazısı.",
    blogReadCta: "Medium'da Oku",
    blogProfileCta: "Medium'da İncele",
    blogCtaEyebrow: "Görüşmeyi Sürdürün",
    blogCtaTitle: "Buradaki bir konu yaşadığınız bir zorluğu yansıtıyorsa, bu pratik bir danışmanlık görüşmesinin başlangıç noktası olabilir.",
    blogCtaText: "Bulut mimarisi, Kubernetes platformları, Zero Trust, IaC, DevOps modernizasyonu ve yapay zeka destekli teslimat; gerçek işletim kısıtları ve iş hedefleri temelinde ele alındığında daha güçlü sonuçlar üretir.",
    blogCtaPrimary: "Danışmanlık Görüşmesi Talep Et",
    blogCtaSecondary: "Hizmetleri İncele",
    contactEyebrow: "İletişim",
    contactTitle: "Doğru ele alınması gereken bulut, güvenlik, platform veya modernizasyon önceliklerinizi konuşalım.",
    contactText: "AnkaCore; danışmanlık görüşmeleri, mimari incelemeler, güvenli bulut temelleri, platform modernizasyonu, DevOps iyileştirmesi, Zero Trust uyumlu programlar ve Azure ile hibrit ortamlarda kurumsal Kubernetes çalışmaları için destek sunar.",
    nameLabel: "İsim",
    emailLabel: "E-posta",
    messageLabel: "Mesaj",
    namePlaceholder: "Müşteri adınız",
    emailPlaceholder: "isim@example.com",
    messagePlaceholder: "Platform, bulut, güvenlik veya modernizasyon zorluğunuzu paylaşın",
    contactButton: "Talep Gönder",
    contactSuccess: "Talebiniz Alındı",
    contactError: "Talebiniz gönderilirken bir sorun oluştu.",
    contactConfigError: "Bu formu etkinleştirmek için Formspree form kimliğinizi ekleyin."
  }
};

let currentLang = window.localStorage.getItem("ankacore-lang") || "en";

const applyLanguage = (lang) => {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dict[key]) {
      element.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dict[key]) {
      element.setAttribute("placeholder", dict[key]);
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  currentLang = lang;
  window.localStorage.setItem("ankacore-lang", lang);
};

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.14 }
);

revealElements.forEach((element) => observer.observe(element));

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    const endpoint = form.getAttribute("action") || "";
    const dict = translations[currentLang] || translations.en;

    if (!button) {
      return;
    }

    if (!endpoint || endpoint.includes("your-form-id")) {
      window.alert(dict.contactConfigError);
      return;
    }

    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = "Sending...";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      button.textContent = dict.contactSuccess;
      form.reset();
    } catch (error) {
      button.textContent = dict.contactError;
    } finally {
      window.setTimeout(() => {
        button.textContent = dict.contactButton || originalText;
        button.disabled = false;
      }, 2200);
    }
  });
}

applyLanguage(currentLang);
