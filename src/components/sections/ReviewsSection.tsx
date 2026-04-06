'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

const REVIEWS = [
  {
    author: 'Shaima Alazizi',
    initial: 'S',
    time: '7 months ago',
    body: 'They are all good and professional, always on time and ensure customer satisfaction. They know their work, I have been dealing with them for a while, did not face any conflicts since then.',
  },
  {
    author: 'Zoe',
    initial: 'Z',
    time: '1 year ago',
    body: "I am new in Dubai, I love their services so much, I'm addicted. They have a way of making you feel special, respected, and queen treatment all the way. Emily who comes to my house is fantastic and very courteous and kind.",
  },
  {
    author: 'Haidar Shah',
    initial: 'H',
    time: '8 months ago',
    body: "Just moved here recently and moved into a new flat, they did a deep clean and I was very happy with their work. Been here 10 months now and still using them.",
  },
  {
    author: 'Fatima Al Nouri',
    initial: 'F',
    time: '5 months ago',
    body: "Reliable, respectful, and thorough. The team arrived on time and left my apartment spotless. I recommend Maids To Shine to everyone I know in Sharjah.",
  },
  {
    author: 'James T.',
    initial: 'J',
    time: '3 months ago',
    body: "Booked a move-out clean at short notice and they delivered perfectly. The landlord was very happy and we got our full deposit back. Brilliant service.",
  },
];

export function ReviewsSection() {
  const handleWhatsApp = () => {
    trackWhatsAppClick('review');
    window.open(generateWhatsAppLink('review'), '_blank', 'noopener,noreferrer');
  };

  // Duplicate so the marquee can loop seamlessly
  const marqueeItems = [...REVIEWS, ...REVIEWS];

  return (
    <section className="py-16 sm:py-20 bg-pearl-50 dark:bg-dark-bg overflow-hidden">

      {/* Header */}
      <Container>
        <div className="text-center mb-12" data-reveal>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-pearl-900 dark:text-dark-text">
            Don&apos;t Take Our Word For It. Read Theirs.
          </h2>
          <p className="mt-3 text-pearl-600 dark:text-dark-muted text-lg">
            4.5 stars across 19 Google reviews — and counting.
          </p>
        </div>

        {/* Featured pull-quote */}
        <div className="max-w-2xl mx-auto mb-14 text-center" data-reveal style={{ transitionDelay: '0.1s' }}>
          <span className="font-[family-name:var(--font-display)] text-6xl brand-gradient-text leading-none select-none">
            &ldquo;
          </span>
          <blockquote className="font-[family-name:var(--font-display)] text-xl sm:text-2xl italic text-pearl-800 dark:text-pearl-200 leading-relaxed -mt-4">
            They have a way of making you feel special, respected — queen
            treatment all the way. Emily who comes to my house is fantastic.
          </blockquote>
          <p className="mt-5 text-sm font-medium text-pearl-600 dark:text-dark-muted">
            — Zoe · Google · ⭐⭐⭐⭐⭐
          </p>
        </div>
      </Container>

      {/* Auto-scrolling marquee — full bleed */}
      <div
        className="relative w-full overflow-hidden mb-12"
        aria-label="Customer reviews"
        data-reveal
        style={{ transitionDelay: '0.2s' }}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-pearl-50 dark:from-dark-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-pearl-50 dark:from-dark-bg to-transparent z-10 pointer-events-none" />

        <div className="marquee-track px-4">
          {marqueeItems.map((review, i) => (
            <div
              key={`${review.author}-${i}`}
              className="glass-card rounded-2xl p-6 flex flex-col flex-shrink-0 w-[300px] sm:w-[340px]"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 text-amber-400 text-sm mb-3">
                ⭐⭐⭐⭐⭐
              </div>

              {/* Body */}
              <p className="text-pearl-700 dark:text-pearl-300 text-sm leading-relaxed flex-1 line-clamp-4">
                &ldquo;{review.body}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-pearl-200/60 dark:border-dark-border/60">
                <div className="flex h-9 w-9 items-center justify-center rounded-full brand-gradient text-white text-sm font-medium flex-shrink-0">
                  {review.initial}
                </div>
                <div>
                  <p className="text-sm font-medium text-pearl-900 dark:text-dark-text">
                    {review.author}
                  </p>
                  <p className="text-xs text-pearl-500 dark:text-dark-muted">
                    Google · {review.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Container>
        <div className="text-center" data-reveal style={{ transitionDelay: '0.3s' }}>
          <Button variant="outline" size="md" onClick={handleWhatsApp}>
            💬 Book on WhatsApp Now
          </Button>
        </div>
      </Container>

    </section>
  );
}
