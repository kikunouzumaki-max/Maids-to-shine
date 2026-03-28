'use client';

import { notFound, useParams } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

const AREAS_DATA: Record<string, { name: string; emirate: string }> = {
  sharjah: { name: 'Sharjah', emirate: 'Sharjah' },
  'sharjah-al-nahda': { name: 'Al Nahda, Sharjah', emirate: 'Sharjah' },
  'sharjah-al-khan': { name: 'Al Khan, Sharjah', emirate: 'Sharjah' },
  'sharjah-muwaileh': { name: 'Muwaileh, Sharjah', emirate: 'Sharjah' },
  ajman: { name: 'Ajman', emirate: 'Ajman' },
  'ajman-al-rashidiya': { name: 'Al Rashidiya, Ajman', emirate: 'Ajman' },
  'ajman-al-jurf': { name: 'Al Jurf, Ajman', emirate: 'Ajman' },
};

export default function AreaPage() {
  const params = useParams<{ slug: string }>();
  const area = AREAS_DATA[params.slug];

  if (!area) notFound();

  const handleWhatsApp = () => {
    trackWhatsAppClick('homepage');
    window.open(generateWhatsAppLink('homepage', { area: area.name }), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-16 sm:py-20 bg-pearl-50 dark:bg-dark-bg min-h-screen">
      <Container className="max-w-3xl!">
        <nav className="mb-8 text-sm text-pearl-500 dark:text-dark-muted" aria-label="Breadcrumb">
          <a href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</a>
          <span className="mx-2">›</span>
          <span className="text-pearl-900 dark:text-dark-text">{area.name}</span>
        </nav>

        <div className="bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border rounded-2xl p-8 sm:p-10 shadow-sm">
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-pearl-900 dark:text-dark-text">
            Trusted Cleaning Service in {area.name}, {area.emirate}
          </h1>

          <p className="mt-6 text-pearl-700 dark:text-pearl-300 leading-relaxed text-[1.05rem]">
            Looking for reliable cleaning in {area.name}? Maids To Shine brings professional home cleaning to your door — with vetted maids, flexible scheduling, and rates starting from just AED 25/hr. Trusted by families across {area.emirate} since 2024. Book via WhatsApp in under 60 seconds.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-teal-50 dark:bg-teal-900/20">
              <span className="text-xl">⭐</span>
              <span className="text-sm font-medium text-teal-700 dark:text-teal-300">4.5★ Google Rating</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-teal-50 dark:bg-teal-900/20">
              <span className="text-xl">🕐</span>
              <span className="text-sm font-medium text-teal-700 dark:text-teal-300">24/7 Available</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-teal-50 dark:bg-teal-900/20">
              <span className="text-xl">💰</span>
              <span className="text-sm font-medium text-teal-700 dark:text-teal-300">From AED 25/hr</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-teal-50 dark:bg-teal-900/20">
              <span className="text-xl">✅</span>
              <span className="text-sm font-medium text-teal-700 dark:text-teal-300">All Supplies Included</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button variant="whatsapp" size="lg" onClick={handleWhatsApp} className="flex-1">
              💬 Book in {area.name}
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
