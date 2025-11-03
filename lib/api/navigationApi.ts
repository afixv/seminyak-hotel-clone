import { NavItem } from "@/lib/types";

// Dummy API untuk Navigation
export const navigationApi = {
  getNavItems: async (): Promise<NavItem[]> => {
    // Simulasi API call dengan Promise
    return new Promise((resolve) => {
      resolve([
        { label: "About Us", href: "/en/about-us" },
        {
          label: "ACCOMMODATIONS",
          href: "/en/accommodation/rooms",
          dropdown: [
            { label: "Rooms", href: "/en/accommodation/rooms" },
            { label: "Suites", href: "/en/accommodation/suites" },
            {
              label: "One Bedroom Villa",
              href: "/en/accommodation/one-bedroom-villa",
            },
            {
              label: "Two Bedroom Villa",
              href: "/en/accommodation/two-bedroom-villa",
            },
          ],
        },
        {
          label: "WELLNESS",
          href: "/en/wellness",
          dropdown: [
            { label: "Sava Spa", href: "/en/wellness/sava-spa" },
            { label: "24/7 Gym", href: "/en/wellness/gym" },
            { label: "Activities", href: "/en/wellness/activities" },
          ],
        },
        {
          label: "DINING",
          href: "/en/dining",
          dropdown: [
            { label: "Sugarsand", href: "/en/dining/sugarsand" },
            { label: "Breakfast Club Seminyak", href: "/en/dining/breakfast-club" },
            { label: "Makase", href: "/en/dining/makase" },
            { label: "Pottery Cafe", href: "/en/dining/pottery-cafe" },
            { label: "Cave Pool Lounge", href: "/en/dining/cave-pool-lounge" },
            { label: "Home Delivery", href: "/en/dining/home-delivery" },
            { label: "Tree Bar", href: "/en/dining/tree-bar" },
            { label: "KIOSK", href: "/en/dining/kiosk" },
          ],
        },
        {
          label: "EVENT",
          href: "#",
          dropdown: [
            { label: "Meeting", href: "/en/meeting" },
            { label: "Wedding", href: "/en/wedding" },
          ],
        },
        { label: "Offers", href: "/en/offers" },
        { label: "Press Release", href: "/en/press-release" },
        { label: "Gallery", href: "/en/gallery" },
        { label: "Awards", href: "/en/awards" },
        { label: "FAQ & Contact", href: "/en/contact" },
      ]);
    });
  },

  getLanguages: async (): Promise<string[]> => {
    // Simulasi API call dengan Promise
    return new Promise((resolve) => {
      resolve([
        "English",
        "Indonesia",
        "Russia",
        "Korea",
        "Simplified Chinese",
        "Traditional Chinese",
        "Arabic",
      ]);
    });
  },
};
