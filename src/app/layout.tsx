import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BackgroundSquares from "@/components/backgroundSquares";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { NotionDataProvider } from "./context/NotionDataContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const orbitron = localFont({
  src: "./fonts/Orbitron.ttf",
  variable: "--font-orbitron",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lappis",
  description: "Lappis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased bg-white `}
      >
        <NotionDataProvider>
          <BackgroundSquares />
          <Header />
          <div className="mt-36 overflow-x-hidden">{children}</div>
          <Footer />
        </NotionDataProvider>
      </body>
    </html>
  );
}
