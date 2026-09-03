"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, MapPin, Phone, Search, TrendingUp } from "lucide-react";

import { MakeHeader } from "@/components/make/header";
import { MakeFooter } from "@/components/make/shared";

type ImperialLandscapingSeoCaseStudyProps = {
  bookingUrl: string;
  contactEmail: string;
  supportPhone: string;
};

const tags = ["SEO", "Local SEO", "Google Business Profile", "Organic Search", "Lead Generation"];

const heroMetrics = [
  { label: "Organic Click Growth", note: "Latest 28 Days vs Previous 28 Days", value: "+450%" },
  { label: "Search Impressions", note: "Latest 28 Days", value: "5.59K" },
  { label: "Ranking Overview Total", note: "Up from 13", value: "158" },
  { label: "GBP Calls", note: "June 2026", value: "17" }
];

const overview = [
  { label: "Client", value: "Imperial Landscaping" },
  { label: "Business / Listing Name", value: "Imperial Landscaping LLC" },
  { label: "Industry", value: "Landscaping & Lawn Care" },
  { label: "Location", value: "Springfield, Missouri" },
  { label: "Campaign Areas", value: "Organic Search, Local SEO, Google Business Profile, Keyword Visibility, Lead Generation" },
  {
    label: "Primary Objective",
    value:
      "Increase Imperial Landscaping's visibility for relevant landscaping searches in and around Springfield and generate measurable customer actions from organic search."
  }
];

const focusPillars = [
  {
    eyebrow: "Organic Search Visibility",
    title: "Expanding Search Visibility",
    description:
      "The campaign focused on increasing the number of relevant searches where Imperial Landscaping could be discovered and developing stronger visibility across the search-result landscape."
  },
  {
    eyebrow: "Local Search",
    title: "Competing for Springfield Searches",
    description:
      "High-intent local queries around landscaping, landscape design, lawn services and related Springfield searches were central to measuring campaign performance."
  },
  {
    eyebrow: "Keyword Coverage",
    title: "Building Broader Keyword Reach",
    description:
      "Performance was tracked across commercial landscaping terms, branded queries and informational lawn-care topics to measure how search visibility expanded over time."
  },
  {
    eyebrow: "Lead Generation",
    title: "Turning Visibility Into Customer Actions",
    description:
      "Beyond rankings and impressions, performance was evaluated through Google Business Profile calls and website conversion events including phone leads and form submissions."
  }
];

const twentyEightDayResults = [
  { current: "55", detail: "+45 clicks", label: "Organic Clicks", previous: "10", value: "+450%" },
  { current: "5.59K", detail: "+4.88K impressions", label: "Search Impressions", previous: "710", value: "+4.88K" },
  { current: "13.5", detail: "5.3-position improvement", label: "Average Position", previous: "18.8", value: "18.8 -> 13.5" }
];

const threeMonthResults = [
  { current: "112", detail: "+84%", label: "Organic Clicks", previous: "61" },
  { current: "12.8K", detail: "+450%", label: "Search Impressions", previous: "2.3K" },
  { current: "15.8", detail: "Improved from 19", label: "Average Position", previous: "19" }
];

const rankingDistribution = [
  { after: 1, before: 0, label: "Top 3" },
  { after: 2, before: 0, label: "4-10" },
  { after: 11, before: 2, label: "11-20" },
  { after: 62, before: 7, label: "21-50" },
  { after: 69, before: 0, label: "51-100" },
  { after: 6, before: 0, label: "AI Overviews" },
  { after: 7, before: 4, label: "Other SERP Features" }
];

