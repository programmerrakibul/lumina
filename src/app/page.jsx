import CategoriesSection from "@/components/ui/CategoriesSection";
import FeaturedCarouselSection from "@/components/ui/FeaturedCarouselSection";
import HeroSection from "@/components/ui/HeroSection";
import NewsletterSection from "@/components/ui/NewsletterSection";
import StatsSection from "@/components/ui/StatsSection";
import TestimonialsSection from "@/components/ui/TestimonialsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedCarouselSection />
      <CategoriesSection />
      <StatsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
};

export default Home;
