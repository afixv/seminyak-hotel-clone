"use client";

import React, { useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Lazy import components
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

/**
 * HomePageContent - Main page orchestrator
 * Combines all sections into a single page
 */
export default function HomePageContent() {
  // Memoize section components to prevent unnecessary re-renders
  const sections = useMemo(() => [
    { id: "intro", component: <IntroSection key="intro" /> },
    { id: "accommodation", component: <AccommodationSection key="accommodation" /> },
    { id: "dining", component: <DiningSection key="dining" /> },
    { id: "events", component: <EventsSection key="events" /> },
    { id: "wellness", component: <WellnessSection key="wellness" /> },
    { id: "offers", component: <OffersSection key="offers" /> },
    { id: "gallery", component: <GallerySection key="gallery" /> },
    { id: "instagram", component: <InstagramSection key="instagram" /> },
    { id: "location", component: <LocationSection key="location" /> },
    { id: "reviews", component: <ReviewsSection key="reviews" /> },
    { id: "footer", component: <Footer key="footer" /> },
  ], []);

  return (
    <main>
      {sections.map(section => section.component)}
    </main>
  );
}
