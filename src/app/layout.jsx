import "./globals.css";
import { ThemeProvider } from "../components/ui/utils/ThemeProvider";
import Header from "@/components/Header";
import seoConfig from '@/seo.config'

import { Josefin_Slab } from "next/font/google";


const josefinSlab = Josefin_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: seoConfig.title,
  description: seoConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: seoConfig.openGraph,
  twitter: seoConfig.twitter,
  metadataBase: new URL('https://modouaicha023.vercel.app'), 
}

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
