import { Container } from '@/components/ui/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Maids To Shine Cleaning Services.',
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-20 bg-pearl-50 dark:bg-dark-bg min-h-screen">
      <Container className="max-w-2xl!">
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-pearl-900 dark:text-dark-text mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-pearl dark:prose-invert max-w-none bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border rounded-2xl p-8 sm:p-10 shadow-sm space-y-6 text-pearl-700 dark:text-pearl-300 leading-relaxed">
          <p>Last updated: January 2025</p>
          <h2 className="text-lg font-semibold text-pearl-900 dark:text-dark-text">Service Agreement</h2>
          <p>By booking a cleaning service with Maids To Shine, you agree to provide access to the premises at the scheduled time. Cancellations must be made at least 4 hours before the appointment.</p>
          <h2 className="text-lg font-semibold text-pearl-900 dark:text-dark-text">Payment</h2>
          <p>Payment is due upon completion of the cleaning service. We accept cash and bank transfer. No deposits are required for first-time bookings.</p>
          <h2 className="text-lg font-semibold text-pearl-900 dark:text-dark-text">Satisfaction Guarantee</h2>
          <p>If you are not satisfied with your clean, contact us within 24 hours and we will make it right at no extra cost.</p>
          <h2 className="text-lg font-semibold text-pearl-900 dark:text-dark-text">Liability</h2>
          <p>Maids To Shine takes reasonable care with your property. In the unlikely event of damage, please report it within 24 hours for investigation and resolution.</p>
        </div>
      </Container>
    </div>
  );
}
