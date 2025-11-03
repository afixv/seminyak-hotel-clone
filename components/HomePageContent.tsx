"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WellnessSection from "./WellnessSection";
import OffersSection from "./OffersSection";
import GallerySection from "./GallerySection";
import InstagramSection from "./InstagramSection";
import LocationSection from "./LocationSection";
import ReviewsSection from "./ReviewsSection";
import AccommodationSection from "./AccommodationSection";
import EventsSection from "./EventsSection";
import IntroSection from "./IntroSection";
import DiningSection from "./DiningSection";
import Footer from "./Footer";

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
