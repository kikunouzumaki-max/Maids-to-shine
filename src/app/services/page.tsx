import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Professional cleaning services in Sharjah & Ajman. Residential, deep cleaning, post-construction, commercial, household staff, and move-in/out cleaning.',
};

const SERVICES = [
  {
    slug: 'residential-cleaning',
    emoji: '🏠',
    name: 'Residential Cleaning',
    tagline: 'Your home, properly clean.',
    desc: 'Regular maintenance cleans for apartments and villas. We handle every room with care — from kitchen counters to bathroom tiles.',
    price: 'From AED 25/hr',
  },
  {
    slug: 'deep-cleaning',
    emoji: '✨',
    name: 'Deep Cleaning',
    tagline: 'The clean your home has been waiting for.',
    desc: 'A full top-to-bottom transformation — inside cupboards, behind appliances, every forgotten corner. Book when moving in, out, or when regular just isn\'t enough.',
    price: 'From AED 180',
  },
  {
    slug: 'post-construction-cleaning',
    emoji: '🏗️',
    name: 'Post-Construction Cleaning',
    tagline: 'Dust, debris, and move-in ready.',
    desc: 'New build or renovation? We remove construction residue, polish surfaces, and prepare your space so it feels like home the moment you arrive.',
    price: 'From AED 250',
  },
  {
    slug: 'commercial-cleaning',
    emoji: '🏢',
    name: 'Commercial Cleaning',
    tagline: 'Offices that look as professional as you are.',
    desc: 'Tailored commercial cleaning for offices, retail spaces, and clinics across Sharjah & Ajman. Daily, weekly, or monthly contracts available.',
    price: 'From AED 30/hr',
  },
  {
    slug: 'housemaids-nannies-cooks',
    emoji: '👩‍🍳',
    name: 'Housemaids, Nannies & Cooks',
    tagline: 'Full household support, on your terms.',
    desc: 'Need daily help around the house? Our vetted staff handle everything from childcare to cooking — so you can focus on what matters most.',
    price: 'From AED 35/hr',
  },
  {
    slug: 'move-in-move-out-cleaning',
    emoji: '📦',
    name: 'Move-In / Move-Out Cleaning',
    tagline: 'Start fresh. Leave clean.',
    desc: 'Whether you\'re arriving or departing, we handle the clean so you don\'t have to. Deposit-friendly, landlord-approved results — every time.',
    price: 'From AED 200',
  },
];

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-20 bg-pearl-50 dark:bg-dark-bg min-h-screen">
      <Container>
        <div className="text-center mb-14">
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-pearl-900 dark:text-dark-text">
            Every Clean, Done Right. Every Single Time.
          </h1>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group block bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border rounded-xl p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-[220ms] relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 right-0 h-[3px] brand-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-[380ms] origin-left" />

              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl brand-gradient text-2xl flex-shrink-0">
                  {service.emoji}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-pearl-900 dark:text-dark-text mb-1">
                    {service.name}
                  </h2>
                  <p className="font-[family-name:var(--font-display)] text-base italic text-teal-600 dark:text-teal-400 mb-2">
                    {service.tagline}
                  </p>
                  <p className="text-pearl-600 dark:text-dark-muted text-[0.95rem] leading-relaxed mb-3">
                    {service.desc}
                  </p>
                  <span className="text-sm font-medium font-[family-name:var(--font-mono)] text-teal-600 dark:text-teal-400">
                    {service.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
