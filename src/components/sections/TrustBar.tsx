import { Container } from '@/components/ui/Container';

const BADGES = [
  { icon: '⭐', text: '4.5 Stars on Google · 19 Verified Reviews' },
  { icon: '🕐', text: 'Available 24 Hours · 7 Days a Week' },
  { icon: '📍', text: 'Serving Sharjah & Ajman Since 2024' },
  { icon: '💬', text: 'Instant Booking via WhatsApp' },
];

export function TrustBar() {
  return (
    <section className="py-6 bg-pearl-0 dark:bg-dark-surface border-y border-pearl-200/60 dark:border-dark-border/60">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {BADGES.map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-3 px-4 py-3 rounded-xl"
            >
              <span className="text-xl flex-shrink-0">{badge.icon}</span>
              <span className="text-sm font-medium text-pearl-700 dark:text-dark-muted leading-snug">
                {badge.text}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
