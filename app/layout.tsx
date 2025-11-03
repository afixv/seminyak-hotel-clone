import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";

// Use a fallback sans-serif font similar to Beausite
const beausite = localFont({
  src: [
    {
      path: "../public/fonts/beausite-fit-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/beausite-fit-regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-beausite",
  fallback: ["system-ui", "sans-serif"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hotel Indigo Bali Seminyak Beach | The First 5-Star Hotel Indigo",
  description:
    "Hotel Indigo Bali Seminyak Beach is situated in the heart of one of Bali's most vibrant districts, a place where centuries of tradition and culture blend seamlessly with an atmosphere of casual sophistication.",
  keywords:
    "hotel indigo seminyak, seminyak indigo, seminyak hotel, seminyak resort, seminyak beach",
  openGraph: {
    type: "website",
    url: "https://seminyak.hotelindigo.com/",
    title: "Hotel Indigo Bali Seminyak Beach | The First 5-Star Hotel Indigo",
    description:
      "Hotel Indigo Bali Seminyak Beach is situated in the heart of one of Bali's most vibrant districts, a place where centuries of tradition and culture blend seamlessly with an atmosphere of casual sophistication.",
    images: [
      {
        url: "https://seminyak.hotelindigo.com/cms/storage/app/uploads/public/689/9b2/79b/6899b279bfcd6232376300.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Indigo Bali Seminyak Beach | The First 5-Star Hotel Indigo",
    description:
      "Hotel Indigo Bali Seminyak Beach is situated in the heart of one of Bali's most vibrant districts, a place where centuries of tradition and culture blend seamlessly with an atmosphere of casual sophistication.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo-new-ver.png" />
      </head>
      <body className={`${beausite.variable} antialiased`}>
        <LenisScroll />
        {children}
      </body>
    </html>
  );
}
