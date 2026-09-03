"use client";

import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  MapPin,
  MessageSquareText,
  Phone,
  Search,
  Sparkles,
  TrendingUp
} from "lucide-react";

import { MakeHeader } from "@/components/make/header";
import { MakeFooter } from "@/components/make/shared";

type EssentialAutowerksSeoCaseStudyProps = {
  bookingUrl: string;
  contactEmail: string;
  supportPhone: string;
};

const tags = ["Local SEO", "Google Business Profile", "Technical SEO", "Content SEO", "AI Search Visibility"];

const heroMetrics = [
  { label: "Organic Click Growth", value: "+54.2%" },
  { label: "Search Impression Growth", value: "+18.2%" },
  { label: "GBP Interaction Growth", value: "+226.5%" },
  { label: "GBP Call Growth", value: "+400%" }
];

const overview = [
  { label: "Client", value: "Essential Autowerks" },
  { label: "Industry", value: "Automotive Detailing" },
  { label: "Location", value: "Nixa, Missouri" },
  {
    label: "Services",
    value:
      "Local SEO, On-Page SEO, Technical SEO, Google Business Profile Optimization, Content Strategy, Schema Optimization, AI Search Visibility"
  },
  {
    label: "Primary Goal",
    value:
      "Improve Essential Autowerks' visibility for high-intent automotive detailing searches in Nixa and generate more engagement from Google Search and Google Business Profile."
  }
];

const strategyPillars = [
  {
    eyebrow: "Local Positioning",
    highlight: "Springfield -> Nixa",
    title: "Repositioning Search Signals Around Nixa",
    description:
      "We transitioned the website's core local targeting from Springfield to Nixa and updated relevant geographic signals throughout key on-page elements."
  },
  {
    eyebrow: "Location Landing Pages",
    highlight: "8 New Location Pages",
    title: "Expanding the Local Search Footprint",
    description:
      "We created 8 new location-specific landing pages to increase the site's ability to target relevant service areas and high-intent local searches."
  },
  {
    eyebrow: "Content SEO",
    highlight: "Blog Content",
    title: "Building Topical Authority",
    description:
      "New blog content was published to expand keyword coverage while creating additional opportunities for strategic internal linking."
  },
  {
    eyebrow: "On-Page SEO",
    highlight: "Metadata Rewritten",
    title: "Optimizing Search Snippets",
    description:
      "Meta titles and meta descriptions were reviewed and rewritten across the website to strengthen keyword relevance and improve click-through potential from search results."
  },
  {
    eyebrow: "Technical SEO",
    highlight: "Assets Optimized",
    title: "Improving Site Quality Signals",
    description:
      "On-site assets were optimized to support improved page performance, crawlability and user experience."
  },
  {
    eyebrow: "Structured Data",
    highlight: "Schema Updated",
    title: "Strengthening Search Engine Understanding",
    description:
      "Schema markup across key pages was reviewed and updated to improve entity clarity and eligibility for enhanced search results."
  }
];

const organicResults = [
  { current: "74", delta: "+26 clicks", growth: "+54.2%", label: "Organic Clicks", previous: "48" },
  { current: "3,710", delta: "+570 impressions", growth: "+18.2%", label: "Search Impressions", previous: "3,140" },
  { current: "2.0%", delta: "latest 28 days", growth: "from 1.5%", label: "Average CTR", previous: "1.5%" }
];

const comparisonBars = [
  { current: 74, currentLabel: "74", growth: "+54.2%", label: "Organic Clicks", previous: 48, previousLabel: "48" },
  {
    current: 3710,
    currentLabel: "3,710",
    growth: "+18.2%",
    label: "Search Impressions",
    previous: 3140,
    previousLabel: "3,140"
  }
];

const gbpResults = [
  { icon: BarChart3, label: "Business Profile Interactions", note: "+226.5% vs May 2025", value: "111" },
  { icon: Phone, label: "Calls From Google Business Profile", note: "+400% vs May 2025", value: "10" },
  { icon: MessageSquareText, label: "Chat Clicks", note: "documented in the report", value: "3" }
];

const rankings = [
  {
    image: "/images/ea-google-profile-ranking-1.png",
    keyword: "car detailing nixa",
    position: "#1"
  },
  {
    image: "/images/ea-google-profile-ranking-2.png",
    keyword: "car interior detailing nixa",
    position: "#2"
  },
  {
    image: "/images/ea-google-profile-ranking-3.png",
    keyword: "ppf nixa",
    position: "#2 in local results"
  },
  {
    image: "/images/ea-google-profile-ranking-4.png",
    keyword: "car exterior detailing nixa",
    position: "#3"
  },
  {
    image: "/images/ea-google-profile-ranking-5.png",
    keyword: "car detailers nixa",
    position: "#2"
  }
];

