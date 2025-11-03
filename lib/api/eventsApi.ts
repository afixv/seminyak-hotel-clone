import { Event } from "@/lib/types";

// Dummy API untuk Events
export const eventsApi = {
  getAll: async (): Promise<Event[]> => {
    // Simulasi API call dengan Promise
    return new Promise((resolve) => {
      resolve([
        {
          id: "1",
          title: "Meeting",
          description: "Host your next corporate meeting at Hotel Indigo Seminyak",
          image: "/images/main-events.BWqmO2Bf.png",
          link: "/en/meeting",
        },
        {
          id: "2",
          title: "Wedding",
          description: "Celebrate your special day in paradise with our wedding packages",
          image: "/images/main-wedding.Bzni59le.png",
          link: "/en/wedding",
        },
      ]);
    });
  },
};
