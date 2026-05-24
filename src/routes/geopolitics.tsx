import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import img from "@/assets/cat-geopolitics.jpg";

export const Route = createFileRoute("/geopolitics")({
  head: () => ({
    meta: [
      { title: "Geopolitics — Geofinanced" },
      {
        name: "description",
        content:
          "Analysis on global power shifts, supply chains, sovereign risk, and the fragmentation of the post-WWII order.",
      },
      { property: "og:title", content: "Geopolitics — Geofinanced" },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Geopolitics"
      title="The maps are being redrawn. Capital follows."
      description="From the South China Sea to the Sahel, the architecture of global power is fracturing. We track the strategic shifts that move markets before the news cycle catches up."
      heroImage={img}
      essays={[
        {
          title: "The New Silk Road 2.0: Arbitrage in Central Asia",
          excerpt:
            "As global supply chains fracture, a new corridor of wealth is emerging between the Black Sea and the Himalayas. The hidden trades few are watching.",
          date: "May 18, 2026",
          readingTime: "12 min read",
        },
        {
          title: "BRICS+ and the Settlement Revolution",
          excerpt:
            "Why dedollarization is real, slow, and structurally important — even when headline drama suggests otherwise.",
          date: "May 04, 2026",
          readingTime: "9 min read",
        },
        {
          title: "Taiwan, TSMC, and the Silicon Choke Point",
          excerpt:
            "The single most important supply chain risk in the global economy and how institutions are hedging it.",
          date: "Apr 22, 2026",
          readingTime: "11 min read",
        },
        {
          title: "Why Small Nations Win the 21st Century",
          excerpt:
            "Estonia, UAE, Singapore: jurisdictional competition is becoming the most underpriced asymmetric trade of the decade.",
          date: "Apr 10, 2026",
          readingTime: "8 min read",
        },
        {
          title: "The Energy War Nobody is Naming",
          excerpt:
            "Pipelines, sanctions, and the new architecture of energy power across Eurasia.",
          date: "Mar 28, 2026",
          readingTime: "10 min read",
        },
        {
          title: "Sovereign Wealth: The New Hegemons",
          excerpt:
            "How GIC, ADIA, and PIF are quietly reshaping global capital allocation — and what it means for retail.",
          date: "Mar 14, 2026",
          readingTime: "7 min read",
        },
      ]}
    />
  ),
});
