"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Globe2, Mail, Menu, Phone, X } from "lucide-react";
import { contact, products } from "@/data/site";
import { buttonClassName } from "@/components/ui/button";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="topline">
          <span>Global Indian sourcing for premium buyers</span>
          <a href={`mailto:${contact.email}`}><Mail size={14} /> {contact.email}</a>
        </div>
        <div className="nav-shell">
          <Link href="/" className="brand" aria-label="Zorine Exports home">
            <span className="brand-mark">ZE</span>
            <span><strong>Zorine Exports</strong><small>Global Export House</small></span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <Link href="/about">About</Link>
            <div className="product-menu">
              <button type="button">Products</button>
              <div className="mega-menu">
                {products.map((product) => (
                  <Link href={product.href} key={product.slug}>
                    <Image src={product.image} alt="" width={72} height={72} />
                    <span><strong>{product.title}</strong><small>{product.eyebrow}</small></span>
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/#process">Process</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} className="phone-link"><Phone size={16} /> {contact.phone}</a>
          <Link href="/contact" className={buttonClassName({ variant: "primary", size: "sm", className: "hidden lg:inline-flex" })}>Request Quote <ArrowUpRight size={16} /></Link>
          <button
            className="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="drawer-inner">
              <div className="drawer-top">
                <Link href="/" className="brand">
                  <span className="brand-mark">ZE</span>
                  <span><strong>Zorine Exports</strong></span>
                </Link>
                <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="drawer-close">
                  <X size={22} />
                </button>
              </div>

              <nav className="drawer-nav">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <div className="drawer-products">
                  <span className="drawer-label">Products</span>
                  {products.map((p) => (
                    <Link key={p.slug} href={p.href} className="drawer-product-link">
                      <Image src={p.image} alt="" width={40} height={40} className="drawer-thumb" />
                      {p.title}
                    </Link>
                  ))}
                </div>
                <Link href="/#process">Process</Link>
                <Link href="/insights">Insights</Link>
                <Link href="/contact">Contact</Link>
              </nav>

              <div className="drawer-footer">
                <a href={`mailto:${contact.email}`}><Mail size={15} /> {contact.email}</a>
                <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}><Phone size={15} /> {contact.phone}</a>
                <Link href="/contact" className={buttonClassName({ variant: "primary", size: "lg", className: "w-full mt-4" })}>
                  Request Quote <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-marquee" aria-hidden="true">
        <span className="marquee-track">
          {["Spices", "Fresh Produce", "Honey", "Millets", "Handicrafts", "Dry Fruits", "Nuts", "Herbs", "Global Trade"].map((t) => (
            <span key={t}>{t} &nbsp;·&nbsp;</span>
          ))}
          {["Spices", "Fresh Produce", "Honey", "Millets", "Handicrafts", "Dry Fruits", "Nuts", "Herbs", "Global Trade"].map((t) => (
            <span key={`${t}-2`}>{t} &nbsp;·&nbsp;</span>
          ))}
        </span>
      </div>
      <div className="footer-grid">
        <div className="footer-lead">
          <Link href="/" className="brand brand-light">
            <span className="brand-mark">ZE</span>
            <span><strong>Zorine Exports</strong><small>Premium Export House</small></span>
          </Link>
          <p>Indian agricultural products, natural foods, and handcrafted goods presented with the poise of a global enterprise brand.</p>
        </div>
        <div>
          <h3>Products</h3>
          {products.slice(0, 6).map((item) => <Link key={item.slug} href={item.href}>{item.title}</Link>)}
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/about">About</Link>
          <Link href="/#process">Export Process</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h3>Trade Desk</h3>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}>{contact.phone}</a>
          <p>{contact.address}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Zorine Exports</span>
        <span><Globe2 size={14} /> Built for global buyers</span>
      </div>
    </footer>
  );
}
