import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Preloader } from "@/components/Preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creative Developer | Portfolio",
  description: "A high-end scrollytelling personal portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased text-white bg-black`}
      >
        <Preloader />
        {children}
      </body>
    </html>
  );
}
