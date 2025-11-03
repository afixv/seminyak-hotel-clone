"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AccommodationRoom } from "@/lib/types";
import { accommodationService } from "@/lib/services";

export default function AccommodationSection() {
  const [rooms, setRooms] = useState<AccommodationRoom[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRooms = async () => {
      try {
        setIsLoading(true);
        const data = await accommodationService.fetchRooms();
        setRooms(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load rooms");
        console.error("Error loading rooms:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadRooms();
  }, []);

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

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
          {isLoading ? (
            <div className="w-full text-center py-10">Loading...</div>
          ) : (
            rooms.map((room) => (
              <Link
                key={room.id}
                href={room.href}
                className="w-[calc(100%/4)] image-box group">
                <div className="w-full h-[400px] md:h-[300px] lg:h-[400px] xl:h-[560px] overflow-hidden relative">
                  <Image
                    src={room.img}
                    alt={`${room.label} - Hotel Indigo Seminyak Beach`}
                    width={400}
                    height={560}
                    className="original md:h-[400px] lg:h-[460px] xl:h-full 2xl:h-full object-cover transition-all duration-500 object-center"
                  />
                  <div className="absolute bottom-0 w-full h-[70%] bg-linear-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,212,255,0)] via-transparent flex items-end justify-center">
                    <p className="desc uppercase font-primary text-center text-white md:text-base lg:text-lg after:transition-all after:duration-500 after:content-[''] after:h-0 after:block group-hover:after:h-[50px] after:w-0.5 after:bg-white after:mx-auto md:after:mt-2 lg:after:mt-10 group-hover:after:mt-2 pb-8">
                      {room.label}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>

      {/* Mobile Grid */}
      <div className="container mx-auto mt-[30px] relative z-2 block sm:hidden px-4">
        <div className="grid grid-cols-2 gap-4">
          {isLoading ? (
            <div className="col-span-2 text-center py-10">Loading...</div>
          ) : (
            rooms.map((room) => (
              <Link key={room.id} href={room.href} className="image-box group">
                <div className="w-full h-[200px] overflow-hidden relative">
                  <Image
                    src={room.img}
                    alt={`${room.label} - Hotel Indigo Seminyak Beach`}
                    width={300}
                    height={200}
                    className="h-full w-full object-cover transition-all duration-500 object-center"
                  />
                  <div className="absolute bottom-0 w-full h-[60%] bg-linear-to-t from-[rgba(0,0,0,0.8)] to-transparent flex items-end justify-center">
                    <p className="uppercase font-primary text-center text-white text-xs pb-4 px-2">
                      {room.label}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
}