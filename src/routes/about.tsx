import { createFileRoute, Link } from "@tanstack/react-router";
import { Prose } from "@/components/site/Prose";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Geofinanced" },
      {
        name: "description",
        content:
          "Geofinanced is independent analysis on capital, geopolitics, and freedom for a globally-minded readership.",
      },
      { property: "og:title", content: "About — Geofinanced" },
    ],
  }),
  component: () => (
    <Prose
      eyebrow="About"
      title="Independent intelligence for the borderless investor."
      lead="Geofinanced is a weekly publication at the intersection of capital, geopolitics, and personal sovereignty."
    >
      <p>
        Most financial media is either credentialed and captured, or independent and
        unserious. Geofinanced is the third option: rigorous, independent, and built for
        readers who think in decades.
      </p>
      <p>
        We cover the structural shifts that move markets before the news cycle catches up —
        sovereign risk, monetary plumbing, hard assets, jurisdictional arbitrage. The same
        frameworks institutional desks use, written for individuals who refuse to be
        spectators.
      </p>
      <h2 className="font-serif text-2xl text-foreground font-medium pt-6">Editorial principles</h2>
      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
        <li>Independence: no sponsored research, no paid placements disguised as analysis.</li>
        <li>Transparency: we disclose every conflict and every affiliate relationship.</li>
        <li>Rigor: claims are sourced. Models are shown. Errors are corrected publicly.</li>
        <li>Brevity: one essay a week. No filler.</li>
      </ul>
      <p className="pt-4">
        Have a tip, a correction, or a question? <Link to="/contact" className="text-brand underline">Get in touch</Link>.
      </p>
    </Prose>
  ),
});
