import { createFileRoute } from "@tanstack/react-router";
import { Prose } from "@/components/site/Prose";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Geofinanced" },
      {
        name: "description",
        content: "Editorial, financial, and affiliate disclosures for Geofinanced.",
      },
      { property: "og:title", content: "Disclaimer — Geofinanced" },
    ],
  }),
  component: () => (
    <Prose eyebrow="Legal" title="Disclaimer & Disclosures">
      <h2 className="font-serif text-2xl text-foreground font-medium">Not financial advice</h2>
      <p>
        All content on Geofinanced is published for educational and informational purposes
        only. It does not constitute investment, legal, tax, or accounting advice. You should
        consult a licensed professional in your jurisdiction before making decisions based on
        anything you read here.
      </p>
      <h2 className="font-serif text-2xl text-foreground font-medium pt-4">No warranty</h2>
      <p>
        We strive for accuracy but make no warranty as to completeness or timeliness of any
        content. Markets and regulations change. Verify everything independently.
      </p>
      <h2 className="font-serif text-2xl text-foreground font-medium pt-4">Affiliate disclosure</h2>
      <p>
        Geofinanced participates in affiliate programs for select financial, software, and
        publishing products. When you click certain links and complete a purchase, we may
        earn a commission at no additional cost to you. We only recommend products we have
        used and believe in. Affiliate relationships never influence our editorial conclusions
        — that's the entire business model.
      </p>
      <h2 className="font-serif text-2xl text-foreground font-medium pt-4">Forward-looking statements</h2>
      <p>
        Analysis on this site may contain forward-looking views. These are opinions, not
        guarantees. Past performance is not indicative of future results.
      </p>
    </Prose>
  ),
});
