'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

const REVIEWS = [
  {
    author: 'Shaima Alazizi',
    initial: 'S',
    rating: 5,
    time: '7 months ago',
    body: 'They are all good and professional, always on time and ensure customer satisfaction. They know their work, I have been dealing with them for a while, did not face any conflicts since then.',
  },
  {
    author: 'Zoe',
    initial: 'Z',
    rating: 5,
    time: '1 year ago',
    body: "I am new in Dubai, I love their services so much, I'm addicted. They have a way of making you feel special, respected, and queen treatment all the way. Emily who comes to my house is fantastic and very courteous and kind with very good PR communication. I'm definitely sticking to them as they are very pocket friendly as well.",
  },
  {
    author: 'Haidar Shah',
    initial: 'H',
    rating: 5,
    time: '8 months ago',
    body: "Just moved here recently and moved into a new flat they did a deep clean of the flat and I was very happy with their work and ever since I've been using them — been here 10 months now.",
  },
];

export default function ReviewsPage() {
  const handleWhatsApp = () => {
    trackWhatsAppClick('review');
    window.open(generateWhatsAppLink('review'), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-16 sm:py-20 bg-pearl-50 dark:bg-dark-bg min-h-screen">
      <Container className="max-w-3xl!">
        <div className="text-center mb-14">
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-pearl-900 dark:text-dark-text">
            Real Homes. Real Results. Real People.
          </h1>
          <p className="mt-4 text-pearl-600 dark:text-dark-muted text-lg">
            4.5 stars across 19 Google reviews — and counting. Here&apos;s what Sharjah & Ajman families are saying.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-14">
          <div className="bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border rounded-xl p-5 text-center">
            <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-pearl-900 dark:text-dark-text">
              4.5<span className="text-amber-400 ml-1">★</span>
            </p>
            <p className="text-sm text-pearl-500 dark:text-dark-muted mt-1">Google Rating</p>
          </div>
          <div className="bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border rounded-xl p-5 text-center">
            <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-pearl-900 dark:text-dark-text">
              19
            </p>
            <p className="text-sm text-pearl-500 dark:text-dark-muted mt-1">Verified Reviews</p>
          </div>
          <div className="bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border rounded-xl p-5 text-center">
            <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-pearl-900 dark:text-dark-text">
              24/7
            </p>
            <p className="text-sm text-pearl-500 dark:text-dark-muted mt-1">Available</p>
          </div>
        </div>

        {/* Reviews */}
        <div className="space-y-6 mb-14">
          {REVIEWS.map((review) => (
            <div
              key={review.author}
              className="bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border rounded-xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full brand-gradient text-white font-medium">
                  {review.initial}
                </div>
                <div>
                  <p className="font-medium text-pearl-900 dark:text-dark-text">{review.author}</p>
                  <p className="text-xs text-pearl-500 dark:text-dark-muted">
                    Google · {review.time}
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-0.5 text-amber-400 text-sm">
                  {'⭐'.repeat(review.rating)}
                </div>
              </div>

              <span className="font-[family-name:var(--font-display)] text-4xl text-teal-200 dark:text-teal-800 leading-none">
                &ldquo;
              </span>
              <p className="text-pearl-700 dark:text-pearl-300 leading-relaxed -mt-4 ml-2">
                {review.body}
              </p>

              <div className="mt-3 inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-pearl-100 dark:bg-dark-elevated text-pearl-600 dark:text-dark-muted">
                Google · ★★★★★
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="brand-gradient rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-semibold text-white mb-3">
            Ready to Write Your Own?
          </h2>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Join Zoe, Shaima, Haidar, and hundreds of satisfied customers in Sharjah & Ajman. Book your first clean today — and see for yourself what the reviews are about.
          </p>
          <Button
            variant="whatsapp"
            size="lg"
            onClick={handleWhatsApp}
            className="bg-white! text-pearl-900! hover:bg-pearl-100!"
          >
            💬 Book on WhatsApp Now
          </Button>
        </div>
      </Container>
    </div>
  );
}
