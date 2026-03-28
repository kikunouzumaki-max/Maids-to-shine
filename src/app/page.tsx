import { HeroSection } from '@/components/sections/HeroSection';
import { TrustBar } from '@/components/sections/TrustBar';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { ClosingCTA } from '@/components/sections/ClosingCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <WhyUsSection />
      <ReviewsSection />
      <ClosingCTA />
    </>
  );
}
