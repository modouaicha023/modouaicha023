import "./globals.css";
import { ThemeProvider } from "../components/ui/utils/ThemeProvider";
import Header from "@/components/Header";

import { Josefin_Slab } from "next/font/google";


const josefinSlab = Josefin_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Modou Aicha Diop",
  description: "Modou Aicha Diop, Portfolio, Dakar, Senegal, Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefinSlab.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
