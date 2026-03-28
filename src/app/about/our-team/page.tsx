import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet Our Team',
  description: 'Meet the dedicated team behind Maids To Shine — the people who make Sharjah & Ajman homes shine.',
};

const TEAM = [
  {
    name: 'Emily',
    role: 'Lead Cleaner',
    note: 'Loves leaving kitchens spotless and always brings her own playlist. ✨',
    initial: 'E',
  },
  {
    name: 'Sarah',
    role: 'Senior Cleaner',
    note: 'Bathroom specialist — every tile gleams after she\'s done. 🪣',
    initial: 'S',
  },
  {
    name: 'Fatima',
    role: 'Household Manager',
    note: 'Organizes everything with a warm smile and military precision. 📋',
    initial: 'F',
  },
  {
    name: 'Grace',
    role: 'Deep Clean Specialist',
    note: 'Finds dirt in places you didn\'t know existed. That thorough. 🔍',
    initial: 'G',
  },
];

export default function OurTeamPage() {
  return (
    <div className="py-16 sm:py-20 bg-pearl-50 dark:bg-dark-bg min-h-screen">
      <Container className="max-w-3xl!">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-pearl-500 dark:text-dark-muted" aria-label="Breadcrumb">
          <a href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</a>
          <span className="mx-2">›</span>
          <a href="/about" className="hover:text-teal-600 dark:hover:text-teal-400">About</a>
          <span className="mx-2">›</span>
          <span className="text-pearl-900 dark:text-dark-text">Our Team</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-pearl-900 dark:text-dark-text">
            Meet the Team Behind Your Clean Home
          </h1>
          <p className="mt-3 text-pearl-600 dark:text-dark-muted text-lg">
            Real people who care about your space as much as you do.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="group bg-pearl-0 dark:bg-dark-surface border border-pearl-200 dark:border-dark-border rounded-xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-[220ms]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full brand-gradient text-white text-2xl font-semibold mb-4 group-hover:shadow-brand transition-shadow">
                {member.initial}
              </div>
              <h2 className="font-semibold text-pearl-900 dark:text-dark-text text-lg group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {member.name}
              </h2>
              <p className="text-sm text-teal-600 dark:text-teal-400 font-medium mb-2">
                {member.role}
              </p>
              <p className="text-pearl-600 dark:text-dark-muted text-[0.95rem]">
                {member.note}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/book" size="lg">
            Book a Cleaning →
          </Button>
        </div>
      </Container>
    </div>
  );
}
