import { createFileRoute } from "@tanstack/react-router";
import { Prose } from "@/components/site/Prose";

export const Route = createFileRoute("/advertise")({
  head: () => ({
    meta: [
      { title: "Advertise — Geofinanced" },
      {
        name: "description",
        content:
          "Reach a global audience of investors, founders, and operators through the Geofinanced newsletter.",
      },
      { property: "og:title", content: "Advertise — Geofinanced" },
    ],
  }),
  component: () => (
    <Prose
      eyebrow="Partnerships"
      title="Advertise in the dispatch."
      lead="Reach an engaged audience of investors, founders, and globally-minded operators. Single sponsor per issue."
    >
      <h2 className="font-serif text-2xl text-foreground font-medium pt-2">Audience</h2>
      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
        <li>42,000+ verified subscribers, weekly open rate ~52%</li>
        <li>72% based outside their country of citizenship</li>
        <li>Median household income six figures USD or above</li>
        <li>Concentrated in financial services, tech, and operating businesses</li>
      </ul>
      <h2 className="font-serif text-2xl text-foreground font-medium pt-6">Formats</h2>
      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
        <li>Primary sponsor slot (one per issue) — 80-word native placement</li>
        <li>Quarterly sponsorship packages with category exclusivity</li>
        <li>Custom research collaborations and sponsored deep-dives</li>
      </ul>
      <h2 className="font-serif text-2xl text-foreground font-medium pt-6">Standards</h2>
      <p>
        We accept a limited number of sponsors. All placements are reviewed by editorial.
        Categories we don't accept: gambling, high-leverage retail products, anything we
        wouldn't recommend to a family member.
      </p>
      <p className="pt-4">
        For rates and availability:{" "}
        <a href="mailto:partners@geofinanced.com" className="text-brand underline">
          partners@geofinanced.com
        </a>
      </p>
    </Prose>
  ),
});
