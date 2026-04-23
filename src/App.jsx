import { useState, useEffect } from 'react'
import {
  Search, ShoppingCart, MapPin, ChevronDown, ChevronLeft,
  ChevronRight, Globe, Menu
} from 'lucide-react'
import './App.css'

// ── ImageCell ─────────────────────────────────────────────────────────────────
function ImageCell({ emoji, bg, label, imgUrl }) {
  return (
    <div className="image-cell">
      <div className="image-cell-box" style={{ backgroundColor: bg }}>
        {imgUrl
          ? <img src={imgUrl} alt={label} />
          : <span style={{ fontSize: 32 }}>{emoji}</span>
        }
      </div>
      <p className="image-cell-label">{label}</p>
    </div>
  )
}

// ── ProductCard ───────────────────────────────────────────────────────────────
function ProductCard({ title, cells, link }) {
  return (
    <div className="product-card">
      <h3 className="product-card-title">{title}</h3>
      <div className="product-card-grid">
        {cells.map((cell, i) => (
          <ImageCell key={i} {...cell} />
        ))}
      </div>
      <a className="card-link">{link}</a>
    </div>
  )
}

// ── Data ──────────────────────────────────────────────────────────────────────
const CARDS = [
  {
    title: "Appliances for your home | Up to 55% off",
    cells: [
      { label: "Air conditioners",  bg: "#dbeafe", imgUrl: "https://picsum.photos/id/287/300/300" },
      { label: "Refrigerators",     bg: "#cffafe", imgUrl: "https://picsum.photos/id/30/300/300" },
      { label: "Microwaves",        bg: "#f3f4f6", imgUrl: "https://picsum.photos/id/20/300/300" },
      { label: "Washing machines",  bg: "#bfdbfe", imgUrl: "https://picsum.photos/id/116/300/300" },
    ],
    link: "See more"
  },
  {
    title: "Bulk order discounts + Up to 18% GST savings",
    cells: [
      { label: "Up to 45% off | Laptops",               bg: "#f1f5f9", imgUrl: "https://picsum.photos/id/0/300/300" },
      { label: "Up to 60% off | Kitchen appliances",    bg: "#f4f4f5", imgUrl: "https://picsum.photos/id/431/300/300" },
      { label: "Min. 50% off | Office furniture",       bg: "#fafaf9", imgUrl: "https://picsum.photos/id/201/300/300" },
      { label: "Register via GST, Udyam, FSSAI or BPAN", bg: "#fff7ed", imgUrl: "https://picsum.photos/id/239/300/300" },
    ],
    link: "Create a free account"
  },
  {
    title: "Starting ₹49 | Deals on home essentials",
    cells: [
      { label: "Cleaning supplies",     bg: "#f0fdf4", imgUrl: "https://picsum.photos/id/452/300/300" },
      { label: "Bathroom accessories",  bg: "#f0fdfa", imgUrl: "https://picsum.photos/id/342/300/300" },
      { label: "Home tools",            bg: "#fafaf9", imgUrl: "https://picsum.photos/id/119/300/300" },
      { label: "Wallpapers",            bg: "#faf5ff", imgUrl: "https://picsum.photos/id/155/300/300" },
    ],
    link: "Explore all"
  },
  {
    title: "Automotive essentials | Up to 60% off",
    cells: [
      { label: "Cleaning accessories", bg: "#f0f9ff", imgUrl: "https://picsum.photos/id/180/300/300" },
      { label: "Tyre & rim care",      bg: "#f3f4f6", imgUrl: "https://picsum.photos/id/133/300/300" },
      { label: "Helmets",              bg: "#fef2f2", imgUrl: "https://picsum.photos/id/250/300/300" },
      { label: "Vacuum cleaner",       bg: "#f5f3ff", imgUrl: "https://picsum.photos/id/96/300/300" },
    ],
    link: "See more"
  },
]

const SLIDES = [
  {
    imgUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1440&q=80",
    label: "Starting ₹99 | Bottles & Lunch Boxes",
    sub: "Free delivery on first order",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1440&q=80",
    label: "Up to 40% Off | Stylish Furniture at great prices",
    sub: "Transform your living space today",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1440&q=80",
    label: "Prime Deals | Electronics & More",
    sub: "Exclusive savings for Prime members",
  },
]

