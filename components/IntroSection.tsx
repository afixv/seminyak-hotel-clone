import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function IntroSection() {
  return (
    <section
      id="home-intro"
      className="py-[3rem] sm:py-[6rem]">
      <div className="container mx-auto px-4 flex flex-col md:flex lg:grid lg:grid-cols-3 gap-8">
        <div className="flex flex-col md:flex lg:grid lg:grid-cols-2 items-center col-span-2 gap-8">
          <div>
            <h1 className="hidden sm:hidden md:hidden lg:block text-[1.3rem] sm:text-[1.8rem] lg:text-[2.2rem] xl:text-[2.8rem] leading-[1.3em] md:text-center lg:text-left font-primary font-light text-primary uppercase md:pb-[30px] lg:pb-0 lg:pr-2">
              The First 5-star
              <br />
              Hotel Indigo
              <br />
              In A Resort Location
            </h1>
            <h1 className="block sm:block md:block lg:hidden text-[1.4rem] mb-[30px] leading-[1.3em] text-center font-primary font-light text-primary uppercase sm:pr-2">
              The First 5-star
              <br />
              Hotel Indigo
              <br />
              In A Resort
              <br />
              Location
            </h1>
          </div>
          <div className="relative">
            <Image
              src="/images/slideshow-2.BCv-Awm_.png"
              alt="Hotel Indigo - Bali Seminyak Beach"
              width={640}
              height={600}
              className="introImg h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] w-[60%] sm:w-full rounded-tl-[100px] sm:rounded-tl-[150px] lg:rounded-tl-[150px] xl:rounded-tl-[200px] object-cover relative z-[2] ml-[25px] sm:ml-[unset]"
            />
            <div className="boxIntro absolute z-[1] w-[200px] h-[250px] md:w-[250px] md:h-[300px] lg:w-[300px] lg:h-[400px] bg-primary block right-0 sm:-right-[50px] top-[55%] sm:top-[45%] mr-[25px] sm:mr-[unset]"></div>
          </div>
        </div>
        <div className="font-primary mt-[100px] sm:mt-0 sm:pl-[100px] md:pl-[0px] lg:pl-[100px] pt-0 md:pt-[80px] lg:pt-0">
          <h2 className="text-primary text-[1.4rem] sm:text-[2rem] lg:text-[2rem] xl:text-[2.2rem] leading-[1.3] uppercase font-light text-center md:text-center lg:text-left">
            About Us & Our Neighborhood
          </h2>
          <p className="mt-[20px] font-light text-[.9rem] text-body text-center lg:text-left">
            Hotel Indigo Bali Seminyak Beach is situated in the heart of one
            of Bali&apos;s most vibrant districts, a place where centuries of
            tradition and culture blend seamlessly with an atmosphere of
            casual sophistication.
          </p>
          <div className="mt-[20px] flex md:flex justify-center lg:inline-block">
            <Link
              href="/en/about-us"
              className="bg-primary text-white text-[.7rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}