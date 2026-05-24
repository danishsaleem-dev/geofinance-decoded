import { createFileRoute } from "@tanstack/react-router";
import { Prose } from "@/components/site/Prose";

const reviews = [
  {
    cat: "Custody",
    title: "Hardware Wallets, Tested",
    body: "Ledger, Trezor, Coldcard, Keystone — practical comparison across security model, UX, and recovery.",
  },
  {
    cat: "Broker",
    title: "Interactive Brokers vs. Saxo for International Investors",
    body: "Cross-border access, FX spreads, margin terms, and tax reporting compared.",
  },
  {
    cat: "Banking",
    title: "Multi-Currency Accounts in 2026",
    body: "Wise, Revolut, DBS, Standard Chartered — which actually function for cross-border life.",
  },
  {
    cat: "Privacy",
    title: "VPN, Email, and Comms Stack",
    body: "What we actually run for OPSEC, and what's marketing theatre.",
  },
];

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Geofinanced" },
      {
        name: "description",
        content:
          "Independent reviews of tools, brokers, custody solutions, and services for the cross-border investor.",
      },
      { property: "og:title", content: "Reviews — Geofinanced" },
    ],
  }),
  component: () => (
    <Prose
      eyebrow="Reviews"
      title="Tools we've actually used."
      lead="No spec-sheet summaries. Each review is based on real use — what we kept, what we returned, and why."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose pt-2">
        {reviews.map((r) => (
          <div key={r.title} className="p-6 ring-1 ring-border bg-surface">
            <span className="text-brand text-[10px] font-bold tracking-widest uppercase">
              {r.cat}
            </span>
            <h3 className="font-serif text-xl text-foreground font-medium mt-2">{r.title}</h3>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{r.body}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-muted-foreground italic pt-8 mt-8 border-t border-border">
        Some links in our reviews are affiliate links. We only recommend products we use and
        believe in. Commission never changes our editorial judgment. Full details on the
        Disclaimer page.
      </p>
    </Prose>
  ),
});
