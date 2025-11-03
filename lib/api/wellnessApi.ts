import { WellnessItem } from "@/lib/types";

// Dummy API untuk Wellness
export const wellnessApi = {
  getItems: async (): Promise<WellnessItem[]> => {
    // Simulasi API call dengan Promise
    return new Promise((resolve) => {
      resolve([
        {
          id: "1",
          title: "Sava Spa",
          description:
            "Crowned as The Best Spa in 5 star Resort in Indonesia, Sava Spa offers the uncomplicated indulgence of head to toe experience.",
          image: "/images/main-events.BWqmO2Bf.png",
          link: "/wellness/sava-spa",
        },
        {
          id: "2",
          title: "24/7 Gym",
          description:
            "Our workout space features TRX suspension training equipment, free weights, spacious personal workout space, state-of-the-art cardio equipment, and a martial arts bag and floor zone. It's always a good time to work out as our gym is open daily 24/7 to ensure you can meet your fitness goals.",
          image: "/images/main-dining.Bq-1WGnP.png",
          link: "/wellness/gym",
        },
        {
          id: "3",
          title: "Activities",
          description:
            "Balancing your holiday with a curated wellness and vibrant activities, inspired by the neighborhood of Seminyak, we invite you to join the series of activities available daily within our resort and around the neighborhood.",
          image: "/images/main-wedding.Bzni59le.png",
          link: "/wellness/activities",
        },
      ]);
    });
  },
};
