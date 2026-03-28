import { Container } from '@/components/ui/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Common questions about Maids To Shine cleaning services in Sharjah & Ajman — pricing, scheduling, service areas, and more.',
};

const FAQS = [
  {
    q: 'How quickly can you send a maid?',
    a: "In most cases, we can arrange same-day cleaning for Sharjah and Ajman. Message us on WhatsApp with your timing — we'll do our best to make it work.",
  },
  {
    q: 'Do I need to provide cleaning supplies?',
    a: 'Not at all. Our team arrives fully equipped with all materials and products. You don\'t need to prepare anything except access to your home.',
  },
  {
    q: 'Can I request the same maid every time?',
    a: "Yes — and we encourage it. Familiar maids know your home and your preferences. Customers like Zoe ask for Emily by name because consistency matters.",
  },
  {
    q: 'What areas do you serve?',
    a: "We specialise in Sharjah and Ajman — including Al Nahda, Al Khan, Muwaileh, Al Rashidiya, and surrounding neighbourhoods. If you're not sure, message us and we'll confirm in minutes.",
  },
  {
    q: 'Is the AED 25/hr rate all-inclusive?',
    a: 'Yes. Equipment, supplies, and travel within Sharjah & Ajman are all included. No hidden fees, no deposit for first-time bookings.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="py-16 sm:py-20 bg-pearl-50 dark:bg-dark-bg min-h-screen">
        <Container className="max-w-2xl!">
          <nav className="mb-8 text-sm text-pearl-500 dark:text-dark-muted" aria-label="Breadcrumb">
            <a href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</a>
            <span className="mx-2">›</span>
            <span className="text-pearl-900 dark:text-dark-text">FAQ</span>
          </nav>

          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-pearl-900 dark:text-dark-text mb-10">
            Frequently Asked Questions
          </h1>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-pearl-900 dark:text-dark-text hover:bg-pearl-50 dark:hover:bg-dark-elevated transition-colors min-h-[44px] list-none">
                  <span>{faq.q}</span>
                  <svg
                    className="h-5 w-5 text-pearl-400 group-open:rotate-180 transition-transform duration-[220ms] flex-shrink-0 ml-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-pearl-600 dark:text-dark-muted leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
