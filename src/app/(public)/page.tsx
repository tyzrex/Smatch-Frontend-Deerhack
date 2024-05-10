import FeaturedJobsSection from "@/components/landing/sections/featured-jobs-section";
import FeaturesSection from "@/components/landing/sections/features-section";
import HeroSection from "@/components/landing/sections/hero-section";
import JoinToday from "@/components/landing/sections/join-today-section";
import UserFeedback from "@/components/landing/sections/user-feedback-section";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <FeaturesSection />
        <UserFeedback />
        <FeaturedJobsSection />
        <JoinToday />
      </main>
    </>
  );
}
