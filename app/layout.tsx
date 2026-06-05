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
        <Script id="tawk-to-chat" strategy="afterInteractive">
          {`
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function() {
              var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = "https://embed.tawk.to/6a2275f418ebf31c2bb3eff9/1jqb9pgdg";
              s1.charset = "UTF-8";
              s1.setAttribute("crossorigin", "*");
              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