const organicKeywords = [
  { keyword: "imperial landscaping", position: "#7", volume: "390" },
  { keyword: "imperial landscape", position: "#10", volume: "90" },
  { keyword: "landscaping springfield mo", position: "#15 organic", volume: "260" },
  { keyword: "imperial lawn care", position: "#17", volume: "90" },
  { keyword: "best weather to plant grass seed", position: "#18", volume: "40" },
  { keyword: "stump removal springfield mo", position: "#19", volume: "50" },
  { keyword: "imperial lawn service", position: "#19", volume: "90" },
  { keyword: "landscaping companies springfield mo", position: "#20", volume: "70" },
  { keyword: "landscape springfield mo", position: "#22", volume: "110" },
  { keyword: "imperial lawns", position: "#22", volume: "390" }
];

const discoverySearches = [
  { query: "landscaping springfield mo", searches: "178" },
  { query: "imperial", searches: "54" },
  { query: "landscapers near me", searches: "17" },
  { query: "hydroseeding", searches: "<15" },
  { query: "hydroseeding near me", searches: "<15" },
  { query: "imperial landscaping", searches: "<15" },
  { query: "imperial landscaping llc", searches: "<15" },
  { query: "imperial landscaping missouri", searches: "<15" },
  { query: "imperial lawn care", searches: "<15" },
  { query: "landscape design", searches: "<15" },
  { query: "landscape designer springfield mo", searches: "<15" },
  { query: "landscape designers near me", searches: "<15" },
  { query: "landscape nursery", searches: "<15" },
  { query: "landscape rock", searches: "<15" },
  { query: "landscapers in springfield mo", searches: "<15" }
];

