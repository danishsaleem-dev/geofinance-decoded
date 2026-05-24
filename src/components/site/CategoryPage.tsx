import { NewsletterForm } from "./NewsletterForm";

export interface Essay {
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  image?: string;
}

interface Props {
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;
  essays: Essay[];
}

export function CategoryPage({ eyebrow, title, description, heroImage, essays }: Props) {
  const [featured, ...rest] = essays;
  return (
    <>
      <section className="px-6 pt-20 pb-12 border-b border-border">
        <div className="mx-auto max-w-7xl">
          <span className="text-brand text-xs font-semibold tracking-widest uppercase mb-4 block">
            {eyebrow}
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-foreground font-medium leading-[1.05] text-balance mb-6 max-w-3xl">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      {featured && (
        <section className="px-6 py-16">
          <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <img
                src={heroImage}
                alt={featured.title}
                width={1280}
                height={704}
                className="w-full aspect-[16/10] object-cover bg-muted"
              />
            </div>
            <div className="md:col-span-5 flex flex-col justify-center">
              <span className="text-brand text-[10px] font-bold tracking-widest uppercase mb-3">
                Featured Analysis
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-medium leading-tight mb-4 text-balance">
                {featured.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {featured.date} &middot; {featured.readingTime}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="px-6 py-16 border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl">
          <h3 className="font-serif text-2xl text-foreground font-medium mb-10">
            More from {eyebrow}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {rest.map((e) => (
              <article key={e.title} className="group cursor-pointer">
                <h4 className="font-serif text-xl text-foreground font-medium leading-tight mb-3 group-hover:text-brand transition-colors text-balance">
                  {e.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {e.excerpt}
                </p>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {e.date} &middot; {e.readingTime}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 border-t border-border">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="font-serif text-3xl text-foreground font-medium mb-4">
            Get the weekly dispatch
          </h3>
          <p className="text-muted-foreground mb-8">
            Sharp, independent analysis on capital, power, and freedom — delivered every Sunday.
          </p>
          <div className="flex justify-center">
            <NewsletterForm source={eyebrow.toLowerCase()} />
          </div>
        </div>
      </section>
    </>
  );
}
