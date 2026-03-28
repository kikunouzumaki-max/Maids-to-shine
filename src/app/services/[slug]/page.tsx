'use client';

import { notFound, useParams } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

const SERVICES_DATA: Record<string, { name: string; emoji: string; tagline: string; desc: string; price: string; features: string[] }> = {
  'residential-cleaning': {
    name: 'Residential Cleaning',
    emoji: '🏠',
    tagline: 'Your home, properly clean.',
    desc: 'Regular maintenance cleans for apartments and villas. We handle every room with care — from kitchen counters to bathroom tiles. From AED 25/hr.',
    price: 'From AED 25/hr',
    features: ['Kitchen & bathroom deep clean', 'Dusting & vacuuming all rooms', 'Floor mopping & sanitization', 'Bed making & linen change', 'All supplies included'],
  },
  'deep-cleaning': {
    name: 'Deep Cleaning',
    emoji: '✨',
    tagline: 'The clean your home has been waiting for.',
    desc: "A full top-to-bottom transformation — inside cupboards, behind appliances, every forgotten corner. Book when moving in, out, or when regular just isn't enough.",
    price: 'From AED 180',
    features: ['Inside cupboards & wardrobes', 'Behind & under appliances', 'Window sills & tracks', 'Grout & tile scrubbing', 'Full kitchen degrease'],
  },
  'post-construction-cleaning': {
    name: 'Post-Construction Cleaning',
    emoji: '🏗️',
    tagline: 'Dust, debris, and move-in ready.',
    desc: 'New build or renovation? We remove construction residue, polish surfaces, and prepare your space so it feels like home the moment you arrive.',
    price: 'From AED 250',
    features: ['Dust & debris removal', 'Surface polishing', 'Window cleaning', 'Floor scrubbing & sealing', 'Final inspection walkthrough'],
  },
  'commercial-cleaning': {
    name: 'Commercial Cleaning',
    emoji: '🏢',
    tagline: 'Offices that look as professional as you are.',
    desc: 'Tailored commercial cleaning for offices, retail spaces, and clinics across Sharjah & Ajman. Daily, weekly, or monthly contracts available.',
    price: 'From AED 30/hr',
    features: ['Office desk & workspace cleaning', 'Reception & common areas', 'Restroom sanitization', 'Floor care & maintenance', 'Flexible scheduling'],
  },
  'housemaids-nannies-cooks': {
    name: 'Housemaids, Nannies & Cooks',
    emoji: '👩‍🍳',
    tagline: 'Full household support, on your terms.',
    desc: 'Need daily help around the house? Our vetted staff handle everything from childcare to cooking — so you can focus on what matters most.',
    price: 'From AED 35/hr',
    features: ['Vetted & background-checked', 'Childcare & nanny services', 'Meal preparation & cooking', 'Laundry & ironing', 'Flexible hours'],
  },
  'move-in-move-out-cleaning': {
    name: 'Move-In / Move-Out Cleaning',
    emoji: '📦',
    tagline: 'Start fresh. Leave clean.',
    desc: "Whether you're arriving or departing, we handle the clean so you don't have to. Deposit-friendly, landlord-approved results — every time.",
    price: 'From AED 200',
    features: ['Full apartment deep clean', 'Kitchen appliance cleaning', 'Bathroom sanitization', 'Balcony & storage areas', 'Deposit recovery support'],
  },
};

export default function ServiceDetailPage() {
  const params = useParams<{ slug: string }>();
  const service = SERVICES_DATA[params.slug];

  if (!service) notFound();

  const handleWhatsApp = () => {
    trackWhatsAppClick('homepage');
    window.open(generateWhatsAppLink('homepage'), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-16 sm:py-20 bg-pearl-50 dark:bg-dark-bg min-h-screen">
      <Container className="max-w-3xl!">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-pearl-500 dark:text-dark-muted" aria-label="Breadcrumb">
          <a href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</a>
          <span className="mx-2">›</span>
          <a href="/services" className="hover:text-teal-600 dark:hover:text-teal-400">Services</a>
          <span className="mx-2">›</span>
          <span className="text-pearl-900 dark:text-dark-text">{service.name}</span>
        </nav>

        <div className="bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border rounded-2xl p-8 sm:p-10 shadow-sm">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl brand-gradient text-3xl mb-6">
            {service.emoji}
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-pearl-900 dark:text-dark-text">
            {service.name}
          </h1>
          <p className="font-[family-name:var(--font-display)] text-lg italic text-teal-600 dark:text-teal-400 mt-2">
            {service.tagline}
          </p>

          <p className="mt-6 text-pearl-700 dark:text-pearl-300 leading-relaxed text-base">
            {service.desc}
          </p>

          <div className="mt-8">
            <h2 className="font-semibold text-pearl-900 dark:text-dark-text mb-4">What&apos;s included:</h2>
            <ul className="space-y-3">
              {service.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-pearl-700 dark:text-pearl-300">
                  <svg className="h-5 w-5 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 p-4 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800">
            <p className="font-[family-name:var(--font-mono)] text-lg font-medium text-teal-700 dark:text-teal-300">
              {service.price}
            </p>
            <p className="text-sm text-teal-600 dark:text-teal-400 mt-1">
              Equipment, supplies, and travel within Sharjah & Ajman included.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button variant="whatsapp" size="lg" onClick={handleWhatsApp} className="flex-1">
              💬 Book on WhatsApp
            </Button>
            <Button href="/book" variant="secondary" size="lg" className="flex-1">
              Schedule Online →
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