const gbpScreenshots = [
  {
    alt: "Google Business Profile report showing 111 business profile interactions and 226.5 percent growth",
    label: "Business Profile Interactions",
    src: "/images/ea-google-profile-performance-3.png"
  },
  {
    alt: "Google Business Profile report showing 10 calls and 400 percent growth",
    label: "Calls From Google Business Profile",
    src: "/images/ea-google-profile-performance-1.png"
  },
  {
    alt: "Google Business Profile report showing 3 chat clicks",
    label: "Chat Clicks",
    src: "/images/ea-google-profile-performance-2.png"
  }
];

const aiPlatforms = [
  { citedPages: "25 cited pages", mentions: "4 mentions", platform: "ChatGPT" },
  { citedPages: "0 cited pages", mentions: "0 mentions", platform: "Google AI Overview" },
  { citedPages: "3 cited pages", mentions: "4 mentions", platform: "Google AI Mode" },
  { citedPages: "0 cited pages", mentions: "1 mention", platform: "Gemini" }
];

const delivered = [
  "Core local positioning shifted from Springfield to Nixa",
  "Geographic on-page signals updated",
  "8 location-specific landing pages created",
  "New SEO blog content published",
  "Internal linking opportunities expanded",
  "Meta titles optimized",
  "Meta descriptions optimized",
  "On-site assets optimized",
  "Page performance improvements supported",
  "Crawlability improvements supported",
  "Schema markup reviewed",
  "Structured data updated across key pages"
];

const summaryMetrics = [
  { label: "Organic Clicks", value: "74" },
  { label: "Click Growth", value: "+54.2%" },
  { label: "Search Impressions", value: "3.71K" },
  { label: "Impression Growth", value: "+18.2%" },
  { label: "GBP Interactions", value: "111" },
  { label: "GBP Calls", value: "10" },
  { label: "Documented Searches Top 3", value: "5 / 5" },
  { label: "AI Mentions", value: "9" },
  { label: "AI Cited Pages", value: "27" },
  { label: "New Location Pages", value: "8" }
];

