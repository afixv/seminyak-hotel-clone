"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const offers = [
  {
    image: "/images/main-dining.Bq-1WGnP.png", // Placeholder - needs actual offer image
    title: "Vibrant Tropical Festive",
    description:
      "Dive into the island's holiday spirit as Hotel Indigo Bali Seminyak Beach invites you to celebrate this festive season with a tropical twist in true neighborhood style, vibrant and merry.",
    link: "/offers/vibrant-tropical-festive",
  },
  {
    image: "/images/main-wedding.Bzni59le.png", // Placeholder - needs actual offer image
    title: "MONOPOLY: Bali Edition",
    description:
      "The world's most famous board game, MONOPOLY, was unveiled in a grand celebration that brought together key tourism stakeholders, local entities, and enthusiastic guests eager to experience the island's first-ever official MONOPOLY board.",
    link: "/offers/monopoly-bali-edition",
  },
  {
    image: "/images/main-events.BWqmO2Bf.png", // Placeholder - needs actual offer image
    title: "Sizzling Summer Fest",
    description: "A summer of flavor awaits",
    link: "/offers/sizzling-summer-fest",
  },
  {
    image: "/images/rooms.BaI9CxEy.png", // Placeholder - needs actual offer image
    title: "Summer in Bali",
    description:
      "Stay a minimum of 3 nights and enjoy complimentary one-way airport pick up and breakfast to fuel your island adventures",
    link: "/offers/summer-bali",
  },
  {
    image: "/images/suite.Cz8DciV_.png", // Placeholder - needs actual offer image
    title: "Best Flexible Rate",
    description:
      "Book directly through IHG's website and/or mobile apps to secure the lowest available room rate",
    link: "/offers/best-flexible-rate",
  },
  {
    image: "/images/one-bedroom.Cn3x4nQ1.png", // Placeholder - needs actual offer image
    title: "Seminyak Bliss",
    description: "Complimentary daily resort credit starts from IDR 300.000",
    link: "/offers/seminyak-bliss",
  },
  {
    image: "/images/two-bedroom.DonygiVk.png", // Placeholder - needs actual offer image
    title: "Breakfast On Us",
    description:
      "Awaken your senses with a complimentary breakfast that promises to kickstart your day in the most delicious way possible.",
    link: "/offers/breakfast-on-us",
  },
  {
    image: "/images/photo1.CvygVCoG.png", // Placeholder - needs actual offer image
    title: "Book Early & Save",
    description:
      "Booking at least 14 days or more in advance to enjoy up to 10% savings on our Best Flexible Rates",
    link: "/offers/book-early-save",
  },
  {
    image: "/images/photo2.CYyw3Co4.png", // Placeholder - needs actual offer image
    title: "Dinner Bed & Breakfast",
    description: "Perfect stay with delicious breakfast and dinner included.",
    link: "/offers/dinner-bed-and-breakfast",
  },
  {
    image: "/images/slideshow-2.BCv-Awm_.png", // Placeholder - needs actual offer image
    title: "Stay Longer Pay Less",
    description: "Stay 5 nights or more and save up to 10% from our rate.",
    link: "/offers/stay-longer-pay-less",
  },
];

