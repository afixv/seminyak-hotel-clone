import React from "react";
import Image from "next/image";
import { Button, Heading, Text, Container } from "@/components/ui";

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
          <Heading level="h2" size="lg">
            Dining
          </Heading>
          <Text className="mt-[20px] sm:text-left">
            Our unique food and beverage concept is inspired by the vibrant
            neighborhood we inhabit—a melting pot of flavors from around the
            world, while still strongly influenced by local culinary
            traditions.
          </Text>
          <div className="mt-[5px] sm:mt-[20px] flex justify-center sm:block">
            <Button
              href="/en/dining"
              size="sm"
              variant="primary"
            >
              Explore
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}