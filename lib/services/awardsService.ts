import { awardsApi } from "@/lib/api/awardsApi";
import { Award } from "@/lib/types";

export const awardsService = {
  fetchAll: async (): Promise<Award[]> => {
    try {
      const awards = await awardsApi.getAll();
      return awards;
    } catch (error) {
      console.error("Failed to fetch awards data:", error);
      throw error;
    }
  },
};
