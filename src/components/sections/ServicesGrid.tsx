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
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-pearl-900 dark:text-dark-text">
            Our Services
          </h2>
          <p className="mt-3 text-pearl-600 dark:text-dark-muted text-lg max-w-lg mx-auto">
            From quick freshens to full deep cleans — we've got you covered.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border rounded-xl p-6 shadow-xs hover:shadow-lg hover:-translate-y-0.5 transition-all duration-[220ms] overflow-hidden"
            >
              {/* Bottom border accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] brand-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-[380ms] origin-left" />

              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl brand-gradient text-2xl mb-4">
                {service.emoji}
              </div>

              <h3 className="font-semibold text-pearl-900 dark:text-dark-text text-base mb-1">
                {service.name}
              </h3>
              <p className="text-sm text-pearl-500 dark:text-dark-muted mb-3">
                {service.desc}
              </p>
              <p className="text-sm font-medium font-[family-name:var(--font-mono)] text-teal-600 dark:text-teal-400">
                {service.price}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
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
