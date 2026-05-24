import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const contentLinks = [
  { to: "/newsletter", label: "Newsletter Archive" },
  { to: "/geopolitics", label: "Geopolitics" },
  { to: "/investing", label: "Investing" },
  { to: "/money-and-macro", label: "Money & Macro" },
  { to: "/freedom", label: "Freedom" },
];

const resourceLinks = [
  { to: "/offshore-guide", label: "Offshore Guide" },
  { to: "/reading-list", label: "Reading List" },
  { to: "/reviews", label: "Reviews" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link
            to="/"
            className="font-serif text-xl font-medium tracking-tight text-foreground italic"
          >
            Geofinanced
          </Link>
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium">
            <DropdownGroup label="Content" links={contentLinks} />
            <DropdownGroup label="Resources" links={resourceLinks} />
            <Link
              to="/about"
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              About
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/newsletter"
            className="h-9 px-4 text-sm font-medium text-foreground ring-1 ring-border hover:bg-muted transition-colors inline-flex items-center"
          >
            Archive
          </Link>
          <Link
            to="/#subscribe"
            className="h-9 px-4 text-sm font-semibold bg-brand text-brand-foreground hover:brightness-110 transition-all inline-flex items-center"
          >
            Subscribe
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-surface">
          <div className="px-6 py-6 space-y-6">
            <MobileGroup label="Content" links={contentLinks} onNav={() => setOpen(false)} />
            <MobileGroup label="Resources" links={resourceLinks} onNav={() => setOpen(false)} />
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                Site
              </div>
              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-foreground"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-foreground"
              >
                Contact
              </Link>
            </div>
            <Link
              to="/#subscribe"
              onClick={() => setOpen(false)}
              className="block w-full text-center h-10 leading-10 bg-brand text-brand-foreground text-sm font-semibold"
            >
              Subscribe
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function DropdownGroup({
  label,
  links,
}: {
  label: string;
  links: { to: string; label: string }[];
}) {
  return (
    <div className="group relative">
      <button className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
        {label}
      </button>
      <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        <div className="min-w-56 bg-surface-elevated ring-1 ring-border py-2 shadow-2xl">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-brand transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileGroup({
  label,
  links,
  onNav,
}: {
  label: string;
  links: { to: string; label: string }[];
  onNav: () => void;
}) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
        {label}
      </div>
      {links.map((l) => (
        <Link
          key={l.to}
          to={l.to}
          onClick={onNav}
          className="block py-2 text-sm text-foreground"
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}
