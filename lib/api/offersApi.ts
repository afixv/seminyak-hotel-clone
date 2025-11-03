import { Offer } from "@/lib/types";

// Dummy API untuk Offers
export const offersApi = {
  getAll: async (): Promise<Offer[]> => {
    // Simulasi API call dengan Promise
    return new Promise((resolve) => {
      resolve([
        {
          id: "1",
          image: "/images/main-dining.Bq-1WGnP.png",
          title: "Vibrant Tropical Festive",
          description:
            "Dive into the island's holiday spirit as Hotel Indigo Bali Seminyak Beach invites you to celebrate this festive season with a tropical twist in true neighborhood style, vibrant and merry.",
          link: "/offers/vibrant-tropical-festive",
        },
        {
          id: "2",
          image: "/images/main-wedding.Bzni59le.png",
          title: "MONOPOLY: Bali Edition",
          description:
            "The world's most famous board game, MONOPOLY, was unveiled in a grand celebration that brought together key tourism stakeholders, local entities, and enthusiastic guests eager to experience the island's first-ever official MONOPOLY board.",
          link: "/offers/monopoly-bali-edition",
        },
        {
          id: "3",
          image: "/images/main-events.BWqmO2Bf.png",
          title: "Sizzling Summer Fest",
          description: "A summer of flavor awaits",
          link: "/offers/sizzling-summer-fest",
        },
        {
          id: "4",
          image: "/images/rooms.BaI9CxEy.png",
          title: "Summer in Bali",
          description:
            "Stay a minimum of 3 nights and enjoy complimentary one-way airport pick up and breakfast to fuel your island adventures",
          link: "/offers/summer-bali",
        },
        {
          id: "5",
          image: "/images/suite.Cz8DciV_.png",
          title: "Best Flexible Rate",
          description:
            "Book directly through IHG's website and/or mobile apps to secure the lowest available room rate",
          link: "/offers/best-flexible-rate",
        },
        {
          id: "6",
          image: "/images/one-bedroom.Cn3x4nQ1.png",
          title: "Seminyak Bliss",
          description: "Complimentary daily resort credit starts from IDR 300.000",
          link: "/offers/seminyak-bliss",
        },
        {
          id: "7",
          image: "/images/two-bedroom.DonygiVk.png",
          title: "Breakfast On Us",
          description:
            "Awaken your senses with a complimentary breakfast that promises to kickstart your day in the most delicious way possible.",
          link: "/offers/breakfast-on-us",
        },
        {
          id: "8",
          image: "/images/photo1.CvygVCoG.png",
          title: "Book Early & Save",
          description:
            "Booking at least 14 days or more in advance to enjoy up to 10% savings on our Best Flexible Rates",
          link: "/offers/book-early-save",
        },
        {
          id: "9",
          image: "/images/photo2.CYyw3Co4.png",
          title: "Dinner Bed & Breakfast",
          description: "Perfect stay with delicious breakfast and dinner included.",
          link: "/offers/dinner-bed-and-breakfast",
        },
        {
          id: "10",
          image: "/images/slideshow-2.BCv-Awm_.png",
          title: "Stay Longer Pay Less",
          description: "Stay 5 nights or more and save up to 10% from our rate.",
          link: "/offers/stay-longer-pay-less",
        },
      ]);
    });
  },
};
