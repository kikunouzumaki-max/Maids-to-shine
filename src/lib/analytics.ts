/* Analytics helper — no-ops gracefully when IDs are missing */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackGA4Event(
  eventName: string,
  params?: Record<string, unknown>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

export function trackMetaPixel(
  eventName: string,
  data?: Record<string, unknown>
) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, data);
  }
}

export function trackWhatsAppClick(source: string) {
  trackGA4Event('whatsapp_cta_click', { source });
  trackMetaPixel('Lead', { source });
}
