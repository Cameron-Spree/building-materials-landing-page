// Briants of Risborough - Building Materials & Construction Machinery Template Data
// This file stores the isolated HTML, CSS, and JS code for each modular section,
// allowing the Dashboard to preview and export individual Gutenberg/WordPress components.

const PAGE_TEMPLATES = [
  {
    id: "main-building",
    name: "Building Materials Main Landing Page",
    description: "The primary modular merchant landing page showcasing Bricks & Blocks, Insulation, Timber & Sheets, Construction Machinery, and Trade Services.",
    sections: [
      "top-banner",
      "header",
      "hero",
      "trade-promo-bar",
      "quick-categories",
      "bricks-blocks-spotlight",
      "insulation-hub",
      "timber-sheet-showcase",
      "construction-machinery-hub",
      "brands-slider",
      "why-choose-us",
      "featured-deals",
      "bulk-delivery-trade",
      "workshop-servicing",
      "faq-accordion",
      "showroom",
      "footer"
    ]
  },
  {
    id: "machinery-spotlight",
    name: "Construction Machinery & Tools Spotlight",
    description: "A focused equipment page highlighting Cement Mixers, Cut-Off Saws, M-Class Wet & Dry Dust Extractors, and our Authorised Workshop.",
    sections: [
      "top-banner",
      "header",
      "machinery-hero",
      "construction-machinery-hub",
      "machinery-specs-split",
      "machinery-dust-safety-guide",
      "brands-slider",
      "machinery-deals",
      "workshop-servicing",
      "machinery-faq",
      "showroom",
      "footer"
    ]
  },
  {
    id: "trade-heavy-side",
    name: "Trade Accounts & Heavy Building Supplies",
    description: "A targeted trade contractor landing page focused on bulk materials, structural timber, PIR insulation, and Hiab crane delivery.",
    sections: [
      "top-banner",
      "header",
      "hero",
      "trade-promo-bar",
      "bricks-blocks-spotlight",
      "insulation-hub",
      "timber-sheet-showcase",
      "why-choose-us",
      "bulk-delivery-trade",
      "featured-deals",
      "faq-accordion",
      "showroom",
      "footer"
    ]
  }
];

