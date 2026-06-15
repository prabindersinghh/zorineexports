import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { FinalCta } from "@/components/sections/home-sections";
import { buttonClassName } from "@/components/ui/button";
import { insights } from "@/data/site";

export function generateStaticParams() {
  return insights.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) return {};
  return { title: insight.title, description: insight.summary };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) notFound();

  const related = insights.filter((i) => i.slug !== insight.slug).slice(0, 2);

  return (
    <>
      <article>
        <section className="insight-hero">
          <Reveal className="insight-hero-inner">
            <Link href="/insights" className="back-link">
              <ArrowLeft size={16} /> All insights
            </Link>
            <span className="eyebrow">{insight.tag}</span>
            <h1>{insight.title}</h1>
            <p className="insight-summary">{insight.summary}</p>
          </Reveal>
          <Reveal delay={0.12} className="insight-hero-image">
            <Image src={insight.image} alt={insight.title} fill priority sizes="(max-width: 900px) 100vw, 60vw" />
          </Reveal>
        </section>

        <section className="section insight-body-section">
          <div className="insight-body">
            {insight.body.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
            <Reveal delay={0.3} className="insight-cta-inline">
              <Link href="/contact" className={buttonClassName({ variant: "primary", size: "lg" })}>
                Discuss Sourcing <ArrowUpRight size={18} />
              </Link>
            </Reveal>
          </div>
        </section>
      </article>

      {related.length > 0 && (
        <section className="section muted-section">
          <div className="section-intro">
            <span className="eyebrow">Continue reading</span>
            <h2>More trade intelligence</h2>
          </div>
          <div className="insight-grid">
            {related.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.08} className="insight-card">
                <Image src={item.image} alt="" fill sizes="50vw" />
                <div>
                  <span>{item.tag}</span>
                  <h3>{item.title}</h3>
                  <Link href={`/insights/${item.slug}`} className="insight-read-link">
                    Read insight <ArrowUpRight size={14} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <FinalCta />
    </>
  );
}