const PROMO = [
  { label: "Bean Bag Chair", bg: "#fffbeb", imgUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80" },
  { label: "Wardrobe — White", bg: "#f8fafc", imgUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80" },
  { label: "Modular Sofa", bg: "#fdf2f8", imgUrl: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80" },
  { label: "Room Divider", bg: "#fff7ed", imgUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80" },
  { label: "Egg Chair — Black", bg: "#f8fafc", imgUrl: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80" },
  { label: "3-Seater Sofa — Blue", bg: "#eff6ff", imgUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80" },
  { label: "Arm Chair — Maroon", bg: "#fef2f2", imgUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80" },
]

const NAV_LINKS = [
  "Fresh","MX Player","Sell","Bestsellers","Mobiles","Today's Deals",
  "Customer Service","New Releases","Prime","Amazon Pay","Fashion",
  "Electronics","Home & Kitchen","Computers","Books","Toys & Games",
  "Gift Cards","Beauty & Personal Care","Car & Motorbike",
]

// ── HeroBanner ────────────────────────────────────────────────────────────────
function HeroBanner() {
  const [slide, setSlide] = useState(0)
  const total = SLIDES.length
  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % total), 3500)
    return () => clearInterval(t)
  }, [total])
  return (
    <div className="hero-banner">
      <div className="hero-track" style={{ transform: `translateX(-${slide * 100}%)` }}>
        {SLIDES.map((s, i) => (
          <div key={i} className="hero-slide">
            <img src={s.imgUrl} alt={s.label} />
            <div className="hero-caption">
              <p className="hero-caption-title">{s.label}</p>
              <p className="hero-caption-sub">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="hero-arrow hero-arrow-left" onClick={() => setSlide(s => (s - 1 + total) % total)}>
        <ChevronLeft size={22} />
      </button>
      <button className="hero-arrow hero-arrow-right" onClick={() => setSlide(s => (s + 1) % total)}>
        <ChevronRight size={22} />
      </button>
      <div className="hero-dots">
        {SLIDES.map((_, i) => (
          <button key={i} className={`hero-dot${i === slide ? ' active' : ''}`} onClick={() => setSlide(i)} />
        ))}
      </div>
    </div>
  )
}

// ── TopNav ────────────────────────────────────────────────────────────────────
function TopNav() {
  return (
    <nav className="top-nav">
      <div className="nav-logo nav-hover-border">
        <span className="logo-text">amazon</span>
        <span className="logo-in">.in</span>
      </div>
      <div className="nav-deliver nav-hover-border">
        <MapPin size={14} style={{ color: '#ccc', marginBottom: 2 }} />
        <div>
          <div className="nav-deliver-line1">Delivering to</div>
          <div className="nav-deliver-line2">Bengaluru 562130</div>
        </div>
      </div>
      <div className="search-bar">
        <div className="search-cat">All <ChevronDown size={14} /></div>
        <input type="text" placeholder="Search Amazon.in" className="search-input" />
        <button className="search-btn"><Search size={20} /></button>
      </div>
      <div className="nav-right">
        <div className="nav-item nav-hover-border">
          <Globe size={16} style={{ color: 'white' }} />
          <span className="nav-item-bold">EN</span>
          <ChevronDown size={12} style={{ color: 'white' }} />
        </div>
        <div className="nav-item-col nav-hover-border">
          <span className="nav-item-small">Hello, sign in</span>
          <span className="nav-item-bold">Account &amp; Lists ▾</span>
        </div>
        <div className="nav-item-col nav-hover-border">
          <span className="nav-item-small">Returns</span>
          <span className="nav-item-bold">&amp; Orders</span>
        </div>
        <div className="nav-item nav-hover-border cart-item">
          <div className="cart-icon-wrap">
            <ShoppingCart size={28} style={{ color: 'white' }} />
            <span className="cart-badge">0</span>
          </div>
          <span className="nav-item-bold">Cart</span>
        </div>
      </div>
    </nav>
  )
}

// ── SecondaryNav ──────────────────────────────────────────────────────────────
function SecondaryNav() {
  return (
    <div className="secondary-nav">
      <div className="sec-nav-all sec-nav-item"><Menu size={17} /> All</div>
      {NAV_LINKS.map((l, i) => (
        <div key={i} className="sec-nav-item">
          {l}{(l === 'Fresh' || l === 'Prime') && <ChevronDown size={11} />}
        </div>
      ))}
    </div>
  )
}

// ── PromoBanner ───────────────────────────────────────────────────────────────
function PromoBanner() {
  return (
    <div className="promo-banner">
      <div className="promo-header">
        <h2 className="promo-title">Up to 40% Off | Stylish furniture at great prices</h2>
        <a className="card-link">See all offers</a>
      </div>
      <div className="promo-scroll">
        {PROMO.map((item, i) => (
          <div key={i} className="promo-item">
            <div className="promo-img" style={{ backgroundColor: item.bg }}>
              <img src={item.imgUrl} alt={item.label} />
            </div>
            <p className="promo-item-label">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-backtop">Back to top</div>
      <div className="footer-cols">
        {[
          { title: "Get to Know Us",        links: ["Careers", "Blog", "About Amazon", "Investor Relations"] },
          { title: "Make Money with Us",    links: ["Sell on Amazon", "Amazon Global Selling", "Become an Affiliate"] },
          { title: "Let Us Help You",       links: ["Your Account", "Your Orders", "Shipping Rates & Policies"] },
          { title: "Connect with Us",       links: ["Facebook", "Twitter", "Instagram"] },
        ].map((col, i) => (
          <div key={i} className="footer-col">
            <h4>{col.title}</h4>
            <ul>{col.links.map((l, j) => <li key={j}>{l}</li>)}</ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span className="logo-text" style={{ fontSize: 20 }}>amazon</span><span className="logo-in">.in</span>
        <p>© 1996–2024, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="app-root">
      <TopNav />
      <SecondaryNav />
      <HeroBanner />
      <main className="main-content">
        <div className="cards-grid">
          {CARDS.map((c, i) => <ProductCard key={i} {...c} />)}
        </div>
        <PromoBanner />
      </main>
      <Footer />
    </div>
  )
}
