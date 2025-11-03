import { IHGBrand } from "@/lib/types";

export const ihgBrandsApi = {
  getAll: async (): Promise<IHGBrand[]> => {
    return new Promise((resolve) => {
      resolve([
        {
          id: "brand-1",
          image: "/images/6720506a3a527458395735.png",
          link: "https://www.sixsenses.com/en",
        },
        {
          id: "brand-2",
          image: "/images/6720506a3a527458395735.png",
          link: "https://www.ihg.com/regent/hotels/gb/en/reservation",
        },
        {
          id: "brand-3",
          image: "/images/6862ab6072fde323197028.svg",
          link: "https://www.ihg.com/intercontinental/hotels/gb/en/reservation",
        },
        {
          id: "brand-4",
          image: "/images/6720506a3a527458395735.png",
          link: "https://www.ihg.com/vignettecollection/hotels/gb/en/reservation",
        },
        {
          id: "brand-5",
          image: "/images/6862ab988dd4a282144120.svg",
          link: "https://www.ihg.com/kimptonhotels/hotels/us/en/reservation",
        },
        {
          id: "brand-6",
          image: "/images/6720506a3a527458395735.png",
          link: "https://www.ihg.com/hotelindigo/hotels/gb/en/reservation",
        },
        {
          id: "brand-7",
          image: "/images/6720506a3a527458395735.png",
          link: "https://www.ihg.com/voco/hotels/gb/en/reservation",
        },
        {
          id: "brand-8",
          image: "/images/68620cf9a672e549223359.svg",
          link: "https://www.ihg.com/content/us/en/ruby-hotels",
        },
        {
          id: "brand-9",
          image: "/images/6862abdc2ce43796200625.svg",
          link: "https://www.ihg.com/hualuxe/hotels/gb/en/reservation",
        },
        {
          id: "brand-10",
          image: "/images/6862ac0c067fc545171902.svg",
          link: "https://www.ihg.com/crowneplaza/hotels/gb/en/reservation",
        },
        {
          id: "brand-11",
          image: "/images/6720506a3a527458395735.png",
          link: "https://www.ihg.com/content/us/en/iberostar-beachfront-resorts",
        },
        {
          id: "brand-12",
          image: "/images/6720506a3a527458395735.png",
          link: "https://www.ihg.com/evenhotels/hotels/us/en/reservation",
        },
        {
          id: "brand-13",
          image: "/images/6720506a3a527458395735.png",
          link: "https://www.ihg.com/holidayinnexpress/hotels/gb/en/reservation",
        },
        {
          id: "brand-14",
          image: "/images/6720506a3a527458395735.png",
          link: "https://www.ihg.com/holidayinn/hotels/gb/en/reservation",
        },
        {
          id: "brand-15",
          image: "/images/6720506a3a527458395735.png",
          link: "https://www.ihg.com/garnerhotels",
        },
        {
          id: "brand-16",
          image: "/images/6720506a3a527458395735.png",
          link: "https://www.ihg.com/avidhotels/hotels/gb/en/reservation",
        },
        {
          id: "brand-17",
          image: "/images/6720506a3a527458395735.png",
          link: "https://www.ihg.com/atwellsuites/hotels/gb/en/reservation",
        },
        {
          id: "brand-18",
          image: "/images/6720506a3a527458395735.png",
          link: "https://www.ihg.com/staybridge/hotels/gb/en/reservation",
        },
        {
          id: "brand-19",
          image: "/images/6720506a3a527458395735.png",
          link: "https://www.ihg.com/holidayinnclubvacations/hotels/us/en/reservation",
        },
        {
          id: "brand-20",
          image: "/images/6720506a3a527458395735.png",
          link: "https://www.ihg.com/candlewood/hotels/us/en/reservation",
        },
      ]);
    });
  },
};
