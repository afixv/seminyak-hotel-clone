import { ihgBrandsApi } from "@/lib/api/ihgBrandsApi";
import { IHGBrand } from "@/lib/types";

export const ihgBrandsService = {
  fetchAll: async (): Promise<IHGBrand[]> => {
    try {
      const brands = await ihgBrandsApi.getAll();
      return brands;
    } catch (error) {
      console.error("Failed to fetch IHG brands data:", error);
      throw error;
    }
  },
};
