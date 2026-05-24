import { useState } from "react";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const schema = z.object({
  email: z.string().trim().email("Enter a valid email").max(255),
});

export function NewsletterForm({
  source = "homepage",
  variant = "inline",
}: {
  source?: string;
  variant?: "inline" | "stacked";
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ email });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: parsed.data.email.toLowerCase(), source });
    setLoading(false);

    if (error) {
      if (error.code === "23505") {
        toast.success("You're already on the list.");
        setDone(true);
        return;
      }
      toast.error("Could not subscribe. Please try again.");
      return;
    }
    toast.success("Subscribed. Welcome to the briefing.");
    setDone(true);
    setEmail("");
  };

  if (done) {
    return (
      <div className="flex items-center gap-3 text-sm text-brand">
        <CheckCircle2 size={18} />
        <span>You're in. Check your inbox for confirmation.</span>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={
        variant === "inline"
          ? "flex flex-col sm:flex-row gap-3 max-w-md"
          : "flex flex-col gap-3 max-w-md"
      }
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="h-11 px-4 bg-surface-elevated border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-brand/50 focus:border-brand/50 flex-grow text-sm"
      />
      <button
        type="submit"
        disabled={loading}
        className="h-11 px-5 inline-flex items-center justify-center gap-2 bg-brand text-brand-foreground font-semibold text-sm ring-1 ring-brand hover:brightness-110 transition-all disabled:opacity-60"
      >
        <Send className="size-4 shrink-0" />
        {loading ? "Submitting..." : "Join the Briefing"}
      </button>
    </form>
  );
}
