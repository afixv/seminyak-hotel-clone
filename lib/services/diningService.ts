import { DiningItem } from "@/lib/types";
import { diningApi } from "@/lib/api/diningApi";

/**
 * Service untuk menangani logic Dining
 * Berfungsi sebagai bridge antara component dan API
 */
export const diningService = {
  /**
   * Fetch data dining info
   */
  fetchInfo: async (): Promise<DiningItem> => {
    try {
      const info = await diningApi.getInfo();
      return info;
    } catch (error) {
      console.error("Error fetching dining info:", error);
      throw new Error("Failed to fetch dining data");
    }
  },
};
