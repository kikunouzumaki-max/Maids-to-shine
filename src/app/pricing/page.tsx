'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';
import type { Metadata } from 'next';

const TIERS = [
  {
    name: 'Hourly',
    label: 'Try Us',
    price: '25',
    unit: '/hr',
    featured: false,
    description:
      "Perfect for a first clean or a quick freshen-up. No commitment. No contract. Just a spotless home at an hourly rate that's genuinely fair.",
    features: ['No commitment required', 'All supplies included', 'Book same-day', 'Any room or area'],
    cta: 'Book Hourly →',
  },
  {
    name: 'Day Package',
    label: 'Full Reset',
    price: '180',
    unit: '/ full day',
    featured: false,
    description:
      'A full working day of dedicated cleaning. Ideal for deep cleans, move-ins, or getting ahead of a big occasion. One team, one day, complete transformation.',
    features: ['Full day of cleaning', 'Deep clean included', 'Ideal for move-ins', 'Complete transformation'],
    cta: 'Book Full Day →',
  },
  {
    name: 'Monthly',
    label: 'Best Value · Most Popular',
    price: '799',
    unit: '/month',
    featured: true,
    description:
      'Weekly visits. The same trusted maid. A home that stays clean all month — and a routine that just works. Priority scheduling, no rescheduling fees, dedicated support.',
    features: ['Weekly visits', 'Same trusted maid', 'Priority scheduling', 'No rescheduling fees', 'Dedicated support'],
    cta: 'Get Monthly Plan →',
  },
];

export default function PricingPage() {
  const handleWhatsApp = (plan: string) => {
    trackWhatsAppClick('pricing');
    window.open(
      generateWhatsAppLink('pricing', { plan }),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="py-16 sm:py-20 bg-pearl-50 dark:bg-dark-bg min-h-screen">
      <Container>
        <div className="text-center mb-14">
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-pearl-900 dark:text-dark-text">
            Honest Pricing. No Surprises. Ever.
          </h1>
          <p className="mt-4 text-pearl-600 dark:text-dark-muted text-lg max-w-lg mx-auto">
            What you see is what you pay — equipment, supplies, and travel all included.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-16">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-pearl-0 dark:bg-dark-surface rounded-2xl p-7 sm:p-8 flex flex-col
                ${tier.featured
                  ? 'border-2 border-teal-400 shadow-brand ring-4 ring-teal-400/10'
                  : 'border border-pearl-200 dark:border-dark-border shadow-xs'
                }
              `}
            >
              {/* Label */}
              <span
                className={`inline-flex self-start px-3 py-1 rounded-full text-xs font-medium mb-4
                  ${tier.featured
                    ? 'brand-gradient text-white'
                    : 'bg-pearl-100 dark:bg-dark-elevated text-pearl-600 dark:text-dark-muted'
                  }
                `}
              >
                {tier.label}
              </span>

              <h2 className="text-lg font-semibold text-pearl-900 dark:text-dark-text mb-2">
                {tier.name}
              </h2>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-sm text-pearl-500 dark:text-dark-muted">From AED</span>
                <span className="font-[family-name:var(--font-display)] text-4xl font-semibold text-pearl-900 dark:text-dark-text">
                  {tier.price}
                </span>
                <span className="text-sm text-pearl-500 dark:text-dark-muted">{tier.unit}</span>
              </div>

              <p className="text-pearl-600 dark:text-dark-muted text-[0.92rem] leading-relaxed mb-6">
                {tier.description}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-pearl-700 dark:text-pearl-300">
                    <svg className="h-4 w-4 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.featured ? 'primary' : 'secondary'}
                size="md"
                className="w-full"
                onClick={() => handleWhatsApp(tier.name)}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="max-w-2xl mx-auto space-y-5">
          <div className="bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border rounded-xl p-6 flex items-start gap-4">
            <span className="text-2xl flex-shrink-0">🛡️</span>
            <p className="text-pearl-700 dark:text-pearl-300 text-[0.95rem] leading-relaxed">
              Not happy with your first clean? Tell us within 24 hours and we&apos;ll make it right — at no extra cost.
            </p>
          </div>
          <div className="bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border rounded-xl p-6 flex items-start gap-4">
            <span className="text-2xl flex-shrink-0">💳</span>
            <p className="text-pearl-700 dark:text-pearl-300 text-[0.95rem] leading-relaxed">
              Pay after the clean. Cash or bank transfer. No deposits required for first-time bookings.
            </p>
          </div>
          <div className="bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border rounded-xl p-6 flex items-start gap-4">
            <span className="text-2xl flex-shrink-0">✅</span>
            <p className="text-pearl-700 dark:text-pearl-300 text-[0.95rem] leading-relaxed">
              All our prices include equipment, supplies, and travel within Sharjah & Ajman. What you see is what you pay.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
