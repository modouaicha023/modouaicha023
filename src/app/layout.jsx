import "./globals.css";
import { ThemeProvider } from "../components/ui/utils/ThemeProvider";
import Header from "@/components/Header";
import seoConfig from "@/seo.config";
import { Josefin_Slab } from "next/font/google";
import { WebVitals } from "./_components/web-vitals";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const josefinSlab = Josefin_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: seoConfig.title,
  description: seoConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: seoConfig.openGraph,
  twitter: seoConfig.twitter,
  metadataBase: new URL("https://modouaicha023.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
            `,
          }}
        />
      </Head>
      <body className={josefinSlab.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <WebVitals />
          <Header />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
