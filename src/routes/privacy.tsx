import { createFileRoute } from "@tanstack/react-router";
import { Prose } from "@/components/site/Prose";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Geofinanced" },
      { name: "description", content: "How Geofinanced collects, uses, and protects your data." },
      { property: "og:title", content: "Privacy Policy — Geofinanced" },
    ],
  }),
  component: () => (
    <Prose eyebrow="Legal" title="Privacy Policy" lead="Last updated: May 2026">
      <h2 className="font-serif text-2xl text-foreground font-medium pt-2">What we collect</h2>
      <p>
        We collect the email address you provide when subscribing to our newsletter, and
        standard server logs (IP address, user agent) for security and abuse prevention.
      </p>
      <h2 className="font-serif text-2xl text-foreground font-medium pt-4">How we use it</h2>
      <p>
        Your email is used solely to deliver the Geofinanced newsletter. We do not sell or
        rent subscriber data to third parties.
      </p>
      <h2 className="font-serif text-2xl text-foreground font-medium pt-4">Your rights</h2>
      <p>
        You can unsubscribe at any time using the link at the bottom of every email. You may
        request access to or deletion of your data by contacting hello@geofinanced.com.
      </p>
      <h2 className="font-serif text-2xl text-foreground font-medium pt-4">Cookies & analytics</h2>
      <p>
        We use minimal, privacy-respecting analytics to understand which content readers
        engage with. We do not use third-party advertising trackers.
      </p>
    </Prose>
  ),
});
