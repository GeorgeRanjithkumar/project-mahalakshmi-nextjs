import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Maha Lakshmi College of Engineering | Perambalur, Tamil Nadu",
  description:
    "An ISO 9001:2008 certified institution in Perambalur, Tamil Nadu — empowering students with world-class engineering education, 100% placement support, and a vibrant campus life rooted in tradition and innovation.",
  keywords: [
    "Maha Lakshmi College of Engineering",
    "Perambalur engineering college",
    "Tamil Nadu engineering admissions 2026",
    "Best engineering college Perambalur",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="antialiased bg-white text-royal-900">{children}</body>
    </html>
  );
}
