import { Changa } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartProvider from "@/components/CartProvider";
import { Toaster } from "@/components/ui/toaster";

const changa = Changa({ 
  subsets: ["latin"],
  weight: ['300','400', '500','600','700','800'],
  variable: '--font-changa',
});

export const metadata = {
  title: "Shop for Cameras",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={changa.className}>
        <CartProvider>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </CartProvider>
        {/* <div className="h-[2000px]"></div> */}
      </body>
    </html>
  );
}
