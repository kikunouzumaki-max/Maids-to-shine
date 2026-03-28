'use client';

import { useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { generateWhatsAppLink, getPhoneDisplay } from '@/lib/whatsapp';
import { trackGA4Event, trackMetaPixel, trackWhatsAppClick } from '@/lib/analytics';

export default function ThankYouPage() {
  useEffect(() => {
    trackGA4Event('booking_complete');
    trackMetaPixel('Purchase', { value: 0, currency: 'AED' });
  }, []);

  const handleWhatsApp = () => {
    trackWhatsAppClick('thank-you');
    window.open(generateWhatsAppLink('thank-you'), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-pearl-50 dark:bg-dark-bg flex items-center">
      <Container className="max-w-2xl! py-16">
        <div className="bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border rounded-2xl p-8 sm:p-12 text-center shadow-sm">
          <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl brand-gradient text-3xl mb-6">
            ✨
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-pearl-900 dark:text-dark-text">
            Your Home Is Going to Love This.
          </h1>

          <p className="mt-4 text-pearl-600 dark:text-dark-muted text-lg max-w-md mx-auto leading-relaxed">
            Booking received! We&apos;ll send a confirmation to your WhatsApp within 2 hours.
            If it&apos;s urgent, message us directly — we&apos;re always online.
          </p>

          {/* Steps */}
          <div className="mt-10 space-y-4 text-left max-w-sm mx-auto">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 text-xl mt-0.5">📱</span>
              <p className="text-pearl-700 dark:text-pearl-300 text-[0.95rem]">
                You&apos;ll receive a WhatsApp message confirming your booking details and maid name.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 text-xl mt-0.5">🏠</span>
              <p className="text-pearl-700 dark:text-pearl-300 text-[0.95rem]">
                Your maid arrives on time with all equipment and supplies included.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 text-xl mt-0.5">✨</span>
              <p className="text-pearl-700 dark:text-pearl-300 text-[0.95rem]">
                You come home to a spotless space — and tell us what you think.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3">
            <Button variant="whatsapp" size="lg" onClick={handleWhatsApp} className="w-full">
              💬 Message us now: {getPhoneDisplay()}
            </Button>
            <Button href="/" variant="ghost" size="md">
              ← Back to Home
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
