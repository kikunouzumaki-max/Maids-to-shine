const PHONE = '971566071541';

const MESSAGES: Record<string, string> = {
  homepage:
    "Hi! 👋 I found Maids To Shine online and I'm interested in a cleaning service. Can you tell me more about availability in my area and pricing?",
  instagram:
    "Hi! I saw your Instagram 👀 — I'd love to book a cleaning for my home. I'm in my area. What's available this week?",
  pricing:
    "Hi Maids To Shine 🌿 I checked your pricing page and I'm interested in learning more. Can we work out the details?",
  'thank-you':
    'Hi! I just submitted a booking request on your website. Wanted to confirm you received it and check on timing. 🙏',
  fab: "Hi! 👋 I'd like to book a cleaning service. Can you help?",
  review:
    "Hi! I read your reviews and would love to book a clean. I'm in my area — what's available?",
};

export function generateWhatsAppLink(
  source: string = 'fab',
  params?: { plan?: string; area?: string }
): string {
  let message = MESSAGES[source] || MESSAGES.fab;

  if (params?.area) {
    message = message.replace(/my area/g, params.area);
  }
  if (params?.plan) {
    message = message.replace(/learning more/, `the ${params.plan} option`);
  }

  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export function getPhoneDisplay(): string {
  return '+971 56 607 1541';
}

export function getPhoneLink(): string {
  return `tel:+${PHONE}`;
}
