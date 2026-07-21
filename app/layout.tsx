import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import Script from "next/script";

import { siteSettings } from "@/lib/content/local-data";
import { createMetadata } from "@/lib/site-config";

import "@/app/globals.css";



const bodyFont = Manrope({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-body"
});

const displayFont = Sora({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = createMetadata({
  description: siteSettings.defaultDescription,
  title: siteSettings.defaultTitle
});

export const viewport: Viewport = {
  themeColor: "#050816"
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} bg-black text-white`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <main id="main-content">{children}</main>
        <Script id="clarity-ms" strategy="beforeInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "x7jh7wu8uo");
          `}
        </Script>
        <Script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=5cf0f9d1-e63d-41cb-80fd-c528499d53a5"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
