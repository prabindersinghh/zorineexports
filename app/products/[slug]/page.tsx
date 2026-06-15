import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { FinalCta, SectionIntro } from "@/components/sections/home-sections";
import { buttonClassName } from "@/components/ui/button";
import { products } from "@/data/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  return {
    title: product.title,
    description: `${product.title} export category from Zorine Exports. ${product.description}`,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <>
      <section className="page-hero product-page-hero">
        <Reveal>
          <span className="eyebrow">{product.eyebrow}</span>
          <h1>{product.title} for premium global buyers.</h1>
          <p>{product.description} Built for procurement teams that value consistency, packaging clarity, and calm communication.</p>
          <div className="hero-actions">
            <Link className={buttonClassName({ variant: "primary", size: "lg" })} href="/contact">Request Quote <ArrowUpRight size={18} /></Link>
            <Link className={buttonClassName({ variant: "outline", size: "lg" })} href="/products">All Categories</Link>
          </div>
        </Reveal>
        <Reveal delay={0.12} className="page-hero-image">
          <Image src={product.image} alt={product.title} fill priority sizes="(max-width: 900px) 100vw, 42vw" />
        </Reveal>
      </section>

      <section className="section product-detail-grid">
        <Reveal>
          <span className="eyebrow">Category profile</span>
          <h2>Sourced with discipline. Presented with confidence.</h2>
          <p>{product.specification}</p>
          <div className="mini-features">
            <span><CheckCircle2 /> Export packing conversations</span>
            <span><CheckCircle2 /> Buyer-specific requirements</span>
            <span><CheckCircle2 /> Documentation support mindset</span>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="spec-card">
          <h3>Available Range</h3>
          <div className="pill-cloud">
            {product.products.map((item) => <span key={item}>{item}</span>)}
          </div>
          <Link href="/contact" className={buttonClassName({ variant: "primary", size: "md", className: "w-full" })}>
            Start Inquiry
          </Link>
        </Reveal>
      </section>

      <section className="section muted-section">
        <SectionIntro
          eyebrow="Visual range"
          title={`${product.title} gallery`}
          text="A refined look at the category assets available for international buyer presentation."
        />
        <div className="gallery-grid">
          {product.gallery.map((image, index) => (
            <Reveal key={image} delay={index * 0.045} className="gallery-item">
              <Image src={image} alt={`${product.title} sample`} fill sizes="(max-width: 768px) 50vw, 25vw" />
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
