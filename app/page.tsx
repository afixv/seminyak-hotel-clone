import LoadingScreen from '@/components/features/LoadingScreen';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/features/HeroSection';
import HomePageContent from '@/components/HomePageContent';
import MobileBottomNav from '@/components/layout/MobileBottomNav';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <HeroSection />
      <HomePageContent />
      <MobileBottomNav />
    </>
  );
}
