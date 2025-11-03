import { Offer } from "@/lib/types";
import { offersApi } from "@/lib/api/offersApi";

/**
 * Service untuk menangani logic Offers
 * Berfungsi sebagai bridge antara component dan API
 */
export const offersService = {
  /**
   * Fetch semua offers
   */
  fetchAll: async (): Promise<Offer[]> => {
    try {
      const offers = await offersApi.getAll();
      return offers;
    } catch (error) {
      console.error("Error fetching offers:", error);
      throw new Error("Failed to fetch offers data");
    }
  },
};
