import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { FinalCta, SectionIntro } from "@/components/sections/home-sections";
import { buttonClassName } from "@/components/ui/button";
import { products } from "@/data/site";

export const metadata = {
  title: "Products",
  description: "Explore Zorine Exports' full portfolio of premium Indian export categories — spices, fresh produce, honey, millets, handicrafts, and more.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero single-column">
        <Reveal>
          <span className="eyebrow">Product portfolio</span>
          <h1>Nine categories. One premium sourcing language.</h1>
          <p>A broad Indian supply range presented in a clean, international buyer-friendly format. Every category is inquiry-ready, specification-clear, and built for professional procurement conversations.</p>
        </Reveal>
      </section>

      <section className="section muted-section">
        <SectionIntro
          eyebrow="Full range"
          title="Select a category to explore"
          text="Each portfolio section includes product range, specification notes, and a direct inquiry path."
        />
        <div className="products-index-grid">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.04} className="product-index-card">
              <Link href={product.href} className="product-index-image">
                <Image src={product.image} alt={product.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                <span className="product-index-tag">{product.eyebrow}</span>
              </Link>
              <div className="product-index-copy">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <div className="product-pills">
                  {product.products.slice(0, 4).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                  {product.products.length > 4 && <span>+{product.products.length - 4} more</span>}
                </div>
                <Link href={product.href} className={buttonClassName({ variant: "primary", size: "md" })}>
                  Explore Category <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
