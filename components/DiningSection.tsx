import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function DiningSection() {
  return (
    <section className="container mx-auto mt-[3rem] sm:mt-[7rem] pb-[40px] sm:pb-0 relative px-4">
      <div className="flex flex-col sm:grid grid-cols-2 items-center relative z-[2] gap-8">
        <div className="md:h-[300px] lg:h-[400px] xl:h-[500px] w-full overflow-hidden rounded-bl-[100px] lg:rounded-bl-[150px]">
          <Image
            src="/images/main-dining.Bq-1WGnP.png"
            alt="Dining - Hotel Indigo Seminyak"
            width={640}
            height={500}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="font-primary font-light sm:px-[50px] mt-[20px] sm:mt-0">
          <h2 className="text-primary text-[1.4rem] md:text-[2rem] lg:text-[2.2rem] uppercase pb-5 text-center sm:text-left">
            Dining
          </h2>
          <p className="text-body text-[.9rem] text-center sm:text-left">
            Our unique food and beverage concept is inspired by the vibrant
            neighborhood we inhabit—a melting pot of flavors from around the
            world, while still strongly influenced by local culinary
            traditions.
          </p>
          <div className="mt-[5px] sm:mt-[20px] flex justify-center sm:block">
            <Link
              href="/en/dining"
              className="bg-primary text-white text-[.6rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] md:mt-0 lg:mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}