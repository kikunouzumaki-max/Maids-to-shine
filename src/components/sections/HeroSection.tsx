'use client';

import { Button } from '@/components/ui/Button';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

export function HeroSection() {
  const handleWhatsApp = () => {
    trackWhatsAppClick('homepage');
    window.open(generateWhatsAppLink('homepage'), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-pearl-50 dark:bg-dark-bg">
        {/* Gradient glow */}
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-teal-300/20 dark:bg-teal-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cobalt-300/10 dark:bg-cobalt-500/5 blur-[100px]" />
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <h1 className="animate-fade-up font-[family-name:var(--font-display)] text-[2.8rem] sm:text-[3.5rem] lg:text-[3.8rem] font-semibold leading-[1.08] text-pearl-900 dark:text-dark-text tracking-tight">
              Your Home Deserves to{' '}
              <span className="brand-gradient-text">Feel Like Home.</span>
            </h1>

            <p className="animate-fade-up animate-delay-100 mt-6 text-lg sm:text-xl text-pearl-600 dark:text-dark-muted leading-relaxed max-w-md">
              Professional cleaning for homes across Sharjah & Ajman. Trusted by families since day one — available 24 hours, 7 days a week.
            </p>

            {/* Trust badges */}
            <div className="animate-fade-up animate-delay-200 mt-8 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pearl-0/80 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border text-xs font-medium text-pearl-700 dark:text-dark-muted">
                ⭐ 4.5 Stars on Google
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pearl-0/80 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border text-xs font-medium text-pearl-700 dark:text-dark-muted">
                🕐 24/7 Available
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pearl-0/80 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border text-xs font-medium text-pearl-700 dark:text-dark-muted">
                📍 Sharjah & Ajman
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pearl-0/80 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border text-xs font-medium text-pearl-700 dark:text-dark-muted">
                💬 Instant WhatsApp
              </span>
            </div>

            {/* CTAs */}
            <div className="animate-fade-up animate-delay-300 mt-10 flex flex-col sm:flex-row gap-3">
              <Button size="lg" variant="whatsapp" onClick={handleWhatsApp}>
                💬 Chat Now — It&apos;s Free
              </Button>
              <Button href="/book" size="lg" variant="secondary">
                Schedule a Cleaning →
              </Button>
            </div>
          </div>

          {/* Visual side */}
          <div className="animate-fade-up animate-delay-200 hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Abstract decorative element */}
              <div className="h-[420px] w-[420px] rounded-[2.5rem] brand-gradient opacity-10 absolute -top-4 -right-4" />
              <div className="relative h-[400px] w-[400px] rounded-[2rem] bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border shadow-lg flex flex-col items-center justify-center gap-6 p-10">
                <div className="text-6xl">🏠</div>
                <div className="text-center">
                  <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-pearl-900 dark:text-dark-text">
                    From AED 25/hr
                  </p>
                  <p className="mt-2 text-pearl-500 dark:text-dark-muted">
                    Equipment & supplies included
                  </p>
                </div>
                <div className="flex items-center gap-1 text-amber-400 text-lg">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-sm text-pearl-500 dark:text-dark-muted">
                  19 verified Google reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
