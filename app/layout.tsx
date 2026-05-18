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
        <Script id="vapi-widget" strategy="afterInteractive">
          {`(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.src="https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";g.defer=true;g.async=true;s.parentNode.insertBefore(g,s);g.onload=function(){window.vapiSDK.run({apiKey:"e8049e40-6b1e-41c3-ba99-fbfd16cf9a65",assistant:"f86f9947-20d8-4885-ab80-659ffa65b4bf",config:{position:"bottom-right",offset:"24px",idle:{color:"rgb(37,99,235)",type:"pill",title:"Talk to us now",subtitle:"AI available 24/7"},loading:{color:"rgb(37,99,235)",type:"spinner"},active:{color:"rgb(220,38,38)",type:"pill",title:"Live call",subtitle:"Tap to end"}}});};})(document,"script");`}
        </Script>
      </body>
    </html>
  );
}