const SECTIONS_DATA = [
  {
    id: "global",
    name: "Global Styles & Resets",
    category: "Base Styles",
    description: "Core CSS variables, resets, typography, and button systems that should be included in your WordPress theme's main stylesheet (e.g. style.css or Customizer Additional CSS) for building materials sections to render correctly.",
    html: `<!-- Global Theme styles only. No HTML needed here. Include the CSS once in your WordPress environment. -->`,
    js: "",
    css: `/* ==========================================================================
   Briants Building Supplies Theme - Core Variables & Resets
   ========================================================================== */

:root {
    --briants-primary: #005c30;         /* Deep Merchant Forest Green */
    --briants-primary-hover: #004524;   /* Darker Forest Green */
    --briants-accent: #d2a138;          /* Warm Trade Gold */
    --briants-accent-hover: #b88a2f;    /* Darker Gold */
    --briants-safety-orange: #f97316;   /* Construction Safety Accent */
    --briants-text-dark: #0f172a;       /* Charcoal Slate */
    --briants-text-muted: #64748b;      /* Muted Slate Text */
    --briants-bg-light: #f8fafc;        /* Off-white / light slate background */
    --briants-bg-white: #ffffff;
    --briants-tint-green: #e9f3ef;      /* Soft forest green tint */
    --briants-tint-gold: #fdf8eb;       /* Soft gold highlight */
    --briants-border: #e2e8f0;          /* Clean border outline */
    --briants-border-dark: #cbd5e1;
    
    --briants-font-headings: 'Poppins', sans-serif;
    --briants-font-body: 'Libre Franklin', sans-serif;
    
    --briants-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06);
    --briants-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.06);
    --briants-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.08);
    --briants-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.06);
    
    --briants-radius-sm: 0.375rem;
    --briants-radius-md: 0.5rem;
    --briants-radius-lg: 0.75rem;
    --briants-radius-xl: 1rem;
    
    --briants-transition: all 0.25s ease;
}

/* Base resets specifically targeted to the landing modules */
.briants-module {
    font-family: var(--briants-font-body);
    color: var(--briants-text-dark);
    line-height: 1.6;
    box-sizing: border-box;
}

.briants-module *, 
.briants-module *::before, 
.briants-module *::after {
    box-sizing: inherit;
}

.briants-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 1.5rem;
}

/* Button System */
.briants-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.55rem;
    font-family: var(--briants-font-headings);
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
    padding: 0.75rem 1.6rem;
    border-radius: var(--briants-radius-sm);
    transition: var(--briants-transition);
    cursor: pointer;
    border: 2px solid transparent;
}

.briants-btn-lg {
    padding: 0.95rem 2rem;
    font-size: 1.02rem;
}

.briants-btn-sm {
    padding: 0.45rem 1.1rem;
    font-size: 0.82rem;
}

.briants-btn-primary {
    background-color: var(--briants-primary);
    color: var(--briants-bg-white);
}

.briants-btn-primary:hover {
    background-color: var(--briants-primary-hover);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 92, 48, 0.3);
}

.briants-btn-secondary {
    background-color: var(--briants-accent);
    color: var(--briants-bg-white);
}

.briants-btn-secondary:hover {
    background-color: var(--briants-accent-hover);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(210, 161, 56, 0.3);
}

.briants-btn-orange {
    background-color: var(--briants-safety-orange);
    color: var(--briants-bg-white);
}

.briants-btn-orange:hover {
    background-color: #ea580c;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(249, 115, 22, 0.35);
}

.briants-btn-outline {
    background-color: transparent;
    color: var(--briants-primary);
    border-color: var(--briants-primary);
}

.briants-btn-outline:hover {
    background-color: var(--briants-primary);
    color: var(--briants-bg-white);
}

.briants-btn-outline-white {
    background-color: transparent;
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.4);
}

.briants-btn-outline-white:hover {
    background-color: #ffffff;
    color: var(--briants-primary);
    border-color: #ffffff;
}

/* Common Section Headers */
.briants-section-header {
    text-align: center;
    max-width: 760px;
    margin: 0 auto 3rem auto;
}

.briants-section-subtitle {
    display: inline-block;
    color: var(--briants-accent);
    font-family: var(--briants-font-headings);
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 0.12em;
    margin-bottom: 0.5rem;
    background-color: var(--briants-tint-gold);
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    border: 1px solid rgba(210, 161, 56, 0.25);
}

.briants-section-header h2 {
    font-family: var(--briants-font-headings);
    font-weight: 700;
    font-size: 2.15rem;
    color: var(--briants-text-dark);
    margin: 0.5rem 0 0.75rem 0;
    line-height: 1.25;
}

.briants-section-header p {
    color: var(--briants-text-muted);
    font-size: 1.05rem;
    margin: 0;
    line-height: 1.6;
}

/* Grids and Layout Utilities */
.briants-grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.75rem;
}

.briants-grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem;
}

.briants-grid-4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
}

.briants-grid-6 {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1.25rem;
}

/* Category Card Utilities */
.category-pill-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin: 0.75rem 0 1.25rem 0;
}

.category-pill-list span {
    background-color: var(--briants-bg-light);
    border: 1px solid var(--briants-border);
    color: var(--briants-text-dark);
    font-size: 0.72rem;
    font-weight: 600;
    padding: 0.2rem 0.55rem;
    border-radius: var(--briants-radius-sm);
    transition: var(--briants-transition);
}

.category-pill-list-dark span {
    background-color: #0f172a;
    border-color: #334155;
    color: #cbd5e1;
}

.cat-action-link {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--briants-primary);
    text-decoration: none;
    transition: var(--briants-transition);
}

.cat-action-link:hover {
    color: var(--briants-primary-dark);
    transform: translateX(3px);
}

.cat-action-link-orange {
    color: var(--briants-safety-orange);
}

.cat-action-link-orange:hover {
    color: #fb923c;
}

.cat-icon-badge {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background-color: var(--briants-tint-green);
    color: var(--briants-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
}

@media (max-width: 1024px) {
    .briants-grid-4 {
        grid-template-columns: repeat(2, 1fr);
    }
    .briants-grid-6 {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 768px) {
    .briants-grid-2,
    .briants-grid-3 {
        grid-template-columns: 1fr;
    }
    .briants-grid-4 {
        grid-template-columns: 1fr;
    }
    .briants-grid-6 {
        grid-template-columns: repeat(2, 1fr);
    }
    .briants-section-header h2 {
        font-size: 1.75rem;
    }
}

@media (max-width: 480px) {
    .briants-grid-6 {
        grid-template-columns: 1fr;
    }
}
`
  },
  {
    id: "top-banner",
    name: "Top Info Banner",
    category: "Header",
    description: "A narrow promotional notification bar displaying trade counter opening times, local Hiab crane delivery, and direct phone link.",
    js: "",
    html: `<div id="briants-top-banner" class="briants-module">
    <div class="top-banner-inner">
        <span><i class="fa-solid fa-truck-ramp-box"></i> <strong>LOCAL HIAB CRANE DELIVERY:</strong> Direct to site across Bucks, Oxon & surrounding areas</span>
        <span class="top-banner-divider">|</span>
        <span><i class="fa-solid fa-calculator"></i> Trade Accounts & Bulk Buy Pricing: <a href="tel:01844343663"><strong>01844 343663</strong></a></span>
        <span class="top-banner-divider">|</span>
        <span><i class="fa-solid fa-clock"></i> Yard Opens <strong>7:00 AM Weekdays</strong></span>
    </div>
</div>`,
    css: `/* ==========================================================================
   Top Info Banner Styles
   ========================================================================== */

#briants-top-banner {
    background-color: var(--briants-primary);
    color: var(--briants-bg-white);
    padding: 0.65rem 1rem;
    font-size: 0.85rem;
    text-align: center;
}

#briants-top-banner .top-banner-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem 1.5rem;
}

#briants-top-banner a {
    color: var(--briants-bg-white);
    text-decoration: none;
    transition: var(--briants-transition);
}

#briants-top-banner a:hover {
    color: var(--briants-accent);
    text-decoration: underline;
}

#briants-top-banner .top-banner-divider {
    opacity: 0.35;
}

@media (max-width: 768px) {
    #briants-top-banner .top-banner-divider {
        display: none;
    }
    #briants-top-banner .top-banner-inner {
        flex-direction: column;
        gap: 0.25rem;
    }
}`
  },
  {
    id: "header",
    name: "Main Header",
    category: "Header",
    description: "The primary header block displaying the Briants Building Supplies logo alongside trade counter opening times and yard location.",
    js: "",
    html: `<header id="briants-header" class="briants-module">
    <div class="header-inner">
        <div class="header-logo-box">
            <div class="brand-badge-wrapper">
                <span class="brand-title">BRIANTS</span>
                <span class="brand-sub">BUILDING SUPPLIES & TIMBER</span>
            </div>
        </div>
        <div class="header-info-grid">
            <div class="header-info-item">
                <i class="fa-solid fa-clock"></i>
                <div>
                    <strong>Trade Counter & Yard:</strong>
                    <span>Mon - Fri: 7:00 AM - 4:45 PM | Sat: 8:00 AM - 12:00 PM</span>
                </div>
            </div>
            <div class="header-info-item">
                <i class="fa-solid fa-location-dot"></i>
                <div>
                    <strong>Merchant Yard & Showroom:</strong>
                    <span>Longwick, Princes Risborough, HP27 9SG</span>
                </div>
            </div>
        </div>
    </div>
</header>`,
    css: `/* ==========================================================================
   Main Header Styles
   ========================================================================== */

#briants-header {
    background-color: var(--briants-bg-white);
    border-bottom: 1px solid var(--briants-border);
    padding: 1.25rem 0;
}

#briants-header .header-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.25rem;
}

#briants-header .brand-badge-wrapper {
    display: flex;
    flex-direction: column;
}

#briants-header .brand-title {
    font-family: var(--briants-font-headings);
    font-size: 1.85rem;
    font-weight: 800;
    color: var(--briants-primary);
    letter-spacing: 0.05em;
    line-height: 1.1;
}

#briants-header .brand-sub {
    font-family: var(--briants-font-headings);
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--briants-accent);
    letter-spacing: 0.14em;
    text-transform: uppercase;
}

#briants-header .header-info-grid {
    display: flex;
    gap: 1.75rem;
    flex-wrap: wrap;
}

#briants-header .header-info-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.85rem;
}

#briants-header .header-info-item i {
    font-size: 1.25rem;
    color: var(--briants-primary);
}

#briants-header .header-info-item strong {
    display: block;
    color: var(--briants-text-dark);
}

#briants-header .header-info-item span {
    color: var(--briants-text-muted);
}

@media (max-width: 768px) {
    #briants-header .header-inner {
        flex-direction: column;
        text-align: center;
    }
    #briants-header .header-info-grid {
        justify-content: center;
        gap: 1rem;
    }
}`
  },
  {
    id: "hero",
    name: "Building Materials Hero",
    category: "Hero",
    description: "Atmospheric hero banner styled in Briants Forest Green with the photorealistic builders yard backdrop, trade trust badges, and quick CTA buttons.",
    js: "",
    html: `<section id="briants-hero" class="briants-module">
    <div class="hero-bg-overlay"></div>
    <div class="hero-inner">
        <div class="hero-card">
            <h1>Quality Building Materials, <span class="hero-highlight">Delivered Direct To Site.</span></h1>
            <p class="hero-desc">From full loads of facing bricks, dense blocks, and Celotex PIR insulation to C24 structural timber and professional site machinery—Briants supplies trade contractors and self-builders with premium materials, rapid crane delivery, and honest merchant pricing.</p>
            
            <ul class="hero-list">
                <li><i class="fa-solid fa-circle-check"></i> <strong>Massive Yard Stock:</strong> Bricks, 7.3N Blocks, PIR Boards, C24 Timber & Sheets</li>
                <li><i class="fa-solid fa-circle-check"></i> <strong>Construction Machinery Hub:</strong> Belle Mixers, Stihl Cutters & M-Class Vacs in stock</li>
                <li><i class="fa-solid fa-circle-check"></i> <strong>Site Crane Offload:</strong> Rapid local delivery across Bucks, Oxon & Herts</li>
            </ul>
            
            <div class="hero-buttons">
                <a href="#briants-quick-categories" class="briants-btn briants-btn-primary briants-btn-lg">Browse Building Supplies <i class="fa-solid fa-arrow-right"></i></a>
                <a href="#briants-machinery" class="briants-btn briants-btn-secondary briants-btn-lg">Construction Machinery <i class="fa-solid fa-hammer"></i></a>
            </div>
        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Hero Section Styles
   ========================================================================== */

#briants-hero {
    position: relative;
    background-image: url('./briants_hero_bg.png');
    background-size: cover;
    background-position: center;
    color: var(--briants-bg-white);
    padding: 6.5rem 0;
    display: flex;
    align-items: center;
    min-height: 600px;
}

#briants-hero .hero-bg-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, rgba(0, 60, 31, 0.95) 0%, rgba(0, 75, 38, 0.88) 45%, rgba(0, 92, 48, 0.3) 100%);
    z-index: 1;
}

#briants-hero .hero-inner {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    position: relative;
    z-index: 2;
}

#briants-hero .hero-card {
    max-width: 680px;
    background: rgba(15, 23, 42, 0.45);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    padding: 2.75rem;
    border-radius: var(--briants-radius-lg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
}

#briants-hero .hero-badge-row {
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;
    margin-bottom: 1.25rem;
}

#briants-hero .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    background: rgba(255, 255, 255, 0.15);
    color: #ffffff;
    padding: 0.35rem 0.85rem;
    border-radius: 9999px;
    border: 1px solid rgba(255, 255, 255, 0.25);
}

#briants-hero .hero-badge-gold {
    background: rgba(210, 161, 56, 0.25);
    color: #ffd875;
    border-color: rgba(210, 161, 56, 0.4);
}

#briants-hero h1 {
    font-family: var(--briants-font-headings);
    font-size: 2.4rem;
    font-weight: 800;
    line-height: 1.2;
    margin: 0 0 1.2rem 0;
    color: #ffffff;
}

#briants-hero .hero-highlight {
    color: #f7cb68;
    display: block;
}

#briants-hero .hero-desc {
    font-size: 1.05rem;
    line-height: 1.6;
    color: #e2e8f0;
    margin: 0 0 1.75rem 0;
}

#briants-hero .hero-list {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
}

#briants-hero .hero-list li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.95rem;
    color: #f1f5f9;
}

#briants-hero .hero-list i {
    color: #4ade80;
    font-size: 1.1rem;
    flex-shrink: 0;
}

#briants-hero .hero-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

@media (max-width: 640px) {
    #briants-hero {
        padding: 4rem 0;
    }
    #briants-hero .hero-card {
        padding: 1.75rem;
    }
    #briants-hero h1 {
        font-size: 1.85rem;
    }
    #briants-hero .hero-buttons {
        flex-direction: column;
    }
}`
  },
  {
    id: "trade-promo-bar",
    name: "Trade Account Promo Bar",
    category: "Promotions",
    description: "High-contrast promotional ribbon promoting 30-day trade credit accounts, bulk pallet discounts, and rapid site scheduling.",
    js: "",
    html: `<section id="briants-trade-promo" class="briants-module">
    <div class="trade-promo-inner">
        <div class="trade-promo-col">
            <i class="fa-solid fa-credit-card"></i>
            <div>
                <strong>30-Day Trade Credit</strong>
                <span>Dedicated account manager & flexible credit limits</span>
            </div>
        </div>
        <div class="trade-promo-col">
            <i class="fa-solid fa-boxes-stacked"></i>
            <div>
                <strong>Bulk Volume Rates</strong>
                <span>Pallet rates on bricks, blocks, insulation & timber</span>
            </div>
        </div>
        <div class="trade-promo-col">
            <i class="fa-solid fa-truck-loading"></i>
            <div>
                <strong>Site Hiab Crane Offload</strong>
                <span>Guaranteed kerbside & site delivery positioning</span>
            </div>
        </div>
        <div class="trade-promo-action">
            <a href="#briants-trade-form" class="briants-btn briants-btn-sm briants-btn-primary">Apply for Trade Account <i class="fa-solid fa-arrow-right"></i></a>
        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Trade Account Promo Bar Styles
   ========================================================================== */

#briants-trade-promo {
    background-color: var(--briants-tint-gold);
    border-bottom: 1px solid rgba(210, 161, 56, 0.3);
    padding: 1.25rem 1rem;
}

#briants-trade-promo .trade-promo-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.25rem;
}

#briants-trade-promo .trade-promo-col {
    display: flex;
    align-items: center;
    gap: 0.85rem;
}

#briants-trade-promo .trade-promo-col i {
    font-size: 1.75rem;
    color: var(--briants-accent);
}

#briants-trade-promo .trade-promo-col strong {
    display: block;
    font-family: var(--briants-font-headings);
    font-size: 0.95rem;
    color: var(--briants-text-dark);
}

#briants-trade-promo .trade-promo-col span {
    font-size: 0.8rem;
    color: var(--briants-text-muted);
}

@media (max-width: 900px) {
    #briants-trade-promo .trade-promo-inner {
        justify-content: center;
        text-align: center;
    }
    #briants-trade-promo .trade-promo-col {
        flex-direction: column;
        gap: 0.35rem;
    }
}`
  },
  {
    id: "quick-categories",
    name: "Quick Navigation Categories",
    category: "Navigation",
    description: "Visual navigation card grid directing visitors straight to Bricks & Blocks, Insulation, Timber & Sheets, Machinery, Aggregates, and Plasterboard.",
    js: "",
    html: `<section id="briants-quick-categories" class="briants-module">
    <div class="briants-container">
        <div class="briants-section-header">
            <span class="briants-section-subtitle">Merchant Departments</span>
            <h2>Everything For Your Build, In One Yard</h2>
            <p>Explore our core building supplies departments. We carry extensive yard stock ready for immediate collection or prompt crane delivery.</p>
        </div>
        
        <div class="briants-grid-6">
            <a href="#briants-bricks-blocks" class="quick-cat-card">
                <div class="cat-icon-box"><i class="fa-solid fa-cubes"></i></div>
                <h3>Bricks & Blocks</h3>
                <p>Facing bricks, foundation blocks & thermal masonry</p>
                <span class="cat-link">View Range <i class="fa-solid fa-chevron-right"></i></span>
            </a>
            
            <a href="#briants-insulation" class="quick-cat-card">
                <div class="cat-icon-box"><i class="fa-solid fa-layer-group"></i></div>
                <h3>Insulation</h3>
                <p>Rigid PIR boards, loft roll & cavity solutions</p>
                <span class="cat-link">View Range <i class="fa-solid fa-chevron-right"></i></span>
            </a>
            
            <a href="#briants-timber" class="quick-cat-card">
                <div class="cat-icon-box"><i class="fa-solid fa-tree"></i></div>
                <h3>Timber & Sheets</h3>
                <p>Carcassing timber, studwork, plywood & sheet goods</p>
                <span class="cat-link">View Range <i class="fa-solid fa-chevron-right"></i></span>
            </a>
            
            <a href="#briants-machinery" class="quick-cat-card quick-cat-featured">
                <span class="feat-pill">Power Hub</span>
                <div class="cat-icon-box"><i class="fa-solid fa-hammer"></i></div>
                <h3>Construction Machinery</h3>
                <p>Cement mixers, cut-off saws & dust vacuums</p>
                <span class="cat-link">View Range <i class="fa-solid fa-chevron-right"></i></span>
            </a>
            
            <a href="#briants-materials-deals" class="quick-cat-card">
                <div class="cat-icon-box"><i class="fa-solid fa-mountain"></i></div>
                <h3>Aggregates & Cement</h3>
                <p>Sands, gravels, sub-base & bagged cement</p>
                <span class="cat-link">View Range <i class="fa-solid fa-chevron-right"></i></span>
            </a>
            
            <a href="#briants-materials-deals" class="quick-cat-card">
                <div class="cat-icon-box"><i class="fa-solid fa-sheet-plastic"></i></div>
                <h3>Plaster & Drylining</h3>
                <p>Plasterboard, multi-finish, coving & metal framing</p>
                <span class="cat-link">View Range <i class="fa-solid fa-chevron-right"></i></span>
            </a>
        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Quick Navigation Categories Styles
   ========================================================================== */

#briants-quick-categories {
    background-color: var(--briants-bg-white);
}

.quick-cat-card {
    background-color: var(--briants-bg-light);
    border: 1px solid var(--briants-border);
    border-radius: var(--briants-radius-md);
    padding: 1.5rem 1.15rem;
    text-decoration: none;
    color: var(--briants-text-dark);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: var(--briants-transition);
    position: relative;
}

.quick-cat-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--briants-shadow-lg);
    border-color: var(--briants-primary);
    background-color: #ffffff;
}

.quick-cat-featured {
    border-color: rgba(249, 115, 22, 0.4);
    background-color: #fff7ed;
}

.quick-cat-featured:hover {
    border-color: var(--briants-safety-orange);
}

.feat-pill {
    position: absolute;
    top: -10px;
    background-color: var(--briants-safety-orange);
    color: #ffffff;
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 0.2rem 0.6rem;
    border-radius: 9999px;
}

.quick-cat-card .cat-icon-box {
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background-color: var(--briants-tint-green);
    color: var(--briants-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    transition: var(--briants-transition);
}

.quick-cat-featured .cat-icon-box {
    background-color: #ffedd5;
    color: var(--briants-safety-orange);
}

.quick-cat-card:hover .cat-icon-box {
    background-color: var(--briants-primary);
    color: #ffffff;
    transform: scale(1.08);
}

.quick-cat-featured:hover .cat-icon-box {
    background-color: var(--briants-safety-orange);
    color: #ffffff;
}

.quick-cat-card h3 {
    font-family: var(--briants-font-headings);
    font-size: 1.05rem;
    font-weight: 700;
    margin: 0 0 0.45rem 0;
    color: var(--briants-text-dark);
}

.quick-cat-card p {
    font-size: 0.82rem;
    color: var(--briants-text-muted);
    margin: 0 0 1rem 0;
    line-height: 1.45;
    flex-grow: 1;
}

.quick-cat-card .cat-link {
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--briants-primary);
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
}`
  },
  {
    id: "bricks-blocks-spotlight",
    name: "Category Range - Bricks & Blocks",
    category: "Products Grid",
    description: "Overview of Briants' masonry categories: Facing Bricks, Dense Concrete Blocks, Aerated Thermal Blocks, Trench Blocks, and Brick Matching.",
    js: "",
    html: `<section id="briants-bricks-blocks" class="briants-module">
    <div class="briants-container">
        <div class="briants-section-header">
            <span class="briants-section-subtitle">Masonry & Walling</span>
            <h2>Bricks & Concrete Blocks</h2>
            <p>We supply a comprehensive range of bricks, foundation blocks, and thermal blocks for domestic extensions, self-builds, and commercial construction.</p>
        </div>
        
        <div class="briants-grid-4">
            <div class="product-tile">
                <div class="tile-icon"><i class="fa-solid fa-building-shield"></i></div>
                <h3>Facing Bricks & Engineering</h3>
                <p>Extensive selection of stock, wirecut, multi-red, and buff facing bricks from top UK brickmakers, alongside high-strength Class B engineering bricks.</p>
                <div class="tile-footer">
                    <a href="#briants-quick-categories" class="cat-action-link">Explore Bricks <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
            
            <div class="product-tile">
                <div class="tile-icon"><i class="fa-solid fa-cube"></i></div>
                <h3>Dense Concrete Blocks</h3>
                <p>High-strength load-bearing aggregate blocks engineered for robust inner and outer cavity leaves, retaining walls, and beam and block flooring.</p>
                <div class="tile-footer">
                    <a href="#briants-quick-categories" class="cat-action-link">Explore Blocks <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
            
            <div class="product-tile">
                <div class="tile-icon"><i class="fa-solid fa-feather-pointed"></i></div>
                <h3>Aerated Thermal Blocks</h3>
                <p>Ultra-lightweight autoclaved aerated blocks offering high thermal efficiency and easy handling to comply with Part L building regulations.</p>
                <div class="tile-footer">
                    <a href="#briants-quick-categories" class="cat-action-link">Explore Thermal <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
            
            <div class="product-tile">
                <div class="tile-icon"><i class="fa-solid fa-trowel-bricks"></i></div>
                <h3>Trench & Foundation Blocks</h3>
                <p>Solid foundation blocks designed to speed up groundwork below DPC level, replacing twin cavity brickwork with a single solid run.</p>
                <div class="tile-footer">
                    <a href="#briants-quick-categories" class="cat-action-link">Explore Trench <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
        </div>
        
        <!-- Brick Matching Banner -->
        <div class="brick-match-box">
            <div class="match-text">
                <i class="fa-solid fa-magnifying-glass-arrow-right"></i>
                <div>
                    <h3>Brick Matching & Quantity Estimates</h3>
                    <p>Bring a sample or photo to our Longwick yard, or send your site plans. Our team will identify matching blends, calculate quantities, and arrange crane delivery.</p>
                </div>
            </div>
            <a href="tel:01844343663" class="briants-btn briants-btn-secondary">Speak To Yard Desk: 01844 343663</a>
        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Bricks & Blocks Spotlight Styles
   ========================================================================== */

#briants-bricks-blocks {
    background-color: var(--briants-bg-light);
}

.product-tile {
    background-color: var(--briants-bg-white);
    border: 1px solid var(--briants-border);
    border-radius: var(--briants-radius-md);
    padding: 1.75rem 1.4rem;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: var(--briants-transition);
}

.product-tile:hover {
    transform: translateY(-4px);
    box-shadow: var(--briants-shadow-lg);
    border-color: var(--briants-border-dark);
}

.tile-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    background-color: var(--briants-tint-green);
    color: var(--briants-primary);
    padding: 0.2rem 0.55rem;
    border-radius: var(--briants-radius-sm);
}

.tile-icon {
    font-size: 2rem;
    color: var(--briants-primary);
    margin-bottom: 0.75rem;
}

.product-tile h3 {
    font-family: var(--briants-font-headings);
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--briants-text-dark);
    margin: 0 0 0.35rem 0;
}

.tile-spec {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--briants-accent);
    margin-bottom: 0.75rem;
    display: block;
}

.product-tile p {
    font-size: 0.88rem;
    color: var(--briants-text-muted);
    line-height: 1.5;
    margin: 0 0 1rem 0;
}

.tile-points {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    font-size: 0.82rem;
    color: var(--briants-text-dark);
}

.tile-points i {
    color: var(--briants-primary);
    margin-right: 0.4rem;
}

.tile-footer {
    margin-top: auto;
    border-top: 1px solid var(--briants-border);
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
}

.price-hint {
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--briants-text-muted);
    text-transform: uppercase;
}

.brick-match-box {
    margin-top: 2.5rem;
    background-color: #ffffff;
    border: 2px dashed rgba(0, 92, 48, 0.3);
    border-radius: var(--briants-radius-lg);
    padding: 1.75rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
}

.brick-match-box .match-text {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    max-width: 700px;
}

.brick-match-box i {
    font-size: 2.5rem;
    color: var(--briants-primary);
    flex-shrink: 0;
}

.brick-match-box h3 {
    font-family: var(--briants-font-headings);
    font-size: 1.2rem;
    margin: 0 0 0.25rem 0;
    color: var(--briants-text-dark);
}

.brick-match-box p {
    margin: 0;
    font-size: 0.9rem;
    color: var(--briants-text-muted);
}`
  },
  {
    id: "insulation-hub",
    name: "Category Range - Insulation",
    category: "Products Grid",
    description: "Overview of Briants' insulation categories: Rigid PIR Foil Boards, Mineral & Loft Wool, Cavity Wall Batts, and Multi-Foil Systems.",
    js: "",
    html: `<section id="briants-insulation" class="briants-module">
    <div class="briants-container">
        <div class="briants-section-header">
            <span class="briants-section-subtitle">Thermal & Acoustic Performance</span>
            <h2>Insulation Solutions</h2>
            <p>We stock all essential insulation types to meet modern Part L thermal and acoustic building regulations for domestic and commercial projects.</p>
        </div>
        
        <div class="briants-grid-3">
            <div class="insulation-card">
                <div class="insulation-header">
                    <div class="cat-icon-badge"><i class="fa-solid fa-layer-group"></i></div>
                    <h3>Rigid PIR Foil Insulation</h3>
                </div>
                <div class="insulation-body">
                    <p>High-performance polyisocyanurate (PIR) rigid foam insulation with dual aluminium foil facings for maximum thermal retention in minimum thickness across roofs, walls, and floors.</p>
                </div>
                <div class="insulation-cta">
                    <a href="#briants-quick-categories" class="cat-action-link">Explore PIR Boards <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
            
            <div class="insulation-card">
                <div class="insulation-header">
                    <div class="cat-icon-badge"><i class="fa-solid fa-wind"></i></div>
                    <h3>Loft & Acoustic Mineral Wool</h3>
                </div>
                <div class="insulation-body">
                    <p>Flexible non-combustible mineral wool designed for top-up loft insulation, partition wall sound reduction, and between-floor acoustic deadening.</p>
                </div>
                <div class="insulation-cta">
                    <a href="#briants-quick-categories" class="cat-action-link">Explore Mineral Wool <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
            
            <div class="insulation-card">
                <div class="insulation-header">
                    <div class="cat-icon-badge"><i class="fa-solid fa-shield-halved"></i></div>
                    <h3>Cavity Batts & Multi-Foil</h3>
                </div>
                <div class="insulation-body">
                    <p>Specialist water-repellent cavity wall batts, vapour control membranes, and ultra-thin multi-foil blankets ideal for modern extensions and renovations.</p>
                </div>
                <div class="insulation-cta">
                    <a href="#briants-quick-categories" class="cat-action-link">Explore Cavity & Foil <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Insulation Hub Styles
   ========================================================================== */

#briants-insulation {
    background-color: var(--briants-bg-white);
}

.insulation-card {
    background-color: var(--briants-bg-light);
    border: 1px solid var(--briants-border);
    border-radius: var(--briants-radius-md);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: var(--briants-transition);
}

.insulation-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--briants-shadow-lg);
    border-color: var(--briants-primary);
}

.insulation-header {
    background-color: var(--briants-tint-green);
    padding: 1.5rem 1.5rem 1.25rem 1.5rem;
    border-bottom: 1px solid rgba(0, 92, 48, 0.15);
}

.ins-badge {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--briants-primary);
    letter-spacing: 0.08em;
    display: block;
    margin-bottom: 0.35rem;
}

.insulation-header h3 {
    font-family: var(--briants-font-headings);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--briants-text-dark);
    margin: 0 0 0.25rem 0;
}

.ins-dims {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--briants-text-muted);
    margin: 0;
}

.insulation-body {
    padding: 1.5rem;
    flex-grow: 1;
}

.insulation-body p {
    font-size: 0.88rem;
    color: var(--briants-text-muted);
    line-height: 1.5;
    margin: 0 0 1.25rem 0;
}

.thickness-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: 1.25rem;
}

.thickness-pills span {
    background-color: #ffffff;
    border: 1px solid var(--briants-border-dark);
    padding: 0.25rem 0.6rem;
    border-radius: var(--briants-radius-sm);
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--briants-text-dark);
}

.ins-specs {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.84rem;
    color: var(--briants-text-dark);
}

.ins-specs i {
    color: var(--briants-primary);
    margin-right: 0.4rem;
}

.insulation-cta {
    padding: 1.25rem 1.5rem;
    background-color: #ffffff;
    border-top: 1px solid var(--briants-border);
}`
  },
  {
    id: "timber-sheet-showcase",
    name: "Category Range - Timber & Sheets",
    category: "Products Grid",
    description: "Overview of Briants' timber categories: C24 Structural Timber, CLS Studwork, Plywood, OSB3, and Moisture Resistant Flooring.",
    js: "",
    html: `<section id="briants-timber" class="briants-module">
    <div class="briants-container">
        <div class="briants-section-header">
            <span class="briants-section-subtitle">Timber Yard Supplies</span>
            <h2>Timber & Sheet Materials</h2>
            <p>Responsibly sourced, FSC-certified graded timber and engineered sheet materials kept in dry storage ready for prompt collection or site delivery.</p>
        </div>
        
        <div class="briants-grid-2">
            <div class="product-tile">
                <div class="tile-icon"><i class="fa-solid fa-tree"></i></div>
                <h3>C24 Graded Timber & Studwork</h3>
                <p>Responsibly sourced, FSC-certified C24/C16 structural treated timber for floor joists, roof rafters, CLS partition studwork, and graded roofing battens.</p>
                <div class="tile-footer">
                    <a href="#briants-quick-categories" class="cat-action-link">Explore Timber <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
            
            <div class="product-tile">
                <div class="tile-icon"><i class="fa-solid fa-layer-group"></i></div>
                <h3>Engineered Sheet Materials & Flooring</h3>
                <p>High-grade hardwood-faced plywood, marine grade ply, moisture-resistant OSB3 structural boards, MDF, and tongue & groove P5 chipboard flooring.</p>
                <div class="tile-footer">
                    <a href="#briants-quick-categories" class="cat-action-link">Explore Sheets <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
        </div>
        
        <div class="timber-extra-info">
            <div class="extra-item">
                <i class="fa-solid fa-ruler-combined"></i>
                <div>
                    <strong>Yard Precision Cross-Cutting:</strong> Need timber or sheet materials cut to fit your vehicle? Ask our counter team.
                </div>
            </div>
            <div class="extra-item">
                <i class="fa-solid fa-truck-fast"></i>
                <div>
                    <strong>Full Timber Pack Deliveries:</strong> Delivered banded and protected direct to your building plot or workshop.
                </div>
            </div>
        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Timber & Sheet Materials Styles
   ========================================================================== */

#briants-timber {
    background-color: var(--briants-bg-light);
}

.timber-panel {
    background-color: var(--briants-bg-white);
    border: 1px solid var(--briants-border);
    border-radius: var(--briants-radius-md);
    padding: 2rem;
    box-shadow: var(--briants-shadow-sm);
}

.panel-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--briants-primary);
    background-color: var(--briants-tint-green);
    padding: 0.25rem 0.65rem;
    border-radius: var(--briants-radius-sm);
    margin-bottom: 0.75rem;
}

.timber-panel h3 {
    font-family: var(--briants-font-headings);
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--briants-text-dark);
    margin: 0 0 0.5rem 0;
}

.timber-panel p {
    font-size: 0.9rem;
    color: var(--briants-text-muted);
    margin: 0 0 1.25rem 0;
    line-height: 1.5;
}

.timber-table-wrap {
    overflow-x: auto;
}

.timber-spec-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.85rem;
    text-align: left;
}

.timber-spec-table th {
    background-color: #f1f5f9;
    padding: 0.65rem 0.75rem;
    color: var(--briants-text-dark);
    font-weight: 700;
    border-bottom: 2px solid var(--briants-border);
    font-family: var(--briants-font-headings);
}

.timber-spec-table td {
    padding: 0.7rem 0.75rem;
    border-bottom: 1px solid var(--briants-border);
    color: #334155;
}

.timber-spec-table tr:hover td {
    background-color: #f8fafc;
}

.timber-extra-info {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

.extra-item {
    background-color: #ffffff;
    border: 1px solid var(--briants-border);
    padding: 1.25rem 1.5rem;
    border-radius: var(--briants-radius-md);
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.88rem;
    color: var(--briants-text-dark);
}

.extra-item i {
    font-size: 1.6rem;
    color: var(--briants-accent);
    flex-shrink: 0;
}

@media (max-width: 768px) {
    .timber-extra-info {
        grid-template-columns: 1fr;
    }
}`
  },
  {
    id: "construction-machinery-hub",
    name: "Category Range - Construction Machinery",
    category: "Products Grid",
    description: "Overview of Briants' construction machinery categories: Cement Mixers, Cut-Off Saws, Wet & Dry Vacuum Cleaners, and Site Equipment.",
    js: "",
    html: `<section id="briants-machinery" class="briants-module">
    <div class="briants-container">
        <div class="briants-section-header">
            <span class="briants-section-subtitle" style="background-color: #ffedd5; color: #ea580c; border-color: rgba(249, 115, 22, 0.3);"><i class="fa-solid fa-bolt"></i> Site Plant & Power Tools</span>
            <h2>Construction Machinery Range</h2>
            <p>We are authorised main dealers supplying heavy-duty site machinery, fully assembled, oiled, and Pre-Delivery Inspected (PDI) ready to work.</p>
        </div>
        
        <div class="machinery-showcase-grid">
            <!-- Category 1: Cement Mixers -->
            <div class="machinery-card">
                <div class="machinery-header-badge">
                    <span><i class="fa-solid fa-certificate"></i> Authorised Main Dealer</span>
                </div>
                <div class="machinery-visual">
                    <div class="machinery-icon-holder"><i class="fa-solid fa-gear fa-spin" style="--fa-animation-duration: 18s;"></i></div>
                    <h3>Cement & Concrete Mixers</h3>
                </div>
                <div class="machinery-details-body">
                    <p>The UK contractor benchmark for concrete mixing, with reinforced drums, heavy-duty gearboxes, and off-ground swivel tipping stands in petrol and electric options.</p>
                </div>
                <div class="machinery-footer">
                    <a href="#briants-quick-categories" class="cat-action-link cat-action-link-orange">Explore Mixers <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
            
            <!-- Category 2: Cut-Off Saws -->
            <div class="machinery-card">
                <div class="machinery-header-badge">
                    <span><i class="fa-solid fa-shield-halved"></i> Authorised Main Dealer</span>
                </div>
                <div class="machinery-visual">
                    <div class="machinery-icon-holder"><i class="fa-solid fa-compact-disc"></i></div>
                    <h3>Cut-Off Saws & Disc Cutters</h3>
                </div>
                <div class="machinery-details-body">
                    <p>High-torque 2-stroke petrol and cordless power cutters engineered for fast, precision slicing through concrete, blockwork, asphalt, and structural steel.</p>
                </div>
                <div class="machinery-footer">
                    <a href="#briants-quick-categories" class="cat-action-link cat-action-link-orange">Explore Cut-Off Saws <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
            
            <!-- Category 3: Wet & Dry Vacuums -->
            <div class="machinery-card">
                <div class="machinery-header-badge">
                    <span><i class="fa-solid fa-lungs"></i> HSE Silica Dust Compliant</span>
                </div>
                <div class="machinery-visual">
                    <div class="machinery-icon-holder"><i class="fa-solid fa-wind"></i></div>
                    <h3>Wet & Dry Vacuum Cleaners</h3>
                </div>
                <div class="machinery-details-body">
                    <p>Heavy-duty site vacuums designed for hazardous silica concrete dust extraction, slurry clean-up, and automatic power-tool synchronisation.</p>
                </div>
                <div class="machinery-footer">
                    <a href="#briants-quick-categories" class="cat-action-link cat-action-link-orange">Explore Dust Vacuums <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
        </div>
        
        <!-- Workshop Assurance Bar -->
        <div class="machinery-trust-strip">
            <div class="trust-pill"><i class="fa-solid fa-screwdriver-wrench"></i> Full Pre-Delivery Inspection (PDI)</div>
            <div class="trust-pill"><i class="fa-solid fa-shield-check"></i> Full Manufacturer Warranties</div>
            <div class="trust-pill"><i class="fa-solid fa-gears"></i> Genuine Spares & In-House Servicing</div>
            <div class="trust-pill"><i class="fa-solid fa-truck"></i> Free Local Delivery on Machinery</div>
        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Construction Machinery Hub Styles
   ========================================================================== */

#briants-machinery {
    background-color: #0b1329;
    color: #ffffff;
}

#briants-machinery .briants-section-header h2 {
    color: #ffffff;
}

#briants-machinery .briants-section-header p {
    color: #94a3b8;
}

.machinery-showcase-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem;
    margin-bottom: 2.5rem;
}

.machinery-card {
    background-color: #1e293b;
    border: 1px solid #334155;
    border-radius: var(--briants-radius-lg);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: var(--briants-transition);
}

.machinery-card:hover {
    transform: translateY(-6px);
    border-color: var(--briants-safety-orange);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
}

.machinery-header-badge {
    background-color: #0f172a;
    padding: 0.65rem 1.25rem;
    border-bottom: 1px solid #334155;
}

.machinery-header-badge span {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--briants-safety-orange);
    letter-spacing: 0.08em;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
}

.machinery-visual {
    padding: 1.75rem 1.5rem 1.25rem 1.5rem;
    background: linear-gradient(180deg, rgba(249, 115, 22, 0.08) 0%, transparent 100%);
    border-bottom: 1px solid #334155;
}

.machinery-icon-holder {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background-color: rgba(249, 115, 22, 0.15);
    color: var(--briants-safety-orange);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.85rem;
    margin-bottom: 1rem;
    border: 1px solid rgba(249, 115, 22, 0.3);
}

.machinery-visual h3 {
    font-family: var(--briants-font-headings);
    font-size: 1.3rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 0.35rem 0;
}

.machinery-tagline {
    font-size: 0.8rem;
    color: #cbd5e1;
    font-weight: 600;
    display: block;
}

.machinery-details-body {
    padding: 1.5rem;
    flex-grow: 1;
}

.machinery-details-body p {
    font-size: 0.88rem;
    color: #94a3b8;
    line-height: 1.5;
    margin: 0 0 1.25rem 0;
}

.machinery-feature-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    font-size: 0.84rem;
    color: #e2e8f0;
}

.machinery-feature-list i {
    color: #4ade80;
    margin-right: 0.45rem;
}

.machinery-footer {
    padding: 1.25rem 1.5rem;
    background-color: #0f172a;
    border-top: 1px solid #334155;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
}

.machinery-footer .price-box {
    display: flex;
    flex-direction: column;
}

.machinery-footer .price-label {
    font-size: 0.7rem;
    color: #64748b;
    text-transform: uppercase;
    font-weight: 700;
}

.machinery-footer .price-val {
    font-size: 0.95rem;
    font-weight: 700;
    color: #ffffff;
}

.machinery-trust-strip {
    background-color: #1e293b;
    border: 1px solid #334155;
    border-radius: var(--briants-radius-md);
    padding: 1.25rem 1.5rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1rem;
}

.trust-pill {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    font-weight: 600;
    color: #f1f5f9;
}

.trust-pill i {
    color: var(--briants-safety-orange);
    font-size: 1.1rem;
}

@media (max-width: 992px) {
    .machinery-showcase-grid {
        grid-template-columns: 1fr;
    }
    .machinery-trust-strip {
        flex-direction: column;
        gap: 0.75rem;
    }
}`
  },
  {
    id: "brands-slider",
    name: "Brands Showcase Slider",
    category: "Promotions",
    description: "An animated infinite logo ribbon displaying leading merchant partners: Belle, Stihl, Celotex, Kingspan, Hanson, Ibstock, Forterra, Knauf, Nilfisk, Ox Tools.",
    js: `// Brand Slider Animation Pause on Hover
document.querySelectorAll('#briants-brands .brand-track').forEach(track => {
    track.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
    track.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
});`,
    html: `<section id="briants-brands" class="briants-module">
    <div class="brands-inner">
        <div class="brands-title-strip">
            <span>OFFICIAL STOCKISTS OF INDUSTRY LEADING BRANDS</span>
        </div>
        <div class="brand-slider-container">
            <div class="brand-track">
                <!-- Slide items repeated for infinite smooth loop -->
                <div class="brand-item"><strong>BELLE GROUP</strong><span>Site Mixers & Compactors</span></div>
                <div class="brand-item"><strong>STIHL</strong><span>Cut-Off Saws & Power Tools</span></div>
                <div class="brand-item"><strong>CELOTEX</strong><span>PIR Insulation Boards</span></div>
                <div class="brand-item"><strong>KINGSPAN</strong><span>High-Performance PIR</span></div>
                <div class="brand-item"><strong>HANSON CEMENT</strong><span>Mastercrete & Mortars</span></div>
                <div class="brand-item"><strong>IBSTOCK</strong><span>Facing Brick Solutions</span></div>
                <div class="brand-item"><strong>FORTERRA</strong><span>Bricks & Thermal Blocks</span></div>
                <div class="brand-item"><strong>KNAUF</strong><span>Plasterboard & Drylining</span></div>
                <div class="brand-item"><strong>NILFISK / STARMIX</strong><span>M-Class Dust Extractors</span></div>
                <div class="brand-item"><strong>OX TOOLS</strong><span>Trade Hand & Power Tools</span></div>
                <div class="brand-item"><strong>SIMPSON STRONG-TIE</strong><span>Builders Joist Metalwork</span></div>
                <div class="brand-item"><strong>CATNIC</strong><span>Steel Structural Lintels</span></div>
                
                <!-- Repeated clone for seamless CSS loop -->
                <div class="brand-item"><strong>BELLE GROUP</strong><span>Site Mixers & Compactors</span></div>
                <div class="brand-item"><strong>STIHL</strong><span>Cut-Off Saws & Power Tools</span></div>
                <div class="brand-item"><strong>CELOTEX</strong><span>PIR Insulation Boards</span></div>
                <div class="brand-item"><strong>KINGSPAN</strong><span>High-Performance PIR</span></div>
                <div class="brand-item"><strong>HANSON CEMENT</strong><span>Mastercrete & Mortars</span></div>
                <div class="brand-item"><strong>IBSTOCK</strong><span>Facing Brick Solutions</span></div>
                <div class="brand-item"><strong>FORTERRA</strong><span>Bricks & Thermal Blocks</span></div>
                <div class="brand-item"><strong>KNAUF</strong><span>Plasterboard & Drylining</span></div>
            </div>
        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Brands Showcase Slider Styles
   ========================================================================== */

#briants-brands {
    background-color: var(--briants-bg-white);
    border-top: 1px solid var(--briants-border);
    border-bottom: 1px solid var(--briants-border);
    padding: 1.75rem 0;
    overflow: hidden;
}

#briants-brands .brands-inner {
    width: 100%;
    margin: 0 auto;
}

#briants-brands .brands-title-strip {
    text-align: center;
    margin-bottom: 1.25rem;
}

#briants-brands .brands-title-strip span {
    font-family: var(--briants-font-headings);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    color: var(--briants-text-muted);
}

.brand-slider-container {
    width: 100%;
    overflow: hidden;
    display: flex;
    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.brand-track {
    display: flex;
    gap: 2.5rem;
    width: max-content;
    animation: scrollBrands 35s linear infinite;
}

@keyframes scrollBrands {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

.brand-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    min-width: 170px;
    opacity: 0.75;
    transition: var(--briants-transition);
}

.brand-item:hover {
    opacity: 1;
    transform: scale(1.05);
}

.brand-item strong {
    font-family: var(--briants-font-headings);
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--briants-primary);
    letter-spacing: 0.04em;
}

.brand-item span {
    font-size: 0.7rem;
    color: var(--briants-text-muted);
    font-weight: 600;
}`
  },
  {
    id: "why-choose-us",
    name: "Why Choose Briants",
    category: "Information",
    description: "6 merchant value propositions: Local Crane Offload, Comprehensive Yard Stock, Trade Pricing, Free Estimating & Brick Matching, Early Opening, and Service Workshop.",
    js: "",
    html: `<section id="briants-why-us" class="briants-module">
    <div class="briants-container">
        <div class="briants-section-header">
            <span class="briants-section-subtitle">The Briants Advantage</span>
            <h2>Why Builders Choose Briants</h2>
            <p>We combine massive yard stock and modern delivery logistics with traditional merchant advice and honest customer service.</p>
        </div>
        
        <div class="briants-grid-3">
            <div class="feature-box">
                <div class="feature-icon"><i class="fa-solid fa-truck-ramp-box"></i></div>
                <h3>Local Hiab Crane Fleet</h3>
                <p>Equipped with crane offload vehicles for accurate, safe site placement of heavy pallets, brick packs, and bulk aggregate bags right where your trades need them.</p>
            </div>
            
            <div class="feature-box">
                <div class="feature-icon"><i class="fa-solid fa-warehouse"></i></div>
                <h3>Massive On-the-Ground Stock</h3>
                <p>No waiting for distant depots. Our Longwick yard holds extensive inventory of bricks, blocks, Celotex insulation, treated timber, and site machinery ready for collection.</p>
            </div>
            
            <div class="feature-box">
                <div class="feature-icon"><i class="fa-solid fa-handshake-angle"></i></div>
                <h3>Dedicated Trade Accounts</h3>
                <p>Enjoy preferential trade discounts, monthly 30-day billing, fast phone ordering, and a dedicated trade account manager to handle your material schedules.</p>
            </div>
            
            <div class="feature-box">
                <div class="feature-icon"><i class="fa-solid fa-calculator"></i></div>
                <h3>Free Quantity Estimating</h3>
                <p>Send us your architectural drawings or schedules. Our experienced counter team will calculate exact brick, block, timber, and insulation quantities to minimise waste.</p>
            </div>
            
            <div class="feature-box">
                <div class="feature-icon"><i class="fa-solid fa-door-open"></i></div>
                <h3>Early 7:00 AM Gate Opening</h3>
                <p>Load your van before hitting the site. Our trade counter and yard team are ready from 7:00 AM every weekday with rapid forklift loading.</p>
            </div>
            
            <div class="feature-box">
                <div class="feature-icon"><i class="fa-solid fa-screwdriver-wrench"></i></div>
                <h3>In-House Workshop & Spares</h3>
                <p>Authorised service workshop on-site for Belle mixers, Stihl cut-off saws, tool maintenance, blade sharpening, and genuine spare parts.</p>
            </div>
        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Why Choose Us Styles
   ========================================================================== */

#briants-why-us {
    background-color: var(--briants-bg-light);
}

.feature-box {
    background-color: var(--briants-bg-white);
    border: 1px solid var(--briants-border);
    border-radius: var(--briants-radius-md);
    padding: 2.25rem 1.75rem;
    transition: var(--briants-transition);
}

.feature-box:hover {
    transform: translateY(-5px);
    box-shadow: var(--briants-shadow-lg);
    border-color: var(--briants-primary);
}

.feature-icon {
    width: 60px;
    height: 60px;
    border-radius: var(--briants-radius-md);
    background-color: var(--briants-tint-green);
    color: var(--briants-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    margin-bottom: 1.25rem;
    transition: var(--briants-transition);
}

.feature-box:hover .feature-icon {
    background-color: var(--briants-primary);
    color: #ffffff;
}

.feature-box h3 {
    font-family: var(--briants-font-headings);
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--briants-text-dark);
    margin: 0 0 0.65rem 0;
}

.feature-box p {
    font-size: 0.9rem;
    color: var(--briants-text-muted);
    line-height: 1.6;
    margin: 0;
}`
  },
  {
    id: "featured-deals",
    name: "Category Spotlight - Core Departments",
    category: "Products Grid",
    description: "High-level visual overview of our 4 primary merchant supply departments: Heavy Building, Thermal Insulation, Timber & Sheets, and Construction Machinery.",
    js: "",
    html: `<section id="briants-materials-deals" class="briants-module">
    <div class="briants-container">
        <div class="briants-section-header">
            <span class="briants-section-subtitle">Merchant Departments</span>
            <h2>Core Building Supply Categories</h2>
            <p>From groundwork to final fit-out, explore the primary building materials and equipment categories available at our Longwick depot.</p>
        </div>
        
        <div class="briants-grid-4">
            <div class="deal-card">
                <div class="deal-image-ph"><i class="fa-solid fa-cubes"></i></div>
                <h3>Bricks & Masonry</h3>
                <span class="deal-sub">Facing Bricks, Dense & Thermal Blocks</span>
                <p>Extensive selection of facing bricks, engineering bricks, 7.3N concrete blocks, trench blocks, and aggregate bulk bags.</p>
                <div class="deal-footer">
                    <a href="#briants-bricks-blocks" class="cat-action-link">View Masonry Range <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
            
            <div class="deal-card">
                <div class="deal-image-ph"><i class="fa-solid fa-layer-group"></i></div>
                <h3>Thermal Insulation</h3>
                <span class="deal-sub">Celotex PIR, Loft Roll & Cavity Batts</span>
                <p>Complete insulation solutions to meet Part L thermal and acoustic requirements for roofs, walls, and floors.</p>
                <div class="deal-footer">
                    <a href="#briants-insulation" class="cat-action-link">View Insulation Range <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
            
            <div class="deal-card">
                <div class="deal-image-ph"><i class="fa-solid fa-tree"></i></div>
                <h3>Timber & Sheets</h3>
                <span class="deal-sub">C24 Graded Carcassing, CLS & Plywood</span>
                <p>Responsibly sourced structural treated timber, roofing battens, hardwood plywood, OSB3, and moisture resistant MDF.</p>
                <div class="deal-footer">
                    <a href="#briants-timber" class="cat-action-link">View Timber Range <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
            
            <div class="deal-card">
                <div class="deal-image-ph"><i class="fa-solid fa-hammer"></i></div>
                <h3>Construction Machinery</h3>
                <span class="deal-sub">Belle Mixers, Cut-Off Saws & M-Class Vacs</span>
                <p>Authorised sales, full PDI setup, warranty repairs, and genuine spare parts for heavy trade construction equipment.</p>
                <div class="deal-footer">
                    <a href="#briants-machinery" class="cat-action-link">View Machinery Range <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Featured Material Deals Styles
   ========================================================================== */

#briants-materials-deals {
    background-color: var(--briants-bg-white);
}

.deal-card {
    background-color: var(--briants-bg-light);
    border: 1px solid var(--briants-border);
    border-radius: var(--briants-radius-md);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: var(--briants-transition);
}

.deal-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--briants-shadow-lg);
    border-color: var(--briants-accent);
}

.deal-ribbon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: var(--briants-accent);
    color: #ffffff;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 0.2rem 0.6rem;
    border-radius: var(--briants-radius-sm);
}

.deal-image-ph {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--briants-tint-green);
    color: var(--briants-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.deal-card h3 {
    font-family: var(--briants-font-headings);
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--briants-text-dark);
    margin: 0 0 0.35rem 0;
}

.deal-sub {
    font-size: 0.78rem;
    color: var(--briants-accent);
    font-weight: 600;
    display: block;
    margin-bottom: 0.75rem;
}

.deal-card p {
    font-size: 0.85rem;
    color: var(--briants-text-muted);
    line-height: 1.5;
    margin: 0 0 1.25rem 0;
    flex-grow: 1;
}

.deal-footer {
    border-top: 1px solid var(--briants-border);
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.deal-stock-status {
    font-size: 0.75rem;
    font-weight: 600;
    color: #16a34a;
    display: flex;
    align-items: center;
    gap: 0.35rem;
}`
  },
  {
    id: "bulk-delivery-trade",
    name: "Bulk Materials & Trade Form",
    category: "Promotions",
    description: "Interactive trade account enquiry and materials estimation form with dynamic quote feedback.",
    js: `// Trade Form Submission Handler Simulation
const tradeForm = document.getElementById('briants-quote-form');
if (tradeForm) {
    tradeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const successBox = document.getElementById('trade-form-success');
        if (successBox) {
            successBox.style.display = 'block';
            tradeForm.reset();
        }
    });
}`,
    html: `<section id="briants-trade-form" class="briants-module">
    <div class="briants-container">
        <div class="trade-form-grid">
            <div class="trade-info-panel">
                <span class="briants-section-subtitle">Fast Quotations</span>
                <h2>Request a Trade Quote or Account</h2>
                <p>Whether you need a full artic load of facing bricks, 50 packs of Celotex, a batch of Belle mixers, or want to open a 30-day trade account—our team will respond rapidly.</p>
                
                <div class="trade-perks-list">
                    <div class="perk-item">
                        <i class="fa-solid fa-truck-front"></i>
                        <div>
                            <strong>Crane Offload Scheduling</strong>
                            <span>Book specific delivery dates to match your site crane and groundwork timelines.</span>
                        </div>
                    </div>
                    <div class="perk-item">
                        <i class="fa-solid fa-calculator"></i>
                        <div>
                            <strong>Volume Tier Discounts</strong>
                            <span>The more you order across departments, the greater your project savings.</span>
                        </div>
                    </div>
                    <div class="perk-item">
                        <i class="fa-solid fa-phone-volume"></i>
                        <div>
                            <strong>Direct Sales Line</strong>
                            <span>Call our trade sales desk on <a href="tel:01844343663">01844 343663</a></span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="trade-form-card">
                <h3>Material Quote / Trade Enquiry</h3>
                <form id="briants-quote-form">
                    <div class="form-row-2">
                        <div class="form-group">
                            <label for="contact-name">Your Name *</label>
                            <input type="text" id="contact-name" class="form-control" placeholder="John Smith" required>
                        </div>
                        <div class="form-group">
                            <label for="company-name">Company / Business Name</label>
                            <input type="text" id="company-name" class="form-control" placeholder="e.g. Apex Construction Ltd">
                        </div>
                    </div>
                    
                    <div class="form-row-2">
                        <div class="form-group">
                            <label for="contact-phone">Phone Number *</label>
                            <input type="tel" id="contact-phone" class="form-control" placeholder="07123 456789" required>
                        </div>
                        <div class="form-group">
                            <label for="contact-email">Email Address *</label>
                            <input type="email" id="contact-email" class="form-control" placeholder="john@apex.co.uk" required>
                        </div>
                    </div>
                    
                    <div class="form-row-2">
                        <div class="form-group">
                            <label for="material-type">Primary Requirement *</label>
                            <select id="material-type" class="form-control" required>
                                <option value="" disabled selected>Select Requirement</option>
                                <option value="bricks-blocks">Bricks & Concrete Blocks</option>
                                <option value="insulation">Celotex / PIR Insulation</option>
                                <option value="timber-sheets">Timber & Sheet Materials</option>
                                <option value="machinery">Construction Machinery (Mixers/Saws/Vacs)</option>
                                <option value="trade-account">Open 30-Day Trade Credit Account</option>
                                <option value="mixed-load">Full Project Mixed Site Load</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="delivery-postcode">Site Delivery Postcode</label>
                            <input type="text" id="delivery-postcode" class="form-control" placeholder="e.g. HP27 9SG">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="quote-details">Material Quantities or Project Notes</label>
                        <textarea id="quote-details" rows="4" class="form-control" placeholder="e.g. Need 4 packs 7.3N dense blocks, 20 sheets 100mm Celotex, 1 Belle Minimix 150 petrol mixer with stand..."></textarea>
                    </div>
                    
                    <button type="submit" class="briants-btn briants-btn-primary briants-btn-lg" style="width: 100%;">Submit Material Request <i class="fa-solid fa-paper-plane"></i></button>
                    
                    <div id="trade-form-success" class="form-success-box" style="display: none;">
                        <i class="fa-solid fa-circle-check"></i> Thank you! Your request has been received. Our merchant trade desk will contact you within 2 business hours.
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Bulk Materials & Trade Form Styles
   ========================================================================== */

#briants-trade-form {
    background-color: var(--briants-bg-light);
}

.trade-form-grid {
    display: grid;
    grid-template-columns: 1fr 1.15fr;
    gap: 3rem;
    align-items: center;
}

.trade-info-panel h2 {
    font-family: var(--briants-font-headings);
    font-size: 2.1rem;
    font-weight: 700;
    color: var(--briants-text-dark);
    margin: 0.5rem 0 1rem 0;
    line-height: 1.25;
}

.trade-info-panel p {
    font-size: 1rem;
    color: var(--briants-text-muted);
    line-height: 1.6;
    margin: 0 0 2rem 0;
}

.trade-perks-list {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.perk-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
}

.perk-item i {
    font-size: 1.5rem;
    color: var(--briants-primary);
    background-color: var(--briants-tint-green);
    padding: 0.75rem;
    border-radius: var(--briants-radius-sm);
    flex-shrink: 0;
}

.perk-item strong {
    display: block;
    font-family: var(--briants-font-headings);
    font-size: 0.95rem;
    color: var(--briants-text-dark);
    margin-bottom: 0.2rem;
}

.perk-item span {
    font-size: 0.85rem;
    color: var(--briants-text-muted);
    line-height: 1.4;
}

.perk-item a {
    color: var(--briants-primary);
    font-weight: 700;
    text-decoration: none;
}

.trade-form-card {
    background-color: var(--briants-bg-white);
    border: 1px solid var(--briants-border);
    border-radius: var(--briants-radius-lg);
    padding: 2.25rem;
    box-shadow: var(--briants-shadow-lg);
}

.trade-form-card h3 {
    font-family: var(--briants-font-headings);
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--briants-text-dark);
    margin: 0 0 1.5rem 0;
}

.form-row-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.form-group {
    margin-bottom: 1.15rem;
}

.form-group label {
    display: block;
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--briants-text-dark);
    margin-bottom: 0.35rem;
}

.form-control {
    width: 100%;
    padding: 0.7rem 0.9rem;
    border: 1px solid var(--briants-border-dark);
    border-radius: var(--briants-radius-sm);
    font-family: var(--briants-font-body);
    font-size: 0.9rem;
    color: var(--briants-text-dark);
    background-color: #ffffff;
    transition: var(--briants-transition);
    outline: none;
}

.form-control:focus {
    border-color: var(--briants-primary);
    box-shadow: 0 0 0 3px rgba(0, 92, 48, 0.15);
}

.form-success-box {
    margin-top: 1rem;
    padding: 1rem;
    background-color: #f0fdf4;
    border: 1px solid #86efac;
    border-radius: var(--briants-radius-sm);
    color: #166534;
    font-size: 0.88rem;
    font-weight: 600;
}

@media (max-width: 900px) {
    .trade-form-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    .form-row-2 {
        grid-template-columns: 1fr;
    }
}`
  },
  {
    id: "workshop-servicing",
    name: "Workshop & Equipment Servicing",
    category: "Workshop",
    description: "Overview of Briants' on-site machinery repair workshop, saw blade sharpening, mixer repairs, and genuine spare parts desk.",
    js: "",
    html: `<section id="briants-workshop" class="briants-module">
    <div class="briants-container">
        <div class="workshop-wrapper">
            <div class="workshop-content">
                <span class="workshop-badge"><i class="fa-solid fa-wrench"></i> In-House Service Centre</span>
                <h2>Authorised Site Machinery Repair & Service Workshop</h2>
                <p>Don't let broken plant delay your project. Briants operates a dedicated repair centre staffed by factory-trained technicians specialising in Belle cement mixers, Stihl disc cutters, hydraulic compactors, and industrial vacuum units.</p>
                
                <div class="workshop-services-grid">
                    <div class="service-check"><i class="fa-solid fa-circle-check"></i> Belle Mixer Overhauls & Honda Engine Servicing</div>
                    <div class="service-check"><i class="fa-solid fa-circle-check"></i> Stihl Cut-Off Saw Carburettor & Piston Rebuilds</div>
                    <div class="service-check"><i class="fa-solid fa-circle-check"></i> Diamond Blade & TCT Saw Blade Sharpening</div>
                    <div class="service-check"><i class="fa-solid fa-circle-check"></i> 110V Electrical PAT Safety Testing</div>
                    <div class="service-check"><i class="fa-solid fa-circle-check"></i> M-Class Vacuum Filter Testing & Seal Replacement</div>
                    <div class="service-check"><i class="fa-solid fa-circle-check"></i> Massive Genuine Spare Parts Counter</div>
                </div>
                
                <div class="workshop-cta-row">
                    <a href="tel:01844343663" class="briants-btn briants-btn-secondary briants-btn-lg"><i class="fa-solid fa-phone"></i> Book Tool Service: 01844 343663</a>
                </div>
            </div>
        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Workshop & Equipment Servicing Styles
   ========================================================================== */

#briants-workshop {
    background-color: var(--briants-bg-white);
}

.workshop-wrapper {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    color: #ffffff;
    border-radius: var(--briants-radius-xl);
    padding: 3.5rem 3rem;
    box-shadow: var(--briants-shadow-xl);
}

.workshop-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--briants-accent);
    background: rgba(210, 161, 56, 0.15);
    padding: 0.3rem 0.85rem;
    border-radius: 9999px;
    border: 1px solid rgba(210, 161, 56, 0.3);
    margin-bottom: 1rem;
}

.workshop-content h2 {
    font-family: var(--briants-font-headings);
    font-size: 2.2rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    color: #ffffff;
    line-height: 1.25;
}

.workshop-content p {
    font-size: 1.05rem;
    color: #cbd5e1;
    line-height: 1.65;
    max-width: 850px;
    margin: 0 0 2rem 0;
}

.workshop-services-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem 2rem;
    margin-bottom: 2.25rem;
}

.service-check {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    font-size: 0.95rem;
    color: #f1f5f9;
}

.service-check i {
    color: var(--briants-accent);
    font-size: 1.1rem;
    flex-shrink: 0;
}

.workshop-cta-row {
    display: flex;
    gap: 1rem;
}

@media (max-width: 768px) {
    .workshop-wrapper {
        padding: 2rem 1.5rem;
    }
    .workshop-content h2 {
        font-size: 1.7rem;
    }
    .workshop-services-grid {
        grid-template-columns: 1fr;
    }
}`
  },
  {
    id: "faq-accordion",
    name: "Frequently Asked Questions",
    category: "Information",
    description: "Interactive collapsible accordion answering crane delivery access, minimum orders, brick matching, trade credit accounts, and timber cutting.",
    js: `// FAQ Accordion Toggle Interaction
document.querySelectorAll('#briants-faq .faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const isActive = item.classList.contains('active');
        
        // Close other open FAQs
        document.querySelectorAll('#briants-faq .faq-item').forEach(other => {
            other.classList.remove('active');
            other.querySelector('.faq-answer').style.maxHeight = null;
        });
        
        if (!isActive) {
            item.classList.add('active');
            const answer = item.querySelector('.faq-answer');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});`,
    html: `<section id="briants-faq" class="briants-module">
    <div class="briants-container">
        <div class="briants-section-header">
            <span class="briants-section-subtitle">Merchant FAQs</span>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about deliveries, yard collections, brick matching, and trade terms.</p>
        </div>
        
        <div class="faq-accordion-list">
            <div class="faq-item">
                <button class="faq-question">
                    <span>What areas do your Hiab crane delivery vehicles cover?</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div class="faq-answer">
                    <p>We deliver direct to site throughout Buckinghamshire, Oxfordshire, Hertfordshire, and Berkshire—including Princes Risborough, Aylesbury, High Wycombe, Thame, Oxford, Amersham, Wendover, and surrounding villages. Our Hiab crane vehicles can offload heavy pallets of bricks, blocks, Celotex, and bulk aggregate bags directly over walls, hedges, or onto driveways.</p>
                </div>
            </div>
            
            <div class="faq-item">
                <button class="faq-question">
                    <span>How do I get bricks matched for an extension or repair?</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div class="faq-answer">
                    <p>You can bring a physical sample brick to our trade counter in Longwick, Princes Risborough, or email clear close-up photos of your existing brickwork to our team. Our experienced brick specialists will match the texture, colour blend, and dimensions from our brick manufacturer networks (Ibstock, Forterra, Wienerberger, etc.).</p>
                </div>
            </div>
            
            <div class="faq-item">
                <button class="faq-question">
                    <span>How do I open a 30-Day Trade Credit Account with Briants?</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div class="faq-answer">
                    <p>Trade contractors, builders, and tradespeople can apply online via our quote form or pick up an application form at the counter. Trade accounts provide 30-day end-of-month credit terms, bespoke volume discounts, telephone ordering, and detailed VAT invoices.</p>
                </div>
            </div>
            
            <div class="faq-item">
                <button class="faq-question">
                    <span>Do you cut timber and sheet materials to size in the yard?</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div class="faq-answer">
                    <p>Yes, our yard team provides a timber and sheet material cross-cutting service for easy transport. Let our staff know when placing your order at the counter.</p>
                </div>
            </div>
            
            <div class="faq-item">
                <button class="faq-question">
                    <span>Are construction machines (mixers & cut-off saws) assembled and tested?</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div class="faq-answer">
                    <p>Absolutely. Unlike standard online retailers that ship flat-packed boxes, Briants carries out a full Pre-Delivery Inspection (PDI) on every machine we supply. Petrol mixers and cut-off saws are assembled, filled with oil, test-run, and tuned before you collect or receive them.</p>
                </div>
            </div>
        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Frequently Asked Questions Styles
   ========================================================================== */

#briants-faq {
    background-color: var(--briants-bg-light);
}

.faq-accordion-list {
    max-width: 850px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.faq-item {
    background-color: var(--briants-bg-white);
    border: 1px solid var(--briants-border);
    border-radius: var(--briants-radius-md);
    overflow: hidden;
    transition: var(--briants-transition);
}

.faq-item.active {
    border-color: var(--briants-primary);
    box-shadow: var(--briants-shadow-md);
}

.faq-question {
    width: 100%;
    background: transparent;
    border: none;
    padding: 1.25rem 1.5rem;
    text-align: left;
    font-family: var(--briants-font-headings);
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--briants-text-dark);
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    gap: 1rem;
    transition: var(--briants-transition);
}

.faq-question:hover {
    color: var(--briants-primary);
}

.faq-question i {
    font-size: 0.9rem;
    color: var(--briants-accent);
    transition: transform 0.3s ease;
}

.faq-item.active .faq-question i {
    transform: rotate(180deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    background-color: #fafbfc;
}

.faq-answer p {
    padding: 0 1.5rem 1.25rem 1.5rem;
    margin: 0;
    font-size: 0.92rem;
    color: var(--briants-text-muted);
    line-height: 1.65;
}`
  },
  {
    id: "showroom",
    name: "Merchant Yard Location & Contact",
    category: "Information",
    description: "Location map card, opening hours, yard loading information, and telephone contact for Briants Longwick merchant depot.",
    js: "",
    html: `<section id="briants-showroom" class="briants-module">
    <div class="briants-container">
        <div class="showroom-card-grid">
            <div class="showroom-details">
                <span class="briants-section-subtitle">Visit Our Yard</span>
                <h2>Briants of Risborough Merchant Yard</h2>
                <p>Our expansive builders merchant depot and machinery showroom is centrally located in Longwick, Princes Risborough with dedicated customer parking and easy forklift loading.</p>
                
                <div class="showroom-info-items">
                    <div class="show-item">
                        <i class="fa-solid fa-location-dot"></i>
                        <div>
                            <strong>Yard & Showroom Address:</strong>
                            <span>Greenway, Longwick, Princes Risborough, Buckinghamshire, HP27 9SG</span>
                        </div>
                    </div>
                    <div class="show-item">
                        <i class="fa-solid fa-phone"></i>
                        <div>
                            <strong>Trade Counter Helpline:</strong>
                            <span><a href="tel:01844343663">01844 343663</a></span>
                        </div>
                    </div>
                    <div class="show-item">
                        <i class="fa-solid fa-clock"></i>
                        <div>
                            <strong>Opening Hours:</strong>
                            <span>Monday – Friday: 7:00 AM – 4:45 PM<br>Saturday: 8:00 AM – 12:00 PM (Timber & Yard Collections)</span>
                        </div>
                    </div>
                </div>
                
                <div class="showroom-btn-row">
                    <a href="https://maps.google.com/?q=Briants+of+Risborough+HP27+9SG" target="_blank" rel="noopener" class="briants-btn briants-btn-primary"><i class="fa-solid fa-diamond-turn-right"></i> Get Yard Directions</a>
                    <a href="tel:01844343663" class="briants-btn briants-btn-outline"><i class="fa-solid fa-phone"></i> Call Counter</a>
                </div>
            </div>
            
            <div class="showroom-yard-summary">
                <div class="yard-stat-box">
                    <div class="stat-number">3+</div>
                    <div class="stat-label">Acres of Building Materials, Timber & Machinery Stock</div>
                </div>
                <div class="yard-stat-box">
                    <div class="stat-number">7AM</div>
                    <div class="stat-label">Early Trade Counter Opening Every Weekday</div>
                </div>
                <div class="yard-stat-box">
                    <div class="stat-number">100%</div>
                    <div class="stat-label">Pre-Delivery Inspection (PDI) on All Site Machinery</div>
                </div>
                <div class="yard-stat-box">
                    <div class="stat-number">HIAB</div>
                    <div class="stat-label">Fleet for Fast On-Site Crane Offload Delivery</div>
                </div>
            </div>
        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Merchant Yard Location & Contact Styles
   ========================================================================== */

#briants-showroom {
    background-color: var(--briants-bg-white);
}

.showroom-card-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 3rem;
    align-items: center;
}

.showroom-details h2 {
    font-family: var(--briants-font-headings);
    font-size: 2.1rem;
    font-weight: 700;
    color: var(--briants-text-dark);
    margin: 0.5rem 0 1rem 0;
    line-height: 1.25;
}

.showroom-details p {
    font-size: 1rem;
    color: var(--briants-text-muted);
    line-height: 1.6;
    margin: 0 0 2rem 0;
}

.showroom-info-items {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-bottom: 2rem;
}

.show-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
}

.show-item i {
    font-size: 1.4rem;
    color: var(--briants-primary);
    background-color: var(--briants-tint-green);
    padding: 0.75rem;
    border-radius: var(--briants-radius-sm);
    flex-shrink: 0;
}

.show-item strong {
    display: block;
    font-family: var(--briants-font-headings);
    font-size: 0.95rem;
    color: var(--briants-text-dark);
    margin-bottom: 0.2rem;
}

.show-item span {
    font-size: 0.9rem;
    color: var(--briants-text-muted);
    line-height: 1.45;
}

.show-item a {
    color: var(--briants-primary);
    font-weight: 700;
    text-decoration: none;
}

.showroom-btn-row {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.showroom-yard-summary {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
}

.yard-stat-box {
    background-color: var(--briants-bg-light);
    border: 1px solid var(--briants-border);
    border-radius: var(--briants-radius-md);
    padding: 1.75rem 1.25rem;
    text-align: center;
    transition: var(--briants-transition);
}

.yard-stat-box:hover {
    transform: translateY(-4px);
    border-color: var(--briants-primary);
    box-shadow: var(--briants-shadow-md);
}

.stat-number {
    font-family: var(--briants-font-headings);
    font-size: 2.25rem;
    font-weight: 800;
    color: var(--briants-primary);
    margin-bottom: 0.35rem;
}

.stat-label {
    font-size: 0.82rem;
    color: var(--briants-text-muted);
    line-height: 1.4;
    font-weight: 600;
}

@media (max-width: 900px) {
    .showroom-card-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}`
  },
  {
    id: "footer",
    name: "Landing Page Footer",
    category: "Footer",
    description: "Complete Briants Building Supplies footer with department navigation, opening hours, contact details, payment methods, and copyright.",
    js: "",
    html: `<footer id="briants-footer" class="briants-module">
    <div class="footer-top">
        <div class="footer-inner">
            <div class="footer-col footer-col-brand">
                <span class="footer-logo-text">BRIANTS</span>
                <span class="footer-logo-sub">BUILDING SUPPLIES & TIMBER</span>
                <p>Supplying trade professionals and self-builders across Buckinghamshire, Oxfordshire, and Hertfordshire with heavy building materials, structural timber, PIR insulation, and construction machinery.</p>
                <div class="footer-social-row">
                    <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
            
            <div class="footer-col">
                <h4>Materials</h4>
                <ul>
                    <li><a href="#briants-bricks-blocks">Bricks & Dense Blocks</a></li>
                    <li><a href="#briants-insulation">Celotex & PIR Insulation</a></li>
                    <li><a href="#briants-timber">C24 Structural Timber</a></li>
                    <li><a href="#briants-timber">Sheet Materials & Plywood</a></li>
                    <li><a href="#briants-materials-deals">Aggregates & Hanson Cement</a></li>
                    <li><a href="#briants-materials-deals">Plasterboard & Drylining</a></li>
                </ul>
            </div>
            
            <div class="footer-col">
                <h4>Machinery & Tools</h4>
                <ul>
                    <li><a href="#briants-machinery">Belle Cement Mixers</a></li>
                    <li><a href="#briants-machinery">Stihl Cut-Off Saws</a></li>
                    <li><a href="#briants-machinery">M-Class Dust Extractors</a></li>
                    <li><a href="#briants-machinery">Diamond Masonry Blades</a></li>
                    <li><a href="#briants-workshop">Workshop & Plant Repairs</a></li>
                    <li><a href="#briants-workshop">Genuine Spare Parts</a></li>
                </ul>
            </div>
            
            <div class="footer-col">
                <h4>Trade & Support</h4>
                <ul>
                    <li><a href="#briants-trade-form">Open a Trade Account</a></li>
                    <li><a href="#briants-trade-form">Request Material Quote</a></li>
                    <li><a href="#briants-faq">Delivery Radius & Access</a></li>
                    <li><a href="#briants-bricks-blocks">Free Brick Matching</a></li>
                    <li><a href="#briants-showroom">Showroom & Yard Map</a></li>
                    <li><a href="tel:01844343663">Direct Desk: 01844 343663</a></li>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="footer-bottom">
        <div class="footer-bottom-inner">
            <p>&copy; 2026 Briants of Risborough Ltd. All rights reserved. Registered in England & Wales.</p>
            <div class="footer-payment-badges">
                <span><i class="fa-brands fa-cc-visa"></i> Visa</span>
                <span><i class="fa-brands fa-cc-mastercard"></i> Mastercard</span>
                <span><i class="fa-solid fa-building-columns"></i> BACS / Trade Credit</span>
            </div>
        </div>
    </div>
</footer>`,
    css: `/* ==========================================================================
   Landing Page Footer Styles
   ========================================================================== */

#briants-footer {
    background-color: #0b1329;
    color: #94a3b8;
    border-top: 1px solid #1e293b;
}

#briants-footer .footer-top {
    padding: 4rem 0 3rem 0;
}

#briants-footer .footer-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: 2.5rem;
}

.footer-col-brand .footer-logo-text {
    font-family: var(--briants-font-headings);
    font-size: 1.85rem;
    font-weight: 800;
    color: #ffffff;
    letter-spacing: 0.06em;
    display: block;
    line-height: 1;
}

.footer-col-brand .footer-logo-sub {
    font-family: var(--briants-font-headings);
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--briants-accent);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    display: block;
    margin-bottom: 1rem;
}

.footer-col-brand p {
    font-size: 0.88rem;
    line-height: 1.6;
    color: #94a3b8;
    margin: 0 0 1.5rem 0;
}

.footer-social-row {
    display: flex;
    gap: 0.75rem;
}

.footer-social-row a {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #1e293b;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    text-decoration: none;
    transition: var(--briants-transition);
}

.footer-social-row a:hover {
    background-color: var(--briants-primary);
    transform: translateY(-2px);
}

.footer-col h4 {
    font-family: var(--briants-font-headings);
    font-size: 1rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 1.25rem 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.footer-col ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
}

.footer-col ul li a {
    color: #94a3b8;
    text-decoration: none;
    font-size: 0.88rem;
    transition: var(--briants-transition);
}

.footer-col ul li a:hover {
    color: #ffffff;
    padding-left: 4px;
}

#briants-footer .footer-bottom {
    background-color: #070b16;
    padding: 1.5rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

#briants-footer .footer-bottom-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 0.8rem;
}

#briants-footer .footer-bottom-inner p {
    margin: 0;
}

.footer-payment-badges {
    display: flex;
    gap: 1.25rem;
    color: #cbd5e1;
    font-size: 0.85rem;
}

@media (max-width: 900px) {
    #briants-footer .footer-inner {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 600px) {
    #briants-footer .footer-inner {
        grid-template-columns: 1fr;
    }
    #briants-footer .footer-bottom-inner {
        flex-direction: column;
        text-align: center;
    }
}`
  },
  {
    id: "machinery-hero",
    name: "Hero - Construction Machinery",
    category: "Hero",
    description: "Dedicated high-impact hero section tailored specifically for construction machinery, cut-off saws, cement mixers, and M-class site dust extraction.",
    js: "",
    html: `<section id="briants-machinery-hero" class="briants-module">
    <div class="machinery-hero-overlay"></div>
    <div class="machinery-hero-inner">
        <div class="machinery-hero-card">
            <h1>Heavy Site Machinery, <span class="m-highlight">Ready To Work.</span></h1>
            <p>From world-renowned Belle tip-up cement mixers to Stihl precision cut-off saws and HSE-compliant M-Class silica dust vacs—Briants delivers fully assembled, PDI-inspected machinery backed by full manufacturer warranties and an on-site service workshop.</p>
            
            <div class="m-hero-stats">
                <div class="m-stat">
                    <strong>100% PDI</strong>
                    <span>Assembled & Tested</span>
                </div>
                <div class="m-stat">
                    <strong>GENUINE</strong>
                    <span>Spares & Blades</span>
                </div>
                <div class="m-stat">
                    <strong>WORKSHOP</strong>
                    <span>Local Service Centre</span>
                </div>
            </div>
            
            <div class="m-hero-btns">
                <a href="#briants-machinery" class="briants-btn briants-btn-orange briants-btn-lg">View Machinery Range <i class="fa-solid fa-arrow-down"></i></a>
                <a href="#briants-workshop" class="briants-btn briants-btn-outline-white briants-btn-lg">Workshop & Repairs <i class="fa-solid fa-screwdriver-wrench"></i></a>
            </div>
        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Machinery Hero Styles
   ========================================================================== */

#briants-machinery-hero {
    position: relative;
    background-image: url('./briants_hero_bg.png');
    background-size: cover;
    background-position: center;
    padding: 6.5rem 0;
    color: #ffffff;
}

.machinery-hero-overlay {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(to right, rgba(11, 19, 41, 0.96) 0%, rgba(11, 19, 41, 0.85) 50%, rgba(249, 115, 22, 0.25) 100%);
    z-index: 1;
}

.machinery-hero-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    position: relative;
    z-index: 2;
}

.machinery-hero-card {
    max-width: 700px;
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(249, 115, 22, 0.3);
    padding: 2.75rem;
    border-radius: var(--briants-radius-lg);
}

.m-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--briants-safety-orange);
    background: rgba(249, 115, 22, 0.15);
    padding: 0.35rem 0.85rem;
    border-radius: 9999px;
    border: 1px solid rgba(249, 115, 22, 0.35);
    margin-bottom: 1.25rem;
}

.machinery-hero-card h1 {
    font-family: var(--briants-font-headings);
    font-size: 2.4rem;
    font-weight: 800;
    line-height: 1.2;
    margin: 0 0 1.2rem 0;
    color: #ffffff;
}

.m-highlight {
    color: var(--briants-safety-orange);
    display: block;
}

.machinery-hero-card p {
    font-size: 1.05rem;
    line-height: 1.6;
    color: #cbd5e1;
    margin: 0 0 1.75rem 0;
}

.m-hero-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;
    background: rgba(0, 0, 0, 0.3);
    padding: 1rem;
    border-radius: var(--briants-radius-md);
    border: 1px solid rgba(255, 255, 255, 0.08);
}

.m-stat strong {
    display: block;
    font-family: var(--briants-font-headings);
    font-size: 1.1rem;
    color: #ffffff;
}

.m-stat span {
    font-size: 0.75rem;
    color: #94a3b8;
}

.m-hero-btns {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

@media (max-width: 640px) {
    .machinery-hero-card {
        padding: 1.75rem;
    }
    .machinery-hero-card h1 {
        font-size: 1.85rem;
    }
    .m-hero-stats {
        grid-template-columns: 1fr;
    }
    .m-hero-btns {
        flex-direction: column;
    }
}`
  },
  {
    id: "machinery-specs-split",
    name: "Equipment Specs & Comparisons",
    category: "Products Grid",
    description: "Detailed side-by-side technical specification breakdown for Petrol vs Electric Mixers and Disc Cutters.",
    js: "",
    html: `<section id="briants-machinery-specs" class="briants-module">
    <div class="briants-container">
        <div class="briants-section-header">
            <span class="briants-section-subtitle">Technical Breakdown</span>
            <h2>Power & Drive Options: Choosing Your Machine</h2>
            <p>Compare powertrain configurations, drum capacities, and blade sizes to match your site power constraints.</p>
        </div>
        
        <div class="briants-grid-2">
            <div class="spec-compare-card">
                <div class="compare-badge">Belle Mixers</div>
                <h3>Petrol Honda GX120 vs Electric (110V/240V)</h3>
                <p>Belle Minimix 150 tip-up mixers are available in multiple power options to suit off-grid sites or domestic renovations.</p>
                
                <ul class="compare-list">
                    <li><strong>Honda GX120 Petrol:</strong> 4.0 HP unleaded engine. Complete freedom from site transformers, extension reels, and generator limits.</li>
                    <li><strong>110V 16A Site Electric:</strong> Compliant with UK commercial building site safety standards. Plugs into standard 110V yellow transformers.</li>
                    <li><strong>240V Domestic Mains:</strong> Standard 13A 3-pin household plug for domestic extensions, garden walling, and DIY builds.</li>
                </ul>
            </div>
            
            <div class="spec-compare-card">
                <div class="compare-badge">Cut-Off Saws</div>
                <h3>Stihl TS 410 (300mm) vs Stihl TS 420 (350mm)</h3>
                <p>Determine the optimal disc cutter diameter based on maximum cutting depth requirements.</p>
                
                <ul class="compare-list">
                    <li><strong>Stihl TS 410 (300mm / 12"):</strong> 100mm (4") cutting depth. Compact, lightweight, ideal for standard facing bricks, 100mm dense blocks, and kerb stones.</li>
                    <li><strong>Stihl TS 420 (350mm / 14"):</strong> 125mm (5") cutting depth. Perfect for thicker structural concrete blocks, asphalt road cutting, and large drainage pipes.</li>
                    <li><strong>Dust Suppression:</strong> Both models include integrated water connection nozzles with quick-release couplings for pressurised water bottles.</li>
                </ul>
            </div>
        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Equipment Specs Comparison Styles
   ========================================================================== */

#briants-machinery-specs {
    background-color: var(--briants-bg-white);
}

.spec-compare-card {
    background-color: var(--briants-bg-light);
    border: 1px solid var(--briants-border);
    border-radius: var(--briants-radius-md);
    padding: 2.25rem;
    transition: var(--briants-transition);
}

.spec-compare-card:hover {
    box-shadow: var(--briants-shadow-lg);
    border-color: var(--briants-safety-orange);
}

.compare-badge {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--briants-safety-orange);
    background-color: #ffedd5;
    padding: 0.25rem 0.65rem;
    border-radius: var(--briants-radius-sm);
    margin-bottom: 0.75rem;
}

.spec-compare-card h3 {
    font-family: var(--briants-font-headings);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--briants-text-dark);
    margin: 0 0 0.75rem 0;
}

.spec-compare-card p {
    font-size: 0.9rem;
    color: var(--briants-text-muted);
    line-height: 1.5;
    margin: 0 0 1.5rem 0;
}

.compare-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 0.88rem;
    color: #334155;
}

.compare-list li {
    padding-left: 1rem;
    border-left: 3px solid var(--briants-safety-orange);
    line-height: 1.5;
}

.compare-list strong {
    color: var(--briants-text-dark);
}`
  },
  {
    id: "machinery-dust-safety-guide",
    name: "Dust Safety & HSE M-Class Guide",
    category: "Information",
    description: "Guidance banner explaining HSE silica dust regulations and why M-Class vacuum extractors and water suppression tanks are mandatory on modern UK construction sites.",
    js: "",
    html: `<section id="briants-dust-guide" class="briants-module">
    <div class="briants-container">
        <div class="dust-guide-banner">
            <div class="dust-icon-col">
                <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <div class="dust-text-col">
                <span class="dust-badge">HSE Safety Regulations</span>
                <h3>Controlling Respirable Crystalline Silica (RCS) Dust</h3>
                <p>Cutting concrete blocks, facing bricks, and mortar releases fine crystalline silica particles. The UK Health & Safety Executive (HSE) enforces strict dust control: you must use on-tool water suppression or an <strong>M-Class certified dust extraction unit</strong> (minimum 99.9% filtration). Briants supplies compliant Starmix/Nilfisk M-Class extractors, dust shrouds, and pressurised water bottles in stock.</p>
            </div>
            <div class="dust-action-col">
                <a href="#briants-machinery" class="briants-btn briants-btn-orange">View M-Class Extractors <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Dust Safety Guide Styles
   ========================================================================== */

#briants-dust-guide {
    background-color: var(--briants-bg-light);
}

.dust-guide-banner {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    color: #ffffff;
    border: 1px solid #334155;
    border-left: 6px solid var(--briants-safety-orange);
    border-radius: var(--briants-radius-md);
    padding: 2.25rem 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
}

.dust-icon-col i {
    font-size: 3rem;
    color: var(--briants-safety-orange);
}

.dust-text-col {
    flex-grow: 1;
}

.dust-badge {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--briants-safety-orange);
    display: block;
    margin-bottom: 0.35rem;
}

.dust-text-col h3 {
    font-family: var(--briants-font-headings);
    font-size: 1.35rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
    color: #ffffff;
}

.dust-text-col p {
    font-size: 0.92rem;
    color: #cbd5e1;
    line-height: 1.6;
    margin: 0;
}

@media (max-width: 900px) {
    .dust-guide-banner {
        flex-direction: column;
        align-items: flex-start;
        gap: 1.5rem;
    }
}`
  },
  {
    id: "machinery-faq",
    name: "FAQ - Construction Machinery",
    category: "Information",
    description: "Collapsible questions focused on tool hire, warranty registration, machine servicing intervals, and diamond blade selection.",
    js: `// Machinery FAQ Accordion Toggle Interaction
document.querySelectorAll('#briants-machinery-faq .faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const isActive = item.classList.contains('active');
        
        document.querySelectorAll('#briants-machinery-faq .faq-item').forEach(other => {
            other.classList.remove('active');
            other.querySelector('.faq-answer').style.maxHeight = null;
        });
        
        if (!isActive) {
            item.classList.add('active');
            const answer = item.querySelector('.faq-answer');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});`,
    html: `<section id="briants-machinery-faq" class="briants-module">
    <div class="briants-container">
        <div class="briants-section-header">
            <span class="briants-section-subtitle">Plant & Tools FAQ</span>
            <h2>Construction Machinery Questions</h2>
            <p>Common questions regarding machine warranties, PDI setup, blade choices, and workshop repairs.</p>
        </div>
        
        <div class="faq-accordion-list">
            <div class="faq-item">
                <button class="faq-question">
                    <span>What is included in Briants Pre-Delivery Inspection (PDI)?</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div class="faq-answer">
                    <p>Every petrol mixer and disc cutter we supply is unboxed, assembled by our trained technicians, filled with the correct grade of manufacturer engine oil, fuelled, and test-run under load. We check all safety guards, throttles, and drive belts so that the machine is 100% ready to work upon receipt.</p>
                </div>
            </div>
            
            <div class="faq-item">
                <button class="faq-question">
                    <span>Which diamond blade do I need for my cut-off saw?</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div class="faq-answer">
                    <p>We stock universal diamond blades for general building materials (facing bricks, concrete blocks, precast lintels), hard materials blades for engineering bricks and reinforced concrete, and soft abrasive blades specifically engineered for asphalt and green concrete.</p>
                </div>
            </div>
            
            <div class="faq-item">
                <button class="faq-question">
                    <span>Can you repair my existing Belle mixer or Stihl saw?</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div class="faq-answer">
                    <p>Yes. Our in-house Longwick workshop services and repairs all major brands. We carry genuine Belle gearboxes, Honda carburettors, Stihl recoil assemblies, and drive belts. Contact our workshop desk on 01844 343663 to drop off your equipment.</p>
                </div>
            </div>
        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Machinery FAQ Styles
   ========================================================================== */

#briants-machinery-faq {
    background-color: var(--briants-bg-white);
}`
  }
];
