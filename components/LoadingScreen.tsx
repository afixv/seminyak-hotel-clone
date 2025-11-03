"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Show for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <section
      id="loading-screen"
      className={`fixed inset-0 flex justify-center items-center bg-white z-[100] ${
        isVisible ? "animate-fadeIn" : "fade-out"
      }`}
    >
      <Image
        src="/images/logo-new-ver.png"
        alt="Hotel Indigo Seminyak Logo"
        width={200}
        height={130}
        className="w-[200px] inline-block animate-fadeIn"
        priority
      />
    </section>
  );
}
