import { AccommodationRoom } from "@/lib/types";
import { accommodationApi } from "@/lib/api/accommodationApi";

/**
 * Service untuk menangani logic Accommodation
 * Berfungsi sebagai bridge antara component dan API
 */
export const accommodationService = {
  /**
   * Fetch semua data rooms
   */
  fetchRooms: async (): Promise<AccommodationRoom[]> => {
    try {
      const rooms = await accommodationApi.getRooms();
      return rooms;
    } catch (error) {
      console.error("Error fetching accommodation rooms:", error);
      throw new Error("Failed to fetch accommodation data");
    }
  },
};
