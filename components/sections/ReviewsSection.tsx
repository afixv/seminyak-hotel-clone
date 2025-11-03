import React from "react";
import Image from "next/image";
import { Button, Heading, Text, Container } from "@/components/ui";

export default function ReviewsSection() {
  const stars = Array(5).fill(0);

  return (
    <section className="bg-[#f4f4f1] py-20 relative ">
      <Image
        src="/images/guest.-S1OzQQb.png"
        alt="Guest"
        width={150}
        height={146}
        className="absolute bottom-8 right-8"
      />
      <Container>
        <Heading
          level="h2"
          size="xl"
          className="text-primary font-primary sm:font-light text-[1.5rem] sm:text-[2.2rem] lg:text-[2.2rem] xl:text-[2.8rem] w-full sm:w-[600px]">
          YOU DON&apos;T HAVE TO TAKE OUR WORD FOR IT
        </Heading>
        <div className="my-5 sm:my-10 flex items-center gap-2.5">
          <ul className="flex items-center gap-[5px]">
            {stars.map((_, index) => (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="#d23d49"
                  viewBox="0 0 256 256">
                  <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                </svg>
              </li>
            ))}
          </ul>
          <Text size="sm" className="lg:text-[.8rem] xl:text-[.9rem]">
            4.8/5(1147 Reviews)
          </Text>
        </div>
        <Button
          href="https://www.ihg.com/hotelindigo/redirect?path=hd-hotel-reviews&brandCode=in&hotelCode=dpsin&regionCode=1&localeCode=en&cm_mmc=iws_widget_DPSIN&icdv=99502222&dp=true"
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          variant="primary">
          Explore
        </Button>
      </Container>
    </section>
  );
}
