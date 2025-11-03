import { DiningItem } from "@/lib/types";

// Dummy API untuk Dining
export const diningApi = {
  getInfo: async (): Promise<DiningItem> => {
    // Simulasi API call dengan Promise
    return new Promise((resolve) => {
      resolve({
        id: "1",
        title: "Dining",
        description:
          "Our unique food and beverage concept is inspired by the vibrant neighborhood we inhabit—a melting pot of flavors from around the world, while still strongly influenced by local culinary traditions.",
        image: "/images/main-dining.Bq-1WGnP.png",
        link: "/en/dining",
      });
    });
  },
};
