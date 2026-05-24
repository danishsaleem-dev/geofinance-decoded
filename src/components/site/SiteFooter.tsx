import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="py-20 px-6 border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
            <span className="font-serif text-2xl text-foreground italic mb-4 block">
              Geofinanced
            </span>
            <p className="text-sm text-muted-foreground max-w-sm mb-6 leading-relaxed">
              Intelligence for the borderless investor. Context and frameworks for navigating
              the 21st century transition in capital, power, and personal sovereignty.
            </p>
            <div className="flex gap-2">
              {[
                { label: "X", href: "https://x.com" },
                { label: "LN", href: "https://linkedin.com" },
                { label: "YT", href: "https://youtube.com" },
                { label: "IG", href: "https://instagram.com" },
                { label: "RSS", href: "/rss.xml" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-9 bg-muted ring-1 ring-border grid place-items-center hover:bg-brand hover:text-brand-foreground hover:ring-brand transition-colors"
                  aria-label={s.label}
                >
                  <span className="text-[10px] font-bold">{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Content"
            links={[
              { to: "/newsletter", label: "Newsletter Archive" },
              { to: "/geopolitics", label: "Geopolitics" },
              { to: "/investing", label: "Investing" },
              { to: "/money-and-macro", label: "Money & Macro" },
              { to: "/freedom", label: "Freedom" },
            ]}
          />
          <FooterCol
            title="Resources"
            links={[
              { to: "/offshore-guide", label: "Offshore Guide" },
              { to: "/reading-list", label: "Reading List" },
              { to: "/reviews", label: "Reviews" },
            ]}
          />
          <FooterCol
            title="Site"
            links={[
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
              { to: "/advertise", label: "Advertise" },
              { to: "/privacy", label: "Privacy Policy" },
              { to: "/disclaimer", label: "Disclaimer" },
            ]}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-border gap-4">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Geofinanced. All rights reserved.
          </p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest italic">
            Truth. Capital. Freedom.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) {
  return (
    <div>
      <h5 className="text-xs font-bold text-foreground uppercase tracking-widest mb-5">
        {title}
      </h5>
      <ul className="space-y-3 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="hover:text-brand transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
