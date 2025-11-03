import { AccommodationRoom } from "@/lib/types";

// Dummy API untuk Accommodation
export const accommodationApi = {
  getRooms: async (): Promise<AccommodationRoom[]> => {
    // Simulasi API call dengan Promise
    return new Promise((resolve) => {
      resolve([
        {
          id: "1",
          href: "/en/accommodation/rooms",
          img: "/images/rooms.BaI9CxEy.png",
          label: "Rooms",
        },
        {
          id: "2",
          href: "/en/accommodation/suites",
          img: "/images/suite.Cz8DciV_.png",
          label: "Suites",
        },
        {
          id: "3",
          href: "/en/accommodation/one-bedroom-villa",
          img: "/images/one-bedroom.Cn3x4nQ1.png",
          label: "One Bedroom Villa",
        },
        {
          id: "4",
          href: "/en/accommodation/two-bedroom-villa",
          img: "/images/two-bedroom.DonygiVk.png",
          label: "Two Bedroom Villa",
        },
      ]);
    });
  },
};
