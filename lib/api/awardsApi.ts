import { Award } from "@/lib/types";

export const awardsApi = {
  getAll: async (): Promise<Award[]> => {
    return new Promise((resolve) => {
      resolve([
        {
          id: "award-1",
          image: "/images/68e72d307e4c3704910780.png",
          link: "",
        },
        {
          id: "award-2",
          image: "/images/6827cc6887513591278065.png",
          link: "https://www.nationalgeographic.com/travel/topic/coastal-collection-2025",
        },
        {
          id: "award-3",
          image: "/images/6827cc6830425891066093.png",
          link: "https://www.nationalgeographic.com/travel/article/luxury-collection-2024",
        },
        {
          id: "award-4",
          image: "/images/6827ce8ecd798742393227.png",
          link: "/awards",
        },
        {
          id: "award-5",
          image: "/images/6849439ed071d110950510.png",
          link: "",
        },
        {
          id: "award-6",
          image: "/images/6822c9d119f6d025575909.png",
          link: "https://www.linkedin.com/feed/update/urn:li:activity:6587225648757121024",
        },
        {
          id: "award-7",
          image: "/images/6822c9b8854f0945111418.png",
          link: "https://awards.exquisite-media.co.id/",
        },
        {
          id: "award-8",
          image: "/images/6822c9bd1a76a157898715.png",
          link: "https://www.linkedin.com/feed/update/urn:li:activity:6577373552826245120",
        },
        {
          id: "award-9",
          image: "/images/6822c9ac0d26e820328220.png",
          link: "/awards",
        },
        {
          id: "award-10",
          image: "/images/6822c9b48b19d622450903.png",
          link: "https://www.linkedin.com/feed/update/urn:li:activity:6564313739208863744/",
        },
        {
          id: "award-11",
          image: "/images/6822c9c19fb13552132079.png",
          link: "https://www.tripadvisor.co.id/Hotel_Review-g469404-d9595791-Reviews-Hotel_Indigo_Bali_Seminyak_Beach-Seminyak_Kuta_District_Bali.html",
        },
        {
          id: "award-12",
          image: "/images/6822c9cabceec488737627.png",
          link: "https://www.destinasian.com/blog/news-briefs/rca2023",
        },
      ]);
    });
  },
};
