import { Review } from "@/lib/types";

// Dummy API untuk Reviews
export const reviewsApi = {
  getRating: async (): Promise<{ rating: number; count: number }> => {
    // Simulasi API call dengan Promise
    return new Promise((resolve) => {
      resolve({
        rating: 4.8,
        count: 1147,
      });
    });
  },

  getReviews: async (): Promise<Review[]> => {
    // Simulasi API call dengan Promise
    return new Promise((resolve) => {
      resolve([
        {
          id: "1",
          rating: 5,
          text: "Excellent stay at Hotel Indigo Bali Seminyak Beach. The staff was very friendly and the amenities were top-notch.",
          author: "John Doe",
          date: "2024-10-15",
        },
        {
          id: "2",
          rating: 5,
          text: "Beautiful location with amazing views. The dining options are fantastic and the spa services are world-class.",
          author: "Jane Smith",
          date: "2024-10-10",
        },
        {
          id: "3",
          rating: 4,
          text: "Great resort with wonderful facilities. Only minor issues with room service timing.",
          author: "Michael Johnson",
          date: "2024-10-05",
        },
      ]);
    });
  },
};
