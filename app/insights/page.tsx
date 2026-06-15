import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { FinalCta, SectionIntro } from "@/components/sections/home-sections";
import { insights } from "@/data/site";

export const metadata = {
  title: "Insights",
  description: "Export insights from Zorine Exports for global food and sourcing buyers.",
};

export default function InsightsPage() {
  const [featured, ...rest] = insights;

  return (
    <>
      <section className="page-hero single-column">
        <Reveal>
          <span className="eyebrow">Trade intelligence</span>
          <h1>Short-form insight for buyers who want clarity before inquiry.</h1>
          <p>Editorial content shaped around sourcing confidence, export packaging, and premium Indian product categories.</p>
        </Reveal>
      </section>

      <section className="section muted-section">
        <Reveal className="insight-featured">
          <Link href={`/insights/${featured.slug}`} className="insight-featured-image">
            <Image src={featured.image} alt={featured.title} fill sizes="(max-width: 900px) 100vw, 55vw" />
          </Link>
          <div className="insight-featured-copy">
            <span className="eyebrow">{featured.tag}</span>
            <h2>{featured.title}</h2>
            <p>{featured.summary}</p>
            <Link href={`/insights/${featured.slug}`} className="insight-read-more">
              Read insight <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <SectionIntro
          eyebrow="All insights"
          title="Signals for serious procurement teams"
          text="Concise buyer-facing narratives that strengthen export confidence and sourcing decisions."
        />
        <div className="insight-grid large">
          {rest.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.08} className="insight-card">
              <Image src={item.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" />
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

      <FinalCta />
    </>
  );
}
