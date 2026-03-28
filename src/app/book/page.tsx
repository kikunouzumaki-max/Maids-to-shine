'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { trackGA4Event, trackMetaPixel } from '@/lib/analytics';

const SERVICES = [
  { id: 'residential', label: '🏠 Residential', slug: 'residential-cleaning' },
  { id: 'deep', label: '✨ Deep Clean', slug: 'deep-cleaning' },
  { id: 'post-construction', label: '🏗️ Post-Construction', slug: 'post-construction-cleaning' },
  { id: 'commercial', label: '🏢 Commercial', slug: 'commercial-cleaning' },
  { id: 'household', label: '👩‍🍳 Household Staff', slug: 'housemaids-nannies-cooks' },
  { id: 'move', label: '📦 Move-In/Out', slug: 'move-in-move-out-cleaning' },
];

const FREQUENCIES = ['Once', 'Weekly', 'Bi-weekly', 'Monthly'];

const AREAS = [
  { group: 'Sharjah', options: ['Sharjah', 'Al Nahda, Sharjah', 'Al Khan, Sharjah', 'Muwaileh, Sharjah'] },
  { group: 'Ajman', options: ['Ajman', 'Al Rashidiya, Ajman', 'Al Jurf, Ajman'] },
];

type FormData = {
  services: string[];
  frequency: string;
  area: string;
  date: string;
  time: string;
  notes: string;
  name: string;
  phone: string;
};

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [form, setForm] = useState<FormData>({
    services: [],
    frequency: 'Once',
    area: '',
    date: '',
    time: '',
    notes: '',
    name: '',
    phone: '',
  });

  const toggleService = (id: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }));
    setErrors((prev) => ({ ...prev, services: undefined }));
  };

  const validateStep = (s: number): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (s === 1 && form.services.length === 0) {
      errs.services = 'Please select at least one service.';
    }
    if (s === 2 && !form.area) {
      errs.area = 'We need this to confirm your booking.';
    }
    if (s === 3) {
      if (!form.name.trim()) errs.name = 'We need this to confirm your booking.';
      if (!form.phone.trim()) {
        errs.phone = 'We need this to confirm your booking.';
      } else if (!/^\+?971\s?\d{2}\s?\d{3}\s?\d{4}$/.test(form.phone.replace(/\s/g, ''))) {
        errs.phone = 'Please enter a valid UAE number (e.g. +971 56 607 1541)';
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const nextStep = () => {
    if (!validateStep(step)) return;
    const next = step + 1;
    setStep(next);
    trackGA4Event(`booking_step_${next}`);
  };

  const prevStep = () => setStep((s) => Math.max(1, s - 1));

  const handleSubmit = async () => {
    if (!validateStep(3)) return;
    setSubmitting(true);
    // In production: POST /api/v1/bookings
    await new Promise((r) => setTimeout(r, 1500));
    trackGA4Event('booking_complete');
    trackMetaPixel('Purchase', { value: 0, currency: 'AED' });
    window.location.href = '/thank-you';
  };

  // Track booking start
  if (typeof window !== 'undefined') {
    trackGA4Event('booking_start');
    trackMetaPixel('InitiateCheckout');
  }

  const stepLabels = ['Service', 'Details', 'Contact'];

  return (
    <div className="min-h-screen bg-pearl-50 dark:bg-dark-bg py-12 sm:py-16">
      <Container className="max-w-2xl!">
        <div className="text-center mb-10">
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-pearl-900 dark:text-dark-text">
            Book Your Clean
          </h1>
          <p className="mt-2 text-pearl-600 dark:text-dark-muted text-lg">
            Takes less than 60 seconds. No payment now.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {stepLabels.map((label, i) => {
            const n = i + 1;
            const done = step > n;
            const current = step === n;
            return (
              <div key={label} className="flex items-center gap-2">
                {i > 0 && (
                  <div className={`w-8 h-px ${done ? 'bg-teal-400' : 'bg-pearl-300 dark:bg-dark-border'}`} />
                )}
                <div className="flex flex-col items-center gap-1">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition-colors
                      ${done ? 'brand-gradient text-white' : ''}
                      ${current ? 'border-2 border-teal-400 text-teal-600 dark:text-teal-400' : ''}
                      ${!done && !current ? 'border border-pearl-300 dark:border-dark-border text-pearl-400 dark:text-dark-muted' : ''}
                    `}
                  >
                    {done ? '✓' : n}
                  </div>
                  <span className={`text-xs font-medium ${current ? 'text-teal-600 dark:text-teal-400' : 'text-pearl-400 dark:text-dark-muted'}`}>
                    {label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Form Card */}
        <div className="bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border rounded-2xl p-6 sm:p-8 shadow-sm">
          {/* Step 1 */}
          {step === 1 && (
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-semibold text-pearl-900 dark:text-dark-text mb-2">
                What can we clean for you?
              </h2>
              <p className="text-pearl-500 dark:text-dark-muted mb-6">
                Choose one or more services — we&apos;ll tailor a quote to match.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => toggleService(s.id)}
                    className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-[120ms] cursor-pointer min-h-[44px]
                      ${form.services.includes(s.id)
                        ? 'brand-gradient text-white shadow-brand'
                        : 'bg-pearl-100 dark:bg-dark-elevated text-pearl-700 dark:text-dark-muted hover:bg-pearl-200 dark:hover:bg-dark-border'
                      }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              {errors.services && <p className="text-sm text-danger-text mb-4">{errors.services}</p>}

              <div className="mb-6">
                <label className="text-sm font-medium text-pearl-700 dark:text-pearl-300 mb-2 block">
                  How often?
                </label>
                <div className="flex rounded-xl border border-pearl-200 dark:border-dark-border overflow-hidden">
                  {FREQUENCIES.map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setForm((p) => ({ ...p, frequency: f }))}
                      className={`flex-1 py-2.5 text-sm font-medium transition-colors cursor-pointer min-h-[44px]
                        ${form.frequency === f
                          ? 'brand-gradient text-white'
                          : 'bg-pearl-0 dark:bg-dark-surface text-pearl-600 dark:text-dark-muted hover:bg-pearl-50 dark:hover:bg-dark-elevated'
                        }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <Button onClick={nextStep} size="lg" className="w-full">
                Continue →
              </Button>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-semibold text-pearl-900 dark:text-dark-text mb-2">
                When works for you?
              </h2>
              <p className="text-pearl-500 dark:text-dark-muted mb-6">
                We&apos;re available 24 hours. Pick any time that suits you.
              </p>

              <div className="space-y-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="area" className="text-sm font-medium text-pearl-700 dark:text-pearl-300">
                    Your Area
                  </label>
                  <select
                    id="area"
                    value={form.area}
                    onChange={(e) => {
                      setForm((p) => ({ ...p, area: e.target.value }));
                      setErrors((p) => ({ ...p, area: undefined }));
                    }}
                    className="w-full rounded-xl border border-pearl-200 dark:border-dark-border bg-pearl-0 dark:bg-dark-surface px-4 py-3 text-base text-pearl-900 dark:text-dark-text focus:border-teal-400 focus:ring-3 focus:ring-teal-400/20 focus:outline-none min-h-[44px] cursor-pointer"
                  >
                    <option value="">Which area are you in?</option>
                    {AREAS.map((g) => (
                      <optgroup key={g.group} label={g.group}>
                        {g.options.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                  {errors.area && <p className="text-sm text-danger-text">{errors.area}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Preferred Date"
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))}
                    min={new Date(Date.now() + 86400000).toISOString().split('T')[0]}
                  />
                  <Input
                    label="Preferred Time"
                    type="time"
                    value={form.time}
                    onChange={(e) => setForm((p) => ({ ...p, time: e.target.value }))}
                    step={1800}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="notes" className="text-sm font-medium text-pearl-700 dark:text-pearl-300">
                    Anything else we should know?
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={form.notes}
                    onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))}
                    placeholder="e.g. 'I have 2 cats' or 'focus on bathrooms'"
                    className="w-full rounded-xl border border-pearl-200 dark:border-dark-border bg-pearl-0 dark:bg-dark-surface px-4 py-3 text-base text-pearl-900 dark:text-dark-text placeholder:text-pearl-400 dark:placeholder:text-dark-muted focus:border-teal-400 focus:ring-3 focus:ring-teal-400/20 focus:outline-none resize-none"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button variant="ghost" onClick={prevStep} size="md">
                  ← Back
                </Button>
                <Button onClick={nextStep} size="lg" className="flex-1">
                  Continue →
                </Button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-semibold text-pearl-900 dark:text-dark-text mb-2">
                Almost done — how do we reach you?
              </h2>

              <div className="space-y-5 mt-6">
                <Input
                  label="Your Name"
                  placeholder="What should we call you?"
                  value={form.name}
                  onChange={(e) => {
                    setForm((p) => ({ ...p, name: e.target.value }));
                    setErrors((p) => ({ ...p, name: undefined }));
                  }}
                  error={errors.name}
                />
                <Input
                  label="WhatsApp Number"
                  placeholder="+971 5X XXX XXXX"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => {
                    setForm((p) => ({ ...p, phone: e.target.value }));
                    setErrors((p) => ({ ...p, phone: undefined }));
                  }}
                  error={errors.phone}
                />
                <p className="text-sm text-pearl-500 dark:text-dark-muted flex items-center gap-1.5">
                  🔒 Your number is only used to confirm your booking via WhatsApp. Never shared.
                </p>
              </div>

              <div className="flex gap-3 mt-8">
                <Button variant="ghost" onClick={prevStep} size="md">
                  ← Back
                </Button>
                <Button
                  onClick={handleSubmit}
                  size="lg"
                  className="flex-1"
                  disabled={submitting}
                >
                  {submitting ? 'Sending your booking… 🌿' : 'Book My Clean →'}
                </Button>
              </div>
              <p className="text-center text-sm text-pearl-500 dark:text-dark-muted mt-4">
                No payment needed now. We&apos;ll confirm details over WhatsApp.
              </p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
