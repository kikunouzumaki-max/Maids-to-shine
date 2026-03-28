'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

export function ClosingCTA() {
  const handleWhatsApp = () => {
    trackWhatsAppClick('homepage');
    window.open(generateWhatsAppLink('homepage'), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="brand-gradient rounded-2xl sm:rounded-3xl px-6 py-14 sm:px-12 sm:py-20 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-white max-w-lg mx-auto">
            Ready to Come Home to a Spotless Space?
          </h2>
          <p className="mt-4 text-white/80 text-lg max-w-md mx-auto leading-relaxed">
            Book your first clean in under 60 seconds. No paperwork. No waiting. Just a spotless home waiting when you walk through the door.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="whatsapp"
              size="lg"
              onClick={handleWhatsApp}
              className="bg-white! text-pearl-900! hover:bg-pearl-100! shadow-lg"
            >
              💬 Start on WhatsApp — It&apos;s Instant
            </Button>
            <Button
              href="/book"
              size="lg"
              className="bg-white/15! text-white! border-white/30! hover:bg-white/25!"
            >
              Schedule a Cleaning →
            </Button>
          </div>
          <p className="mt-5 text-sm text-white/60">
            Available today in Sharjah & Ajman · Slots fill quickly
          </p>
        </div>
      </Container>
    </section>
  );
}
