import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans, DM_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFAB } from '@/components/layout/WhatsAppFAB';
import { ScrollReveal } from '@/components/ScrollReveal';
import './globals.css';

const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const bodyFont = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
});

const monoFont = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Cleaning Services Sharjah & Ajman | Maids To Shine — 25 AED/hr',
    template: '%s | Maids To Shine',
  },
  description:
    'Professional home cleaning across Sharjah & Ajman. Trusted maids, 24/7 availability, from AED 25/hr. Book via WhatsApp in under 60 seconds. 4.5★ on Google.',
  metadataBase: new URL('https://maidstoshinecleaning.ae'),
  alternates: {
    languages: { 'en-AE': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://maidstoshinecleaning.ae',
    siteName: 'Maids To Shine Cleaning Services',
    title: 'Cleaning Services Sharjah & Ajman | Maids To Shine — 25 AED/hr',
    description:
      'Professional home cleaning across Sharjah & Ajman. Trusted maids, 24/7 availability, from AED 25/hr. Book via WhatsApp in under 60 seconds.',
    images: [
      {
        url: 'https://maidstoshinecleaning.ae/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Maids To Shine Cleaning Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maids To Shine Cleaning Services',
    description:
      'Professional home cleaning across Sharjah & Ajman. From AED 25/hr. Book via WhatsApp.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Maids To Shine Cleaning Services',
  telephone: '+971566071541',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Sharjah',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.3463,
    longitude: 55.4209,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  priceRange: 'AED 25-30/hr',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.5',
    reviewCount: '19',
  },
  logo: 'https://maidstoshinecleaning.ae/brand/logo.png',
  image: 'https://maidstoshinecleaning.ae/og-image.png',
  sameAs: ['https://www.instagram.com/maidstoshinecleaning/'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <ThemeProvider>
          <ScrollReveal />
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppFAB />
        </ThemeProvider>
      </body>
    </html>
  );
}
