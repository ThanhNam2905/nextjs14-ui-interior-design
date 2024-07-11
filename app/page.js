import AboutSection from '@/components/AboutSection';
import CatalogSwiperSection from '@/components/CatalogSwiperSection';
import CatalogueSection from '@/components/CatalogueSection';
import CompanySection from '@/components/CompanySection';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanySection />
      <AboutSection />
      <CatalogueSection />
      <CatalogSwiperSection />
    </>
  );
}
