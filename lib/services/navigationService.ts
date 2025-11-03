import { NavItem } from "@/lib/types";
import { navigationApi } from "@/lib/api/navigationApi";

/**
 * Service untuk menangani logic Navigation
 * Berfungsi sebagai bridge antara component dan API
 */
export const navigationService = {
  /**
   * Fetch navigation items
   */
  fetchNavItems: async (): Promise<NavItem[]> => {
    try {
      const items = await navigationApi.getNavItems();
      return items;
    } catch (error) {
      console.error("Error fetching nav items:", error);
      throw new Error("Failed to fetch navigation data");
    }
  },

  /**
   * Fetch list bahasa
   */
  fetchLanguages: async (): Promise<string[]> => {
    try {
      const languages = await navigationApi.getLanguages();
      return languages;
    } catch (error) {
      console.error("Error fetching languages:", error);
      throw new Error("Failed to fetch languages data");
    }
  },
};
