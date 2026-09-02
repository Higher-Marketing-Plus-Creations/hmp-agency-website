import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { MakeHeader } from "@/components/make/header";
import { MakeFooter } from "@/components/make/shared";
import { getCaseStudies, getSiteSettings } from "@/lib/content";
import { createMetadata } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  description: "Case studies from Higher Marketing Plus.",
  pathname: "/case-studies",
  title: "Case Studies | Higher Marketing Plus"
});

export default async function CaseStudiesPage() {
  const [caseStudies, settings] = await Promise.all([getCaseStudies(), getSiteSettings()]);

  return (
    <div className="min-h-screen bg-black text-white">
      <MakeHeader bookingUrl={settings.bookingUrl} />
      <div>
        <section className="relative overflow-hidden px-6 pb-16 pt-32">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black" />
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="mb-6 inline-flex rounded-full border border-[#2196F3]/20 bg-[#2196F3]/10 px-4 py-2 text-sm text-[#2196F3]">
              Case Studies
            </div>
            <h1 className="max-w-4xl bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-5xl text-transparent md:text-7xl">
              Case Studies
            </h1>
          </div>
        </section>
        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {caseStudies.map((caseStudy) => (
              <Link
                className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-[#2196F3]/40 hover:bg-white/10"
                href={`/case-studies/${caseStudy.slug}`}
                key={caseStudy.slug}
              >
                <span className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
                  {caseStudy.slug === "won-communications-seo" ? "SEO + AI Search" : "SEO & Local Search"}
                </span>
                {caseStudy.slug !== "won-communications" ? (
                  <div className="mb-5 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
                    <Image
                      alt={`Google Search Console screenshot for ${caseStudy.title} SEO results`}
                      className="aspect-[16/10] h-full w-full object-cover object-left-top"
                      height={576}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      src={
                        caseStudy.slug === "essential-autowerks-seo"
                          ? "/images/ea-Clicks.png"
                          : caseStudy.slug === "imperial-landscaping-seo"
                            ? "/images/il-Clicks.png"
                            : "/images/wc-Clicks.png"
                      }
                      width={904}
                    />
                  </div>
                ) : null}
                <h2 className="text-2xl text-white">{caseStudy.title}</h2>
                {caseStudy.slug === "essential-autowerks-seo" ? (
                  <div className="mt-5 grid gap-3">
                    <strong className="text-3xl text-white">+54.2%</strong>
                    <p className="text-zinc-400">Organic Click Growth</p>
                    <p className="text-sm text-zinc-500">Nixa, Missouri</p>
                  </div>
                ) : caseStudy.slug === "imperial-landscaping-seo" ? (
                  <div className="mt-5 grid gap-3">
                    <strong className="text-3xl text-white">+450%</strong>
                    <p className="text-zinc-400">Organic Click Growth</p>
                    <p className="text-sm text-zinc-500">Springfield, Missouri</p>
                    <p className="text-sm text-zinc-500">13 to 158 Search Visibility Expansion</p>
                  </div>
                ) : caseStudy.slug === "won-communications-seo" ? (
                  <div className="mt-5 grid gap-3">
                    <strong className="text-3xl text-white">+300%</strong>
                    <p className="text-zinc-400">Organic Click Growth</p>
                    <p className="text-sm text-zinc-500">+862% Search Impression Growth</p>
                    <p className="text-sm text-zinc-500">21 to 91 AI Citations</p>
                  </div>
                ) : (
                  <p className="mt-4 text-zinc-400">Details coming soon.</p>
                )}
              </Link>
            ))}
          </div>
        </section>
      </div>
      <MakeFooter
        bookingUrl={settings.bookingUrl}
        contactEmail={settings.contactEmail}
        supportPhone={settings.supportPhone}
      />
    </div>
  );
}
