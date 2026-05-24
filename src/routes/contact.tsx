import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Prose } from "@/components/site/Prose";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Geofinanced" },
      { name: "description", content: "Get in touch with the Geofinanced team." },
      { property: "og:title", content: "Contact — Geofinanced" },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(10).max(2000),
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    // Open mail client as a no-backend fallback for now
    const subject = encodeURIComponent(`[Geofinanced] ${parsed.data.name}`);
    const body = encodeURIComponent(
      `From: ${parsed.data.name} <${parsed.data.email}>\n\n${parsed.data.message}`,
    );
    window.location.href = `mailto:hello@geofinanced.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setLoading(false);
      toast.success("Opening your email client...");
    }, 400);
  };

  return (
    <Prose
      eyebrow="Contact"
      title="Get in touch."
      lead="Tips, corrections, partnership inquiries, press. Replies typically within 48 hours."
    >
      <form onSubmit={onSubmit} className="not-prose grid gap-4 max-w-xl">
        <div>
          <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
            Name
          </label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full h-11 px-4 bg-surface-elevated border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-brand/50"
            required
            maxLength={100}
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
            Email
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full h-11 px-4 bg-surface-elevated border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-brand/50"
            required
            maxLength={255}
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
            Message
          </label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={6}
            className="w-full px-4 py-3 bg-surface-elevated border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-brand/50 resize-y"
            required
            maxLength={2000}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="h-11 px-6 bg-brand text-brand-foreground font-semibold text-sm hover:brightness-110 transition-all disabled:opacity-60 inline-flex items-center justify-center"
        >
          {loading ? "Sending..." : "Send message"}
        </button>
      </form>
      <p className="text-sm text-muted-foreground pt-6">
        Or email us directly at{" "}
        <a href="mailto:hello@geofinanced.com" className="text-brand underline">
          hello@geofinanced.com
        </a>
        .
      </p>
    </Prose>
  );
}
