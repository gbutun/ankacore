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
    navContact: "Contact",
    heroEyebrow: "Enterprise cloud, DevOps, Cyber Security, and Kubernetes advisory",
    heroTitle: "Enterprise cloud, DevOps, Cyber Security, and Kubernetes leadership with the flexibility of an independent firm.",
    heroText: "AnkaCore presents a senior executive profile built on 30+ years in IT, including 18 years at Microsoft, delivering enterprise cloud architecture, DevOps modernization, Cyber Security strategy, Kubernetes platforms, and large-scale transformation across Europe, MEA, and Africa.",
    heroPrimaryCta: "Book an Executive Consultation",
    heroSecondaryCta: "View Experience Highlights",
    metricOne: "Years in IT leadership",
    metricTwo: "Years at Microsoft",
    metricThree: "Workloads migrated",
    snapshotLabel: "Professional Snapshot",
    snapshotTitle: "Cloud, Cyber Security & DevOps Executive",
    snapshotSubtitle: "AnkaCore • Independent Advisory • Enterprise Delivery",
    gridOneLabel: "Focus",
    gridOneValue: "Cloud, Cyber Security, DevOps",
    gridTwoLabel: "Specialty",
    gridTwoValue: "AKS, OpenShift, Kubernetes, Zero-Trust",
    gridThreeLabel: "Approach",
    gridThreeValue: "Strategy + Execution",
    gridFourLabel: "Reach",
    gridFourValue: "Europe, MEA & Africa",
    trustedText: "Trusted by enterprise environments in banking, automotive, and public sector transformation programs.",
    aboutEyebrow: "About",
    aboutTitle: "Executive cloud and security advisory shaped around what enterprise customers need most: clarity, confidence, and momentum.",
    aboutIntro: "The About section should do more than describe a profile. It should help decision-makers quickly understand why AnkaCore exists, what depth of capability is available, and what long-term perspective guides each engagement.",
    aboutCardOneTitle: "Our Mission",
    aboutCardOneText: "As AnkaraCore, our goal is to help organizations make confident technology decisions across cloud and on-premise environments spanning security, DevOps, platform engineering, modern microservices architectures, and Infrastructure as Code, augmented by AI-driven insights and intelligent automation, without getting trapped between high-level strategy and weak execution. Our mission is to turn complex transformation initiatives into practical, actionable direction that leaders can trust and teams can deliver.",
    aboutCardTwoTitle: "Our Expertise",
    aboutCardTwoText: "Our expertise is built on 30+ years in IT, including 18 years at Microsoft, delivering enterprise-grade solutions across cloud and on-premise environments. It spans enterprise architecture, Zero-Trust security, Kubernetes platforms, microservices, DevOps modernization, Infrastructure as Code, landing zones, and governance, with a strong focus on turning strategy into practical, executable outcomes in regulated and large-scale environments.",
    aboutCardTwoTextTwo: "We have actively contributed to and implemented industry frameworks and practices, including the Cloud Adoption Framework (CAF), Well-Architected Framework (WAF), and Zero Trust models, ensuring that transformation initiatives are not only well-designed but secure, compliant, and operationally effective from day one.",
    aboutCardThreeTitle: "Our Vision",
    aboutCardThreeText: "The vision is to build a trusted advisory partner that combines enterprise-grade depth with the agility of an independent firm, delivering clear direction, strong technical standards, and measurable outcomes across cloud and on-premise environments.",
    aboutCardThreeTextTwo: "We aim to create lasting internal capability within our customers, where architecture, execution, and AI-enabled practices come together to drive sustainable transformation.",
    aboutFaqCta: "Read the FAQ",
    servicesEyebrow: "Services",
    servicesTitle: "Advisory and delivery services across enterprise cloud, DevOps, Cyber Security, and Kubernetes platforms.",
    servicesIntro: "A focused overview lives on the homepage, while the dedicated Services page explains how engagements are structured, where the strongest value is created, and what outcomes clients can expect.",
    serviceOneTitle: "Cloud Architecture & Landing Zones",
    serviceOneText: "Enterprise-scale Azure architecture, governance, networking, and landing zone design aligned to CAF and Well-Architected principles.",
    serviceTwoTitle: "DevOps, Kubernetes & Platform Engineering",
    serviceTwoText: "AKS, Azure Red Hat OpenShift, and Kubernetes platforms supported by modern DevOps practices, microservices foundations, security reviews, and production-ready operating models.",
    serviceThreeTitle: "Cyber Security, Zero-Trust & Compliance",
    serviceThreeText: "Cyber security architecture, high-trust enterprise controls, Kubernetes and platform security reviews, pipeline hardening, and governance models for regulated environments.",
    serviceFourTitle: "Infrastructure as Code, Automation & AI Enablement",
    serviceFourText: "Terraform, Ansible, GitHub, Azure DevOps, and AI-assisted engineering workflows to improve delivery speed, governance, and consistency across enterprise platforms.",
    servicesPageCta: "Explore the Full Services Page",
    servicesPageEyebrow: "Services",
    servicesPageTitle: "Executive consulting services built around cloud platforms, secure delivery, and transformation leadership.",
    servicesPageText: "This page turns the broad expertise behind AnkaCore into clear client-facing offerings, making it easier for decision-makers to understand where support starts, how engagements are shaped, and what kind of progress they can expect.",
    servicesFeatureEyebrow: "Positioning",
    servicesFeatureTitle: "Senior advisory depth for organizations that need strategy and hands-on execution in the same engagement.",
    servicesFeatureText: "AnkaCore is best positioned for enterprises, regulated industries, and fast-moving product teams that need executive-level cloud, DevOps, Cyber Security, and Kubernetes expertise without adding a large consultancy layer between decision and delivery.",
    servicesFeaturePointOneLabel: "Ideal for",
    servicesFeaturePointOneValue: "Banks, regulated enterprises, modernization programs, and platform teams under delivery pressure",
    servicesFeaturePointTwoLabel: "Engagement style",
    servicesFeaturePointTwoValue: "Advisory sprints, architecture leadership, security reviews, delivery acceleration, and executive guidance",
    serviceDetailOneKicker: "01",
    serviceDetailOneTitle: "Cloud Strategy, Architecture, and Landing Zones",
    serviceDetailOneText: "Design Azure foundations that balance governance, cost control, security, and delivery speed. This includes cloud adoption planning, enterprise architecture decisions, landing zones, subscription strategy, identity, networking, and operating model guidance.",
    serviceDetailOnePointOne: "CAF-aligned landing zone design and architecture reviews",
    serviceDetailOnePointTwo: "Azure governance, identity, networking, and management group structure",
    serviceDetailOnePointThree: "Executive roadmap support for migration and modernization programs",
    serviceDetailTwoKicker: "02",
    serviceDetailTwoTitle: "DevOps, Platform Engineering, and Kubernetes Enablement",
    serviceDetailTwoText: "Build or improve internal platform capabilities with delivery pipelines, GitOps or CI/CD patterns, Kubernetes operating models, and platform guardrails. The focus is on making engineering teams faster, safer, and easier to scale.",
    serviceDetailTwoPointOne: "AKS, OpenShift, and Kubernetes platform architecture",
    serviceDetailTwoPointTwo: "Azure DevOps and GitHub workflow design for enterprise teams",
    serviceDetailTwoPointThree: "Operational readiness, platform standards, and engineering enablement",
    serviceDetailThreeKicker: "03",
    serviceDetailThreeTitle: "Cyber Security Architecture, Zero-Trust, and Compliance Readiness",
    serviceDetailThreeText: "Strengthen security posture across cloud platforms and engineering workflows with practical architecture guidance. Engagements can cover identity, access, Zero-Trust architecture, pipeline hardening, platform risk reviews, and secure operating patterns for regulated sectors.",
    serviceDetailThreePointOne: "Security architecture reviews for Azure and Kubernetes environments",
    serviceDetailThreePointTwo: "Zero-Trust controls, access strategy, and governance recommendations",
    serviceDetailThreePointThree: "Compliance-oriented delivery patterns for banking and enterprise programs",
    serviceDetailFourKicker: "04",
    serviceDetailFourTitle: "Automation, IaC, and AI-Assisted Delivery Improvement",
    serviceDetailFourText: "Improve consistency and delivery speed with Terraform, Ansible, reusable templates, automation standards, and modern AI-assisted engineering workflows. The objective is better throughput without compromising control or auditability.",
    serviceDetailFourPointOne: "Terraform and automation standards for repeatable delivery",
    serviceDetailFourPointTwo: "Pipeline hardening and platform automation opportunities",
    serviceDetailFourPointThree: "Practical AI enablement inside engineering and operations workflows",
    deliverablesEyebrow: "What Clients Receive",
    deliverablesTitle: "Every engagement is tailored, but the work usually produces a clear mix of strategic direction, technical decisions, and delivery momentum.",
    deliverableOneTitle: "Executive Clarity",
    deliverableOneText: "A sharper decision-making path for cloud, security, modernization, or platform investments.",
    deliverableTwoTitle: "Architecture Direction",
    deliverableTwoText: "Actionable recommendations, target-state designs, and standards that teams can actually implement.",
    deliverableThreeTitle: "Team Enablement",
    deliverableThreeText: "Stronger internal capability through coaching, working sessions, and delivery guidance for engineering teams.",
    deliverableFourTitle: "Risk Reduction",
    deliverableFourText: "Better security posture, more consistent governance, and fewer surprises in regulated or high-stakes environments.",
    engagementEyebrow: "Engagement Options",
    engagementTitle: "Services can be delivered as a short advisory intervention or as embedded leadership support over a longer transformation cycle.",
    engagementOneLabel: "Option 01",
    engagementOneTitle: "Focused Advisory Sprint",
    engagementOneText: "Best for architecture reviews, security assessments, landing zone direction, or platform decisions that need quick senior input.",
    engagementTwoLabel: "Option 02",
    engagementTwoTitle: "Transformation Leadership Support",
    engagementTwoText: "Best for enterprise programs that need sustained architecture leadership, stakeholder alignment, and delivery oversight.",
    engagementThreeLabel: "Option 03",
    engagementThreeTitle: "Team Uplift and Enablement",
    engagementThreeText: "Best for organizations that want stronger platform, DevOps, Kubernetes, or security capability inside their own teams.",
    servicesCtaEyebrow: "Start a Conversation",
    servicesCtaTitle: "If you already know the problem space, the next step is usually a short discussion to define the engagement shape.",
    servicesCtaText: "AnkaCore can support executive discovery, architecture review, modernization planning, secure platform design, and delivery acceleration. The scope can start small and expand only if the outcome justifies it.",
    servicesCtaPrimary: "Book an Executive Consultation",
    servicesCtaSecondary: "Review Experience Highlights",
    portfolioEyebrow: "Experience Highlights",
    portfolioTitle: "Representative transformation outcomes from executive and enterprise roles.",
    portfolioOneTag: "Banking Transformation",
    portfolioOneTitle: "5,000+ Workloads Migrated for a Major South African Bank",
    portfolioOneText: "Led large-scale migration and modernization initiatives with governance, security, and operational resilience at enterprise scale.",
    portfolioTwoTitle: "Secure Banking Platforms on Azure",
    portfolioTwoText: "Directed Cloud Infrastructure and DevOps teams to design and deploy highly secure banking solutions with Terraform and Zero-Trust architecture.",
    portfolioThreeTitle: "CAF & Well-Architected Assessments at Scale",
    portfolioThreeText: "Delivered 3 to 4 enterprise projects weekly across architecture, governance, Cyber Security, DevOps, and modernization engagements.",
    portfolioFourTag: "Platform Security",
    portfolioFourTitle: "Kubernetes, OpenShift, AKS, and Enterprise Security Reviews",
    portfolioFourText: "Designed microservices platforms, performed Kubernetes security audits, and introduced secure DevOps and AI-assisted engineering practices across enterprise environments.",
    certPageEyebrow: "Certificates",
    certPageTitle: "Selected certifications shown as icons and names.",
    certPageText: "This page uses the local certificate files in the folder and keeps the presentation intentionally simple.",
    faqPageEyebrow: "FAQ",
    faqPageTitle: "Answers to the questions clients usually ask before starting a cloud, security, or platform engagement.",
    faqPageText: "A strong FAQ helps serious buyers move faster. It reduces uncertainty around scope, working style, and fit, while reinforcing the level of experience and clarity behind the AnkaCore offer.",
    faqOneQuestion: "What types of organizations is AnkaCore best suited for?",
    faqOneAnswer: "AnkaCore is especially well suited to enterprises, banks, regulated sectors, modernization programs, and product or platform teams that need senior cloud, security, DevOps, or Kubernetes guidance without the overhead of a large consulting layer.",
    faqTwoQuestion: "Do you work only at strategy level, or can you also support delivery?",
    faqTwoAnswer: "Both. The value of AnkaCore is in connecting executive-level decision-making with practical delivery support. Engagements can include architecture direction, reviews, roadmaps, hands-on advisory, and team enablement.",
    faqThreeQuestion: "What kinds of services are most commonly requested?",
    faqThreeAnswer: "The most common requests are cloud architecture and landing zones, DevOps and platform engineering improvement, Kubernetes and OpenShift guidance, cyber security and Zero-Trust reviews, and automation or IaC standardization.",
    faqFourQuestion: "Can AnkaCore support regulated or high-trust environments?",
    faqFourAnswer: "Yes. The background behind AnkaCore includes work across banking, public sector, and enterprise environments where governance, security posture, resilience, and compliance expectations are high.",
    faqFiveQuestion: "How do engagements usually start?",
    faqFiveAnswer: "Most engagements start with a short discovery conversation focused on business context, technical landscape, risk, urgency, and desired outcomes. From there, the work can begin as a focused advisory sprint or a broader transformation engagement.",
    faqSixQuestion: "Can you work with internal engineering and leadership teams?",
    faqSixAnswer: "Yes. A large part of the work is helping internal teams align faster, strengthen architecture decisions, improve delivery patterns, and build lasting capability rather than dependency.",
    faqSevenQuestion: "Do you support remote and international engagements?",
    faqSevenAnswer: "Yes. The profile behind AnkaCore has operated across Europe, MEA, and Africa, and is designed to support both remote collaboration and broader international consulting relationships.",
    faqEightQuestion: "What makes AnkaCore different from a larger consultancy?",
    faqEightAnswer: "The difference is direct senior involvement, less communication overhead, and a tighter connection between advice and execution. Clients get enterprise-grade experience with a more focused, responsive, and accountable working model.",
    faqCtaEyebrow: "Next Step",
    faqCtaTitle: "If your main question is whether the fit is right, a short conversation is usually the fastest answer.",
    faqCtaText: "The initial discussion can stay practical: your priorities, your platform reality, the risks you want to reduce, and whether an advisory sprint or broader engagement makes the most sense.",
    faqCtaPrimary: "Book an Executive Consultation",
    faqCtaSecondary: "Review Services",
    processEyebrow: "Process",
    processTitle: "A simple engagement model for executive advisory and transformation delivery.",
    processOneTitle: "Executive Discovery",
    processOneText: "Clarify the business objective, platform landscape, risk profile, and delivery priorities.",
    processTwoTitle: "Architecture & Advisory Plan",
    processTwoText: "Define the roadmap, governance model, security approach, and engineering operating pattern.",
    processThreeTitle: "Delivery & Enablement",
    processThreeText: "Support implementation, uplift internal teams, and drive measurable outcomes across the engagement.",
    contactEyebrow: "Contact",
    contactTitle: "Discuss enterprise cloud, DevOps, Cyber Security, Kubernetes, or modernization priorities.",
    contactText: "Available for advisory, architecture leadership, enterprise cloud transformation, DevOps modernization, Cyber Security strategy, Kubernetes and OpenShift platform work, Zero-Trust programs, and executive-level consulting engagements delivered through AnkaCore.",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    namePlaceholder: "Your client name",
    emailPlaceholder: "name@example.com",
    messagePlaceholder: "Tell me about your cloud, security, platform, or transformation needs",
    contactButton: "Send Inquiry",
    contactSuccess: "Inquiry Received"
  },
  tr: {
    navAbout: "Hakkında",
    navServices: "Hizmetler",
    navExperience: "Deneyim",
    navCertificates: "Sertifikalar",
    navFaq: "SSS",
    navContact: "İletişim",
    heroEyebrow: "Kurumsal bulut, DevOps, Siber Güvenlik ve Kubernetes danışmanlığı",
    heroTitle: "Bağımsız bir yapının esnekliğiyle kurumsal bulut, DevOps, Siber Güvenlik ve Kubernetes liderliği.",
    heroText: "AnkaCore, BT alanında 30+ yıllık ve bunun 18 yılı Microsoft'ta geçmiş deneyime dayanan üst düzey bir profili sunar; Avrupa, MEA ve Afrika genelinde kurumsal bulut mimarisi, DevOps modernizasyonu, Siber Güvenlik stratejisi, Kubernetes platformları ve büyük ölçekli dönüşüm programları teslim eder.",
    heroPrimaryCta: "Yönetici Danışmanlığı Planla",
    heroSecondaryCta: "Deneyim Başlıklarını Gör",
    metricOne: "BT liderliğinde yıl",
    metricTwo: "Microsoft'ta yıl",
    metricThree: "Taşınan iş yükü",
    snapshotLabel: "Profesyonel Özet",
    snapshotTitle: "Bulut, Siber Güvenlik ve DevOps Yöneticisi",
    snapshotSubtitle: "AnkaCore • Bağımsız Danışmanlık • Kurumsal Teslimat",
    gridOneLabel: "Odak",
    gridOneValue: "Bulut, Siber Güvenlik, DevOps",
    gridTwoLabel: "Uzmanlık",
    gridTwoValue: "AKS, OpenShift, Kubernetes, Zero-Trust",
    gridThreeLabel: "Yaklaşım",
    gridThreeValue: "Strateji + Uygulama",
    gridFourLabel: "Kapsam",
    gridFourValue: "Avrupa, MEA ve Afrika",
    trustedText: "Bankacılık, otomotiv ve kamu dönüşüm programlarında kurumsal ortamlarda güven kazanmış deneyim.",
    aboutEyebrow: "Hakkında",
    aboutTitle: "Kurumsal müşterilerin en çok ihtiyaç duyduğu üç unsura göre şekillenen yönetici düzeyinde bulut ve güvenlik danışmanlığı: netlik, güven ve ilerleme.",
    aboutIntro: "Hakkında bölümü yalnızca bir profili anlatmamalıdır. Karar vericilerin AnkaCore'un neden var olduğunu, hangi derinlikte yetkinlik sunduğunu ve her çalışmaya hangi uzun vadeli bakış açısının yön verdiğini hızlıca anlamasına yardımcı olmalıdır.",
    aboutCardOneTitle: "Misyonumuz",
    aboutCardOneText: "AnkaCore; kurumların bulut, güvenlik, DevOps ve platform mühendisliğinde yüksek seviyeli strateji ile zayıf uygulama arasında sıkışmadan güvenle teknoloji kararları almasına yardımcı olmak için vardır. Misyon, karmaşık dönüşüm çalışmalarını yöneticilerin güvenebileceği ve ekiplerin hayata geçirebileceği pratik bir yöne dönüştürmektir.",
    aboutCardTwoTitle: "Uzmanlık",
    aboutCardTwoText: "Uzmanlık; BT'de 30+ yıl, Microsoft'ta 18 yıl, kurumsal bulut mimarisi, Zero-Trust güvenliği, Kubernetes platformları, DevOps modernizasyonu, landing zone tasarımı, yönetişim ve regülasyona tabi büyük ölçekli ortamlarda dönüşüm liderliğini bir araya getirir.",
    aboutCardThreeTitle: "Vizyon",
    aboutCardThreeText: "Vizyon; müşterilere bağımsız bir iş ortağının çevikliğiyle kurumsal düzeyde derinlik sunan güvenilir bir danışmanlık markası oluşturmaktır: daha az katman, daha net iletişim, daha güçlü teknik standartlar ve kurum içinde kalıcı yetkinlik oluşturan sonuçlar.",
    aboutFaqCta: "SSS Sayfasını İncele",
    servicesEyebrow: "Hizmetler",
    servicesTitle: "Kurumsal bulut, DevOps, Siber Güvenlik ve Kubernetes platformları için danışmanlık ve teslimat hizmetleri.",
    servicesIntro: "Ana sayfada odaklı bir özet yer alır; ayrı Hizmetler sayfası ise çalışmaların nasıl yapılandığını, en yüksek değerin nerede üretildiğini ve müşterilerin hangi sonuçları bekleyebileceğini açıklar.",
    serviceOneTitle: "Bulut Mimarisi ve Landing Zone Tasarımı",
    serviceOneText: "CAF ve Well-Architected prensiplerine uyumlu, kurumsal ölçekte Azure mimarisi, yönetişim, ağ yapısı ve landing zone tasarımı.",
    serviceTwoTitle: "DevOps, Kubernetes ve Platform Mühendisliği",
    serviceTwoText: "AKS, Azure Red Hat OpenShift ve Kubernetes platformları; modern DevOps uygulamaları, mikroservis temelleri, güvenlik incelemeleri ve üretime hazır işletim modelleriyle desteklenir.",
    serviceThreeTitle: "Siber Güvenlik, Zero-Trust ve Uyumluluk",
    serviceThreeText: "Regülasyona tabi ortamlar için Siber Güvenlik mimarisi, yüksek güvenli kurumsal kontroller, Kubernetes ve platform güvenliği incelemeleri, pipeline sertleştirme ve yönetişim modelleri.",
    serviceFourTitle: "Infrastructure as Code, Otomasyon ve Yapay Zeka Etkinleştirme",
    serviceFourText: "Teslimat hızını, yönetişimi ve tutarlılığı artırmak için Terraform, Ansible, GitHub, Azure DevOps ve yapay zeka destekli mühendislik iş akışları.",
    servicesPageCta: "Hizmetler Sayfasının Tamamını İncele",
    servicesPageEyebrow: "Hizmetler",
    servicesPageTitle: "Bulut platformları, güvenli teslimat ve dönüşüm liderliği etrafında şekillenen yönetici danışmanlık hizmetleri.",
    servicesPageText: "Bu sayfa, AnkaCore'un geniş uzmanlığını müşteri odaklı net hizmet başlıklarına dönüştürür; böylece karar vericiler desteğin nerede başladığını, çalışmaların nasıl şekillendiğini ve ne tür bir ilerleme bekleyebileceklerini daha kolay anlayabilir.",
    servicesFeatureEyebrow: "Konumlandırma",
    servicesFeatureTitle: "Aynı çalışmada hem strateji hem de uygulama isteyen kurumlar için kıdemli danışmanlık derinliği.",
    servicesFeatureText: "AnkaCore; karar ile teslimat arasına büyük bir danışmanlık katmanı koymadan, yönetici düzeyinde bulut, DevOps, Siber Güvenlik ve Kubernetes uzmanlığına ihtiyaç duyan kurumsal yapılar, regülasyona tabi sektörler ve hızlı hareket eden ürün ekipleri için güçlü bir konumdadır.",
    servicesFeaturePointOneLabel: "Uygun olduğu yapılar",
    servicesFeaturePointOneValue: "Bankalar, regülasyona tabi kurumlar, modernizasyon programları ve teslimat baskısı altındaki platform ekipleri",
    servicesFeaturePointTwoLabel: "Çalışma biçimi",
    servicesFeaturePointTwoValue: "Danışmanlık sprintleri, mimari liderlik, güvenlik incelemeleri, teslimat hızlandırma ve yönetici rehberliği",
    serviceDetailOneKicker: "01",
    serviceDetailOneTitle: "Bulut Stratejisi, Mimari ve Landing Zone Tasarımı",
    serviceDetailOneText: "Yönetişim, maliyet kontrolü, güvenlik ve teslimat hızını dengeleyen Azure temelleri tasarlayın. Buna bulut adaptasyon planlaması, kurumsal mimari kararları, landing zone tasarımı, abonelik stratejisi, kimlik, ağ yapısı ve işletim modeli rehberliği dahildir.",
    serviceDetailOnePointOne: "CAF uyumlu landing zone tasarımı ve mimari değerlendirmeleri",
    serviceDetailOnePointTwo: "Azure yönetişimi, kimlik, ağ ve management group yapısı",
    serviceDetailOnePointThree: "Geçiş ve modernizasyon programları için yönetici düzeyinde yol haritası desteği",
    serviceDetailTwoKicker: "02",
    serviceDetailTwoTitle: "DevOps, Platform Mühendisliği ve Kubernetes Etkinleştirme",
    serviceDetailTwoText: "Teslimat pipeline'ları, GitOps veya CI/CD kalıpları, Kubernetes işletim modelleri ve platform guardrail'leri ile iç platform yeteneklerini kurun veya geliştirin. Odak, mühendislik ekiplerini daha hızlı, daha güvenli ve daha ölçeklenebilir hale getirmektir.",
    serviceDetailTwoPointOne: "AKS, OpenShift ve Kubernetes platform mimarisi",
    serviceDetailTwoPointTwo: "Kurumsal ekipler için Azure DevOps ve GitHub iş akışı tasarımı",
    serviceDetailTwoPointThree: "Operasyonel hazırlık, platform standartları ve mühendislik yetkinleştirme",
    serviceDetailThreeKicker: "03",
    serviceDetailThreeTitle: "Siber Güvenlik Mimarisi, Zero-Trust ve Uyumluluk Hazırlığı",
    serviceDetailThreeText: "Pratik mimari rehberlikle bulut platformları ve mühendislik iş akışları genelinde güvenlik duruşunu güçlendirin. Çalışmalar; kimlik, erişim, Zero-Trust mimarisi, pipeline sertleştirme, platform risk incelemeleri ve regülasyona tabi sektörler için güvenli işletim kalıplarını kapsayabilir.",
    serviceDetailThreePointOne: "Azure ve Kubernetes ortamları için güvenlik mimarisi değerlendirmeleri",
    serviceDetailThreePointTwo: "Zero-Trust kontrolleri, erişim stratejisi ve yönetişim önerileri",
    serviceDetailThreePointThree: "Bankacılık ve kurumsal programlar için uyumluluk odaklı teslimat kalıpları",
    serviceDetailFourKicker: "04",
    serviceDetailFourTitle: "Otomasyon, IaC ve Yapay Zeka Destekli Teslimat İyileştirmesi",
    serviceDetailFourText: "Terraform, Ansible, yeniden kullanılabilir şablonlar, otomasyon standartları ve modern yapay zeka destekli mühendislik iş akışlarıyla tutarlılığı ve teslimat hızını artırın. Amaç, kontrol veya denetlenebilirlikten ödün vermeden daha yüksek verim elde etmektir.",
    serviceDetailFourPointOne: "Tekrarlanabilir teslimat için Terraform ve otomasyon standartları",
    serviceDetailFourPointTwo: "Pipeline sertleştirme ve platform otomasyonu fırsatları",
    serviceDetailFourPointThree: "Mühendislik ve operasyon iş akışlarında pratik yapay zeka etkinleştirme",
    deliverablesEyebrow: "Müşterilerin Aldığı Çıktılar",
    deliverablesTitle: "Her çalışma özel olarak şekillenir; ancak çoğu zaman ortaya stratejik yön, teknik kararlar ve teslimat ivmesinin net bir birleşimi çıkar.",
    deliverableOneTitle: "Yönetici Netliği",
    deliverableOneText: "Bulut, güvenlik, modernizasyon veya platform yatırımları için daha net bir karar alma yolu.",
    deliverableTwoTitle: "Mimari Yön",
    deliverableTwoText: "Ekiplerin gerçekten uygulayabileceği eyleme dönük öneriler, hedef durum tasarımları ve standartlar.",
    deliverableThreeTitle: "Ekip Yetkinleştirme",
    deliverableThreeText: "Mühendislik ekipleri için koçluk, çalışma oturumları ve teslimat rehberliği ile daha güçlü iç yetkinlik.",
    deliverableFourTitle: "Risk Azaltma",
    deliverableFourText: "Regülasyona tabi veya yüksek öneme sahip ortamlarda daha iyi güvenlik duruşu, daha tutarlı yönetişim ve daha az sürpriz.",
    engagementEyebrow: "Çalışma Seçenekleri",
    engagementTitle: "Hizmetler, kısa süreli bir danışmanlık müdahalesi olarak ya da daha uzun bir dönüşüm döngüsünde gömülü liderlik desteği şeklinde sunulabilir.",
    engagementOneLabel: "Seçenek 01",
    engagementOneTitle: "Odaklı Danışmanlık Sprinti",
    engagementOneText: "Hızlı kıdemli görüş gerektiren mimari değerlendirmeleri, güvenlik analizleri, landing zone yönlendirmesi veya platform kararları için uygundur.",
    engagementTwoLabel: "Seçenek 02",
    engagementTwoTitle: "Dönüşüm Liderliği Desteği",
    engagementTwoText: "Sürekli mimari liderlik, paydaş hizalaması ve teslimat gözetimi gerektiren kurumsal programlar için uygundur.",
    engagementThreeLabel: "Seçenek 03",
    engagementThreeTitle: "Ekip Gelişimi ve Yetkinleştirme",
    engagementThreeText: "Kendi ekipleri içinde platform, DevOps, Kubernetes veya güvenlik yetkinliğini güçlendirmek isteyen kurumlar için uygundur.",
    servicesCtaEyebrow: "Görüşmeyi Başlatın",
    servicesCtaTitle: "Sorun alanı zaten belliyse, bir sonraki adım genellikle çalışma biçimini tanımlamak için kısa bir görüşmedir.",
    servicesCtaText: "AnkaCore; yönetici keşfi, mimari değerlendirme, modernizasyon planlaması, güvenli platform tasarımı ve teslimat hızlandırma konularında destek verebilir. Kapsam küçük başlayabilir ve yalnızca sonuç bunu haklı çıkarıyorsa genişletilir.",
    servicesCtaPrimary: "Yönetici Danışmanlığı Planla",
    servicesCtaSecondary: "Deneyim Başlıklarını İncele",
    portfolioEyebrow: "Deneyim Başlıkları",
    portfolioTitle: "Yönetici ve kurumsal rollerde elde edilen dönüşüm sonuçlarından seçilmiş örnekler.",
    portfolioOneTag: "Bankacılık Dönüşümü",
    portfolioOneTitle: "Güney Afrika'da Büyük Bir Banka İçin 5.000+ İş Yükü Taşındı",
    portfolioOneText: "Kurumsal ölçekte yönetişim, güvenlik ve operasyonel dayanıklılıkla büyük çaplı geçiş ve modernizasyon programlarına liderlik edildi.",
    portfolioTwoTitle: "Azure Üzerinde Güvenli Bankacılık Platformları",
    portfolioTwoText: "Terraform ve Zero-Trust mimarisi ile yüksek güvenlikli bankacılık çözümleri tasarlamak ve hayata geçirmek için Cloud Infrastructure ve DevOps ekipleri yönetildi.",
    portfolioThreeTitle: "Ölçekli CAF ve Well-Architected Değerlendirmeleri",
    portfolioThreeText: "Mimari, yönetişim, Siber Güvenlik, DevOps ve modernizasyon alanlarında haftada 3 ila 4 kurumsal proje teslim edildi.",
    portfolioFourTag: "Platform Güvenliği",
    portfolioFourTitle: "Kubernetes, OpenShift, AKS ve Kurumsal Güvenlik İncelemeleri",
    portfolioFourText: "Mikroservis platformları tasarlandı, Kubernetes güvenlik denetimleri yapıldı ve kurumsal ortamlarda güvenli DevOps ile yapay zeka destekli mühendislik uygulamaları devreye alındı.",
    certPageEyebrow: "Sertifikalar",
    certPageTitle: "Seçilmiş sertifikalar yalnızca ikon ve isim olarak gösterilir.",
    certPageText: "Bu sayfa klasördeki yerel sertifika dosyalarını kullanır ve sunumu bilerek sade tutar.",
    faqPageEyebrow: "SSS",
    faqPageTitle: "Müşterilerin bulut, güvenlik veya platform çalışmasına başlamadan önce en sık sorduğu soruların yanıtları.",
    faqPageText: "Güçlü bir SSS sayfası, ciddi alıcıların daha hızlı ilerlemesine yardımcı olur. Kapsam, çalışma biçimi ve uyum konularındaki belirsizliği azaltırken, AnkaCore teklifinin arkasındaki deneyim ve netlik düzeyini de güçlendirir.",
    faqOneQuestion: "AnkaCore en çok hangi tür kurumlar için uygundur?",
    faqOneAnswer: "AnkaCore; özellikle kurumsal yapılar, bankalar, regülasyona tabi sektörler, modernizasyon programları ve büyük bir danışmanlık katmanının yükü olmadan kıdemli bulut, güvenlik, DevOps veya Kubernetes rehberliğine ihtiyaç duyan ürün ya da platform ekipleri için uygundur.",
    faqTwoQuestion: "Yalnızca strateji düzeyinde mi çalışıyorsunuz, yoksa teslimatı da destekliyor musunuz?",
    faqTwoAnswer: "Her ikisi de. AnkaCore'un değeri, yönetici düzeyindeki karar alma süreci ile pratik teslimat desteğini birleştirmesidir. Çalışmalar mimari yönlendirme, değerlendirmeler, yol haritaları, uygulamaya yakın danışmanlık ve ekip yetkinleştirmeyi kapsayabilir.",
    faqThreeQuestion: "En sık hangi hizmetler talep ediliyor?",
    faqThreeAnswer: "En sık talep edilen konular bulut mimarisi ve landing zone tasarımı, DevOps ve platform mühendisliği iyileştirmeleri, Kubernetes ve OpenShift rehberliği, Siber Güvenlik ve Zero-Trust değerlendirmeleri ile otomasyon veya IaC standardizasyonudur.",
    faqFourQuestion: "AnkaCore regülasyona tabi veya yüksek güven gerektiren ortamlarda destek verebilir mi?",
    faqFourAnswer: "Evet. AnkaCore'un arkasındaki geçmiş; yönetişim, güvenlik duruşu, dayanıklılık ve uyumluluk beklentilerinin yüksek olduğu bankacılık, kamu ve kurumsal ortamlardaki çalışmaları içerir.",
    faqFiveQuestion: "Çalışmalar genelde nasıl başlıyor?",
    faqFiveAnswer: "Çoğu çalışma; iş bağlamı, teknik yapı, risk, aciliyet ve hedeflenen çıktılara odaklanan kısa bir keşif görüşmesiyle başlar. Sonrasında çalışma, odaklı bir danışmanlık sprinti veya daha geniş bir dönüşüm programı olarak şekillenebilir.",
    faqSixQuestion: "İç mühendislik ekipleri ve liderlik ekipleriyle birlikte çalışabiliyor musunuz?",
    faqSixAnswer: "Evet. Çalışmaların önemli bir bölümü, iç ekiplerin daha hızlı hizalanmasına, mimari kararların güçlenmesine, teslimat kalıplarının iyileşmesine ve bağımlılık yerine kalıcı yetkinlik oluşmasına yardımcı olmaktır.",
    faqSevenQuestion: "Uzaktan ve uluslararası çalışmaları destekliyor musunuz?",
    faqSevenAnswer: "Evet. AnkaCore'un arkasındaki profil Avrupa, MEA ve Afrika genelinde çalışmıştır ve hem uzaktan iş birliğini hem de uluslararası danışmanlık ilişkilerini destekleyecek şekilde yapılandırılmıştır.",
    faqEightQuestion: "AnkaCore'u büyük bir danışmanlık şirketinden ayıran nedir?",
    faqEightAnswer: "Fark; doğrudan kıdemli katılım, daha az iletişim yükü ve tavsiye ile uygulama arasındaki daha sıkı bağdır. Müşteriler daha odaklı, hızlı yanıt veren ve hesap verebilir bir çalışma modeliyle kurumsal düzeyde deneyim alır.",
    faqCtaEyebrow: "Sonraki Adım",
    faqCtaTitle: "Ana sorunuz uyumun doğru olup olmadığıysa, kısa bir görüşme genellikle en hızlı yanıttır.",
    faqCtaText: "İlk görüşme pratik kalabilir: öncelikleriniz, platform gerçekliğiniz, azaltmak istediğiniz riskler ve odaklı bir danışmanlık sprintinin mi yoksa daha geniş bir çalışmanın mı daha uygun olduğu.",
    faqCtaPrimary: "Yönetici Danışmanlığı Planla",
    faqCtaSecondary: "Hizmetleri İncele",
    processEyebrow: "Süreç",
    processTitle: "Yönetici danışmanlığı ve dönüşüm teslimatı için sade bir çalışma modeli.",
    processOneTitle: "Yönetici Keşif Görüşmesi",
    processOneText: "İş hedefi, platform yapısı, risk profili ve teslimat öncelikleri netleştirilir.",
    processTwoTitle: "Mimari ve Danışmanlık Planı",
    processTwoText: "Yol haritası, yönetişim modeli, güvenlik yaklaşımı ve mühendislik çalışma biçimi tanımlanır.",
    processThreeTitle: "Teslimat ve Yetkinleştirme",
    processThreeText: "Uygulama desteklenir, iç ekipler güçlendirilir ve çalışma boyunca ölçülebilir sonuçlar üretilir.",
    contactEyebrow: "İletişim",
    contactTitle: "Kurumsal bulut, DevOps, Siber Güvenlik, Kubernetes veya modernizasyon önceliklerinizi konuşalım.",
    contactText: "AnkaCore aracılığıyla sunulan danışmanlık; mimari liderliği, kurumsal bulut dönüşümü, DevOps modernizasyonu, Siber Güvenlik stratejisi, Kubernetes ve OpenShift platform çalışmaları, Zero-Trust programları ve yönetici düzeyinde danışmanlık hizmetlerini kapsar.",
    nameLabel: "İsim",
    emailLabel: "E-posta",
    messageLabel: "Mesaj",
    namePlaceholder: "Müşteri adınız",
    emailPlaceholder: "isim@example.com",
    messagePlaceholder: "Bulut, güvenlik, platform veya dönüşüm ihtiyaçlarınızı paylaşın",
    contactButton: "Talep Gönder",
    contactSuccess: "Talebiniz Alındı"
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
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    if (button) {
      const originalText = button.textContent;
      button.textContent = translations[currentLang].contactSuccess;
      button.disabled = true;

      window.setTimeout(() => {
        button.textContent = translations[currentLang].contactButton || originalText;
        button.disabled = false;
        form.reset();
      }, 2200);
    }
  });
}

applyLanguage(currentLang);