function Reveal({
  children,
  className = "",
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy
}: {
  copy?: string;
  eyebrow: string;
  title: string;
}) {
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

function ComparisonBar({
  current,
  currentLabel,
  growth,
  label,
  previous,
  previousLabel
}: {
  current: number;
  currentLabel: string;
  growth: string;
  label: string;
  previous: number;
  previousLabel: string;
}) {
  const max = Math.max(current, previous);
  const previousWidth = `${Math.max(8, (previous / max) * 100)}%`;
  const currentWidth = `${Math.max(8, (current / max) * 100)}%`;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl text-white">{label}</h3>
        <span className="rounded-full bg-[#F59E0B]/10 px-3 py-1 text-sm text-[#F59E0B]">{growth}</span>
      </div>
      <div className="space-y-4">
        <div>
          <div className="mb-2 flex justify-between text-sm text-zinc-400">
            <span>Previous 28 Days</span>
            <span>{previousLabel}</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-zinc-500"
              initial={{ width: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileInView={{ width: previousWidth }}
            />
          </div>
        </div>
        <div>
          <div className="mb-2 flex justify-between text-sm text-zinc-300">
            <span>Latest 28 Days</span>
            <span>{currentLabel}</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#2196F3] to-[#F59E0B]"
              initial={{ width: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileInView={{ width: currentWidth }}
            />
          </div>
        </div>
      </div>
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
    <div
      className={`overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
        <span className="h-3 w-3 rounded-full bg-green-400/80" />
      </div>
      <div className={imageWrapClassName}>
        <Image
          alt={alt}
          className={imageClassName}
          height={720}
          sizes="(max-width: 768px) 100vw, 50vw"
          src={src}
          width={980}
        />
      </div>
      {children ? <div className="border-t border-white/10 p-5">{children}</div> : null}
    </div>
  );
}

export function EssentialAutowerksSeoCaseStudy({
  bookingUrl,
  contactEmail,
  supportPhone
}: EssentialAutowerksSeoCaseStudyProps) {
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
                Growing Essential Autowerks' Local Search Visibility in Nixa
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
                We helped Essential Autowerks strengthen its local search presence through a focused SEO strategy built
                around Nixa, Missouri, combining location targeting, content, technical optimization, Google Business
                Profile improvements and search visibility work.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal className="flex h-full items-center" delay={0.12}>
              <div className="grid w-full gap-4 sm:grid-cols-2">
                {heroMetrics.map((metric, index) => (
                  <motion.div
                    className={`flex min-w-0 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm ${
                      index === 0 ? "sm:col-span-2" : ""
                    }`}
                    key={metric.label}
                    whileHover={{ y: -4 }}
                  >
                    <strong className="block break-words bg-gradient-to-r from-[#2196F3] to-[#F59E0B] bg-clip-text text-4xl leading-tight text-transparent md:text-[2.65rem]">
                      {metric.value}
                    </strong>
                    <span className="mt-2 block text-sm uppercase tracking-[0.18em] text-zinc-400">{metric.label}</span>
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
                <h2 className="text-4xl text-white md:text-5xl">From Local Visibility to Measurable Growth in Nixa</h2>
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
                copy="Essential Autowerks needed its organic search strategy to become more focused around Nixa instead of Springfield. The work centered on stronger geographic relevance, improved local landing-page coverage, better metadata, structured data, site quality signals, and supporting blog content."
                eyebrow="The Challenge"
                title="Aligning Search Visibility With the Right Local Market"
              />
            </Reveal>
            <Reveal className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" delay={0.08}>
              {[
                "Shift the primary local SEO focus from Springfield to Nixa",
                "Increase coverage of service + location searches",
                "Improve Google Business Profile and organic SERP visibility",
                "Develop supporting local landing pages",
                "Improve metadata and structured data",
                "Optimize site assets, performance, crawlability and supporting content"
              ].map((item) => (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5" key={item}>
                  <CheckCircle2 className="mb-4 h-5 w-5 text-[#2196F3]" />
                  <p className="leading-relaxed text-zinc-300">{item}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                copy="The strategy combined local positioning, expanded search coverage, content, metadata, technical improvements and structured data."
                eyebrow="Our SEO Strategy"
                title="Six Focused Pillars Built Around Nixa Search Demand"
              />
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {strategyPillars.map((pillar, index) => (
                <Reveal delay={index * 0.04} key={pillar.title}>
                  <motion.article
                    className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                    whileHover={{ y: -4 }}
                  >
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">{pillar.eyebrow}</span>
                      <span className="rounded-full bg-[#2196F3]/10 px-3 py-1 text-xs text-[#2196F3]">
                        {pillar.highlight}
                      </span>
                    </div>
                    <h3 className="text-xl text-white">{pillar.title}</h3>
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
                copy="The last 28 days outperformed the previous 28 days for both clicks and impressions. Average position is included as context only and is not presented as a ranking improvement."
                eyebrow="Organic Search Growth"
                title="More Organic Clicks and More Search Impressions"
              />
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {organicResults.map((result, index) => (
                <Reveal delay={index * 0.05} key={result.label}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <span className="text-sm uppercase tracking-[0.18em] text-zinc-500">{result.label}</span>
                    <strong className="mt-4 block text-5xl text-white">{result.current}</strong>
                    <div className="mt-5 grid gap-2 text-sm text-zinc-400">
                      <span>Previous: {result.previous}</span>
                      <span>{result.delta}</span>
                      <span className="text-[#F59E0B]">{result.growth}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6" delay={0.12}>
              <div className="flex flex-wrap items-center justify-between gap-3 text-zinc-400">
                <span>Average Position Context</span>
                <span>Previous: 24.5</span>
                <span>Current: 31</span>
              </div>
            </Reveal>
            <Reveal className="mt-8" delay={0.16}>
              <EvidenceFrame
                alt="Google Search Console comparison showing Essential Autowerks organic clicks, impressions, CTR, and average position for the latest 28 days compared with the previous 28 days"
                src="/images/ea-Clicks.png"
              >
                <p className="text-sm leading-relaxed text-zinc-400">
                  Source screenshot: Google Search Console comparison for the latest 28 days versus the previous 28
                  days.
                </p>
              </EvidenceFrame>
            </Reveal>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                copy="No daily traffic data was fabricated. These bars compare only the two documented reporting windows."
                eyebrow="Visualizing The Growth"
                title="Latest 28 Days vs Previous 28 Days"
              />
            </Reveal>
            <div className="grid gap-6 lg:grid-cols-2">
              {comparisonBars.map((bar) => (
                <Reveal key={bar.label}>
                  <ComparisonBar {...bar} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-zinc-950 to-black px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                copy="The organic strategy extended beyond the website. Improved local visibility helped Essential Autowerks create stronger engagement directly inside Google's local search ecosystem."
                eyebrow="Google Business Profile Growth"
                title="More Engagement From Google's Local Search Surface"
              />
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {gbpResults.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal delay={index * 0.05} key={item.label}>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                      <Icon className="mb-6 h-7 w-7 text-[#2196F3]" />
                      <strong className="block text-5xl text-white">{item.value}</strong>
                      <span className="mt-3 block text-zinc-300">{item.label}</span>
                      <span className="mt-3 block text-sm text-[#F59E0B]">{item.note}</span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {gbpScreenshots.map((screenshot, index) => (
                <Reveal className="h-full" delay={index * 0.05} key={screenshot.src}>
                  <EvidenceFrame
                    alt={screenshot.alt}
                    className="flex h-full flex-col"
                    imageClassName="h-full w-full rounded-2xl object-contain"
                    imageWrapClassName="flex h-72 items-center justify-center bg-zinc-950/70 p-3"
                    src={screenshot.src}
                  >
                    <p className="text-sm text-zinc-400">{screenshot.label}</p>
                  </EvidenceFrame>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                copy="Across all five search queries documented in the campaign report, Essential Autowerks appeared within the top three local results."
                eyebrow="Top Local Rankings in Nixa"
                title="5/5 Tracked Searches in Top 3 Local Visibility"
              />
            </Reveal>
            <div className="grid gap-4">
              {rankings.map((ranking, index) => (
                <Reveal delay={index * 0.04} key={ranking.keyword}>
                  <div className="grid gap-5 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 md:grid-cols-[160px_1fr_auto] md:items-center">
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-950">
                      <Image
                        alt={`Google local results screenshot for ${ranking.keyword}`}
                        className="aspect-[4/3] h-full w-full object-cover object-top"
                        height={360}
                        sizes="(max-width: 768px) 100vw, 160px"
                        src={ranking.image}
                        width={436}
                      />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">Keyword</span>
                      <p className="mt-2 break-words text-xl text-white">{ranking.keyword}</p>
                    </div>
                    <div className="rounded-2xl border border-[#F59E0B]/20 bg-[#F59E0B]/10 px-5 py-3 text-center text-[#F59E0B]">
                      {ranking.position}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-zinc-950 to-black px-6 py-20">
          <div className="mx-auto grid max-w-6xl items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal className="h-full">
              <div className="h-full rounded-3xl border border-[#2196F3]/20 bg-[#2196F3]/10 p-8">
                <div className="mb-6 inline-flex rounded-full bg-black/30 px-4 py-2 text-sm text-[#2196F3]">
                  Featured SEO Result
                </div>
                <h2 className="text-4xl text-white md:text-5xl">#1 Local Position for "car detailing nixa"</h2>
                <div className="mt-8 grid gap-4">
                  {[
                    { label: "Keyword", value: "car detailing nixa" },
                    { label: "Position", value: "#1" },
                    { label: "Location", value: "Nixa, Missouri" }
                  ].map((item) => (
                    <div
                      className="rounded-2xl border border-white/10 bg-black/25 p-5"
                      key={item.label}
                    >
                      <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">{item.label}</span>
                      <strong className="mt-3 block text-xl text-white">{item.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal className="h-full" delay={0.08}>
              <EvidenceFrame
                alt="Google local search results screenshot showing Essential Autowerks ranking number one for car detailing nixa"
                className="flex h-full flex-col"
                imageClassName="h-full w-full rounded-2xl object-contain"
                imageWrapClassName="flex min-h-[360px] flex-1 items-center justify-center bg-zinc-950/70 p-3"
                src="/images/ea-google-profile-ranking-1.png"
              >
                <div className="flex items-center gap-3 text-zinc-300">
                  <Search className="h-4 w-4 text-[#2196F3]" />
                  <span>Real local results screenshot for "car detailing nixa".</span>
                </div>
              </EvidenceFrame>
            </Reveal>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl items-stretch gap-6 lg:grid-cols-2">
            <Reveal className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 lg:h-[760px]">
                <MapPin className="mb-6 h-7 w-7 text-[#2196F3]" />
                <h2 className="text-3xl text-white">PPF Search Visibility</h2>
                <p className="mt-5 leading-relaxed text-zinc-400">
                  For the search "ppf nixa", Essential Autowerks appeared approximately #2 in the local results. The
                  report also showed an Essential Autowerks organic search result for a page titled "Professional Paint
                  Protection Film (PPF) in Nixa, MO".
                </p>
                <p className="mt-5 leading-relaxed text-zinc-400">
                  This was useful because the business had both local Business Profile visibility and organic website
                  visibility for the same commercial-intent search.
                </p>
                <div className="mt-6 min-h-0 flex-1 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
                  <Image
                    alt="Google search screenshot for ppf nixa showing Essential Autowerks in local results and an organic result for Professional Paint Protection Film in Nixa"
                    className="h-full w-full object-cover object-top"
                    height={360}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    src="/images/ea-google-profile-ranking-3.png"
                    width={369}
                  />
                </div>
              </div>
            </Reveal>
            <Reveal className="h-full" delay={0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 lg:h-[760px]">
                <Sparkles className="mb-6 h-7 w-7 text-[#F59E0B]" />
                <h2 className="text-3xl text-white">Beyond Google: AI Search Visibility</h2>
                <p className="mt-5 leading-relaxed text-zinc-400">
                  The campaign was not limited to traditional search visibility. Essential Autowerks was appearing
                  across AI-driven discovery experiences, including ChatGPT and Google AI Mode.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "AI Visibility", value: "28" },
                    { label: "Total AI Mentions", value: "9" },
                    { label: "Cited Pages", value: "27" }
                  ].map((item) => (
                    <div className="rounded-2xl border border-white/10 bg-black/25 p-4" key={item.label}>
                      <strong className="block text-3xl text-white">{item.value}</strong>
                      <span className="mt-2 block text-sm text-zinc-400">{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
                  <Image
                    alt="AI visibility report screenshot showing 28 AI visibility, 9 mentions, and 27 cited pages for Essential Autowerks"
                    className="h-auto w-full"
                    height={668}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    src="/images/ea-ai-performace-1.png"
                    width={970}
                  />
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal className="mx-auto mt-6 max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
              <div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {aiPlatforms.map((platform) => (
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5" key={platform.platform}>
                      <h3 className="text-lg text-white">{platform.platform}</h3>
                      <p className="mt-3 text-zinc-400">{platform.mentions}</p>
                      <p className="mt-1 text-zinc-500">{platform.citedPages}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-[#2196F3]/20 bg-[#2196F3]/10 p-5">
                  <span className="text-sm text-[#2196F3]">AI discovery example</span>
                  <p className="mt-2 text-zinc-200">
                    The report documented Essential Autowerks surfacing in ChatGPT for a question around "Best car
                    detailer in Nixa" and being presented under "Best Mobile Detailing".
                  </p>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 sm:max-w-[260px] lg:max-w-none">
                <Image
                  alt="ChatGPT screenshot showing Essential Autowerks under Best Mobile Detailing for a best car detailer in Nixa query"
                  className="mx-auto h-auto max-h-[520px] w-full object-contain"
                  height={727}
                  sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 300px"
                  src="/images/ea-ai-performace-2.png"
                  width={346}
                />
              </div>
            </div>
          </Reveal>
        </section>

        <section className="bg-gradient-to-b from-zinc-950 to-black px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading eyebrow="SEO Results at a Glance" title="A Concentrated Local SEO Win" />
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

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading eyebrow="What We Delivered" title="SEO Work Completed" />
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {delivered.map((item, index) => (
                <Reveal delay={index * 0.025} key={item}>
                  <div className="flex h-full gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#2196F3]" />
                    <p className="leading-relaxed text-zinc-300">{item}</p>
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
              <h2 className="text-4xl text-white md:text-5xl">A Stronger Search Presence Around Nixa</h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                By combining local SEO, content expansion, metadata optimization, technical improvements and Google
                Business Profile visibility work, Essential Autowerks built a stronger search presence around Nixa.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                During the reported comparison period, organic clicks increased by 54.2% and impressions increased by
                18.2%. Google Business Profile generated 111 interactions, including 10 calls, while the business
                appeared in the top three for all five local searches documented in the campaign report.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                The report also documented visibility across AI search environments, including ChatGPT and Google AI
                Mode.
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
                <h2 className="text-4xl text-white md:text-5xl">Want SEO Results Like These?</h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">
                  We combine technical SEO, local search strategy, content and conversion-focused web development to
                  help businesses turn search visibility into measurable growth.
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
                  <Link
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-5 text-white transition-all hover:border-white/20 hover:bg-white/10"
                    href="/case-studies"
                  >
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
