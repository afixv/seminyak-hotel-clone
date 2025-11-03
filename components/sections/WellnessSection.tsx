/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface WellnessItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

const wellnessData: WellnessItem[] = [
  {
    title: "Sava Spa",
    description:
      "Crowned as The Best Spa in 5 star Resort in Indonesia, Sava Spa offers the uncomplicated indulgence of head to toe experience.",
    image: "/images/main-events.BWqmO2Bf.png",
    link: "/wellness/sava-spa",
  },
  {
    title: "24/7 Gym",
    description:
      "Our workout space features TRX suspension training equipment, free weights, spacious personal workout space, state-of-the-art cardio equipment, and a martial arts bag and floor zone. It's always a good time to work out as our gym is open daily 24/7 to ensure you can meet your fitness goals.",
    image: "/images/main-dining.Bq-1WGnP.png",
    link: "/wellness/gym",
  },
  {
    title: "Activities",
    description:
      "Balancing your holiday with a curated wellness and vibrant activities, inspired by the neighborhood of Seminyak, we invite you to join the series of activities available daily within our resort and around the neighborhood.",
    image: "/images/main-wedding.Bzni59le.png",
    link: "/wellness/activities",
  },
];

export default function WellnessSection() {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const initSwiper = async () => {
      if (typeof window !== "undefined") {
        const Swiper = (await import("swiper")).default;
        const { Navigation } = await import("swiper/modules");

        swiperRef.current = new Swiper(".mySwiperHomeActivities", {
          modules: [Navigation],
          slidesPerView: "auto",
          spaceBetween: 30,
          centeredSlides: true,
          loop: true,
          navigation: {
            nextEl: ".next-facility",
            prevEl: ".prev-facility",
          },
          breakpoints: {
            640: { slidesPerView: "auto", spaceBetween: 30 },
            1024: { slidesPerView: "auto", spaceBetween: 40 },
          },
        });
      }
    };

    initSwiper();
    return () => swiperRef.current?.destroy();
  }, []);

  return (
    <section className="pt-[80px] pb-20 relative hidden sm:block">
      <div className="container mx-auto px-4">
        <p className="uppercase text-primary text-[1.4rem] sm:text-[2.2rem] font-primary font-light text-center md:text-center lg:text-left mb-[30px] sm:mb-[50px]">
          Wellness
        </p>
      </div>

      <div className="swiper mySwiperHomeActivities overflow-hidden relative">
        <div className="swiper-wrapper">
          {[...wellnessData, ...wellnessData].map((item, index) => (
            <div
              key={index}
              className="swiper-slide w-[85vw]! md:w-[70vw]! lg:w-[60vw]! md:aspect-16/11 lg:aspect-video overflow-hidden relative">
              <Image
                src={item.image}
                alt={item.title}
                width={1920}
                height={1080}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 w-full py-[30px] px-[30px] sm:px-[50px] font-primary font-light bg-gradient-bottom md:h-[90%] lg:h-[50%] flex flex-col justify-end">
                <p className="uppercase text-body sm:text-white text-[1.2rem] sm:text-3xl pb-5">
                  {item.title}
                </p>
                <p className="text-body sm:text-white text-[.9rem]">
                  {item.description}
                </p>
                <div className="mt-[15px]">
                  <Link
                    href={item.link}
                    className="bg-primary text-white text-[.7rem] sm:text-[.7rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Navigasi */}
        <button
          className="swiper-button-prev prev-facility absolute top-1/2 -translate-y-1/2 !left-[5vw] z-10 !h-[40px] !w-[40px] sm:!h-[50px] sm:!w-[50px] bg-[#6b6b6bab] rounded-full backdrop-blur-sm after:!content-[unset] hover:bg-[#6b6b6bcc] transition-all duration-200"
          aria-label="Previous slide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white"
            width="100%"
            height="100%"
            viewBox="0 0 256 256">
            <path d="M164.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L88.49,128Z"></path>
          </svg>
        </button>

        <button
          className="swiper-button-next next-facility absolute top-1/2 -translate-y-1/2 !right-[5vw] z-10 !h-[40px] !w-[40px] sm:!h-[50px] sm:!w-[50px] bg-[#6b6b6bab] rounded-full backdrop-blur-sm after:!content-[unset] hover:bg-[#6b6b6bcc] transition-all duration-200"
          aria-label="Next slide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white"
            width="100%"
            height="100%"
            viewBox="0 0 256 256">
            <path d="M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"></path>
          </svg>
        </button>
      </div>
    </section>
  );
}