export default function OffersSection() {
  const swiperRef = useRef<{ destroy: () => void } | null>(null);
  const swiperMobileRef = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    const initSwiper = async () => {
      if (typeof window !== "undefined") {
        const Swiper = (await import("swiper")).default;
        const { Navigation, Pagination } = await import("swiper/modules");

        // Desktop Swiper
        swiperRef.current = new Swiper(".mySwiperHomeOffers", {
          modules: [Navigation, Pagination],
          slidesPerView: 1,
          spaceBetween: 30,
          navigation: {
            nextEl: ".next-homeoffer",
            prevEl: ".prev-homeoffer",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });

        // Mobile Swiper
        swiperMobileRef.current = new Swiper(".mySwiperHomeOffersMobile", {
          modules: [Navigation, Pagination],
          slidesPerView: 1,
          spaceBetween: 30,
          navigation: {
            nextEl: ".swiper-button-next-offersmobile",
            prevEl: ".swiper-button-prev-offersmobile",
          },
          pagination: {
            el: ".swiper-pagination-offersmobile",
            clickable: true,
          },
        });
      }
    };

    initSwiper();

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
      if (swiperMobileRef.current) {
        swiperMobileRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
      {/* Desktop Offers Section */}
      <section
        id="homeOffers"
        className="relative hidden sm:block pt-[30px] sm:pt-32">
        <div className="container mx-auto relative sm:pb-20 z-2">
          <div className="swiper mySwiperHomeOffers">
            <div className="swiper-wrapper">
              {offers.map((offer, index) => (
                <div key={index} className="swiper-slide">
                  <div className="flex flex-col md:flex-col lg:flex-row items-center gap-5 sm:gap-[50px]">
                    <div className="lg:w-[60%]">
                      <Image
                        src={offer.image}
                        alt={`${offer.title} - Hotel Indigo Seminyak`}
                        width={800}
                        height={500}
                        className="aspect-video w-full sm:rounded-tr-[150px] object-cover object-center"
                      />
                    </div>
                    <div className="lg:w-[40%] font-primary font-light lg:pr-20">
                      <span className="uppercase text-secondary text-center md:text-center lg:text-left block">
                        EXCLUSIVE OFFER
                      </span>
                      <h2 className="uppercase text-[1.2rem] md:text-[1.7rem] lg:text-[1.7rem] xl:text-[2.2rem] leading-[130%] text-primary text-center md:text-center lg:text-left">
                        {offer.title}
                      </h2>
                      <div className="text-body mt-5 lg:text-[.8rem] xl:text-[.9rem] text-center md:text-center lg:text-left">
                        <p>{offer.description}</p>
                      </div>
                      <div className="mt-[15px] flex justify-center md:flex lg:block">
                        <Link
                          href={offer.link}
                          className="bg-primary text-white text-[.7rem] sm:text-[.9rem] px-[25px] py-2.5 rounded-full uppercase transition duration-300 ease-in-out inline-block mt-5 transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                          View All
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <span className="swiper-button-prev prev-homeoffer absolute top-1/2 -translate-y-1/2 left-[3vw] z-10 !h-[45px] !w-[45px] sm:!h-[50px] sm:!w-[50px] bg-[#2525258c] rounded-full backdrop-blur-sm after:!content-[unset] hover:bg-[#3a3a3acc] transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white"
                width="100%"
                height="100%"
                viewBox="0 0 256 256">
                <path d="M164.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L88.49,128Z"></path>
              </svg>
            </span>

            <span className="swiper-button-next next-homeoffer absolute top-1/2 -translate-y-1/2 right-[3vw] z-10 !h-[45px] !w-[45px] sm:!h-[50px] sm:!w-[50px] bg-[#2525258c] rounded-full backdrop-blur-sm after:!content-[unset] hover:bg-[#3a3a3acc] transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white"
                width="100%"
                height="100%"
                viewBox="0 0 256 256">
                <path d="M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"></path>
              </svg>
            </span>
          </div>
          <div className="swiper-pagination bottom-0 hidden sm:block"></div>
        </div>
        <div className="accoBox3 absolute left-0 bottom-0 lg:h-[250px] xl:h-[400px] w-[15vw] block bg-primary z-1"></div>
      </section>

      {/* Mobile Offers Section */}
      <section className="py-12 block sm:hidden">
        <div className="container">
          <p className="font-primary uppercase text-[1.4rem] text-center pb-5">
            EXCLUSIVE OFFER
          </p>
        </div>
        <div className="container relative">
          <div className="swiper mySwiperHomeOffersMobile">
            <div className="swiper-wrapper">
              {offers.map((offer, index) => (
                <div
                  key={index}
                  className="swiper-slide border border-[#d8d8d8] relative">
                  <div className="aspect-[.7] w-full overflow-hidden">
                    <Image
                      src={offer.image}
                      alt={`${offer.title} - Hotel Indigo Bali Seminyak Beach`}
                      width={400}
                      height={571}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="py-5 px-[15px] h-full flex flex-col justify-end absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black">
                    <p className="font-primary uppercase text-white leading-[120%] mb-2">
                      {offer.title}
                    </p>
                    <p className="font-primary text-[.8rem] text-white leading-[120%]">
                      {offer.description}
                    </p>
                    <div>
                      <Link
                        href={offer.link}
                        className="bg-primary text-white text-[.7rem] sm:text-[.9rem] px-[25px] py-2.5 rounded-full uppercase transition duration-300 ease-in-out inline-block mt-2.5 transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                        Explore
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Mobile Navigation - Static positioned below slider */}
          <div className="flex justify-center items-center gap-3 mt-2.5">
            <div className="swiper-button-prev swiper-button-prev-offersmobile static! inline-block! mt-[unset]! after:content-[unset]! cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256">
                <path d="M164.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L88.49,128Z"></path>
              </svg>
            </div>
            <div className="swiper-pagination swiper-pagination-offersmobile relative! w-[unset]! inline-block! font-primary! bottom-[unset]!"></div>
            <div className="swiper-button-next swiper-button-next-offersmobile static! inline-block! mt-[unset]! after:content-[unset]! cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256">
                <path d="M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
