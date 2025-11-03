import Image from 'next/image';
import Link from 'next/link';

export default function LocationSection() {
  return (
    <section className="bg-primary py-12 sm:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 max-w-5xl mx-auto">
          <div className="sm:w-1/2">
            <Image
              src="/images/map.DEkNhJdb.png"
              alt="Hotel Location Map"
              width={1280}
              height={1220}
              className="aspect-square w-full object-cover object-center sm:rounded-bl-[150px]"
            />
          </div>
          <div className="sm:w-1/2">
            <div className="font-primary font-light text-center sm:text-left">
              <h3 className="uppercase text-white lg:text-[1.6rem] xl:text-[1.8rem] leading-[1.4]">
                Jl. Camplung Tanduk No. 10
                <br />
                Bali, 80361, Indonesia
              </h3>
              <ul className="my-5">
                <li>
                  <a
                    href="tel:623612099999"
                    className="text-white text-sm lg:text-xs xl:text-sm underline transition-all duration-300 hover:text-secondary hover:no-underline"
                  >
                    Tel: +62-361-2099999
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hotelindigobali.reservations@ihg.com"
                    className="text-white text-sm lg:text-xs xl:text-sm underline transition-all duration-300 hover:text-secondary hover:no-underline"
                  >
                    Email: hotelindigobali.reservations@ihg.com
                  </a>
                </li>
              </ul>
              <p className="text-white text-sm sm:text-sm lg:text-xs xl:text-sm">
                Check-in Time: 3PM | Check-out Time: 12PM
                <br />
                *Minimum check-in age is 18 years old
              </p>
              <p className="mt-5 text-white text-sm sm:text-sm lg:text-base xl:text-xl">
                SHUTTLE SERVICE
              </p>
              <p className="mt-1.5 text-white text-sm sm:text-sm lg:text-xs xl:text-sm">
                Drop off to Seminyak Village mall
                <br />
                Daily at 11AM &amp; 4PM
              </p>
              <ul className="mt-5 mb-10">
                <li>
                  <a
                    href="/pdf/transportation-price-2025-22-apr.pdf"
                    target="_blank"
                    className="text-white text-sm lg:text-xs xl:text-sm underline transition-all duration-300 hover:text-secondary hover:no-underline"
                  >
                    Transportation / Airport Transfer Price List
                  </a>
                </li>
                <li>
                  <a
                    href="/images/arrival-flow.webp"
                    target="_blank"
                    className="text-white text-sm lg:text-xs xl:text-sm underline transition-all duration-300 hover:text-secondary hover:no-underline"
                  >
                    International Airport Arrival Pick-up Information
                  </a>
                </li>
              </ul>
              <Link
                href="/pdf/resort-map-2025.pdf"
                target="_blank"
                className="mt-2.5 font-primary text-primary text-xs sm:text-xs lg:text-sm xl:text-base bg-white border border-[#eee] px-6 py-4 uppercase rounded-full hover:text-secondary hover:border-secondary"
              >
                RESORT MAP
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
