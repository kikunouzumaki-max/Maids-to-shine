import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { getPhoneDisplay } from '@/lib/whatsapp';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Maids To Shine Cleaning Services. Available 24/7 via WhatsApp, phone, or Instagram.',
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-20 bg-pearl-50 dark:bg-dark-bg min-h-screen">
      <Container className="max-w-2xl!">
        <nav className="mb-8 text-sm text-pearl-500 dark:text-dark-muted" aria-label="Breadcrumb">
          <a href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</a>
          <span className="mx-2">›</span>
          <span className="text-pearl-900 dark:text-dark-text">Contact</span>
        </nav>

        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-pearl-900 dark:text-dark-text mb-10">
          Get in Touch
        </h1>

        <div className="space-y-4">
          <a
            href="https://wa.me/971566071541?text=Hi!%20%F0%9F%91%8B%20I%27d%20like%20to%20book%20a%20cleaning%20service.%20Can%20you%20help%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border rounded-xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-[220ms]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-whatsapp text-white text-xl">
              💬
            </div>
            <div>
              <p className="font-medium text-pearl-900 dark:text-dark-text">WhatsApp</p>
              <p className="text-sm text-pearl-500 dark:text-dark-muted">{getPhoneDisplay()} · Instant reply</p>
            </div>
          </a>

          <a
            href={`tel:+${getPhoneDisplay().replace(/\s/g, '')}`}
            className="flex items-center gap-4 bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border rounded-xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-[220ms]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl brand-gradient text-white text-xl">
              📞
            </div>
            <div>
              <p className="font-medium text-pearl-900 dark:text-dark-text">Phone</p>
              <p className="text-sm text-pearl-500 dark:text-dark-muted">{getPhoneDisplay()}</p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/maidstoshinecleaning/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border rounded-xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-[220ms]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white text-xl">
              📸
            </div>
            <div>
              <p className="font-medium text-pearl-900 dark:text-dark-text">Instagram</p>
              <p className="text-sm text-pearl-500 dark:text-dark-muted">@maidstoshinecleaning</p>
            </div>
          </a>

          <div className="flex items-center gap-4 bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border rounded-xl p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pearl-100 dark:bg-dark-elevated text-xl">
              📍
            </div>
            <div>
              <p className="font-medium text-pearl-900 dark:text-dark-text">Location</p>
              <p className="text-sm text-pearl-500 dark:text-dark-muted">Sharjah & Ajman, UAE</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border rounded-xl p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pearl-100 dark:bg-dark-elevated text-xl">
              🕐
            </div>
            <div>
              <p className="font-medium text-pearl-900 dark:text-dark-text">Hours</p>
              <p className="text-sm text-pearl-500 dark:text-dark-muted">Open 24 hours, 7 days a week</p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button href="/book" size="lg">
            Book a Cleaning →
          </Button>
        </div>
      </Container>
    </div>
  );
}
