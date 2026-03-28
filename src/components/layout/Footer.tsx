import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { generateWhatsAppLink, getPhoneDisplay } from '@/lib/whatsapp';

const SERVICE_LINKS = [
  { href: '/services/residential-cleaning', label: 'Residential Cleaning' },
  { href: '/services/deep-cleaning', label: 'Deep Cleaning' },
  { href: '/services/post-construction-cleaning', label: 'Post-Construction' },
  { href: '/services/commercial-cleaning', label: 'Commercial Cleaning' },
  { href: '/services/housemaids-nannies-cooks', label: 'Household Staff' },
  { href: '/services/move-in-move-out-cleaning', label: 'Move-In/Out' },
];

const AREA_LINKS = [
  { href: '/areas/sharjah', label: 'Sharjah' },
  { href: '/areas/sharjah-al-nahda', label: 'Al Nahda' },
  { href: '/areas/sharjah-al-khan', label: 'Al Khan' },
  { href: '/areas/sharjah-muwaileh', label: 'Muwaileh' },
  { href: '/areas/ajman', label: 'Ajman' },
  { href: '/areas/ajman-al-rashidiya', label: 'Al Rashidiya' },
];

const COMPANY_LINKS = [
  { href: '/about', label: 'About Us' },
  { href: '/about/our-team', label: 'Our Team' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
];

export function Footer() {
  return (
    <footer className="bg-pearl-900 dark:bg-pearl-900 text-pearl-300 pt-16 pb-8">
      <Container>
        {/* CTA Banner */}
        <div className="mb-12 rounded-2xl brand-gradient p-8 sm:p-10 text-center">
          <p className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-white mb-3">
            Ready for a spotless home?
          </p>
          <p className="text-white/80 mb-6 text-base">
            Chat with us on WhatsApp anytime.
          </p>
          <a
            href={generateWhatsAppLink('fab')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-pearl-900 font-medium px-6 py-3 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-[220ms]"
          >
            💬 Start on WhatsApp
          </a>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-pearl-100 uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-pearl-400 hover:text-teal-400 transition-colors duration-[120ms]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-sm font-semibold text-pearl-100 uppercase tracking-wider mb-4">
              Areas
            </h3>
            <ul className="space-y-2.5">
              {AREA_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-pearl-400 hover:text-teal-400 transition-colors duration-[120ms]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-pearl-100 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-pearl-400 hover:text-teal-400 transition-colors duration-[120ms]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-pearl-100 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={generateWhatsAppLink('fab')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-pearl-400 hover:text-whatsapp transition-colors duration-[120ms]"
                >
                  💬 WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${getPhoneDisplay().replace(/\s+/g, '')}`}
                  className="text-sm text-pearl-400 hover:text-teal-400 transition-colors duration-[120ms]"
                >
                  📞 {getPhoneDisplay()}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/maidstoshinecleaning/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-pearl-400 hover:text-teal-400 transition-colors duration-[120ms]"
                >
                  📸 @maidstoshinecleaning
                </a>
              </li>
              <li className="text-sm text-pearl-400">
                📍 Sharjah & Ajman, UAE
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-pearl-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-white/5 p-1.5 transition-transform hover:scale-105">
              <img
                src="/brand/logo-dark.png"
                alt="Maids To Shine Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-sm text-pearl-500">
              Making Sharjah & Ajman homes shine, one room at a time.
            </span>
          </div>
          <p className="text-xs text-pearl-600">
            © 2025 Maids To Shine Cleaning Services · Sharjah, UAE · All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}
