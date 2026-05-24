import { createFileRoute } from "@tanstack/react-router";
import { Prose } from "@/components/site/Prose";

const books = [
  {
    title: "The Sovereign Individual",
    author: "James Dale Davidson & William Rees-Mogg",
    note: "The foundational text on the transition out of the nation-state era. Eerily prescient.",
  },
  {
    title: "Lords of Finance",
    author: "Liaquat Ahamed",
    note: "Central bankers, the 1920s, and how the gold standard broke. Required macro reading.",
  },
  {
    title: "The Power Law",
    author: "Sebastian Mallaby",
    note: "The history of venture capital — and why outliers matter more than averages.",
  },
  {
    title: "Capital in the Twenty-First Century",
    author: "Thomas Piketty",
    note: "You don't have to agree with the conclusions to benefit from the data.",
  },
  {
    title: "The Bitcoin Standard",
    author: "Saifedean Ammous",
    note: "A monetary-history case for hard money. Read alongside critics.",
  },
  {
    title: "Principles for Dealing with the Changing World Order",
    author: "Ray Dalio",
    note: "The empire cycle, debt cycles, and where we sit in 2026.",
  },
  {
    title: "Where Is My Flying Car?",
    author: "J. Storrs Hall",
    note: "Why technological stagnation is downstream of bad policy and weak capital.",
  },
  {
    title: "Skin in the Game",
    author: "Nassim Nicholas Taleb",
    note: "Asymmetry, optionality, and the only ethics that compound.",
  },
];

export const Route = createFileRoute("/reading-list")({
  head: () => ({
    meta: [
      { title: "Reading List — Geofinanced" },
      {
        name: "description",
        content:
          "Curated books on money, geopolitics, freedom, and capital. Updated quarterly.",
      },
      { property: "og:title", content: "Reading List — Geofinanced" },
    ],
  }),
  component: () => (
    <Prose
      eyebrow="Reading List"
      title="The Geo-Macro Syllabus"
      lead="The books that shaped the way we think — about money, power, and the long arc of history. Updated quarterly."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose pt-2">
        {books.map((b) => (
          <div key={b.title} className="p-6 ring-1 ring-border bg-surface">
            <h3 className="font-serif text-xl text-foreground font-medium leading-tight">
              {b.title}
            </h3>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
              {b.author}
            </p>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{b.note}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-muted-foreground italic pt-8 mt-8 border-t border-border">
        Some links on this site are affiliate links. We only recommend books we've actually
        read and use. See our affiliate disclosure on the Disclaimer page.
      </p>
    </Prose>
  ),
});