const summaryMetrics = [
  { label: "28-Day Click Growth", value: "+450%" },
  { label: "Latest 28-Day Clicks", value: "55" },
  { label: "Latest 28-Day Impressions", value: "5.59K" },
  { label: "Average Position", value: "13.5" },
  { label: "3-Month Click Growth", value: "+84%" },
  { label: "3-Month Impressions", value: "12.8K" },
  { label: "Ranking Overview Total", value: "158" },
  { label: "Local Result", value: "#3" },
  { label: "GBP Calls", value: "17" },
  { label: "Organic Users", value: "88" }
];

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ copy, eyebrow, title }: { copy?: string; eyebrow: string; title: string }) {
  return (
    <div className="mx-auto mb-12 max-w-4xl text-center">
      <div className="mb-5 inline-flex rounded-full border border-[#2196F3]/20 bg-[#2196F3]/10 px-4 py-2 text-sm text-[#2196F3]">
        {eyebrow}
      </div>
      <h2 className="bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-4xl text-transparent md:text-5xl">
        {title}
      </h2>
      {copy ? <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-zinc-400">{copy}</p> : null}
    </div>
  );
}

function EvidenceFrame({
  alt,
  children,
  className = "",
  imageClassName = "h-auto w-full rounded-2xl",
  imageWrapClassName = "bg-zinc-950/70 p-3",
  src
}: {
  alt: string;
  children?: ReactNode;
  className?: string;
  imageClassName?: string;
  imageWrapClassName?: string;
  src: string;
}) {
  return (
    <div className={`overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30 ${className}`}>
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
        <span className="h-3 w-3 rounded-full bg-green-400/80" />
      </div>
      <div className={imageWrapClassName}>
        <Image alt={alt} className={imageClassName} height={620} sizes="(max-width: 768px) 100vw, 50vw" src={src} width={900} />
      </div>
      {children ? <div className="border-t border-white/10 p-5">{children}</div> : null}
    </div>
  );
}

function ComparisonBar({
  current,
  currentLabel,
  label,
  note,
  previous,
  previousLabel
}: {
  current: number;
  currentLabel: string;
  label: string;
  note: string;
  previous: number;
  previousLabel: string;
}) {
  const max = Math.max(current, previous);

  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl text-white">{label}</h3>
        <span className="rounded-full bg-[#F59E0B]/10 px-3 py-1 text-sm text-[#F59E0B]">{note}</span>
      </div>
      <div className="mt-auto flex min-h-[126px] flex-col justify-end">
        {[
          { label: "Previous", value: previous, valueLabel: previousLabel, tone: "bg-zinc-500" },
          { label: "Current", value: current, valueLabel: currentLabel, tone: "bg-gradient-to-r from-[#2196F3] to-[#F59E0B]" }
        ].map((bar) => (
          <div className="mb-4 last:mb-0" key={bar.label}>
            <div className="mb-2 flex justify-between text-sm text-zinc-400">
              <span>{bar.label}</span>
              <span>{bar.valueLabel}</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className={`h-full rounded-full ${bar.tone}`}
                initial={{ width: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                whileInView={{ width: `${Math.max(8, (bar.value / max) * 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ImperialLandscapingSeoCaseStudy({
  bookingUrl,
  contactEmail,
  supportPhone
}: ImperialLandscapingSeoCaseStudyProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <MakeHeader bookingUrl={bookingUrl} />

      <div>
        <section className="relative overflow-hidden px-6 pb-20 pt-32 md:pt-36">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black" />
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:40px_40px]" />
          <div className="relative z-10 mx-auto grid max-w-6xl items-stretch gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.75fr)]">
            <Reveal className="h-full">
              <div className="mb-6 inline-flex rounded-full border border-[#2196F3]/20 bg-[#2196F3]/10 px-4 py-2 text-sm text-[#2196F3]">
                SEO Case Study
              </div>
              <h1 className="max-w-4xl bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-5xl leading-[0.98] text-transparent md:text-6xl lg:text-7xl">
                Growing Imperial Landscaping's Search Visibility in Springfield
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
                Imperial Landscaping's SEO campaign focused on expanding organic search visibility, strengthening its
                presence in Springfield, Missouri, and turning search exposure into measurable customer actions.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal className="flex h-full items-center" delay={0.12}>
              <div className="grid w-full gap-4 sm:grid-cols-2">
                {heroMetrics.map((metric, index) => (
                  <motion.div
                    className={`flex min-w-0 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm ${index === 0 ? "sm:col-span-2" : ""}`}
                    key={metric.label}
                    whileHover={{ y: -4 }}
                  >
                    <strong className="block break-words bg-gradient-to-r from-[#2196F3] to-[#F59E0B] bg-clip-text text-4xl leading-tight text-transparent md:text-[2.65rem]">
                      {metric.value}
                    </strong>
                    <span className="mt-2 block text-sm uppercase tracking-[0.18em] text-zinc-400">{metric.label}</span>
                    <span className="mt-2 block text-sm text-zinc-500">{metric.note}</span>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div className="sticky top-28">
                <div className="mb-5 inline-flex rounded-full border border-[#F59E0B]/20 bg-[#F59E0B]/10 px-4 py-2 text-sm text-[#F59E0B]">
                  Project Overview
                </div>
                <h2 className="text-4xl text-white md:text-5xl">From Limited Visibility to Measurable Organic Reach</h2>
              </div>
            </Reveal>
            <Reveal className="grid gap-4" delay={0.08}>
              {overview.map((item) => (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6" key={item.label}>
                  <span className="text-sm uppercase tracking-[0.18em] text-zinc-500">{item.label}</span>
                  <p className="mt-3 text-lg leading-relaxed text-zinc-200">{item.value}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="bg-gradient-to-b from-zinc-950 to-black px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                copy="Imperial Landscaping needed stronger visibility across organic and local search results in the competitive Springfield landscaping market. The tracked ranking overview began with limited Top 10 coverage, while the campaign report focused on broader search discovery and measurable enquiries from organic search."
                eyebrow="The Challenge"
                title="Building Broader Presence in a Competitive Local Market"
              />
            </Reveal>
            <div className="grid items-stretch gap-6 lg:grid-cols-2">
              <Reveal className="h-full">
                <EvidenceFrame
                  alt="June 1 2026 keyword ranking overview showing total ranking visibility of 13"
                  className="flex h-full min-h-[680px] flex-col"
                  imageClassName="h-full w-full rounded-2xl object-cover object-left-top"
                  imageWrapClassName="min-h-[560px] flex-1 bg-zinc-950/70 p-3"
                  src="/images/il-keywords-ranking-1.png"
                >
                  <p className="flex min-h-[48px] items-center text-sm text-zinc-400">
                    June 1, 2026: ranking overview total of 13, with 0 Top 3 and 0 positions 4-10.
                  </p>
                </EvidenceFrame>
              </Reveal>
              <Reveal className="h-full" delay={0.08}>
                <EvidenceFrame
                  alt="August 9 2026 keyword ranking overview showing total ranking visibility of 158"
                  className="flex h-full min-h-[680px] flex-col"
                  imageClassName="h-full w-full rounded-2xl object-cover object-left-top"
                  imageWrapClassName="min-h-[560px] flex-1 bg-zinc-950/70 p-3"
                  src="/images/il-keywords-ranking-2.png"
                >
                  <p className="flex min-h-[48px] items-center text-sm text-zinc-400">
                    August 9, 2026: ranking overview total of 158, including 1 Top 3 and 2 positions 4-10.
                  </p>
                </EvidenceFrame>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                copy="Because the report documents results rather than a full task list, this section describes campaign priorities without inventing unsupported implementation details."
                eyebrow="Our SEO Focus"
                title="Four Priorities Used to Measure Growth"
              />
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {focusPillars.map((pillar, index) => (
                <Reveal delay={index * 0.04} key={pillar.title}>
                  <motion.article className="h-full rounded-2xl border border-white/10 bg-white/5 p-6" whileHover={{ y: -4 }}>
                    <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">{pillar.eyebrow}</span>
                    <h3 className="mt-4 text-2xl text-white">{pillar.title}</h3>
                    <p className="mt-4 leading-relaxed text-zinc-400">{pillar.description}</p>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-zinc-950 to-black px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                copy="Latest 28 days compared with the previous 28 days. CTR moved from 1.4% to 1.0%, so it is treated as context rather than a headline win."
                eyebrow="Organic Search Growth"
                title="Organic Search Growth - Latest 28 Days"
              />
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {twentyEightDayResults.map((result, index) => (
                <Reveal delay={index * 0.05} key={result.label}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <span className="text-sm uppercase tracking-[0.18em] text-zinc-500">{result.label}</span>
                    <strong className="mt-4 block text-4xl text-white">{result.value}</strong>
                    <div className="mt-5 grid gap-2 text-sm text-zinc-400">
                      <span>Previous: {result.previous}</span>
                      <span>Latest: {result.current}</span>
                      <span className="text-[#F59E0B]">{result.detail}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 text-zinc-400">
                <span>CTR Context</span>
                <span>Previous: 1.4%</span>
                <span>Latest: 1.0%</span>
              </div>
            </Reveal>
            <Reveal className="mt-8">
              <EvidenceFrame alt="Google Search Console comparison showing Imperial Landscaping 28-day clicks, impressions, CTR and average position" src="/images/il-Clicks.png">
                <p className="text-sm text-zinc-400">Source screenshot: Google Search Console latest 28 days versus previous 28 days.</p>
              </EvidenceFrame>
            </Reveal>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading eyebrow="28-Day Comparison Visual" title="The Reporting Window, Visualized" />
            </Reveal>
            <div className="grid items-stretch gap-6 lg:grid-cols-3">
              <Reveal className="h-full">
                <ComparisonBar current={55} currentLabel="55" label="Organic Clicks" note="+450%" previous={10} previousLabel="10" />
              </Reveal>
              <Reveal className="h-full" delay={0.05}>
                <ComparisonBar current={5590} currentLabel="5.59K" label="Search Impressions" note="+4.88K" previous={710} previousLabel="710" />
              </Reveal>
              <Reveal className="h-full" delay={0.1}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-xl text-white">Average Position</h3>
                    <span className="rounded-full bg-[#F59E0B]/10 px-3 py-1 text-sm text-[#F59E0B]">
                      Improved by 5.3 positions
                    </span>
                  </div>
                  <div className="mt-auto grid min-h-[126px] gap-4 sm:grid-cols-2">
                    <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-black/20 p-5">
                      <span className="text-sm text-zinc-500">Previous</span>
                      <strong className="mt-2 block text-4xl text-white">18.8</strong>
                    </div>
                    <div className="flex flex-col justify-center rounded-2xl border border-[#2196F3]/20 bg-[#2196F3]/10 p-5">
                      <span className="text-sm text-zinc-400">Latest</span>
                      <strong className="mt-2 block text-4xl text-white">13.5</strong>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-zinc-950 to-black px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                copy="These are separate reporting windows, not combined totals. The strongest longer-term story is click growth, impression growth, and improved average position."
                eyebrow="Growth Over 3 Months"
                title="Longer-Term Organic Growth Continued"
              />
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {threeMonthResults.map((result, index) => (
                <Reveal delay={index * 0.05} key={result.label}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <span className="text-sm uppercase tracking-[0.18em] text-zinc-500">{result.label}</span>
                    <strong className="mt-4 block text-5xl text-white">{result.current}</strong>
                    <p className="mt-4 text-zinc-400">Previous: {result.previous}</p>
                    <p className="mt-2 text-[#F59E0B]">{result.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 text-zinc-400">
                <span>3-Month CTR Context</span>
                <span>Previous: 2.6%</span>
                <span>Latest: 0.9%</span>
              </div>
            </Reveal>
            <Reveal className="mt-8">
              <EvidenceFrame alt="Google Search Console comparison showing Imperial Landscaping three-month organic growth" src="/images/il-Clicks-2.png">
                <p className="text-sm text-zinc-400">Source screenshot: Google Search Console latest 3 months versus previous 3 months.</p>
              </EvidenceFrame>
            </Reveal>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                copy="The report's total ranking visibility increased from 13 to 158. Because this total includes ranking buckets, AI Overviews and other SERP features, it is described as ranking overview growth rather than 158 unique ranking keywords."
                eyebrow="Keyword Visibility Expansion"
                title="From 13 to 158 in the Ranking Overview"
              />
            </Reveal>
            <div className="grid gap-4">
              {rankingDistribution.map((row, index) => {
                const max = Math.max(row.after, row.before, 1);
                return (
                  <Reveal delay={index * 0.035} key={row.label}>
                    <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 md:grid-cols-[170px_1fr_auto] md:items-center">
                      <span className="text-zinc-300">{row.label}</span>
                      <div className="grid gap-3">
                        <div className="h-2 overflow-hidden rounded-full bg-white/10">
                          <div className="h-full rounded-full bg-zinc-600" style={{ width: `${Math.max(4, (row.before / max) * 100)}%` }} />
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/10">
                          <div className="h-full rounded-full bg-gradient-to-r from-[#2196F3] to-[#F59E0B]" style={{ width: `${Math.max(4, (row.after / max) * 100)}%` }} />
                        </div>
                      </div>
                      <span className="text-right text-zinc-400">
                        {row.before} to <strong className="text-white">{row.after}</strong>
                      </span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-zinc-950 to-black px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                copy="These are examples explicitly shown in the campaign report. They are not presented as the only rankings."
                eyebrow="Featured Organic Keywords"
                title="Commercial and Branded Terms Gained Visibility"
              />
            </Reveal>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              {organicKeywords.map((keyword) => (
                <div
                  className="grid gap-3 border-b border-white/10 p-5 last:border-b-0 md:grid-cols-[minmax(0,1fr)_140px_110px] md:items-center"
                  key={keyword.keyword}
                >
                  <span className="break-words text-white">{keyword.keyword}</span>
                  <span
                    className={`justify-self-start rounded-full bg-[#2196F3]/10 px-4 py-2 text-center text-sm text-[#2196F3] md:justify-self-center ${
                      keyword.position.includes("organic") ? "min-w-[120px]" : "min-w-[64px]"
                    }`}
                  >
                    {keyword.position}
                  </span>
                  <span className="text-sm text-zinc-400 md:w-[110px]">Volume {keyword.volume}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-3">
              {["il-keywords-top-ranking-1.png", "il-keywords-top-ranking-2.png", "il-keywords-top-ranking-3.png"].map((file, index) => (
                <Reveal className="h-full" delay={index * 0.05} key={file}>
                  <EvidenceFrame
                    alt="Imperial Landscaping keyword ranking report screenshot"
                    className="flex h-full min-h-[500px] flex-col"
                    imageClassName="h-full w-full rounded-2xl object-cover object-left-top"
                    imageWrapClassName="min-h-[430px] flex-1 bg-zinc-950/70 p-3"
                    src={`/images/${file}`}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <Reveal>
              <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-[#2196F3]/20 bg-[#2196F3]/10 p-8 text-center">
                <MapPin className="mb-6 h-7 w-7 text-[#2196F3]" />
                <h2 className="text-4xl text-white md:text-5xl">#3 Local Visibility for "landscaping springfield mo"</h2>
                <p className="mt-5 max-w-2xl leading-relaxed text-zinc-300">
                  The campaign report documented Imperial Landscaping LLC at approximately #3 in the displayed
                  local/business results for this high-intent Springfield query.
                </p>
                <p className="mt-4 max-w-2xl leading-relaxed text-zinc-400">
                  The organic keyword report separately shows "landscaping springfield mo" at organic position #15, so
                  this page treats local/business visibility and organic visibility as different search surfaces.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <EvidenceFrame alt="Google local results screenshot showing Imperial Landscaping LLC in third position for landscaping springfield mo" src="/images/il-google-profile-performance-1.png" />
            </Reveal>
          </div>
        </section>

        <section className="bg-gradient-to-b from-zinc-950 to-black px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                copy="Imperial Landscaping's local presence generated direct customer actions inside Google's Business Profile ecosystem, including 17 recorded calls during June 2026."
                eyebrow="Google Business Profile Performance"
                title="17 Calls Made From the Business Profile"
              />
            </Reveal>
            <div className="grid gap-6 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
              <Reveal>
                <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                  <Phone className="mb-6 h-7 w-7 text-[#2196F3]" />
                  <strong className="block text-6xl text-white">17</strong>
                  <p className="mt-4 text-zinc-300">Calls Made From the Business Profile</p>
                  <p className="mt-2 text-sm text-[#F59E0B]">June 2026</p>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <EvidenceFrame alt="Google Business Profile report showing 17 calls in June 2026" src="/images/il-google-profile-performance-2.png" />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                copy="The strongest discovery query was non-brand and high-intent: landscaping springfield mo."
                eyebrow="How Customers Found the Business"
                title="Google Business Profile Search Discovery"
              />
            </Reveal>
            <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <Reveal className="h-full">
                <div className="flex h-full flex-col gap-4">
                  <div className="rounded-2xl border border-[#F59E0B]/20 bg-[#F59E0B]/10 p-6">
                    <strong className="block text-5xl text-white">178</strong>
                    <p className="mt-3 text-zinc-300">Searches for "landscaping springfield mo"</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <strong className="block text-4xl text-white">17</strong>
                    <p className="mt-3 text-zinc-300">Searches for "landscapers near me"</p>
                  </div>
                  <div className="min-h-[560px] flex-1 overflow-auto rounded-2xl border border-white/10 bg-white/5 lg:min-h-[640px]">
                    {discoverySearches.map((item) => (
                      <div className="flex justify-between gap-4 border-b border-white/10 p-4 last:border-b-0" key={item.query}>
                        <span className="break-words text-zinc-300">{item.query}</span>
                        <span className="shrink-0 text-white">{item.searches}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal className="h-full" delay={0.08}>
                <EvidenceFrame
                  alt="Google Business Profile searches breakdown for Imperial Landscaping"
                  className="flex h-full flex-col"
                  imageClassName="h-full w-full rounded-2xl object-cover object-left-top"
                  imageWrapClassName="min-h-[760px] flex-1 bg-zinc-950/70 p-3"
                  src="/images/il-searches.png"
                />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-zinc-950 to-black px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                copy="Organic traffic accounted for seven of the eight call-lead events shown in the analytics report. These are event counts, not unique customers or sales."
                eyebrow="Organic Traffic & Lead Activity"
                title="Search Visibility Translated Into Measurable Actions"
              />
            </Reveal>
            <div className="grid gap-6 md:grid-cols-5">
              {[
                { label: "Organic Users", value: "88", note: "42.11% of total users" },
                { label: "Organic Event Count", value: "588", note: "34.39% of total event count" },
                { label: "Tracked Call-Lead Events From Organic", value: "7 of 8", note: "event count" },
                { label: "Organic Form Submission Event", value: "1", note: "1 user" },
                { label: "GBP Calls", value: "17", note: "separate Google Business Profile dataset" }
              ].map((metric, index) => (
                <Reveal delay={index * 0.04} key={metric.label}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5">
                    <strong className="block text-3xl text-white">{metric.value}</strong>
                    <span className="mt-3 block text-sm text-zinc-300">{metric.label}</span>
                    <span className="mt-2 block text-xs text-zinc-500">{metric.note}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-8">
              <EvidenceFrame alt="Analytics report showing all users, organic traffic, call lead events and form submission events" src="/images/il-leads.png" />
            </Reveal>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading eyebrow="Results at a Glance" title="A Data-Led Local SEO Growth Story" />
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {summaryMetrics.map((metric, index) => (
                <Reveal delay={index * 0.025} key={metric.label}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5">
                    <strong className="block text-3xl text-white">{metric.value}</strong>
                    <span className="mt-2 block text-sm text-zinc-400">{metric.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-zinc-950 to-black px-6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <div className="mb-6 inline-flex rounded-full border border-[#F59E0B]/20 bg-[#F59E0B]/10 px-4 py-2 text-sm text-[#F59E0B]">
                The Outcome
              </div>
              <h2 className="text-4xl text-white md:text-5xl">Broader Search Visibility, Better Rankings and Measurable Actions</h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                Imperial Landscaping's campaign developed substantially broader search visibility across both organic
                and local results. In the latest 28-day comparison, organic clicks increased from 10 to 55, a 450%
                increase, while search impressions expanded from 710 to 5.59K.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                Across the three-month comparison, clicks increased by 84% and impressions by approximately 450%. The
                ranking overview grew from a total of 13 on June 1 to 158 by August 9, while Imperial Landscaping also
                appeared in the local top three for "landscaping springfield mo."
              </p>
              <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                Most importantly, the visibility translated into measurable actions: the report recorded 17 Google
                Business Profile calls, and seven of eight tracked website call-lead events were attributed to organic
                traffic.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="px-6 py-20">
          <Reveal className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 text-center md:p-12">
              <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_top,rgba(33,150,243,0.2),transparent_42%)]" />
              <div className="relative z-10">
                <TrendingUp className="mx-auto mb-6 h-8 w-8 text-[#2196F3]" />
                <h2 className="text-4xl text-white md:text-5xl">Ready to Grow Your Search Visibility?</h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">
                  We combine SEO, local search strategy and high-performing websites to help businesses turn search
                  visibility into measurable growth.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <a
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2196F3] to-[#1976D2] px-8 py-5 text-white shadow-lg shadow-[#2196F3]/40 transition-all hover:from-[#1976D2] hover:to-[#1565C0]"
                    href={bookingUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Start Your Project
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <Link className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-5 text-white transition-all hover:border-white/20 hover:bg-white/10" href="/case-studies">
                    View More Case Studies
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </div>

      <MakeFooter bookingUrl={bookingUrl} contactEmail={contactEmail} supportPhone={supportPhone} />
    </div>
  );
}
