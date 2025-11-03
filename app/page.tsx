import LoadingScreen from '@/components/LoadingScreen';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HomePageContent from '@/components/HomePageContent';
import MobileBottomNav from '@/components/MobileBottomNav';

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
