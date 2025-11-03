'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function HeroSection() {
  const [showSlider, setShowSlider] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlaySlide = () => {
    setShowSlider(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handlePausePlay = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  const handleMuteUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Hero slider images (placeholders - actual files not in imgs folder yet)
  const heroSlides = [
    { src: '/images/slideshow-2.BCv-Awm_.png', alt: 'Hotel Indigo - Bali Seminyak Beach' },
    { src: '/images/slideshow-2.BCv-Awm_.png', alt: 'Hotel Indigo - Bali Seminyak Beach' },
    { src: '/images/slideshow-2.BCv-Awm_.png', alt: 'Hotel Indigo - Bali Seminyak Beach' },
    { src: '/images/slideshow-2.BCv-Awm_.png', alt: 'Hotel Indigo - Bali Seminyak Beach' },
  ];

  return (
    <section id="hero" className="relative h-[70vh] sm:h-screen overflow-hidden">
      {/* Video Background */}
      <div className={`absolute top-0 left-0 w-full h-full ${showSlider ? 'hidden' : 'block'}`}>
        <div className="relative h-full w-full overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute bottom-0 left-0 max-w-none w-[120%] h-full object-cover animate-slideLeftRight"
          >
            <source src="/videos/intro-video-hd.webm" type="video/mp4" />
          </video>
          <div className="absolute h-full w-full left-0 font-primary text-white flex items-end justify-center after:content-[''] after:absolute after:bottom-0 after:block after:bg-gradient-bottom after:w-full after:h-[40%] before:content-[''] before:absolute before:top-0 before:block before:w-full before:h-[30%] before:bg-gradient-top">
            <div className="text-content text-center mb-[100px] relative z-20">
              <p className="uppercase text-[.9rem] sm:text-[1.5rem] lg:text-[1.8rem] xl:text-[2rem] font-light leading-[100%]">
                BOUTIQUE HOTEL STEPS FROM
              </p>
              <p className="uppercase text-[1.3rem] sm:text-[1.5rem] lg:text-[2.8rem] xl:text-[3rem]">
                SEMINYAK BEACH FRONT
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Swiper Slider */}
      <div id="heroSlide" className={`h-full ${showSlider ? 'block' : 'hidden'}`}>
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="h-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="slide-image object-cover animate-slideLeftRight"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  priority={index === 0}
                />
                <div className="absolute h-full w-full left-0 font-primary text-white flex items-end justify-center after:content-[''] after:absolute after:bottom-0 after:block after:bg-gradient-bottom after:w-full after:h-[40%] before:content-[''] before:absolute before:top-0 before:block before:w-full before:h-[30%] before:bg-gradient-top">
                  <div className="text-content text-center mb-[100px] relative z-10">
                    <p className="uppercase text-[.9rem] sm:text-[1.5rem] lg:text-[1.8rem] xl:text-[2rem] font-light leading-[100%]">
                      BOUTIQUE HOTEL STEPS FROM
                    </p>
                    <p className="uppercase text-[1.3rem] sm:text-[1.5rem] lg:text-[2.8rem] xl:text-[3rem]">
                      SEMINYAK BEACH FRONT
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Function Buttons - Left Bottom */}
      <div className="functionButton absolute left-[30px] sm:left-[50px] bottom-[30px] sm:bottom-[57px] flex justify-between items-center z-10">
        <div className="buttonLeft flex items-center gap-3">
          <div className="vid flex items-center gap-3">
            <button
              onClick={handlePlaySlide}
              aria-label="View Slider"
              className="playSlide transition-all duration-300 hover:opacity-50"
            >
              <svg
                className="fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 256 256"
              >
                <path d="M208,58H179.21L165,36.67A6,6,0,0,0,160,34H96a6,6,0,0,0-5,2.67L76.78,58H48A22,22,0,0,0,26,80V192a22,22,0,0,0,22,22H208a22,22,0,0,0,22-22V80A22,22,0,0,0,208,58Zm10,134a10,10,0,0,1-10,10H48a10,10,0,0,1-10-10V80A10,10,0,0,1,48,70H80a6,6,0,0,0,5-2.67L99.21,46h57.57L171,67.33A6,6,0,0,0,176,70h32a10,10,0,0,1,10,10ZM128,90a42,42,0,1,0,42,42A42,42,0,0,0,128,90Zm0,72a30,30,0,1,1,30-30A30,30,0,0,1,128,162Z"></path>
              </svg>
            </button>
            <button
              onClick={handlePausePlay}
              aria-label="Pause & Play Video"
              className="isPause transition-all duration-300 hover:opacity-50"
            >
              {isPaused ? (
                <svg
                  className="fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                  viewBox="0 0 256 256"
                >
                  <path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"></path>
                </svg>
              ) : (
                <svg
                  className="fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"></path>
                </svg>
              )}
            </button>
            <button
              onClick={handleMuteUnmute}
              aria-label="Mute Video"
              className="isMuted transition-all duration-300 hover:opacity-50"
            >
              {isMuted ? (
                <svg
                  className="fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                  viewBox="0 0 256 256"
                >
                  <path d="M64,84v88a4,4,0,0,1-4,4H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H60A4,4,0,0,1,64,84Zm93.15-58.15a8,8,0,0,0-10-.16l-65.57,51A4,4,0,0,0,80,79.84v96.32a4,4,0,0,0,1.55,3.15l65.57,51a8,8,0,0,0,9,.56,8.29,8.29,0,0,0,3.91-7.18V32.25A8.27,8.27,0,0,0,157.12,25.85Z"></path>
                </svg>
              ) : (
                <svg
                  className="fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                  viewBox="0 0 256 256"
                >
                  <path d="M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Zm54-106.08a24,24,0,0,1,0,33.94,8,8,0,0,1-11.31-11.31,8,8,0,0,0,0-11.31A8,8,0,0,1,198,101.56Zm36-36a72.07,72.07,0,0,1,0,101.82,8,8,0,1,1-11.31-11.31,56.05,56.05,0,0,0,0-79.2,8,8,0,0,1,11.31-11.31Z"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 360 Button - Right Bottom */}
      <div className="button-right absolute right-[30px] sm:right-[50px] bottom-[30px] sm:bottom-[57px] z-10">
        <a
          href="https://indigo.view360.se/tour.html"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:opacity-50"
        >
          <Image
            src="/images/360.svg"
            alt="360 View"
            width={50}
            height={50}
            className="w-[40px] sm:w-[50px]"
          />
        </a>
      </div>

      {/* Booking Widget - Bottom Center (Desktop Only) */}
      <div className="absolute bottom-0 z-10 left-[30vw] right-[30vw] hidden lg:flex justify-center">
        <div className="bg-white text-body flex items-center pl-[20px] rounded-l-lg rounded-r-xl border-0">
          <div className="flex items-center font-primary">
            {/* Check In */}
            <div className="relative">
              <div className="p-[10px] cursor-pointer relative z-[2]">
                <label className="uppercase lg:text-[10px] xl:text-[12px] font-semibold">
                  Arrival
                </label>
                <div className="flex gap-[25px] items-center">
                  <p className="lg:text-[1.5em] xl:text-[2em] font-light w-[45px]">03</p>
                  <p className="uppercase flex items-center gap-2 lg:text-[14px] xl:text-[16px]">
                    <span>NOV</span>
                    <svg
                      className="fill-body transition-all duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 256 256"
                    >
                      <path d="M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"></path>
                    </svg>
                  </p>
                </div>
              </div>
            </div>
            {/* Check Out */}
            <div className="relative">
              <div className="p-[10px] cursor-pointer relative z-[2]">
                <label className="uppercase lg:text-[10px] xl:text-[12px] font-semibold">
                  Departure
                </label>
                <div className="flex gap-[25px] items-center">
                  <p className="lg:text-[1.5em] xl:text-[2em] font-light w-[45px]">04</p>
                  <p className="uppercase flex items-center gap-2 lg:text-[14px] xl:text-[16px]">
                    <span>NOV</span>
                    <svg
                      className="fill-body transition-all duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 256 256"
                    >
                      <path d="M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"></path>
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Guest Selector */}
          <div className="flex flex-col w-[115px] h-full justify-end p-[10px]">
            <label className="font-primary uppercase lg:text-[10px] xl:text-[12px] font-semibold">
              Guest
            </label>
            <div className="relative inline-block text-center">
              <div className="bg-transparent font-primary lg:text-[1.5em] xl:text-[2em] font-light cursor-pointer flex justify-between items-center">
                <span>1</span>
                <svg
                  className="fill-body transition-all duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 256 256"
                >
                  <path d="M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"></path>
                </svg>
              </div>
            </div>
          </div>
          {/* Rooms Selector */}
          <div className="flex flex-col w-[115px] h-full justify-end p-[10px]">
            <label className="font-primary uppercase lg:text-[10px] xl:text-[12px] font-semibold">
              Rooms
            </label>
            <div className="relative inline-block text-center">
              <div className="bg-transparent font-primary lg:text-[1.5em] xl:text-[2em] font-light cursor-pointer flex justify-between items-center">
                <span>1</span>
                <svg
                  className="fill-body transition-all duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 256 256"
                >
                  <path d="M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"></path>
                </svg>
              </div>
            </div>
          </div>
          {/* Book Now Button */}
          <a
            href="https://www.hotelindigo.com/redirect?path=asearch&brandCode=IN&localeCode=en&regionCode=1&hotelCode=DPSIN&PMID=99502222&&icdv=99502222"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase h-full bg-primary text-white font-primary whitespace-nowrap px-5 py-4 rounded-r-lg transition-all !duration-500 hover:bg-secondary"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Free Airport Transfer Badge - Fixed Right Side */}
      <div className="fixed right-[10px] sm:right-[20px] z-30 transition-[bottom] duration-500 ease-in-out bottom-[80px] sm:bottom-[115px]">
        <a
          href="/en/offers/summer-bali"
          className="aspect-square bg-primary text-white font-primary flex items-center justify-center p-5 pt-6 rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all duration-300 hover:scale-[110%]"
        >
          <div className="text-center">
            <p className="uppercase text-[.5rem] sm:text-[.6rem] xl:text-[.7rem]">
              <span>Get free</span>
              <span className="text-[.8rem] sm:text-[.9rem] xl:text-[1rem] leading-[110%] block mb-[5px]">
                Airport
                <br />
                Transfer*
              </span>
              <span>here</span>
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
