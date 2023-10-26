import Navbar from "../components/navbar";
import { Roboto } from "next/font/google";
import "./globals.css";

export const metadata = {
   title: "PruebaWeb",
   description: "Esta es la pagina principal de pruebas",
   colorScheme: "dark",
};

const roboto = Roboto({
   weight: ["300", "400", "500", "700"],
   style: ["italic", "normal"],
   subsets: ["latin"],
});

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={roboto.className}>
            <Navbar />
            {children}
         </body>
      </html>
   );
}
