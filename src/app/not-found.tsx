import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-pearl-50 dark:bg-dark-bg">
      <Container className="max-w-lg! text-center">
        <div className="text-6xl mb-6">🏠</div>
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-pearl-900 dark:text-dark-text mb-4">
          Oops — this page wandered off. Your clean home didn&apos;t, though.
        </h1>
        <Link
          href="/"
          className="inline-flex items-center gap-2 brand-gradient text-white font-medium px-6 py-3 rounded-xl shadow-brand hover:shadow-lg hover:-translate-y-0.5 transition-all duration-[220ms]"
        >
          Take Me Home →
        </Link>
      </Container>
    </div>
  );
}
