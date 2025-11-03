"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Button, Heading, Text, Container } from "@/components/ui";

gsap.registerPlugin(ScrollTrigger);

export default function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !sectionRef.current ||
      !imageRef.current ||
      !headingRef.current ||
      !aboutRef.current
    )
      return;

    gsap.to(imageRef.current, {
      y: -300,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: false,
      },
    });

    gsap.to(headingRef.current, {
      y: -30,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: false,
      },
    });

    gsap.to(aboutRef.current, {
      y: -30,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="home-intro"
      className="py-12 sm:py-24 overflow-hidden"
      ref={sectionRef}>
      <Container className="flex flex-col md:flex lg:grid lg:grid-cols-3 gap-8">
        <div className="flex flex-col md:flex lg:grid lg:grid-cols-2 items-center col-span-2 gap-8">
          <div ref={headingRef}>
            <Heading
              level="h1"
              size="xl"
              className="hidden sm:hidden md:hidden lg:block md:pb-[30px] lg:pb-0 lg:pr-2 xl:text-[3rem]">
              The First 5-star
              <br />
              Hotel Indigo
              <br />
              In A Resort Location
            </Heading>
            <Heading
              level="h1"
              size="lg"
              className="block sm:block md:block lg:hidden mb-[30px] sm:pr-2">
              The First 5-star
              <br />
              Hotel Indigo
              <br />
              In A Resort
              <br />
              Location
            </Heading>
          </div>

          <div className="relative">
            <Image
              src="/images/slideshow-2.BCv-Awm_.png"
              alt="Hotel Indigo - Bali Seminyak Beach"
              width={640}
              height={600}
              className="introImg h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] w-[60%] sm:w-full rounded-tl-[100px] sm:rounded-tl-[150px] lg:rounded-tl-[150px] xl:rounded-tl-[200px] object-cover relative z-2 ml-[25px] sm:ml-[unset]"
            />
            <div
              ref={imageRef}
              className="boxIntro absolute z-1 w-[200px] h-[250px] md:w-[250px] md:h-[300px] lg:w-[300px] lg:h-[400px] bg-primary block right-0 sm:-right-[50px] top-[55%] sm:top-[45%] mr-[25px] sm:mr-[unset]"></div>
          </div>
        </div>

        <div
          className="font-primary mt-[100px] sm:mt-0 sm:pl-[100px] md:pl-0 lg:pl-[100px] pt-0 md:pt-20 lg:pt-0"
          ref={aboutRef}>
          <Heading level="h2" size="lg">
            About Us & Our Neighborhood
          </Heading>
          <Text className="mt-5 lg:text-left">
            Hotel Indigo Bali Seminyak Beach is situated in the heart of one of
            Bali&apos;s most vibrant districts, a place where centuries of
            tradition and culture blend seamlessly with an atmosphere of casual
            sophistication.
          </Text>
          <div className="mt-5 flex md:flex justify-center lg:inline-block">
            <Button href="/en/about-us" size="md" variant="primary">
              Explore
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
