"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function InstagramSection() {
  useEffect(() => {
    // Load lightwidget script
    const script = document.createElement("script");
    script.src = "/js/lightwidget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="sm:pt-24 pb-0 sm:pb-5 container mx-auto">
      <div className="container flex flex-col items-center">
        <p className="font-primary text-primary font-light text-2xl sm:text-5xl text-center uppercase lg:text-[1.7rem] xl:text-[2.2rem] pb-0 sm:pb-0">
          HIT US UP ON THE GRAM
        </p>
        <div className="mt-1.5 mb-5 sm:mb-5 block">
          <Link
            href="https://www.instagram.com/hotelindigobali/"
            target="_blank"
            className="bg-primary text-white text-sm px-6 py-2.5 rounded-full uppercase transition duration-300 ease-in-out inline-block sm:mt-5 transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,0,0,0.1)] hover:-translate-y-1">
            GO SOCIAL
          </Link>
        </div>
        <div className="w-full relative overflow-hidden z-1 mb-8">
          <iframe
            title="Instagram feed from our official account"
            src="https://cdn.lightwidget.com/widgets/1d28e1aebc5c5c53945abe4385a9e4a2.html"
            scrolling="no"
            allowTransparency={true}
            className="lightwidget-widget w-full sm:h-[290px] border-0 overflow-hidden"
          />
        </div>
      </div>
    </section>
  );
}
