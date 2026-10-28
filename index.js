// ─── DATA ───
const portfolioProjects = [
  {
    id: 1,
    title: "Tshimologo Accountants",
    cat: "business",
    color: "#2563EB",
    icon: "📊",
    desc: "Comprehensive bookkeeping, tax planning, CIPC compliance, and financial advisory services for businesses and individuals.",
  },
  {
    id: 2,
    title: "BNBeauty Bar",
    cat: "lifestyle",
    color: "#E11D48",
    icon: "💅",
    desc: "Upscale beauty landing page featuring automated online booking, a dynamic service catalog, creative style galleries, and integrated client reviews.",
  },
  {
    id: 3,
    title: "Crstal Mobile Beautician",
    cat: "ecommerce",
    color: "#7c3aed",
    icon: "👩‍🦰",
    desc: "Premium wig store with online booking and product showcase built wih WP + WooCommerce.",
  },
  {
    id: 4,
    title: "FinTrust Bank",
    cat: "FinTech",
    color: "#1e40af",
    icon: "⚖️",
    desc: "Professional law firm website with practice area pages and secure client enquiry forms.",
  },
  {
    id: 5,
    title: "Drive Right Auto",
    cat: "corporate",
    color: "#0f766e",
    icon: "💻",
    desc: "Professional Vehicle Repairs & Maintenance modern website with booking system.",
  },
  {
    id: 6,
    title: "Sthiba Kitchen",
    cat: "business",
    color: "#b45309",
    icon: "🍽️",
    desc: "Restaurant website with interactive menu, online reservation system, and gallery.",
  },
  {
    id: 7,
    title: "Crystal Mobile Beautician",
    cat: "beauty",
    color: "#14B8A6",
    icon: "🦴",
    desc: "Modern beauty WooCommerce shop, wig store and booking form.",
  },
  {
    id: 8,
    title: "SA Steelworks Corp",
    cat: "corporate",
    color: "#374151",
    icon: "🔩",
    desc: "Industrial company site with product catalogue, project gallery, and RFQ system.",
  },
  {
    id: 9,
    title: "LexisMart Online",
    cat: "ecommerce",
    color: "#dc2626",
    icon: "📚",
    desc: "Educational bookstore with category filtering, cart system, and school order accounts.",
  },
  {
    id: 10,
    title: "Du Plessis & Partners",
    cat: "legal",
    color: "#1e40af",
    icon: "📋",
    desc: "Multi-partner law firm with practice areas, attorney profiles, and news blog.",
  },
  {
    id: 11,
    title: "FreeState Realty",
    cat: "business",
    color: "#d97706",
    icon: "🏠",
    desc: "Property listing site with search filters, virtual tours, and agent profile system.",
  },
  {
    id: 12,
    title: "Bloom Wellness Spa",
    cat: "business",
    color: "#be185d",
    icon: "💆",
    desc: "Luxury spa website with treatment menus, online booking, and gift voucher shop.",
  },
];

const faqs = [
  {
    q: "How much does a website cost?",
    a: "Pricing depends on the scope of your project. A basic business website typically starts from R2,500 and can go up to R25,000+ for complex e-commerce or custom builds. We offer transparent, fixed-price packages with no surprises. Request a free quote for an accurate estimate.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Most business websites are completed within 2–4 weeks. E-commerce stores and complex projects may take 4–8 weeks. We agree on a timeline upfront and stick to it. Rush delivery is also available if needed.",
  },
  {
    q: "Do I need to be in Bloemfontein to work with you?",
    a: "Not at all. We work with clients across South Africa remotely via video calls, email, and WhatsApp. Our process is designed to be smooth and collaborative regardless of your location.",
  },
  {
    q: "Will my website work on mobile phones?",
    a: "Absolutely. Every website we build is designed mobile-first, meaning it looks and works perfectly on smartphones, tablets, and desktops. Mobile responsiveness is included as standard on every project.",
  },
  {
    q: "Do you offer website hosting?",
    a: "Yes. We offer fast, reliable South African web hosting on servers located locally for optimal speed. Our hosting packages include SSL certificates, daily backups, security monitoring, and technical support.",
  },
  {
    q: "Can I update my own website after launch?",
    a: "Yes. We build on WordPress which gives you a simple, user-friendly dashboard to update text, add images, publish blog posts, and manage your content. We also provide training after launch.",
  },
  {
    q: "What is SEO and do I need it?",
    a: "SEO (Search Engine Optimisation) helps your website appear higher in Google search results when potential customers search for your services. If you want organic traffic and leads from Google, SEO is essential. We build all websites with SEO foundations included.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. We understand cash flow is important for small businesses. We typically require a 50% deposit to begin work, with the balance due on launch. We can discuss flexible payment arrangements for larger projects.",
  },
  {
    q: "What happens after my website is launched?",
    a: "We offer ongoing maintenance packages to keep your website secure, updated, and performing well. We also offer SEO, digital marketing, and growth consulting to help you get more from your website over time.",
  },
  {
    q: "Do you sign a contract?",
    a: "Yes. Every project starts with a written agreement outlining the scope, timeline, deliverables, and pricing. This protects both parties and ensures everyone is aligned from the start.",
  },
];

