import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck, Box, Globe2, Plane, ShieldCheck, Sparkles } from "lucide-react";
import { HeroAura } from "@/components/hero-aura";
import { HeroReveal, Reveal, RevealText } from "@/components/reveal";
import { CounterStrip } from "@/components/scroll-effects";
import { buttonClassName } from "@/components/ui/button";
import { insights, process, products } from "@/data/site";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

export function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <Reveal className="section-intro">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      <p>{text}</p>
    </Reveal>
  );
}

export function HomeHero() {
  return (
    <section className="hero-section">
      <HeroAura />
      <div className="hero-grid">
        <div className="hero-copy">
          <HeroReveal delay={0.05}>
            <Eyebrow>Premium Indian Export House</Eyebrow>
          </HeroReveal>
          <RevealText delay={0.12} className="hero-h1-wrap">
            <h1>Global sourcing for buyers who expect discipline, beauty, and reliability.</h1>
          </RevealText>
          <HeroReveal delay={0.32}>
            <p>Zorine Exports brings Indian agricultural products, natural foods, and artisan goods into a polished export experience: clean sourcing, refined packaging, and clear buyer communication.</p>
          </HeroReveal>
          <HeroReveal delay={0.44}>
            <div className="hero-actions">
              <Link className={buttonClassName({ variant: "primary", size: "lg" })} href="/contact">
                Start Export Inquiry <ArrowUpRight size={18} />
              </Link>
              <Link className={buttonClassName({ variant: "outline", size: "lg" })} href="#products">
                Explore Portfolio
              </Link>
            </div>
          </HeroReveal>
          <HeroReveal delay={0.54}>
            <div className="hero-proof">
              <span>APEDA-aware sourcing</span>
              <span>Spice Board mindset</span>
              <span>Global buyer ready</span>
            </div>
          </HeroReveal>
        </div>
        <HeroReveal delay={0.22} className="hero-visual">
          <div className="visual-card card-main">
            <Image src="/img/slideshow/home4-slideshow-1.jpg" alt="Premium Indian produce for export" fill priority sizes="(max-width: 900px) 100vw, 46vw" />
          </div>
          <div className="visual-card card-spice">
            <Image src="/img/product/indianspices/spices15.jpg" alt="Indian spices" fill sizes="240px" />
          </div>
          <div className="visual-card card-honey">
            <Image src="/img/product/honey/honey1.jpg" alt="Natural honey" fill sizes="260px" />
          </div>
          <div className="floating-cert"><BadgeCheck size={20} /><span>Export-ready categories</span></div>
        </HeroReveal>
      </div>
    </section>
  );
}

export function TrustStrip() {
  const items = ["Clean sourcing", "Export documentation", "Premium packaging", "International buyer support"];
  return (
    <section className="trust-strip">
      {items.map((item) => <span key={item}>{item}</span>)}
    </section>
  );
}

export function StatsStrip() {
  return (
    <section className="section stats-section">
      <CounterStrip />
    </section>
  );
}

export function ProductPortfolio() {
  return (
    <section className="section muted-section" id="products">
      <SectionIntro
        eyebrow="Product portfolio"
        title="Nine categories shaped into one premium sourcing language"
        text="A broad Indian supply range transformed into a clean, international buyer-friendly portfolio."
      />
      <div className="product-grid">
        {products.map((product, index) => (
          <Reveal key={product.slug} delay={index * 0.04} className="product-card">
            <Link href={product.href} className="product-image">
              <Image src={product.image} alt={product.title} fill sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="product-image-overlay">
                <span className="product-hover-cta">View Category <ArrowUpRight size={14} /></span>
              </div>
            </Link>
            <div className="product-copy">
              <span>{product.eyebrow}</span>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <small>{product.accent}</small>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function EditorialPromise() {
  return (
    <section className="section editorial-grid">
      <Reveal direction="left">
        <Eyebrow>Brand promise</Eyebrow>
        <h2>From Punjab to global procurement tables, presented with uncommon care.</h2>
      </Reveal>
      <Reveal delay={0.12} direction="right" className="editorial-copy">
        <p>The new Zorine experience sells confidence before a single email is sent. It removes shop-template clutter and replaces it with enterprise-grade clarity, tactile visuals, and inquiry-first flows.</p>
        <div className="mini-features">
          <span><ShieldCheck /> Quality posture</span>
          <span><Box /> Packing clarity</span>
          <span><Globe2 /> Global readiness</span>
        </div>
      </Reveal>
    </section>
  );
}

export function ExportProcess() {
  return (
    <section className="section" id="process">
      <SectionIntro
        eyebrow="Export process"
        title="A smoother path from inquiry to dispatch"
        text="Each step is designed to reduce uncertainty for importers, distributors, and sourcing teams."
      />
      <div className="process-grid">
        {process.map((item, index) => (
          <Reveal key={item.step} delay={index * 0.08} className="process-card">
            <span className="process-step">{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function LogisticsStory() {
  return (
    <section className="section logistics-section">
      <Reveal direction="left" className="trade-map">
        <span className="map-pin pin-one" />
        <span className="map-pin pin-two" />
        <span className="map-pin pin-three" />
        <div className="route route-one" />
        <div className="route route-two" />
        <p><Plane /> India connected to global trade lanes</p>
      </Reveal>
      <Reveal delay={0.14} direction="right" className="logistics-copy">
        <Eyebrow>International movement</Eyebrow>
        <h2>Packaging and dispatch thinking that respects distance.</h2>
        <p>Freshness, shelf life, documentation, and presentation are treated as part of the product, not afterthoughts.</p>
        <ul>
          <li>Buyer-specific packing discussions</li>
          <li>Bulk and retail-ready planning</li>
          <li>Export documentation coordination</li>
          <li>Responsive inquiry communication</li>
        </ul>
      </Reveal>
    </section>
  );
}

export function InsightPreview() {
  return (
    <section className="section muted-section">
      <SectionIntro
        eyebrow="Trade intelligence"
        title="Useful signals for serious buyers"
        text="Short, premium editorial pieces that reinforce category knowledge and sourcing confidence."
      />
      <div className="insight-grid">
        {insights.slice(0, 3).map((item, index) => (
          <Reveal key={item.title} delay={index * 0.09} className="insight-card">
            <Image src={item.image} alt="" fill sizes="33vw" />
            <div>
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <Link href={`/insights/${item.slug}`} className="insight-read-link">
                Read <ArrowUpRight size={14} />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="final-cta">
      <Reveal>
        <Sparkles size={32} className="cta-sparkle" />
        <Eyebrow>Procurement starts here</Eyebrow>
        <h2>Send your product list, target market, volume, and packaging expectations.</h2>
        <div className="cta-actions">
          <Link href="/contact" className={buttonClassName({ variant: "cream", size: "lg" })}>
            Start a Global Inquiry <ArrowUpRight size={18} />
          </Link>
          <Link href="/products" className={buttonClassName({ variant: "ghost", size: "lg", className: "text-[var(--cream-2)] hover:text-white" })}>
            Browse All Products
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
