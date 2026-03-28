'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/components/ThemeProvider';

const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/about', label: 'About' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Focus trap for mobile drawer
  useEffect(() => {
    if (mobileOpen && drawerRef.current) {
      const focusableEls = drawerRef.current.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusableEls[0];
      const last = focusableEls[focusableEls.length - 1];
      first?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileOpen(false);
          return;
        }
        if (e.key !== 'Tab') return;
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`
          navbar-frosted sticky top-0 z-50
          transition-shadow duration-[220ms]
          ${scrolled ? 'shadow-sm border-b border-pearl-200/60 dark:border-dark-border/60' : ''}
        `}
        aria-label="Main navigation"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Maids To Shine — Home">
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-white/10 p-1 transition-transform group-hover:scale-105">
              <img
                src="/brand/logo.png"
                alt="Maids To Shine Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="font-semibold text-pearl-900 dark:text-dark-text tracking-wide text-sm uppercase">
              Maids To Shine
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-pearl-600 dark:text-pearl-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-[120ms]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-lg text-pearl-500 dark:text-pearl-400 hover:bg-pearl-100 dark:hover:bg-dark-elevated transition-colors cursor-pointer"
            >
              {theme === 'light' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              )}
            </button>

            {/* Book Now CTA */}
            <Button href="/book" size="sm" className="hidden sm:inline-flex">
              Book Now
            </Button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-pearl-700 dark:text-pearl-300 hover:bg-pearl-100 dark:hover:bg-dark-elevated transition-colors cursor-pointer"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label="Mobile menu">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-pearl-900/50 dark:bg-black/60"
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer */}
          <div
            ref={drawerRef}
            className="absolute right-0 top-0 h-full w-[280px] bg-pearl-0 dark:bg-dark-surface shadow-xl p-6 flex flex-col gap-6 animate-[slideIn_300ms_var(--ease-out)]"
          >
            {/* Close */}
            <div className="flex justify-between items-center">
              <span className="font-semibold text-pearl-900 dark:text-dark-text text-sm uppercase tracking-wide">
                Menu
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="h-10 w-10 flex items-center justify-center rounded-lg text-pearl-500 dark:text-pearl-400 hover:bg-pearl-100 dark:hover:bg-dark-elevated transition-colors cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center h-12 px-3 rounded-lg text-base font-medium text-pearl-700 dark:text-pearl-300 hover:bg-pearl-100 dark:hover:bg-dark-elevated transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/faq"
                onClick={() => setMobileOpen(false)}
                className="flex items-center h-12 px-3 rounded-lg text-base font-medium text-pearl-700 dark:text-pearl-300 hover:bg-pearl-100 dark:hover:bg-dark-elevated transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center h-12 px-3 rounded-lg text-base font-medium text-pearl-700 dark:text-pearl-300 hover:bg-pearl-100 dark:hover:bg-dark-elevated transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Dark mode toggle mobile */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-3 h-12 px-3 rounded-lg text-base font-medium text-pearl-700 dark:text-pearl-300 hover:bg-pearl-100 dark:hover:bg-dark-elevated transition-colors cursor-pointer"
            >
              {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>

            {/* CTA */}
            <div className="mt-auto flex flex-col gap-3">
              <Button href="/book" size="md" className="w-full" onClick={() => setMobileOpen(false)}>
                Book Now
              </Button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