// ─── RENDER PORTFOLIO ───
function renderPortfolio(container, count, filter = "all") {
  const filtered =
    filter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.cat === filter);
  const items = count ? filtered.slice(0, count) : filtered;
  container.innerHTML = items
    .map(
      (p) => `
    <div class="portfolio-card fade-up" data-cat="${p.cat}">
      <div class="portfolio-img" style="background:${p.color}22">
        <span style="font-size:3.5rem">${p.icon}</span>
        <div class="portfolio-img-overlay">View Project ↗</div>
      </div>
      <div class="portfolio-info">
        <div class="portfolio-tag">${p.cat.toUpperCase()}</div>
        <div class="portfolio-title">${p.title}</div>
        <div class="portfolio-desc">${p.desc}</div>
      </div>
    </div>
  `,
    )
    .join("");
  observeFadeUps();
}

// ─── RENDER FAQ ───
function renderFAQ() {
  const list = document.getElementById("faq-list");
  if (!list) return;
  list.innerHTML = faqs
    .map(
      (f, i) => `
    <div class="faq-item">
      <div class="faq-question" onclick="toggleFAQ(${i})" id="fq-${i}">
        <span>${f.q}</span>
        <span class="faq-chevron">▼</span>
      </div>
      <div class="faq-answer" id="fa-${i}">${f.a}</div>
    </div>
  `,
    )
    .join("");
}
function toggleFAQ(i) {
  document.querySelectorAll(".faq-question").forEach((q, j) => {
    q.classList.toggle("open", j === i && !q.classList.contains("open"));
    document
      .getElementById(`fa-${j}`)
      .classList.toggle(
        "open",
        j === i &&
          document.getElementById(`fq-${i}`).classList.contains("open"),
      );
  });
}

// ─── PAGE ROUTING ───
function showPage(name) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById("page-" + name).classList.add("active");
  document
    .querySelectorAll(".nav-links a")
    .forEach((a) => a.classList.remove("active"));
  const idx = ["home", "about", "services", "portfolio", "contact"].indexOf(
    name,
  );
  if (idx > -1)
    document.querySelectorAll(".nav-links a")[idx]?.classList.add("active");
  window.scrollTo({ top: 0, behavior: "instant" });
  if (name === "home")
    renderPortfolio(document.getElementById("home-portfolio"), 6);
  if (name === "portfolio") {
    renderPortfolio(document.getElementById("portfolio-full-grid"), null);
    initFilters();
  }
  if (name === "services") renderFAQ();
  setTimeout(observeFadeUps, 50);
}

// ─── PORTFOLIO FILTERS ───
function initFilters() {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderPortfolio(
        document.getElementById("portfolio-full-grid"),
        null,
        btn.dataset.filter,
      );
    });
  });
}

// ─── NAV SCROLL ───
window.addEventListener("scroll", () => {
  document
    .getElementById("main-nav")
    .classList.toggle("scrolled", window.scrollY > 20);
  document
    .getElementById("back-top")
    .classList.toggle("show", window.scrollY > 400);
});

// ─── MOBILE MENU ───
function toggleMenu() {
  document.getElementById("mobile-menu").classList.toggle("open");
}

// ─── FADE UP OBSERVER ───
function observeFadeUps() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  document
    .querySelectorAll(".fade-up:not(.visible)")
    .forEach((el) => io.observe(el));
}

// ─── CONTACT FORM ───
function submitForm() {
  const name = document.getElementById("f-name").value.trim();
  const email = document.getElementById("f-email").value.trim();
  const service = document.getElementById("f-service").value;
  const msg = document.getElementById("f-msg").value.trim();
  if (!name || !email || !service || !msg) {
    alert(
      "Please fill in all required fields (Name, Email, Service, and Message).",
    );
    return;
  }
  document.getElementById("contact-form-wrap").style.display = "none";
  document.getElementById("form-success").classList.add("show");
}
function resetForm() {
  document.getElementById("contact-form-wrap").style.display = "";
  document.getElementById("form-success").classList.remove("show");
  [
    "f-name",
    "f-email",
    "f-phone",
    "f-biz",
    "f-service",
    "f-budget",
    "f-msg",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
}

// ─── INIT ───
document.addEventListener("DOMContentLoaded", () => {
  showPage("home");
});
