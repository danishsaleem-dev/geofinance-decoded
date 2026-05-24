import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import img from "@/assets/cat-investing.jpg";

export const Route = createFileRoute("/investing")({
  head: () => ({
    meta: [
      { title: "Investing — Geofinanced" },
      {
        name: "description",
        content:
          "Asymmetric returns, portfolio architecture, hard assets, and the trades that actually compound over decades.",
      },
      { property: "og:title", content: "Investing — Geofinanced" },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Investing"
      title="Asymmetric returns require asymmetric thinking."
      description="Position sizing, hard assets, sovereign-grade portfolios, and the underpriced ideas the consensus is still missing."
      heroImage={img}
      essays={[
        {
          title: "Yield in Chaos: Hedging Sovereign Debt Crises",
          excerpt:
            "How a barbell of treasuries, gold, and bitcoin survives a regime of fiscal dominance — with the math.",
          date: "May 20, 2026",
          readingTime: "14 min read",
        },
        {
          title: "The Return of Hard Assets in a Soft-Power World",
          excerpt:
            "Why commodities, real estate, and physical productive capacity are quietly outperforming.",
          date: "May 06, 2026",
          readingTime: "10 min read",
        },
        {
          title: "Volatility is a Feature, Not a Bug",
          excerpt:
            "An options framework for the new era of cross-asset dispersion.",
          date: "Apr 24, 2026",
          readingTime: "9 min read",
        },
        {
          title: "Private Credit: The Coming Reckoning",
          excerpt:
            "Inside the asset class everyone owns and nobody can mark to market.",
          date: "Apr 12, 2026",
          readingTime: "11 min read",
        },
        {
          title: "Frontier Markets, Reconsidered",
          excerpt:
            "Vietnam, Indonesia, Saudi Arabia — three frontier trades with institutional tailwinds.",
          date: "Mar 30, 2026",
          readingTime: "8 min read",
        },
        {
          title: "Why Bitcoin Belongs in Every Sovereign Portfolio",
          excerpt:
            "A measured, non-maximalist case for a 1–5% allocation as systemic insurance.",
          date: "Mar 18, 2026",
          readingTime: "12 min read",
        },
      ]}
    />
  ),
});
