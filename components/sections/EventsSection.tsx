import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EventsSection() {
  const accoBox2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = accoBox2Ref.current;
    if (!el) return;

    const animation = gsap.to(el, {
      width: "35vw",
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        markers: false,
      },
    });

    setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);
  return (
    <section className="relative py-12 sm:py-24">
      <div className="container mx-auto relative z-2 px-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-1/3 flex flex-col gap-12">
            <div>
              <h2 className="text-primary text-[1.4rem] sm:text-[1.5rem] lg:text-[1.7rem] xl:text-[2.2rem] uppercase pb-5 text-center lg:text-left">
                Wedding
              </h2>
              <p className="text-body text-[.9rem] sm:text-[.8] lg:text-[.8rem] xl:text-[.9rem] text-center lg:text-left">
                Celebrate your love in the heart of Bali&apos;s most vibrant
                beachside spot at Hotel Indigo Bali Seminyak Beach.
              </p>
              <div className="mt-[5px] sm:mt-5 flex justify-center lg:block">
                <Link
                  href="/en/wedding"
                  className="bg-primary text-white text-[.6rem] px-[25px] py-2.5 rounded-full uppercase transition duration-300 ease-in-out inline-block mt-5 transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  Explore
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-primary text-[1.4rem] sm:text-[1.5rem] lg:text-[1.7rem] xl:text-[2.2rem] uppercase pb-5 text-center lg:text-left">
                Events
              </h2>
              <p className="text-body text-[.9rem] sm:text-[.8] lg:text-[.8rem] xl:text-[.9rem] text-center lg:text-left">
                Leave it to us to keep your guests refreshed with themed break
                selections served in our unique breakout room or under the
                Balinese skies on our pre-function lawn.
              </p>
              <div className="mt-[5px] sm:mt-5 flex justify-center lg:block">
                <Link
                  href="/en/meeting"
                  className="bg-primary text-white text-[.6rem] px-[25px] py-2.5 rounded-full uppercase transition duration-300 ease-in-out inline-block mt-5 transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  Explore
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[70%] hidden sm:hidden md:hidden lg:flex gap-[30px]">
            <div className="h-[500px] overflow-hidden">
              <Image
                src="/images/main-wedding.Bzni59le.png"
                alt="Wedding - Hotel Indigo Seminyak"
                width={500}
                height={500}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-[500px] overflow-hidden rounded-br-[150px]">
              <Image
                src="/images/main-events.BWqmO2Bf.png"
                alt="Events - Hotel Indigo Seminyak"
                width={500}
                height={500}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={accoBox2Ref}
        className="accoBox2 absolute right-0 top-[40%] lg:h-[750px] xl:h-[900px] w-[15vw] block bg-primary z-1"></div>
    </section>
  );
}
