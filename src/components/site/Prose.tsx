import { ReactNode } from "react";

export function Prose({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children: ReactNode;
}) {
  return (
    <article className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <span className="text-brand text-xs font-semibold tracking-widest uppercase mb-4 block">
          {eyebrow}
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground font-medium leading-[1.1] text-balance mb-6">
          {title}
        </h1>
        {lead && (
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 border-l-2 border-brand pl-5">
            {lead}
          </p>
        )}
        <div className="prose-content space-y-6 text-foreground/85 leading-relaxed">
          {children}
        </div>
      </div>
    </article>
  );
}
