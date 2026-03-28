import { Container } from '@/components/ui/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Maids To Shine Cleaning Services.',
};

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-20 bg-pearl-50 dark:bg-dark-bg min-h-screen">
      <Container className="max-w-2xl!">
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-pearl-900 dark:text-dark-text mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-pearl dark:prose-invert max-w-none bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border rounded-2xl p-8 sm:p-10 shadow-sm space-y-6 text-pearl-700 dark:text-pearl-300 leading-relaxed">
          <p>Last updated: January 2025</p>
          <h2 className="text-lg font-semibold text-pearl-900 dark:text-dark-text">Information We Collect</h2>
          <p>When you use our booking form or contact us via WhatsApp, we collect your name, phone number, and service preferences. This information is used solely to confirm and deliver your cleaning service.</p>
          <h2 className="text-lg font-semibold text-pearl-900 dark:text-dark-text">How We Use Your Information</h2>
          <p>Your personal information is used to: confirm bookings via WhatsApp, assign the appropriate cleaning team, improve our services, and send relevant updates about your booking.</p>
          <h2 className="text-lg font-semibold text-pearl-900 dark:text-dark-text">Data Protection</h2>
          <p>We never sell, rent, or share your personal information with third parties for marketing purposes. Your data is stored securely and accessed only by authorized team members.</p>
          <h2 className="text-lg font-semibold text-pearl-900 dark:text-dark-text">Contact</h2>
          <p>For any privacy-related inquiries, please contact us via WhatsApp at +971 56 607 1541.</p>
        </div>
      </Container>
    </div>
  );
}
