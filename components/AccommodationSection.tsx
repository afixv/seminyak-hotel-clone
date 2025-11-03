import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AccommodationSection() {
  return (
    <section
      id="homeAccommodation"
      className="py-[1rem] sm:py-[1rem] md:py-0 lg:py-[6rem] relative block sm:block">
      <div className="accoBox1 absolute left-0 sm:top-[30%] bottom-0 h-[100px] sm:h-[unset] sm:w-[15vw] hidden sm:block bg-primary z-[1]"></div>
      <div className="container mx-auto px-4">
        <p className="uppercase text-primary text-[1.4rem] md:text-[2rem] lg:text-[2.2rem] font-primary font-light text-center lg:text-left mb-[30px] sm:mb-0">
          Accommodation
        </p>
      </div>

      {/* Desktop/Tablet Grid */}
      <div className="container mx-auto mt-[50px] relative z-[2] hidden sm:flex px-4">
        <div className="flex w-full md:gap-[20px] lg:gap-[40px] hover:gap-[5px] transition-all duration-300">
          {[
            {
              href: "/en/accommodation/rooms",
              img: "/images/rooms.BaI9CxEy.png",
              label: "Rooms",
            },
            {
              href: "/en/accommodation/suites",
              img: "/images/suite.Cz8DciV_.png",
              label: "Suites",
            },
            {
              href: "/en/accommodation/one-bedroom-villa",
              img: "/images/one-bedroom.Cn3x4nQ1.png",
              label: "One Bedroom Villa",
            },
            {
              href: "/en/accommodation/two-bedroom-villa",
              img: "/images/two-bedroom.DonygiVk.png",
              label: "Two Bedroom Villa",
            },
          ].map((room, index) => (
            <Link
              key={index}
              href={room.href}
              className="w-[calc(100%/4)] image-box group">
              <div className="w-full h-[400px] md:h-[300px] lg:h-[400px] xl:h-[560px] overflow-hidden relative">
                <Image
                  src={room.img}
                  alt={`${room.label} - Hotel Indigo Seminyak Beach`}
                  width={400}
                  height={560}
                  className="original md:h-[400px] lg:h-[460px] xl:h-full 2xl:h-full object-cover transition-all !duration-500 object-center"
                />
                <div className="absolute bottom-0 w-full h-[70%] bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,212,255,0)] via-transparent flex items-end justify-center">
                  <p className="desc uppercase font-primary text-center text-white md:text-base lg:text-lg after:transition-all after:!duration-500 after:content-[''] after:h-0 after:block group-hover:after:h-[50px] after:w-[2px] after:bg-white after:mx-auto md:after:mt-2 lg:after:mt-10 group-hover:after:mt-2 pb-8">
                    {room.label}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Grid */}
      <div className="container mx-auto mt-[30px] relative z-[2] block sm:hidden px-4">
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              href: "/en/accommodation/rooms",
              img: "/images/rooms.BaI9CxEy.png",
              label: "Rooms",
            },
            {
              href: "/en/accommodation/suites",
              img: "/images/suite.Cz8DciV_.png",
              label: "Suites",
            },
            {
              href: "/en/accommodation/one-bedroom-villa",
              img: "/images/one-bedroom.Cn3x4nQ1.png",
              label: "One Bedroom Villa",
            },
            {
              href: "/en/accommodation/two-bedroom-villa",
              img: "/images/two-bedroom.DonygiVk.png",
              label: "Two Bedroom Villa",
            },
          ].map((room, index) => (
            <Link key={index} href={room.href} className="image-box group">
              <div className="w-full h-[200px] overflow-hidden relative">
                <Image
                  src={room.img}
                  alt={`${room.label} - Hotel Indigo Seminyak Beach`}
                  width={300}
                  height={200}
                  className="h-full w-full object-cover transition-all duration-500 object-center"
                />
                <div className="absolute bottom-0 w-full h-[60%] bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent flex items-end justify-center">
                  <p className="uppercase font-primary text-center text-white text-xs pb-4 px-2">
                    {room.label}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}