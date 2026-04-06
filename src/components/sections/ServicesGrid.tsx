import Link from 'next/link';
import { Container } from '@/components/ui/Container';

const SERVICES = [
  {
    emoji: '🏠',
    name: 'Residential Cleaning',
    slug: 'residential-cleaning',
    desc: 'Regular maintenance for apartments & villas',
    price: 'From AED 25/hr',
  },
  {
    emoji: '✨',
    name: 'Deep Cleaning',
    slug: 'deep-cleaning',
    desc: 'Full top-to-bottom transformation',
    price: 'From AED 180',
  },
  {
    emoji: '🏗️',
    name: 'Post-Construction',
    slug: 'post-construction-cleaning',
    desc: 'Dust, debris, and move-in ready',
    price: 'From AED 250',
  },
  {
    emoji: '🏢',
    name: 'Commercial Cleaning',
    slug: 'commercial-cleaning',
    desc: 'Offices, retail, and clinics',
    price: 'From AED 30/hr',
  },
  {
    emoji: '👩‍🍳',
    name: 'Household Staff',
    slug: 'housemaids-nannies-cooks',
    desc: 'Maids, nannies & cooks — full support',
    price: 'From AED 35/hr',
  },
  {
    emoji: '📦',
    name: 'Move-In / Move-Out',
    slug: 'move-in-move-out-cleaning',
    desc: 'Deposit-friendly, landlord-approved',
    price: 'From AED 200',
  },
];

export function ServicesGrid() {
  return (
    <section className="py-16 sm:py-20 bg-pearl-50 dark:bg-dark-bg">
      <Container>
        <div className="text-center mb-12" data-reveal>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-pearl-900 dark:text-dark-text">
            Our Services
          </h2>
          <p className="mt-3 text-pearl-600 dark:text-dark-muted text-lg max-w-lg mx-auto">
            From quick freshens to full deep cleans — we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SERVICES.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              data-reveal
              style={{ transitionDelay: `${i * 0.07}s` }}
              className="group relative glass-card rounded-2xl p-6 overflow-hidden
                hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(15,158,130,0.18)]
                transition-all duration-[240ms]"
            >
              {/* Top gradient accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] brand-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-[360ms] origin-left rounded-t-2xl" />

              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl brand-gradient text-2xl mb-4 shadow-brand">
                {service.emoji}
              </div>

              <h3 className="font-semibold text-pearl-900 dark:text-dark-text text-base mb-1">
                {service.name}
              </h3>
              <p className="text-sm text-pearl-500 dark:text-dark-muted mb-4">
                {service.desc}
              </p>

              {/* Price badge */}
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-900/25 border border-teal-200 dark:border-teal-800/50 text-xs font-medium font-[family-name:var(--font-mono)] text-teal-700 dark:text-teal-300">
                {service.price}
              </span>

              {/* Arrow */}
              <span className="absolute bottom-5 right-5 text-pearl-300 dark:text-pearl-600 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors duration-[220ms] text-lg leading-none">
                →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10" data-reveal>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
          >
            View all services →
          </Link>
        </div>
      </Container>
    </section>
  );
}
