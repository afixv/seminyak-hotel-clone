"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IntroSection from "./sections/IntroSection";
import AccommodationSection from "./sections/AccommodationSection";
import DiningSection from "./sections/DiningSection";
import EventsSection from "./sections/EventsSection";
import WellnessSection from "./sections/WellnessSection";
import OffersSection from "./sections/OffersSection";
import ReviewsSection from "./sections/ReviewsSection";
import GallerySection from "./features/GallerySection";
import InstagramSection from "./features/InstagramSection";
import LocationSection from "./features/LocationSection";
import Footer from "./layout/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function HomePageContent() {
  useEffect(() => {
    // GSAP scroll animations - Temporarily disabled for accommodation section
    // All sections removed from animations
  }, []);

  return (
    <main>
      {/* Intro Section */}
      <IntroSection />

      {/* Accommodation Section */}
      <AccommodationSection />

      {/* Dining Section */}
      <DiningSection />

      {/* Events Section */}
      <EventsSection />

      {/* Wellness Section */}
      <WellnessSection />

      {/* Offers Section */}
      <OffersSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Instagram Section */}
      <InstagramSection />

      {/* Location Section */}
      <LocationSection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
