import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { NewsletterForm } from "@/components/site/NewsletterForm";
import heroImg from "@/assets/featured-eurodollar.jpg";
import hardAssetsImg from "@/assets/hard-assets.jpg";
import geoImg from "@/assets/cat-geopolitics.jpg";
import investImg from "@/assets/cat-investing.jpg";
import freedomImg from "@/assets/cat-freedom.jpg";
import macroImg from "@/assets/cat-macro.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Geofinanced — Intelligence for the Borderless Investor" },
      {
        name: "description",
        content:
          "Independent weekly analysis on geopolitics, investing, money & macro, and personal freedom. Join the dispatch.",
      },
      { property: "og:title", content: "Geofinanced — Intelligence for the Borderless Investor" },
      {
        property: "og:description",
        content:
          "Independent weekly analysis on geopolitics, investing, money & macro, and personal freedom.",
      },
    ],
  }),
  component: Index,
});

const briefings = [
  {
    cat: "Geopolitics",
    href: "/geopolitics",
    title: "The New Silk Road 2.0",
  },
  {
    cat: "Investing",
    href: "/investing",
    title: "Yield in Chaos",
  },
  {
    cat: "Macro",
    href: "/money-and-macro",
    title: "CBDC Adoption Curves",
  },
  {
    cat: "Freedom",
    href: "/freedom",
    title: "The Nomad Arbitrage",
  },
];

const secondary = [
  {
    href: "/investing",
    title: "Jurisdictional Competition: Why Small Nations Win",
    excerpt: "A comparative study of El Salvador, UAE, and Singapore as venture states.",
  },
  {
    href: "/money-and-macro",
    title: "The End of the Petrodollar? Separating Signal from Noise",
    excerpt: "Analyzing the real impact of BRICS+ expansion on trade settlement.",
  },
];

const resources = [
  {
    tag: "Guide",
    title: "2026 Offshore Banking Guide",
    excerpt:
      "Curated list of the safest jurisdictions for capital preservation and banking privacy.",
    href: "/offshore-guide",
  },
  {
    tag: "Reading List",
    title: "The Geo-Macro Syllabus",
    excerpt:
      "Twelve books that will fundamentally change how you view history, power, and wealth.",
    href: "/reading-list",
  },
  {
    tag: "Reviews",
    title: "Cold Storage & Custody Reviews",
    excerpt:
      "Hard-tested security hardware and custody solutions for multi-generational wealth.",
    href: "/reviews",
  },
];

const cats = [
  { img: geoImg, label: "Geopolitics", href: "/geopolitics" },
  { img: investImg, label: "Investing", href: "/investing" },
  { img: macroImg, label: "Money & Macro", href: "/money-and-macro" },
  { img: freedomImg, label: "Freedom", href: "/freedom" },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-20 pb-24" id="subscribe">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-[40ch]">
            <span className="text-brand text-[10px] font-bold tracking-[0.2em] uppercase mb-6 block">
              Dispatch &middot; Weekly Briefing
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-[0.95] text-balance font-medium mb-8">
              Navigating the <span className="italic text-brand">fractured</span> global capital
              stack.
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground mb-10 text-pretty">
              Deep-dive analysis on the intersection of sovereign risk, hard assets, and the
              pursuit of individual sovereignty in an era of de-globalization.
            </p>
            <NewsletterForm source="hero" />
            <p className="mt-4 text-xs text-muted-foreground">
              Free. No spam. Unsubscribe in one click.
            </p>
          </div>
        </div>
      </section>

      {/* Briefings strip */}
      <section className="py-10 border-y border-border bg-surface-elevated/40">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {briefings.map((b) => (
            <Link key={b.title} to={b.href} className="group cursor-pointer">
              <span className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                {b.cat}
              </span>
              <h3 className="text-foreground font-medium group-hover:text-brand transition-colors">
                {b.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Essay */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-serif text-3xl text-foreground font-medium">Recent Essays</h2>
            <Link
              to="/newsletter"
              className="text-sm text-muted-foreground hover:text-brand transition-colors border-b border-border pb-0.5"
            >
              View Archive
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8 flex flex-col gap-6">
              <img
                src={heroImg}
                alt="Featured essay illustration"
                width={1280}
                height={704}
                className="w-full aspect-[21/9] object-cover bg-muted"
              />
              <div className="max-w-[52ch]">
                <span className="text-brand text-xs font-semibold tracking-wider uppercase mb-2 block">
                  Featured Analysis
                </span>
                <h3 className="text-3xl font-serif text-foreground mb-4 leading-tight text-balance font-medium hover:text-muted-foreground transition-colors cursor-pointer">
                  Why the Eurodollar System is the Ultimate Frontier of Modern Sovereignty
                </h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  Understanding the hidden plumbing of global finance reveals why traditional
                  borders are becoming obsolete for the liquid elite — and what that means for
                  the next generation of investors.
                </p>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-10">
              <div className="group cursor-pointer">
                <img
                  src={hardAssetsImg}
                  alt="Hard assets"
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full aspect-video object-cover bg-muted mb-4"
                />
                <h4 className="text-lg font-serif text-foreground group-hover:text-brand transition-colors leading-tight font-medium">
                  The Return of Hard Assets in a Soft-Power World
                </h4>
              </div>
              {secondary.map((s) => (
                <Link
                  key={s.title}
                  to={s.href}
                  className="group cursor-pointer border-t border-border pt-6"
                >
                  <h4 className="text-lg font-serif text-foreground group-hover:text-brand transition-colors leading-tight font-medium">
                    {s.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">{s.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 py-20 border-t border-border bg-surface-elevated/40">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-3xl text-foreground font-medium mb-10">
            Explore by category
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {cats.map((c) => (
              <Link
                key={c.label}
                to={c.href}
                className="group block bg-surface ring-1 ring-border hover:ring-brand/40 transition-all overflow-hidden"
              >
                <img
                  src={c.img}
                  alt={c.label}
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-5 flex items-center justify-between">
                  <span className="font-serif text-lg text-foreground group-hover:text-brand transition-colors">
                    {c.label}
                  </span>
                  <ArrowRight className="size-4 text-muted-foreground group-hover:text-brand transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="px-6 py-24 border-t border-border">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-serif text-3xl text-foreground font-medium">
              Resources for the Sovereign
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((r) => (
              <Link
                key={r.title}
                to={r.href}
                className="p-8 ring-1 ring-border bg-surface group hover:ring-brand/40 transition-all"
              >
                <span className="text-brand text-[10px] font-bold tracking-widest uppercase">
                  {r.tag}
                </span>
                <h4 className="text-xl font-serif text-foreground mt-2 mb-4 font-medium">
                  {r.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {r.excerpt}
                </p>
                <span className="text-xs font-semibold text-foreground inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  Read more <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24 border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-brand text-[10px] font-bold tracking-widest uppercase mb-4 block">
            Join 42,000+ readers
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-medium mb-6 leading-tight text-balance">
            Get the briefing that institutional desks read on Sunday.
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            One email per week. Sharp, independent analysis on capital flows, geopolitical risk,
            and the architecture of personal freedom.
          </p>
          <div className="flex justify-center">
            <NewsletterForm source="footer-cta" />
          </div>
        </div>
      </section>
    </>
  );
}
