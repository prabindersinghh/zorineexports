import {
  EditorialPromise,
  ExportProcess,
  FinalCta,
  HomeHero,
  InsightPreview,
  LogisticsStory,
  ProductPortfolio,
  StatsStrip,
  TrustStrip,
} from "@/components/sections/home-sections";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStrip />
      <StatsStrip />
      <EditorialPromise />
      <ProductPortfolio />
      <ExportProcess />
      <LogisticsStory />
      <InsightPreview />
      <FinalCta />
    </>
  );
}
