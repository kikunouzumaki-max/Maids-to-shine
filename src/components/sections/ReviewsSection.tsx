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
    body: "I am new in Dubai, I love their services so much, I'm addicted. They have a way of making you feel special, respected, and queen treatment all the way. Emily who comes to my house is fantastic and very courteous and kind with very good PR communication. I'm definitely sticking to them as they are very pocket friendly as well.",
  },
  {
    author: 'Haidar Shah',
    initial: 'H',
    time: '8 months ago',
    body: "Just moved here recently and moved into a new flat they did a deep clean of the flat and I was very happy with their work and ever since I've been using them — been here 10 months now.",
  },
];

export function ReviewsSection() {
  const handleWhatsApp = () => {
    trackWhatsAppClick('review');
    window.open(generateWhatsAppLink('review'), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 sm:py-20 bg-pearl-50 dark:bg-dark-bg">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-pearl-900 dark:text-dark-text">
            Don&apos;t Take Our Word For It. Read Theirs.
          </h2>
          <p className="mt-3 text-pearl-600 dark:text-dark-muted text-lg">
            4.5 stars across 19 Google reviews — and counting.
          </p>
        </div>

        {/* Featured quote */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <span className="font-[family-name:var(--font-display)] text-6xl text-teal-200 dark:text-teal-800 leading-none">
            &ldquo;
          </span>
          <blockquote className="font-[family-name:var(--font-display)] text-xl sm:text-2xl italic text-pearl-800 dark:text-pearl-200 leading-relaxed -mt-6">
            They have a way of making you feel special, respected — queen treatment all the way. Emily who comes to my house is fantastic.
          </blockquote>
          <p className="mt-4 text-sm font-medium text-pearl-600 dark:text-dark-muted">
            — Zoe · Google · ⭐⭐⭐⭐⭐
          </p>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.author}
              className="bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border rounded-xl p-6 flex flex-col"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 text-amber-400 text-sm mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              {/* Body */}
              <p className="text-pearl-700 dark:text-pearl-300 text-[0.95rem] leading-relaxed flex-1">
                &ldquo;{review.body}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-pearl-100 dark:border-dark-border">
                <div className="flex h-9 w-9 items-center justify-center rounded-full brand-gradient text-white text-sm font-medium">
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

        <div className="text-center mt-10">
          <Button variant="outline" size="md" onClick={handleWhatsApp}>
            💬 Book on WhatsApp Now
          </Button>
        </div>
      </Container>
    </section>
  );
}
