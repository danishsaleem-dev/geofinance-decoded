import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import img from "@/assets/cat-freedom.jpg";

export const Route = createFileRoute("/freedom")({
  head: () => ({
    meta: [
      { title: "Freedom — Geofinanced" },
      {
        name: "description",
        content:
          "Second residencies, asset protection, jurisdictional arbitrage, and the architecture of personal sovereignty.",
      },
      { property: "og:title", content: "Freedom — Geofinanced" },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Freedom"
      title="Sovereignty is a portfolio. Diversify it."
      description="Citizenship, residency, banking, and the technical blueprint for protecting your time, capital, and autonomy across borders."
      heroImage={img}
      essays={[
        {
          title: "The Nomad Arbitrage: A 2026 Playbook",
          excerpt:
            "Where the math actually works: Dubai vs. Portugal vs. Panama vs. the new mid-tier hubs.",
          date: "May 24, 2026",
          readingTime: "16 min read",
        },
        {
          title: "Five Flags Revisited",
          excerpt:
            "The original sovereign individual framework, updated for an era of FATCA, CRS, and digital surveillance.",
          date: "May 10, 2026",
          readingTime: "12 min read",
        },
        {
          title: "Second Passports: What's Actually Worth It",
          excerpt:
            "A cost-adjusted analysis of citizenship-by-investment programs that still hold value.",
          date: "Apr 28, 2026",
          readingTime: "11 min read",
        },
        {
          title: "Privacy as a Luxury Good",
          excerpt:
            "Why operational security is becoming the new wealth signal — and how to start building it.",
          date: "Apr 16, 2026",
          readingTime: "9 min read",
        },
        {
          title: "Holding Companies, Trusts, and Foundations",
          excerpt:
            "A primer on structures for cross-border families and operators.",
          date: "Apr 04, 2026",
          readingTime: "13 min read",
        },
        {
          title: "The Quiet Exit from the West",
          excerpt:
            "Capital migration patterns of high-net-worth individuals, 2020–2026.",
          date: "Mar 22, 2026",
          readingTime: "10 min read",
        },
      ]}
    />
  ),
});
