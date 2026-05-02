import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AbilisPath - Your Gateway to Global Education & Career",
  description: "Leading education consultancy providing study abroad, placement, MBBS, and scholarship guidance from Chennai, India.",
  keywords: "education consultancy, study abroad, placement, MBBS, scholarships, Chennai",
  openGraph: {
    title: "AbilisPath - Education Consultancy",
    description: "Your gateway to global education and career opportunities",
    url: "https://abilispath.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
