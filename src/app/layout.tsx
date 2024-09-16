import type { Metadata } from "next";
import { ViewTransitions } from 'next-view-transitions';
import { Inter, Montserrat, Syne, Tillana } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

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
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <Providers>
          <body className={inter.className}>
            {children}
          </body>
        </Providers>
      </html>
    </ViewTransitions>
  );
}
