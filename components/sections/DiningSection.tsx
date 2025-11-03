"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, Heading, Text } from "@/components/ui";
import { DiningItem } from "@/lib/types";
import { diningService } from "@/lib/services";

export default function DiningSection() {
  const [diningInfo, setDiningInfo] = useState<DiningItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDiningInfo = async () => {
      try {
        setIsLoading(true);
        const data = await diningService.fetchInfo();
        setDiningInfo(data);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load dining info"
        );
        console.error("Error loading dining info:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadDiningInfo();
  }, []);

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  if (isLoading || !diningInfo) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <section className="container mx-auto mt-12 sm:mt-28 pb-10 sm:pb-0 relative px-4">
      <div className="flex flex-col sm:grid grid-cols-2 items-center relative z-2 gap-8">
        <div className="md:h-[300px] lg:h-[400px] xl:h-[500px] w-full overflow-hidden rounded-bl-[100px] lg:rounded-bl-[150px]">
          <Image
            src={diningInfo.image}
            alt={`${diningInfo.title} - Hotel Indigo Seminyak`}
            width={640}
            height={500}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="font-primary font-light sm:px-[50px] mt-5 sm:mt-0">
          <Heading level="h2" size="lg">
            {diningInfo.title}
          </Heading>
          <Text className="mt-5 sm:text-left">{diningInfo.description}</Text>
          <div className="mt-5 sm:mt-20 flex justify-center sm:block">
            <Button href={diningInfo.link} size="sm" variant="primary">
              Explore
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
