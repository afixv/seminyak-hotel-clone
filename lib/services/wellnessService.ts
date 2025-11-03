import { WellnessItem } from "@/lib/types";
import { wellnessApi } from "@/lib/api/wellnessApi";

/**
 * Service untuk menangani logic Wellness
 * Berfungsi sebagai bridge antara component dan API
 */
export const wellnessService = {
  /**
   * Fetch semua wellness items
   */
  fetchItems: async (): Promise<WellnessItem[]> => {
    try {
      const items = await wellnessApi.getItems();
      return items;
    } catch (error) {
      console.error("Error fetching wellness items:", error);
      throw new Error("Failed to fetch wellness data");
    }
  },
};
