import React from "react";
import Image from "next/image";
import { Button, Heading, Text, Container } from "@/components/ui";

export default function IntroSection() {
  return (
    <section id="home-intro" className="py-[3rem] sm:py-[6rem]">
      <Container className="flex flex-col md:flex lg:grid lg:grid-cols-3 gap-8">
        <div className="flex flex-col md:flex lg:grid lg:grid-cols-2 items-center col-span-2 gap-8">
          <div>
            <Heading
              level="h1"
              size="xl"
              className="hidden sm:hidden md:hidden lg:block md:pb-[30px] lg:pb-0 lg:pr-2"
            >
              The First 5-star
              <br />
              Hotel Indigo
              <br />
              In A Resort Location
            </Heading>
            <Heading
              level="h1"
              size="lg"
              className="block sm:block md:block lg:hidden mb-[30px] sm:pr-2"
            >
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
              className="introImg h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] w-[60%] sm:w-full rounded-tl-[100px] sm:rounded-tl-[150px] lg:rounded-tl-[150px] xl:rounded-tl-[200px] object-cover relative z-[2] ml-[25px] sm:ml-[unset]"
            />
            <div className="boxIntro absolute z-[1] w-[200px] h-[250px] md:w-[250px] md:h-[300px] lg:w-[300px] lg:h-[400px] bg-primary block right-0 sm:-right-[50px] top-[55%] sm:top-[45%] mr-[25px] sm:mr-[unset]"></div>
          </div>
        </div>
        <div className="font-primary mt-[100px] sm:mt-0 sm:pl-[100px] md:pl-[0px] lg:pl-[100px] pt-0 md:pt-[80px] lg:pt-0">
          <Heading level="h2" size="lg">
            About Us & Our Neighborhood
          </Heading>
          <Text className="mt-[20px] lg:text-left">
            Hotel Indigo Bali Seminyak Beach is situated in the heart of one
            of Bali&apos;s most vibrant districts, a place where centuries of
            tradition and culture blend seamlessly with an atmosphere of
            casual sophistication.
          </Text>
          <div className="mt-[20px] flex md:flex justify-center lg:inline-block">
            <Button
              href="/en/about-us"
              size="md"
              variant="primary"
            >
              Explore
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}