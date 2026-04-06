'use client';

import { Button } from '@/components/ui/Button';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

const TRUST_BADGES = [
  { emoji: '⭐', text: '4.5 Stars on Google' },
  { emoji: '🕐', text: '24/7 Available' },
  { emoji: '📍', text: 'Sharjah & Ajman' },
  { emoji: '💬', text: 'Instant WhatsApp' },
];

export function HeroSection() {
  const handleWhatsApp = () => {
    trackWhatsAppClick('homepage');
    window.open(generateWhatsAppLink('homepage'), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-pearl-50 dark:bg-dark-bg">
        {/* Primary teal glow — top left */}
        <div className="absolute -top-48 -left-48 h-[680px] w-[680px] rounded-full bg-teal-300/30 dark:bg-teal-500/18 blur-[160px]" />
        {/* Cobalt glow — bottom right */}
        <div className="absolute -bottom-24 -right-24 h-[520px] w-[520px] rounded-full bg-cobalt-300/20 dark:bg-cobalt-500/12 blur-[130px]" />
        {/* Soft mid accent */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 h-[280px] w-[280px] rounded-full bg-teal-200/15 dark:bg-teal-400/8 blur-[90px]" />
        {/* Noise overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Content ── */}
          <div className="max-w-xl">

            {/* Eyebrow badge */}
            <div className="animate-fade-up mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-teal-700 dark:text-teal-300">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse flex-shrink-0" />
                Accepting bookings · Sharjah & Ajman
              </span>
            </div>

            <h1 className="animate-fade-up font-[family-name:var(--font-display)] text-[2.8rem] sm:text-[3.5rem] lg:text-[3.8rem] font-semibold leading-[1.08] text-pearl-900 dark:text-dark-text tracking-tight">
              Your Home Deserves to{' '}
              <span className="brand-gradient-text">Feel Like Home.</span>
            </h1>

            <p className="animate-fade-up animate-delay-100 mt-6 text-lg sm:text-xl text-pearl-600 dark:text-dark-muted leading-relaxed max-w-md">
              Professional cleaning for homes across Sharjah &amp; Ajman. Trusted
              by families since day one — available 24 hours, 7 days a week.
            </p>

            {/* Trust badges — glass pills */}
            <div className="animate-fade-up animate-delay-200 mt-8 flex flex-wrap gap-2">
              {TRUST_BADGES.map((badge) => (
                <span
                  key={badge.text}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card text-xs font-medium text-pearl-700 dark:text-dark-muted"
                >
                  {badge.emoji} {badge.text}
                </span>
              ))}
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

          {/* ── Right: Floating glass card ── */}
          <div className="animate-fade-up animate-delay-200 hidden lg:flex items-center justify-center">
            <div className="animate-float relative">
              {/* Glow halo behind the card */}
              <div className="absolute inset-0 rounded-[2rem] brand-gradient opacity-20 blur-2xl scale-110 pointer-events-none" />

              <div className="relative glass-card rounded-[2rem] p-10 flex flex-col items-center gap-6 min-w-[360px]">
                <div className="text-6xl select-none">🏠</div>

                <div className="text-center">
                  <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-pearl-900 dark:text-dark-text">
                    From AED 25/hr
                  </p>
                  <p className="mt-2 text-pearl-500 dark:text-dark-muted text-sm">
                    Equipment &amp; supplies included
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-pearl-200 dark:via-dark-border to-transparent" />

                {/* Stars */}
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-0.5 text-amber-400 text-xl">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p className="text-sm text-pearl-500 dark:text-dark-muted">
                    4.5 · 19 verified Google reviews
                  </p>
                </div>

                {/* Live status pill */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 dark:bg-teal-900/25 border border-teal-200 dark:border-teal-800/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse flex-shrink-0" />
                  <span className="text-xs font-medium text-teal-700 dark:text-teal-300">
                    Accepting bookings today
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
