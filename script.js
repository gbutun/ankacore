const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const langButtons = document.querySelectorAll(".lang-button");

const translations = {
  en: {
    navAbout: "About",
    navServices: "Services",
    navExperience: "Experience",
    navContact: "Contact",
    heroEyebrow: "Executive cloud, security, and platform advisory",
    heroTitle: "Enterprise cloud transformation leadership with the flexibility of an independent firm.",
    heroText: "AnkaCore presents a senior executive profile built on 30+ years in IT, including 18 years at Microsoft, delivering secure cloud architecture, DevOps modernization, Kubernetes platforms, and large-scale enterprise transformation across Europe, MEA, and Africa.",
    heroPrimaryCta: "Book an Executive Consultation",
    heroSecondaryCta: "View Experience Highlights",
    metricOne: "Years in IT leadership",
    metricTwo: "Years at Microsoft",
    metricThree: "Workloads migrated",
    snapshotLabel: "Professional Snapshot",
    snapshotTitle: "Cloud & DevOps Executive",
    snapshotSubtitle: "AnkaCore • Independent Advisory • Enterprise Delivery",
    gridOneLabel: "Focus",
    gridOneValue: "Cloud Architecture",
    gridTwoLabel: "Specialty",
    gridTwoValue: "AKS, ARO & Zero-Trust",
    gridThreeLabel: "Approach",
    gridThreeValue: "Strategy + Execution",
    gridFourLabel: "Reach",
    gridFourValue: "Europe, MEA & Africa",
    trustedText: "Trusted by enterprise environments in banking, automotive, and public sector transformation programs.",
    aboutEyebrow: "About",
    aboutTitle: "Executive-level expertise delivered through a focused independent brand.",
    aboutCardOneTitle: "Strategic advisor and hands-on transformation leader",
    aboutCardOneText: "AnkaCore is positioned for organizations that need senior leadership in cloud, DevOps, security, and platform engineering without sacrificing technical depth. The profile combines architecture, governance, delivery leadership, and executive communication.",
    aboutCardTwoTitle: "Built for freelance flexibility with company-grade credibility",
    aboutCardTwoText: "The business model supports advisory, architecture, and transformation engagements as an independent executive consultant operating with the structure, standards, and presence of a specialized cloud and security firm.",
    servicesEyebrow: "Services",
    servicesTitle: "Advisory and delivery services for secure, enterprise-scale transformation.",
    serviceOneTitle: "Cloud Architecture & Landing Zones",
    serviceOneText: "Enterprise-scale Azure architecture, governance, networking, and landing zone design aligned to CAF and Well-Architected principles.",
    serviceTwoTitle: "Kubernetes & Platform Engineering",
    serviceTwoText: "AKS and Azure Red Hat OpenShift platforms, microservices foundations, security reviews, and production-ready operating models.",
    serviceThreeTitle: "Zero-Trust Security & Compliance",
    serviceThreeText: "Security architecture, high-trust enterprise controls, pipeline hardening, and governance models for regulated environments.",
    serviceFourTitle: "DevOps, IaC & AI Enablement",
    serviceFourText: "Terraform, Ansible, GitHub, Azure DevOps, and AI-assisted engineering workflows to improve delivery speed and consistency.",
    portfolioEyebrow: "Experience Highlights",
    portfolioTitle: "Representative transformation outcomes from executive and enterprise roles.",
    portfolioOneTag: "Banking Transformation",
    portfolioOneTitle: "5,000+ Workloads Migrated for a Major South African Bank",
    portfolioOneText: "Led large-scale migration and modernization initiatives with governance, security, and operational resilience at enterprise scale.",
    portfolioTwoTitle: "Secure Banking Platforms on Azure",
    portfolioTwoText: "Directed Cloud Infrastructure and DevOps teams to design and deploy highly secure banking solutions with Terraform and Zero-Trust architecture.",
    portfolioThreeTitle: "CAF & Well-Architected Assessments at Scale",
    portfolioThreeText: "Delivered 3 to 4 enterprise projects weekly across architecture, governance, security, and modernization engagements.",
    portfolioFourTag: "Platform Security",
    portfolioFourTitle: "Kubernetes, ARO, AKS, and Enterprise Security Reviews",
    portfolioFourText: "Designed microservices platforms, performed Kubernetes security audits, and introduced secure DevOps and AI-assisted engineering practices for global enterprise customers.",
    processEyebrow: "Process",
    processTitle: "A simple engagement model for executive advisory and transformation delivery.",
    processOneTitle: "Executive Discovery",
    processOneText: "Clarify the business objective, platform landscape, risk profile, and delivery priorities.",
    processTwoTitle: "Architecture & Advisory Plan",
    processTwoText: "Define the roadmap, governance model, security approach, and engineering operating pattern.",
    processThreeTitle: "Delivery & Enablement",
    processThreeText: "Support implementation, uplift internal teams, and drive measurable outcomes across the engagement.",
    contactEyebrow: "Contact",
    contactTitle: "Discuss cloud architecture, security, Kubernetes platforms, or enterprise modernization.",
    contactText: "Available for advisory, architecture leadership, secure cloud transformation, DevOps modernization, Zero-Trust programs, and executive-level consulting engagements delivered through AnkaCore.",
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
    navContact: "İletişim",
    heroEyebrow: "Yönetici düzeyinde bulut, güvenlik ve platform danışmanlığı",
    heroTitle: "Bağımsız bir yapının esnekliğiyle kurumsal bulut dönüşüm liderliği.",
    heroText: "AnkaCore, BT alanında 30+ yıllık ve bunun 18 yılı Microsoft'ta geçmiş deneyime dayanan üst düzey bir profili sunar; Avrupa, MEA ve Afrika genelinde güvenli bulut mimarisi, DevOps modernizasyonu, Kubernetes platformları ve büyük ölçekli kurumsal dönüşüm programları teslim eder.",
    heroPrimaryCta: "Yönetici Danışmanlığı Planla",
    heroSecondaryCta: "Deneyim Başlıklarını Gör",
    metricOne: "BT liderliğinde yıl",
    metricTwo: "Microsoft'ta yıl",
    metricThree: "Taşınan iş yükü",
    snapshotLabel: "Profesyonel Özet",
    snapshotTitle: "Bulut ve DevOps Yöneticisi",
    snapshotSubtitle: "AnkaCore • Bağımsız Danışmanlık • Kurumsal Teslimat",
    gridOneLabel: "Odak",
    gridOneValue: "Bulut Mimarisi",
    gridTwoLabel: "Uzmanlık",
    gridTwoValue: "AKS, ARO ve Zero-Trust",
    gridThreeLabel: "Yaklaşım",
    gridThreeValue: "Strateji + Uygulama",
    gridFourLabel: "Kapsam",
    gridFourValue: "Avrupa, MEA ve Afrika",
    trustedText: "Bankacılık, otomotiv ve kamu dönüşüm programlarında kurumsal ortamlarda güven kazanmış deneyim.",
    aboutEyebrow: "Hakkında",
    aboutTitle: "Odaklı ve bağımsız bir marka altında sunulan yönetici düzeyinde uzmanlık.",
    aboutCardOneTitle: "Stratejik danışman ve sahada dönüşüm lideri",
    aboutCardOneText: "AnkaCore, teknik derinlikten ödün vermeden bulut, DevOps, güvenlik ve platform mühendisliğinde kıdemli liderliğe ihtiyaç duyan kurumlar için konumlanır. Profil; mimari, yönetişim, teslimat liderliği ve yönetici iletişimini bir araya getirir.",
    aboutCardTwoTitle: "Freelance esneklik, şirket düzeyinde güvenilirlik",
    aboutCardTwoText: "İş modeli; bağımsız bir yönetici danışman olarak, uzmanlaşmış bir bulut ve güvenlik firmasının yapısı, standartları ve kurumsal duruşuyla danışmanlık, mimari ve dönüşüm çalışmalarını destekler.",
    servicesEyebrow: "Hizmetler",
    servicesTitle: "Güvenli ve kurumsal ölçekte dönüşüm için danışmanlık ve teslimat hizmetleri.",
    serviceOneTitle: "Bulut Mimarisi ve Landing Zone Tasarımı",
    serviceOneText: "CAF ve Well-Architected prensiplerine uyumlu, kurumsal ölçekte Azure mimarisi, yönetişim, ağ yapısı ve landing zone tasarımı.",
    serviceTwoTitle: "Kubernetes ve Platform Mühendisliği",
    serviceTwoText: "AKS ve Azure Red Hat OpenShift platformları, mikroservis temelleri, güvenlik incelemeleri ve üretime hazır işletim modelleri.",
    serviceThreeTitle: "Zero-Trust Güvenlik ve Uyumluluk",
    serviceThreeText: "Regülasyona tabi ortamlar için güvenlik mimarisi, yüksek güvenli kurumsal kontroller, pipeline sertleştirme ve yönetişim modelleri.",
    serviceFourTitle: "DevOps, IaC ve Yapay Zeka Etkinleştirme",
    serviceFourText: "Teslimat hızını ve tutarlılığını artırmak için Terraform, Ansible, GitHub, Azure DevOps ve yapay zeka destekli mühendislik iş akışları.",
    portfolioEyebrow: "Deneyim Başlıkları",
    portfolioTitle: "Yönetici ve kurumsal rollerde elde edilen dönüşüm sonuçlarından seçilmiş örnekler.",
    portfolioOneTag: "Bankacılık Dönüşümü",
    portfolioOneTitle: "Güney Afrika'da Büyük Bir Banka İçin 5.000+ İş Yükü Taşındı",
    portfolioOneText: "Kurumsal ölçekte yönetişim, güvenlik ve operasyonel dayanıklılıkla büyük çaplı geçiş ve modernizasyon programlarına liderlik edildi.",
    portfolioTwoTitle: "Azure Üzerinde Güvenli Bankacılık Platformları",
    portfolioTwoText: "Terraform ve Zero-Trust mimarisi ile yüksek güvenlikli bankacılık çözümleri tasarlamak ve hayata geçirmek için Cloud Infrastructure ve DevOps ekipleri yönetildi.",
    portfolioThreeTitle: "Ölçekli CAF ve Well-Architected Değerlendirmeleri",
    portfolioThreeText: "Mimari, yönetişim, güvenlik ve modernizasyon alanlarında haftada 3 ila 4 kurumsal proje teslim edildi.",
    portfolioFourTag: "Platform Güvenliği",
    portfolioFourTitle: "Kubernetes, ARO, AKS ve Kurumsal Güvenlik İncelemeleri",
    portfolioFourText: "Mikroservis platformları tasarlandı, Kubernetes güvenlik denetimleri yapıldı ve küresel kurumsal müşteriler için güvenli DevOps ile yapay zeka destekli mühendislik uygulamaları devreye alındı.",
    processEyebrow: "Süreç",
    processTitle: "Yönetici danışmanlığı ve dönüşüm teslimatı için sade bir çalışma modeli.",
    processOneTitle: "Yönetici Keşif Görüşmesi",
    processOneText: "İş hedefi, platform yapısı, risk profili ve teslimat öncelikleri netleştirilir.",
    processTwoTitle: "Mimari ve Danışmanlık Planı",
    processTwoText: "Yol haritası, yönetişim modeli, güvenlik yaklaşımı ve mühendislik çalışma biçimi tanımlanır.",
    processThreeTitle: "Teslimat ve Yetkinleştirme",
    processThreeText: "Uygulama desteklenir, iç ekipler güçlendirilir ve çalışma boyunca ölçülebilir sonuçlar üretilir.",
    contactEyebrow: "İletişim",
    contactTitle: "Bulut mimarisi, güvenlik, Kubernetes platformları veya kurumsal modernizasyon ihtiyaçlarınızı konuşalım.",
    contactText: "AnkaCore aracılığıyla sunulan danışmanlık, mimari liderliği, güvenli bulut dönüşümü, DevOps modernizasyonu, Zero-Trust programları ve yönetici düzeyinde danışmanlık çalışmaları için uygundur.",
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
