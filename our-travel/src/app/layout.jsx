import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmallScreenWarning from "@/components/screenWarning/SmallScreenWarning";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "OUR TRAVEL",
  description: "helping your travel experience more exiciting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmallScreenWarning />
        {children}
      </body>
    </html>
  );
}
