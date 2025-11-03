import { Event } from "@/lib/types";
import { eventsApi } from "@/lib/api/eventsApi";

/**
 * Service untuk menangani logic Events
 * Berfungsi sebagai bridge antara component dan API
 */
export const eventsService = {
  /**
   * Fetch semua events
   */
  fetchAll: async (): Promise<Event[]> => {
    try {
      const events = await eventsApi.getAll();
      return events;
    } catch (error) {
      console.error("Error fetching events:", error);
      throw new Error("Failed to fetch events data");
    }
  },
};
