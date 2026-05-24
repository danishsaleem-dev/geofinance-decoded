import { createFileRoute, Link } from "@tanstack/react-router";
import { NewsletterForm } from "@/components/site/NewsletterForm";

export const Route = createFileRoute("/newsletter")({
  head: () => ({
    meta: [
      { title: "Newsletter Archive — Geofinanced" },
      {
        name: "description",
        content:
          "Browse every Geofinanced dispatch. Independent weekly analysis on geopolitics, investing, money & macro, and freedom.",
      },
      { property: "og:title", content: "Newsletter Archive — Geofinanced" },
    ],
  }),
  component: NewsletterArchive,
});

const issues = [
  { n: 78, date: "May 24, 2026", title: "The Nomad Arbitrage: A 2026 Playbook", cat: "Freedom" },
  { n: 77, date: "May 22, 2026", title: "CBDC Adoption Curves: A Five-Year Map", cat: "Macro" },
  { n: 76, date: "May 20, 2026", title: "Yield in Chaos: Hedging Sovereign Debt Crises", cat: "Investing" },
  { n: 75, date: "May 18, 2026", title: "The New Silk Road 2.0", cat: "Geopolitics" },
  { n: 74, date: "May 10, 2026", title: "Five Flags Revisited", cat: "Freedom" },
  { n: 73, date: "May 08, 2026", title: "The Eurodollar System Explained", cat: "Macro" },
  { n: 72, date: "May 06, 2026", title: "The Return of Hard Assets in a Soft-Power World", cat: "Investing" },
  { n: 71, date: "May 04, 2026", title: "BRICS+ and the Settlement Revolution", cat: "Geopolitics" },
  { n: 70, date: "Apr 28, 2026", title: "Second Passports: What's Actually Worth It", cat: "Freedom" },
  { n: 69, date: "Apr 26, 2026", title: "Fiscal Dominance is Here", cat: "Macro" },
  { n: 68, date: "Apr 24, 2026", title: "Volatility is a Feature, Not a Bug", cat: "Investing" },
  { n: 67, date: "Apr 22, 2026", title: "Taiwan, TSMC, and the Silicon Choke Point", cat: "Geopolitics" },
];

const catHref: Record<string, string> = {
  Freedom: "/freedom",
  Macro: "/money-and-macro",
  Investing: "/investing",
  Geopolitics: "/geopolitics",
};

function NewsletterArchive() {
  return (
    <>
      <section className="px-6 pt-20 pb-12 border-b border-border">
        <div className="mx-auto max-w-7xl">
          <span className="text-brand text-xs font-semibold tracking-widest uppercase mb-4 block">
            Archive &middot; {issues.length}+ issues
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-foreground font-medium leading-[1.05] mb-6 max-w-3xl">
            Every dispatch. Searchable, free, forever.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
            The complete archive of Geofinanced briefings. Start with the most recent or dig
            into the back catalogue.
          </p>
          <NewsletterForm source="archive" />
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="divide-y divide-border">
            {issues.map((iss) => (
              <article
                key={iss.n}
                className="grid grid-cols-12 gap-4 py-6 group cursor-pointer items-baseline"
              >
                <div className="col-span-2 text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
                  #{String(iss.n).padStart(3, "0")}
                </div>
                <div className="col-span-7">
                  <h3 className="font-serif text-xl text-foreground group-hover:text-brand transition-colors font-medium">
                    {iss.title}
                  </h3>
                </div>
                <div className="col-span-3 text-right text-[10px] uppercase tracking-widest text-muted-foreground">
                  <Link to={catHref[iss.cat]} className="hover:text-brand">
                    {iss.cat}
                  </Link>
                  <div className="mt-1 text-muted-foreground/70">{iss.date}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
