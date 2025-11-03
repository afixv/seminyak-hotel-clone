"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui";
import { awardsService, ihgBrandsService } from "@/lib/services";
import type { Award, IHGBrand } from "@/lib/types";

export default function Footer() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);

  const [awards, setAwards] = useState<Award[]>([]);
  const [ihgBrands, setIhgBrands] = useState<IHGBrand[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const [awardsData, brandsData] = await Promise.all([
          awardsService.fetchAll(),
          ihgBrandsService.fetchAll(),
        ]);
        setAwards(awardsData);
        setIhgBrands(brandsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load data");
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    const initSwiper = async () => {
      if (typeof window !== "undefined" && awards.length > 0) {
        const Swiper = (await import("swiper")).default;
        const { Navigation } = await import("swiper/modules");

        swiperRef.current = new Swiper(".mySwiperAwards", {
          modules: [Navigation],
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          navigation: {
            nextEl: ".next-awards",
            prevEl: ".prev-awards",
          },
          breakpoints: {
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 6,
            },
          },
        });
      }
    };

    initSwiper();

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, [awards]);

  return (
    <footer className="mb-[45px] sm:mb-[unset]">
      <div className="bg-primary pb-12 sm:pb-24">
        {/* Awards Section */}
        <section
          id="awards"
          className="py-[30px] sm:py-20 mx-[30px] lg:mx-0">
          <p className="text-center uppercase text-white font-primary lg:text-[1.6rem] xl:text-[1.8rem] mb-[30px]">
            Awards
          </p>

          <div className="container mx-auto relative">
            {/* Tombol kiri */}
            <div className="swiper-button-prev prev-awards absolute top-1/2 -translate-y-1/2 h-[35px]! w-[35px]! after:content-[unset]! left-2.5! z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="#fff"
                viewBox="0 0 256 256">
                <path d="M164.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L88.49,128Z"></path>
              </svg>
            </div>

            <div className="swiper mySwiperAwards">
              <div className="swiper-wrapper">
                {awards.map((award, index) => (
                  <Link
                    key={index}
                    href={award.link || "#"}
                    target={award.link ? "_blank" : undefined}
                    className="swiper-slide">
                    <div className="flex justify-center">
                      <Image
                        src={award.image}
                        alt="Awards - Hotel Indigo Bali Seminyak Beach"
                        width={150}
                        height={150}
                        loading="lazy"
                        className="aspect-square w-[150px] object-contain"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tombol kanan */}
            <div className="swiper-button-next next-awards absolute top-1/2 -translate-y-1/2 h-[35px]! w-[35px]! after:content-[unset]! right-2.5! z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="#fff"
                viewBox="0 0 256 256">
                <path d="M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"></path>
              </svg>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <div className="container mx-auto">
          <p className="text-center uppercase text-white font-primary lg:text-[1.6rem] xl:text-[1.8rem]">
            BE THE FIRST TO KNOW
          </p>
          <form
            id="submit-form"
            method="POST"
            className="mt-10 mb-20 flex sm:flex-row flex-col justify-between flex-wrap px-[30px] sm:px-0">
            {/* Honeypot field */}
            <input
              type="text"
              id="website"
              name="website"
              aria-label="website"
              style={{
                opacity: 0,
                position: "absolute",
                height: 0,
                width: 0,
                padding: 0,
                margin: 0,
                border: 0,
              }}
              tabIndex={-1}
              autoComplete="off"
            />
            <div className="sm:w-[30%]">
              <Input
                type="text"
                name="firstname"
                id="firstname"
                aria-label="first name"
                required
                placeholder="First Name"
                inputSize="md"
              />
            </div>
            <div className="sm:w-[30%]">
              <Input
                type="text"
                name="lastname"
                id="lastname"
                aria-label="last name"
                required
                placeholder="Last Name"
                inputSize="md"
              />
            </div>
            <div className="sm:w-[30%]">
              <Input
                type="email"
                name="email"
                id="email"
                aria-label="email"
                required
                placeholder="Email Address"
                inputSize="md"
              />
            </div>
            <div className="sm:w-[30%]">
              <div className="flex items-center mt-5 gap-3">
                <input
                  id="privacy-checkbox"
                  type="checkbox"
                  className="sm:w-6 sm:h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="privacy-checkbox"
                  className="ms-2 font-medium text-white font-primary text-[.7rem] lg:text-[.5rem] xl:text-[.7rem]">
                  I have read &amp; agree to the Privacy Policy
                </label>
              </div>
            </div>
            <div className="sm:w-[30%]">
              <div className="flex items-center mt-5 gap-3">
                <input
                  id="marketing-checkbox"
                  type="checkbox"
                  className="sm:w-6 sm:h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="marketing-checkbox"
                  className="ms-2 font-medium text-white font-primary text-[.7rem] lg:text-[.5rem] xl:text-[.7rem]">
                  Yes, I would like to receive emails with exclusive specials
                  &amp; offers
                </label>
              </div>
            </div>
            <div className="sm:w-[30%] order-7 sm:order-6">
              <div className="mt-5 sm:mt-0 flex sm:blog justify-center sm:justify-start">
                <button
                  className="mt-2.5 font-primary text-primary text-[.8rem] lg:text-[.9rem] xl:text-[1rem] bg-white border border-[#eee] px-[35px] py-[15px] uppercase rounded-full hover:text-white hover:bg-secondary hover:border-secondary transition-all duration-300"
                  disabled>
                  Submit
                </button>
              </div>
            </div>
            <div className="sm:w-[30%] order-6 sm:order-7 mt-5 sm:mt-[unset]">
              <div
                className="g-recaptcha"
                data-sitekey="6Ld657UqAAAAAAauzOsJ2q5FDNcec3erBzXuZLSc"></div>
            </div>
          </form>

          {/* Footer Links */}
          <div className="flex sm:flex-row flex-col gap-10 sm:gap-16 justify-between">
            <div className="sm:w-60">
              <Image
                src="/images/logo-new-ver.BJ3J8nV3.png"
                alt="Hotel Indigo Logo"
                width={200}
                height={130}
                className="w-[200px] mx-auto block sm:w-full filter brightness-0 invert"
              />
            </div>
            {/* Social Media */}
            <div className="sm:w-[25%]">
              <p className="font-primary text-white font-light text-[1.5rem] mb-5 text-center sm:text-left">
                Follow Us
              </p>
              <ul className="flex items-center flex-wrap gap-5 lg:gap-3 xl:gap-3 justify-center sm:justify-start">
                <li>
                  <a
                    href="https://www.facebook.com/HotelIndigoBali/"
                    target="_blank"
                    aria-label="Facebook">
                    <svg
                      className="fill-white hover:fill-secondary w-5 h-5 lg:w-5 lg:h-5 xl:w-[25px] xl:h-[25px]"
                      viewBox="0 0 20 20">
                      <path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/hotelindigobali/"
                    target="_blank"
                    aria-label="Instagram">
                    <svg
                      className="fill-white hover:fill-secondary w-5 h-5 lg:w-5 lg:h-5 xl:w-[25px] xl:h-[25px]"
                      viewBox="0 0 20 20">
                      <path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"></path>
                      <circle cx="14.87" cy="5.26" r="1.09"></circle>
                      <path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/hotelindigobali"
                    target="_blank"
                    aria-label="Twitter">
                    <svg
                      className="fill-white hover:fill-secondary w-5 h-5 lg:w-5 lg:h-5 xl:w-[25px] xl:h-[25px]"
                      viewBox="0 0 20 20">
                      <path d="m15.08,2.1h2.68l-5.89,6.71,6.88,9.1h-5.4l-4.23-5.53-4.84,5.53H1.59l6.24-7.18L1.24,2.1h5.54l3.82,5.05,4.48-5.05Zm-.94,14.23h1.48L6,3.61h-1.6l9.73,12.71h0Z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tripadvisor.com/Hotel_Review-g469404-d9595791-Reviews-Hotel_Indigo_Bali_Seminyak_Beach-Seminyak_Kuta_District_Bali.html"
                    target="_blank"
                    aria-label="Tripadvisor">
                    <svg
                      className="fill-white hover:fill-secondary w-5 h-5 lg:w-5 lg:h-5 xl:w-[25px] xl:h-[25px]"
                      viewBox="0 0 20 20">
                      <path d="M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0	c0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009	c1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15	c2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594	c-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811	c-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079	c2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066	c-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002	c2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775	c0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468	C3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479	c1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775	c0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627	c-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618	c0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968	c-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72	C9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCO7rAw9av92AWsTFyZSjbaQ"
                    target="_blank"
                    aria-label="Youtube">
                    <svg
                      className="fill-white hover:fill-secondary w-5 h-5 lg:w-5 lg:h-5 xl:w-[25px] xl:h-[25px]"
                      viewBox="0 0 20 20">
                      <path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@hotelindigobaliseminyak"
                    target="_blank"
                    aria-label="Tiktok">
                    <svg
                      className="fill-white hover:fill-secondary w-5 h-5 lg:w-5 lg:h-5 xl:w-[25px] xl:h-[25px]"
                      viewBox="0 0 20 20">
                      <path d="M17.24,6V8.82a6.79,6.79,0,0,1-4-1.28v5.81A5.26,5.26,0,1,1,8,8.1a4.36,4.36,0,0,1,.72.05v2.9A2.57,2.57,0,0,0,7.64,11a2.4,2.4,0,1,0,2.77,2.38V2h2.86a4,4,0,0,0,1.84,3.38A4,4,0,0,0,17.24,6Z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/hotel-indigo-bali-seminyak-beach/"
                    target="_blank"
                    aria-label="Linkedin">
                    <svg
                      className="fill-white hover:fill-secondary w-5 h-5 lg:w-5 lg:h-5 xl:w-[25px] xl:h-[25px]"
                      viewBox="0 0 20 20">
                      <path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"></path>
                      <path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            {/* Footer Navigation Links */}
            <div className="sm:w-[25%] flex flex-col sm:flex-row sm:gap-[30px]">
              <div className="flex flex-col justify-between">
                <ul className="font-primary font-light">
                  <li className="mb-2 text-center sm:text-left">
                    <a
                      href="https://www.ihg.com/content/gb/en/about/brands"
                      target="_blank"
                      className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary">
                      About IHG
                    </a>
                  </li>
                  <li className="mb-2 text-center sm:text-left">
                    <a
                      href="https://www.ihg.com/content/us/en/about/brands"
                      target="_blank"
                      className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary">
                      IHG Global Brands
                    </a>
                  </li>
                  <li className="mb-2 text-center sm:text-left">
                    <a
                      href="https://www.ihg.com/hotelindigo/destinations/us/en/explore"
                      target="_blank"
                      className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary">
                      Explore Hotels
                    </a>
                  </li>
                  <li className="mb-2 text-center sm:text-left">
                    <Link
                      href="/sitemap"
                      className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary">
                      Site Map
                    </Link>
                  </li>
                </ul>
                <Image
                  src="/images/ihg-rewards.Bx1zIjND.png"
                  alt="IHG Rewards"
                  width={200}
                  height={40}
                  className="w-full mt-8 hidden sm:block"
                />
              </div>
              <div className="flex flex-col justify-between">
                <ul className="font-primary font-light">
                  <li className="mb-2 text-center sm:text-left">
                    <Link
                      href="/term-of-use"
                      className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary">
                      Term of Use
                    </Link>
                  </li>
                  <li className="mb-2 text-center sm:text-left">
                    <Link
                      href="/privacy-statement"
                      className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary">
                      Privacy Statement
                    </Link>
                  </li>
                  <li className="mb-2 text-center sm:text-left">
                    <Link
                      href="/privacy-policy"
                      className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mb-2 text-center sm:text-left">
                    <Link
                      href="/cookie-usage"
                      className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary">
                      Cookie Usage
                    </Link>
                  </li>
                </ul>
                <Image
                  src="/images/ihg-business-rewards.BjR0WZW9.png"
                  alt="IHG Business Rewards"
                  width={200}
                  height={40}
                  className="w-full mt-8 hidden sm:block"
                />
              </div>
            </div>
            {/* Mobile IHG Rewards */}
            <div className="flex justify-center sm:hidden gap-[30px]">
              <div className="w-[calc(50%-30px)] relative">
                <Image
                  src="/images/ihg-rewards.Bx1zIjND.png"
                  alt="IHG Rewards"
                  width={200}
                  height={40}
                />
              </div>
              <div className="w-[calc(50%-30px)]">
                <Image
                  src="/images/ihg-business-rewards.BjR0WZW9.png"
                  alt="IHG Business Rewards"
                  width={200}
                  height={40}
                />
              </div>
            </div>
            {/* Best Price Guarantee */}
            <div>
              <a
                href="https://www.ihg.com/content/us/en/customer-care/bwc-lp?cm_mmc=IMMerch-_-6C2_US_en-_-bestprice-_-vanity_6Cbpg?cm_mmc=IMMerch-_-6C2_US_en-_-bestprice-_-vanity_6Cbpg"
                className="uppercase text-white font-primary text-light lg:text-[1.6rem] xl:text-[1.6rem] leading-[130%] text-center sm:text-left block"
                target="_blank">
                Best Price
                <br />
                Guarantee
              </a>
              <p className="font-primary font-light text-white lg:text-[.8rem] xl:text-[.9rem] text-center sm:text-left">
                When you book with us
              </p>
              <div className="mt-8 sm:mt-10">
                <p className="font-primary text-white lg:text-[.8rem] xl:text-[.9rem] uppercase text-center sm:text-left">
                  Book Online / Call
                </p>
                <a
                  href="tel:0018030160061"
                  className="text-secondary font-primary font-light text-[1.6rem] lg:text-[1rem] xl:text-[1.2rem] text-center sm:text-left block">
                  001 803 016 0061
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* IHG Brands Section */}
      <div className="bg-white py-12 sm:py-24 px-5 sm:px-0">
        <div className="relative container sm:mx-auto border py-16 sm:py-24 px-12 border-body flex flex-wrap justify-around sm:justify-center items-center gap-5 lg:gap-7 xl:gap-[25px]">
          <Link
            href="https://www.ihg.com/hotels/gb/en/reservation"
            target="_blank"
            className="bg-white absolute -top-[15px] left-[30px] sm:left-[70px] px-2.5">
            <Image
              src="/images/ihg-logo.BUGE7650.png"
              alt="IHG Logo"
              width={200}
              height={33}
              className="w-[150px] sm:w-[180px]"
            />
          </Link>
          <Link
            href="https://www.ihg.com/onerewards/content/gb/en/home"
            target="_blank"
            className="bg-white absolute -bottom-[15px] right-[30px] sm:right-[70px] px-2.5">
            <Image
              src="/images/ihg-rewards-black.D35mebJ-.png"
              alt="IHG Rewards"
              width={200}
              height={40}
              className="w-[170px] sm:w-[200px]"
            />
          </Link>
          {ihgBrands.map((brand, index) => (
            <Link key={index} href={brand.link} target="_blank">
              <Image
                src={brand.image}
                alt="Hotel Partner"
                width={110}
                height={110}
                className="w-[100px] sm:w-[100px] lg:w-[85px] xl:w-[110px] object-scale-down aspect-square"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#fafafa] py-8">
        <div className="container  mx-auto">
          <p className="font-primary text-center text-[.7rem] lg:text-[.8rem] xl:text-[.9rem] font-light">
            © 2025 Hotel Indigo Bali Seminyak Beach. All rights reserved. This
            hotel is owned by PT. Bali Perkasasukses and managed by{" "}
            <a
              href="https://www.ihg.com/"
              target="_blank"
              className="text-primary transition-all duration-300 hover:text-secondary">
              InterContinental Hotels Group.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
