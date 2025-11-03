import { Review } from "@/lib/types";
import { reviewsApi } from "@/lib/api/reviewsApi";

/**
 * Service untuk menangani logic Reviews
 * Berfungsi sebagai bridge antara component dan API
 */
export const reviewsService = {
  /**
   * Fetch rating data
   */
  fetchRating: async (): Promise<{ rating: number; count: number }> => {
    try {
      const rating = await reviewsApi.getRating();
      return rating;
    } catch (error) {
      console.error("Error fetching rating:", error);
      throw new Error("Failed to fetch rating data");
    }
  },

  /**
   * Fetch semua reviews
   */
  fetchReviews: async (): Promise<Review[]> => {
    try {
      const reviews = await reviewsApi.getReviews();
      return reviews;
    } catch (error) {
      console.error("Error fetching reviews:", error);
      throw new Error("Failed to fetch reviews data");
    }
  },
};
