

import "./globals.css";
import Footer from "@/Component/Footer";
import ReduxProvider from '../redux/ReduxProvider';


export const metadata = {
  title: "BuyBit ",
  description: "Get the best product here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body
        className='antialiased'
      >
         <ReduxProvider>
          {children}
          </ReduxProvider>
        <Footer />

      </body>


    </html>
  );
}
