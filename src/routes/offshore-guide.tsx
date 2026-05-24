import { createFileRoute } from "@tanstack/react-router";
import { Prose } from "@/components/site/Prose";

export const Route = createFileRoute("/offshore-guide")({
  head: () => ({
    meta: [
      { title: "Offshore Guide — Geofinanced" },
      {
        name: "description",
        content:
          "A practical blueprint for cross-border banking, asset protection, and jurisdictional structure.",
      },
      { property: "og:title", content: "Offshore Guide — Geofinanced" },
    ],
  }),
  component: () => (
    <Prose
      eyebrow="Guide"
      title="The 2026 Offshore Guide"
      lead="A working blueprint for building a multi-jurisdictional financial life — without the marketing copy from the citizenship-by-investment industry."
    >
      <p>
        Most offshore content online is either fear-mongering or selling something. This guide
        is neither. It's an evolving document that maps the actual mechanics of cross-border
        banking, second residencies, and asset structuring as they exist today — under FATCA,
        CRS, and the modern compliance regime.
      </p>
      <h2 className="font-serif text-2xl text-foreground font-medium pt-6">What's inside</h2>
      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
        <li>Jurisdiction comparison: Dubai, Singapore, Panama, Portugal, Georgia, Paraguay</li>
        <li>Bank account strategies that actually work for non-residents in 2026</li>
        <li>Holding company structures: LLC vs. IBC vs. foundation</li>
        <li>Citizenship-by-investment programs ranked by real-world ROI</li>
        <li>Tax residency rules, day-counting, and the "nowhere man" myth</li>
        <li>Operational security for the cross-border individual</li>
      </ul>
      <h2 className="font-serif text-2xl text-foreground font-medium pt-6">Get the guide</h2>
      <p>
        The full guide is delivered to newsletter subscribers as a downloadable PDF, updated
        quarterly. Subscribe on the homepage to receive the current edition.
      </p>
      <p className="text-sm text-muted-foreground italic pt-4 border-t border-border">
        This guide is educational. Nothing here is legal, tax, or financial advice. Consult
        qualified professionals in the relevant jurisdictions before acting.
      </p>
    </Prose>
  ),
});
