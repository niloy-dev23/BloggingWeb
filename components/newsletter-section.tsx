import { NewsletterForm } from "./newsletter-form";

export function NewsletterSection() {
  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="border-t border-line bg-forest text-paper"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <p className="eyebrow text-paper/55">The Meridian Letter</p>
          <h2
            id="newsletter-heading"
            className="mt-4 max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.015em] text-balance sm:text-5xl"
          >
            One good essay, every other Sunday.
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-paper/65 sm:text-base">
            A short letter with the best thing we read, one idea worth keeping,
            and a note from the editor. No links roundups. No growth hacks.
          </p>
        </div>
        <div>
          <NewsletterForm tone="dark" />
          <p className="mt-5 text-[10px] uppercase tracking-[0.16em] text-paper/40">
            Read by designers, engineers, and thoughtful builders in 40 countries.
          </p>
        </div>
      </div>
    </section>
  );
}
