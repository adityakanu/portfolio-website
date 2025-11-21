import type { Metadata } from "next";
import { Inter, Montserrat, Syne, Tillana } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const syne = Syne({ subsets: ["latin"] });
const tillana = Tillana({ weight: "500", subsets: ["devanagari"] });

export const metadata: Metadata = {
  title: "Aditya Kanu",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Analytics/>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
