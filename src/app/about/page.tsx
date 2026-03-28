import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "We're Not Just Cleaners. We're Your People.",
  description: 'Learn about Maids To Shine Cleaning Services — a team of dedicated professionals serving Sharjah & Ajman homes with care and trust.',
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-20 bg-pearl-50 dark:bg-dark-bg min-h-screen">
      <Container className="max-w-3xl!">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-pearl-500 dark:text-dark-muted" aria-label="Breadcrumb">
          <a href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</a>
          <span className="mx-2">›</span>
          <span className="text-pearl-900 dark:text-dark-text">About</span>
        </nav>

        <div className="bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border rounded-2xl p-8 sm:p-10 shadow-sm">
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-pearl-900 dark:text-dark-text">
            We&apos;re Not Just Cleaners. We&apos;re Your People.
          </h1>

          <p className="mt-6 text-pearl-700 dark:text-pearl-300 leading-relaxed text-[1.05rem]">
            Maids To Shine started with a simple belief: that every home in Sharjah and Ajman deserves to be treated with care — and so does the person who lives in it. We&apos;re not a faceless platform or an app. We&apos;re a team of dedicated professionals who take real pride in the homes we look after.
          </p>

          <blockquote className="mt-8 border-l-4 border-teal-400 pl-5 py-2">
            <p className="font-[family-name:var(--font-display)] text-xl italic text-pearl-800 dark:text-pearl-200">
              &ldquo;We believe that letting someone into your home is an act of trust. We never take that lightly.&rdquo;
            </p>
          </blockquote>

          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-pearl-900 dark:text-dark-text">
                4.5<span className="text-amber-400">★</span>
              </p>
              <p className="text-sm text-pearl-500 dark:text-dark-muted mt-1">Google Rating</p>
            </div>
            <div className="text-center">
              <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-pearl-900 dark:text-dark-text">24/7</p>
              <p className="text-sm text-pearl-500 dark:text-dark-muted mt-1">Always Available</p>
            </div>
            <div className="text-center">
              <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-pearl-900 dark:text-dark-text">AED 25</p>
              <p className="text-sm text-pearl-500 dark:text-dark-muted mt-1">Starting Rate/hr</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button href="/about/our-team" variant="secondary" size="md">
              Meet Our Team →
            </Button>
            <Button href="/book" size="md">
              Book a Cleaning
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
