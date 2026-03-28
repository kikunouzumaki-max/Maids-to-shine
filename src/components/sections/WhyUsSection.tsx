import { Container } from '@/components/ui/Container';

const USPS = [
  {
    icon: '⏰',
    headline: 'Always on time. Every time.',
    body: "You book, we show up. Our maids are professionals who treat punctuality as non-negotiable — because your schedule matters.",
  },
  {
    icon: '🤝',
    headline: 'A maid who knows your home.',
    body: "We don't send strangers. We build relationships. Customers like Zoe ask for Emily by name — because familiarity is part of the service.",
  },
  {
    icon: '📍',
    headline: 'Sharjah & Ajman specialists.',
    body: "We serve the homes that Dubai-centric platforms ignore. If you live here, we're already your neighbours.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-pearl-900 dark:text-dark-text max-w-xl mx-auto">
            What Makes Us Different Is How We Make You Feel
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {USPS.map((usp) => (
            <div
              key={usp.headline}
              className="relative bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border rounded-xl p-8 text-center group hover:shadow-md transition-shadow duration-[220ms]"
            >
              <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-teal-50 dark:bg-teal-900/20 text-3xl mb-5">
                {usp.icon}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-pearl-900 dark:text-dark-text mb-3">
                {usp.headline}
              </h3>
              <p className="text-pearl-600 dark:text-dark-muted leading-relaxed text-[0.95rem]">
                {usp.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
