import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import img from "@/assets/cat-macro.jpg";

export const Route = createFileRoute("/money-and-macro")({
  head: () => ({
    meta: [
      { title: "Money & Macro — Geofinanced" },
      {
        name: "description",
        content:
          "Liquidity, central banks, CBDCs, and the structural architecture of the global monetary system.",
      },
      { property: "og:title", content: "Money & Macro — Geofinanced" },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Money & Macro"
      title="The plumbing of the global monetary system."
      description="Liquidity cycles, central bank balance sheets, the shadow banking system, and how it all transmits to your portfolio."
      heroImage={img}
      essays={[
        {
          title: "CBDC Adoption Curves: A Five-Year Map",
          excerpt:
            "Which countries are deploying, which are stalling, and what programmable money means for capital controls.",
          date: "May 22, 2026",
          readingTime: "13 min read",
        },
        {
          title: "The Eurodollar System Explained",
          excerpt:
            "The largest, least-understood market in the world — and why it dictates global liquidity.",
          date: "May 08, 2026",
          readingTime: "15 min read",
        },
        {
          title: "Fiscal Dominance is Here",
          excerpt:
            "When the treasury captures the central bank: the inflation regime nobody priced.",
          date: "Apr 26, 2026",
          readingTime: "10 min read",
        },
        {
          title: "Why M2 Isn't the Money Supply You Think It Is",
          excerpt:
            "A primer on how money actually gets created in the modern financial system.",
          date: "Apr 14, 2026",
          readingTime: "9 min read",
        },
        {
          title: "Gold's Quiet Repricing",
          excerpt:
            "Central banks are accumulating at unprecedented rates. Here's why it matters.",
          date: "Apr 02, 2026",
          readingTime: "8 min read",
        },
        {
          title: "The Coming Repo Crisis",
          excerpt:
            "Reserve scarcity, basis trades, and the next shoe to drop in fixed income.",
          date: "Mar 20, 2026",
          readingTime: "11 min read",
        },
      ]}
    />
  ),
});
