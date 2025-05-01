
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/Component/Footer";
import ReduxProvider from './redux/ReduxProvider';




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BuyBit ",
  description: "Get the best product here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ReduxProvider>
          {children}
          </ReduxProvider>
        <Footer />

      </body>


    </html>
  );
}
