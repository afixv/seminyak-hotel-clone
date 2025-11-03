"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavItem } from "@/lib/types";
import { navigationService } from "@/lib/services";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [isLoadingNav, setIsLoadingNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch navigation data
  useEffect(() => {
    const loadNavigation = async () => {
      try {
        const [navData, langData] = await Promise.all([
          navigationService.fetchNavItems(),
          navigationService.fetchLanguages(),
        ]);
        setNavItems(navData);
        setLanguages(langData);
      } catch (error) {
        console.error("Error loading navigation:", error);
      } finally {
        setIsLoadingNav(false);
      }
    };

    loadNavigation();
  }, []);

  return (
    <>
      {/* Desktop Header (XL and 2XL) */}
      <header
        className={`fixed top-0 z-30 w-full hidden xl:flex 2xl:flex justify-between transition-all duration-300 px-[50px] items-top ${
          isScrolled
            ? "h-[100px] bg-white shadow-header"
            : "h-[155px] bg-transparent"
        }`}>
        <div>
          <Link href="/en">
            <Image
              src="/images/logo-new-ver.png"
              alt="Hotel Indigo Seminyak Logo"
              width={160}
              height={104}
              className={`filter transition-all duration-300  ${
                isScrolled ? "w-24 pt-4" : "invert brightness-0 w-40 pt-10"
              }`}
            />
          </Link>
        </div>
        <div className="h-full">
          <ul
            className={`uppercase items-center gap-[15px] py-10 lg:text-[.8rem] xl:text-[.8rem] hidden sm:flex ${
              isScrolled ? "text-body" : "text-white"
            }`}>
            {isLoadingNav ? (
              <li className="text-white">Loading...</li>
            ) : (
              <>
                {navItems.map((item, index) => (
                  <li key={index} className="group relative">
                    {item.dropdown ? (
                      <>
                        <button className="relative after:content-[''] after:absolute after:block after:left-0 after:-top-1.5 after:h-0.5 after:w-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-[30px] flex items-center after:bg-current">
                          {item.label}
                          <svg
                            className="w-2.5 h-2.5 ms-3"
                            fill="none"
                            viewBox="0 0 10 6">
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </button>
                        {/* Dropdown with proper hover area - pointer-events-none prevents hover loss */}
                        <div className="absolute -right-10 top-full pt-0 hidden group-hover:block pointer-events-none group-hover:pointer-events-auto z-50">
                          <div className="bg-white shadow-lg py-2 px-5 mt-2 min-w-[200px]">
                            <ul className="text-sm text-body">
                              {item.dropdown.map((subItem, subIndex) => (
                                <li
                                  key={subIndex}
                                  className="border-b last:border-b-0">
                                  <Link
                                    href={subItem.href}
                                    className="py-3 block relative after:content-[''] after:absolute after:block after:left-0 after:top-0 after:h-0.5 after:bg-secondary after:w-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-[30px] uppercase">
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="relative after:content-[''] after:absolute after:block after:left-0 after:-top-1.5 after:h-0.5 after:w-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-[30px] after:bg-current uppercase">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </>
            )}
            <li className="group relative">
              <button className="relative after:content-[''] after:absolute after:block after:left-0 after:-top-1.5 after:h-0.5 after:w-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-[30px] flex items-center after:bg-current uppercase">
                EN
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  fill="none"
                  viewBox="0 0 10 6">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Language dropdown with proper hover area */}
              <div className="absolute -right-10 top-full pt-0 hidden group-hover:block pointer-events-none group-hover:pointer-events-auto z-50">
                <div className="bg-white shadow-lg py-2 px-5 mt-2 min-w-[200px]">
                  <ul className="text-sm text-body">
                    {languages.map((lang, i) => (
                      <li key={i} className="border-b last:border-b-0">
                        <Link
                          href="#"
                          className="py-3 block relative after:content-[''] after:absolute after:block after:left-0 after:top-0 after:h-0.5 after:bg-secondary after:w-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-[30px] uppercase">
                          {lang}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </header>

      {/* Tablet Header (MD, LG) */}
      <header
        className={`fixed top-0 z-30 w-full hidden md:flex lg:flex xl:hidden 2xl:hidden items-center justify-between transition-all duration-300 pl-5 pr-5 py-5 ${
          isScrolled
            ? "bg-white shadow-header h-[8vh]"
            : "bg-transparent h-[8vh] md:h-[8vh] lg:h-[10vh]"
        }`}>
        <div>
          <Link href="/en">
            <Image
              src="/images/logo-new-ver.png"
              alt="Hotel Indigo Seminyak Logo"
              width={80}
              height={52}
              className={`w-20 filter ${
                isScrolled ? "invert-0" : "invert brightness-0"
              }`}
            />
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.hotelindigo.com/redirect?path=asearch&brandCode=IN&localeCode=en&regionCode=1&hotelCode=DPSIN&PMID=99502222&&icdv=99502222"
            target="_blank"
            rel="noopener noreferrer"
            className={`uppercase px-5 py-2 text-[.7rem] border transition-all duration-300 ${
              isScrolled
                ? "text-primary border-primary hover:bg-primary hover:text-white"
                : "text-white border-white hover:bg-secondary hover:border-secondary"
            }`}>
            Book Now
          </a>
        </div>
      </header>

      {/* Mobile Header (SM) */}
      <header className="fixed top-0 z-30 w-full flex md:hidden items-center justify-center h-[8vh] bg-transparent transition-all duration-300">
        <Link href="/en">
          <Image
            src="/images/logo-new-ver.png"
            alt="Hotel Indigo Seminyak Logo"
            width={95}
            height={62}
            className="w-[95px] filter mb-1 invert brightness-0"
          />
        </Link>
      </header>
    </>
  );
}
