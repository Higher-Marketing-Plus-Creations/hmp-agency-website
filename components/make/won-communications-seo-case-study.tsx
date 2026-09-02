"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, FileText, Link2, Network, Phone, Search, Sparkles, TrendingUp } from "lucide-react";

import { MakeHeader } from "@/components/make/header";
import { MakeFooter } from "@/components/make/shared";

type WonCommunicationsSeoCaseStudyProps = {
  bookingUrl: string;
  contactEmail: string;
  supportPhone: string;
};

const tags = ["SEO", "Content SEO", "Local SEO", "AI Search", "Google Business Profile", "Lead Generation"];

const heroMetrics = [
  { label: "Organic Click Growth", note: "Latest 28 Days", value: "+300%" },
  { label: "Search Impression Growth", note: "Latest 28 Days", value: "+862%" },
  { label: "Average Search Position", note: "Improved by 14.6 positions", value: "25.7 to 11.1" },
  { label: "Ranking Overview Total", note: "Up from 284", value: "593" }
];

const overview = [
  { label: "Client", value: "WON Communications" },
  { label: "Domain", value: "woncom.net" },
  { label: "Industry", value: "Telecommunications / Internet Service Provider" },
  { label: "Market", value: "Missouri, USA" },
  {
    label: "Campaign Areas",
    value:
      "Organic SEO, Content SEO, Local Search, Google Business Profile, AI Search Optimization, On-Page SEO, Structured Data, Internal Linking, Citation Building"
  },
  {
    label: "Primary Objective",
    value:
      "Expand WON Communications' visibility for commercial and informational internet-service searches while strengthening local, organic and AI-driven discovery."
  }
];

const strategy = [
  {
    icon: Search,
    label: "Content Research",
    stat: "Topical Planning",
    title: "Building Content Around Search Demand",
    text:
      "Competitor research and topical analysis were used to identify content opportunities across commercial internet-service topics and informational search queries."
  },
  {
    icon: FileText,
    label: "SEO Content Production",
    stat: "14 Blog Posts",
    title: "Scaling Search Coverage With Content",
    text:
      "The campaign produced 14 SEO-focused blog posts during July to expand WON Communications' topical footprint and create additional search entry points."
  },
  {
    icon: Sparkles,
    label: "Google + AI Search",
    stat: "AI Search Ready",
    title: "Optimizing for Traditional and AI Search",
    text:
      "Blog content was optimized for visibility across Google search and AI-driven discovery platforms using advanced SEO strategies."
  },
  {
    icon: TrendingUp,
    label: "On-Page SEO",
    stat: "Metadata",
    title: "Strengthening Search Relevance",
    text:
      "Meta titles and meta descriptions were optimized across the website to improve keyword relevance and search-result presentation."
  },
  {
    icon: Network,
    label: "Technical SEO",
    stat: "Schema + Links",
    title: "Improving Search Engine Understanding",
    text:
      "The campaign included structured-data optimization, image optimization, search-engine submission and improved internal linking."
  },
  {
    icon: Link2,
    label: "Local Authority",
    stat: "GBP + Citations",
    title: "Strengthening Local Search Presence",
    text: "Google Business Profile optimization and citation creation supported the site's broader local search strategy."
  }
];

const rankingRows = [
  { after: 8, before: 6, label: "Top 3" },
  { after: 49, before: 17, label: "4-10" },
  { after: 98, before: 34, label: "11-20" },
  { after: 239, before: 118, label: "21-50" },
  { after: 99, before: 82, label: "51-100" },
  { after: 24, before: 2, label: "AI Overviews" },
  { after: 76, before: 25, label: "Other SERP Features" },
  { after: 593, before: 284, label: "Ranking Overview Total" }
];

const aiPlatforms = [
  { cited: "18 cited pages", mentions: "10 mentions", platform: "ChatGPT" },
  { cited: "9 cited pages", mentions: "1 mention", platform: "Google AI Overview" },
  { cited: "25 cited pages", mentions: "16 mentions", platform: "Google AI Mode" },
  { cited: "5 cited pages", mentions: "7 mentions", platform: "Gemini" }
];

const keywordThemes = [
  {
    label: "Local Commercial",
    terms: [
      "internet provider springfield",
      "internet springfield mo",
      "internet services springfield mo",
      "internet providers mountain view mo",
      "internet providers missouri",
      "internet service springfield mo"
    ]
  },
  {
    label: "Branded",
    terms: ["won communications", "won internet bolivar mo"]
  },
  {
    label: "Informational / Troubleshooting",
    terms: [
      "wifi outage",
      "internet outage",
      "internet down",
      "how to fix spectrum wifi red light",
      "what caused internet outage today",
      "what networks are down"
    ]
  },
  {
    label: "Technical / Educational",
    terms: ["terminating ethernet cable", "ethernet termination", "optical digital audio", "what is a optical cable", "receiver optical means"]
  }
];

const delivered = [
  "Competitor research for blog posts",
  "SEO content creation for 14 blog posts",
  "Blog post optimization for Google and AI search tools using advanced SEO strategies",
  "Competitor analysis and topical planning for July content",
  "Meta title and meta description optimization for all pages",
  "Image optimization for better performance and SEO",
  "Google Business Profile optimization",
  "Schema markup optimization",
  "New pages submitted to Google",
  "Citations created",
  "Internal linking setup"
];

const summary = [
  { label: "Organic Clicks", value: "469" },
  { label: "Click Growth", value: "+300%" },
  { label: "Search Impressions", value: "86.8K" },
  { label: "Impression Growth", value: "+862%" },
  { label: "Average Position", value: "11.1" },
  { label: "Ranking Overview Total", value: "593" },
  { label: "AI Citations", value: "91" },
  { label: "AI Cited Pages", value: "44" },
  { label: "GBP Calls", value: "103" },
  { label: "Organic Form-Start Events", value: "29" },
  { label: "Unique Call-Button Users", value: "18" },
  { label: "SEO Blog Posts", value: "14" }
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

function EvidenceFrame({ alt, children, src }: { alt: string; children?: ReactNode; src: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
        <span className="h-3 w-3 rounded-full bg-green-400/80" />
      </div>
      <div className="bg-zinc-950/70 p-3">
        <Image alt={alt} className="h-auto w-full rounded-2xl" height={620} sizes="(max-width: 768px) 100vw, 50vw" src={src} width={900} />
      </div>
      {children ? <div className="border-t border-white/10 p-5">{children}</div> : null}
    </div>
  );
}

function ComparisonCard({
  after,
  before,
  label,
  note
}: {
  after: string;
  before: string;
  label: string;
  note: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <span className="text-sm uppercase tracking-[0.18em] text-zinc-500">{label}</span>
      <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
          <span className="text-sm text-zinc-500">Before</span>
          <strong className="mt-2 block text-4xl text-white">{before}</strong>
        </div>
        <ArrowRight className="hidden h-5 w-5 text-[#2196F3] sm:block" />
        <div className="rounded-2xl border border-[#2196F3]/20 bg-[#2196F3]/10 p-5">
          <span className="text-sm text-zinc-400">After</span>
          <strong className="mt-2 block text-4xl text-white">{after}</strong>
        </div>
      </div>
      <p className="mt-4 text-[#F59E0B]">{note}</p>
    </div>
  );
}

export function WonCommunicationsSeoCaseStudy({ bookingUrl, contactEmail, supportPhone }: WonCommunicationsSeoCaseStudyProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <MakeHeader bookingUrl={bookingUrl} />

      <div>
        <section className="relative overflow-hidden px-6 pb-20 pt-32 md:pt-36">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black" />
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:40px_40px]" />
          <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.75fr)] lg:items-start">
            <Reveal>
              <div className="mb-6 inline-flex rounded-full border border-[#2196F3]/20 bg-[#2196F3]/10 px-4 py-2 text-sm text-[#2196F3]">
                SEO + AI Search Case Study
              </div>
              <h1 className="max-w-4xl bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-5xl leading-[0.98] text-transparent md:text-6xl lg:text-7xl">
                Scaling WON Communications' Organic Search Visibility
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
                A search strategy combining content creation, on-page optimization, local SEO, structured data, internal
                linking and AI-search optimization helped WON Communications substantially expand its organic visibility
                and generate measurable customer actions.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal className="grid self-start gap-4 sm:grid-cols-2" delay={0.12}>
              {heroMetrics.map((metric, index) => (
                <motion.div
                  className={`min-w-0 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm ${index === 0 ? "sm:col-span-2" : ""}`}
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
                <h2 className="text-4xl text-white md:text-5xl">Modern Search Visibility Across Google and AI</h2>
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
                copy="WON Communications operates in a search landscape shaped by competitive internet-service queries, outage-related searches, local provider searches and informational questions. The campaign needed to improve visibility across organic results, local search, SERP features, Google AI Mode, ChatGPT, Gemini and customer-intent actions."
                eyebrow="The Challenge"
                title="More Than Ranking a Few Keywords"
              />
            </Reveal>
            <div className="grid gap-6 lg:grid-cols-2">
              <Reveal>
                <EvidenceFrame alt="WON Communications ranking overview on July 4 2026 showing total of 284" src="/images/wc-keywords-ranking-1.png">
                  <p className="text-sm text-zinc-400">July 4, 2026: ranking overview total of 284.</p>
                </EvidenceFrame>
              </Reveal>
              <Reveal delay={0.08}>
                <EvidenceFrame alt="WON Communications ranking overview on August 1 2026 showing total of 593" src="/images/wc-keywords-ranking-2.png">
                  <p className="text-sm text-zinc-400">August 1, 2026: ranking overview total of 593.</p>
                </EvidenceFrame>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                copy="The July campaign report documents completed content, on-page, structural and local-search work, so these items are presented as factual implementation details."
                eyebrow="The Strategy"
                title="Six Pillars Built for Google, Local Search and AI Discovery"
              />
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {strategy.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal delay={index * 0.04} key={item.title}>
                    <motion.article className="h-full rounded-2xl border border-white/10 bg-white/5 p-6" whileHover={{ y: -4 }}>
                      <div className="mb-5 flex items-center justify-between gap-3">
                        <Icon className="h-6 w-6 text-[#2196F3]" />
                        <span className="rounded-full bg-[#F59E0B]/10 px-3 py-1 text-xs text-[#F59E0B]">{item.stat}</span>
                      </div>
                      <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">{item.label}</span>
                      <h3 className="mt-3 text-xl text-white">{item.title}</h3>
                      <p className="mt-4 leading-relaxed text-zinc-400">{item.text}</p>
                    </motion.article>
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
                copy="Latest 28 days compared with the previous 28 days. Lower average-position numbers are better, so 25.7 to 11.1 is a meaningful ranking improvement."
                eyebrow="Organic Search Growth"
                title="469 Organic Clicks and 86.8K Search Impressions"
              />
            </Reveal>
            <div className="grid gap-6 lg:grid-cols-3">
              <Reveal>
                <ComparisonCard after="469" before="117" label="Total Clicks" note="+352 clicks, +300%" />
              </Reveal>
              <Reveal delay={0.05}>
                <ComparisonCard after="86.8K" before="9.02K" label="Total Impressions" note="+77.78K impressions, +862%" />
              </Reveal>
              <Reveal delay={0.1}>
                <ComparisonCard after="11.1" before="25.7" label="Average Position" note="14.6-position improvement, 56.8% better per report" />
              </Reveal>
            </div>
            <Reveal className="mt-8">
              <EvidenceFrame alt="Google Search Console screenshot showing WON Communications 28-day organic growth" src="/images/wc-Clicks.png">
                <p className="text-sm text-zinc-400">Source screenshot: Google Search Console latest 28 days versus previous 28 days.</p>
              </EvidenceFrame>
            </Reveal>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                copy="Tracked search visibility expanded from 284 to 593 across rankings and SERP features. The 108.8% growth figure is a calculated comparison between the report's two ranking-overview totals."
                eyebrow="Search Visibility Expansion"
                title="Search Visibility Expanded Across the SERPs"
              />
            </Reveal>
            <div className="grid gap-4">
              {rankingRows.map((row, index) => {
                const max = Math.max(row.after, row.before, 1);
                return (
                  <Reveal delay={index * 0.025} key={row.label}>
                    <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 md:grid-cols-[190px_1fr_auto] md:items-center">
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
            <Reveal className="mt-6 rounded-2xl border border-[#2196F3]/20 bg-[#2196F3]/10 p-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <strong className="block text-4xl text-white">23 to 57</strong>
                  <span className="text-zinc-300">Combined Top-10 entries from the ranking overview</span>
                </div>
                <div>
                  <strong className="block text-4xl text-white">+34</strong>
                  <span className="text-zinc-300">Calculated increase</span>
                </div>
                <div>
                  <strong className="block text-4xl text-white">+147.8%</strong>
                  <span className="text-zinc-300">Calculated Top-10 overview growth</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-gradient-to-b from-zinc-950 to-black px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                copy="WON Communications developed visibility across ChatGPT, Google AI Overview, Google AI Mode and Gemini, while total AI citations increased substantially between June and August."
                eyebrow="Beyond Google: AI Search Visibility"
                title="AI Citations Grew From 21 to 91"
              />
            </Reveal>
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <Reveal>
                <div className="grid gap-4">
                  {[
                    { label: "AI Visibility", value: "24" },
                    { label: "Mentions", value: "34" },
                    { label: "Unique Cited Pages", value: "44" }
                  ].map((item) => (
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6" key={item.label}>
                      <strong className="block text-5xl text-white">{item.value}</strong>
                      <span className="mt-3 block text-zinc-300">{item.label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <EvidenceFrame alt="AI search overview for woncom.net showing AI visibility, mentions and cited pages" src="/images/wc-ai1.png" />
              </Reveal>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {aiPlatforms.map((platform, index) => (
                <Reveal delay={index * 0.035} key={platform.platform}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5">
                    <h3 className="text-lg text-white">{platform.platform}</h3>
                    <p className="mt-3 text-zinc-400">{platform.mentions}</p>
                    <p className="mt-1 text-zinc-500">{platform.cited}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <Reveal>
                <EvidenceFrame alt="June 2026 AI performance showing 29 mentions, 21 citations and 18 cited pages" src="/images/wc-ai-performace-1.png">
                  <p className="text-sm text-zinc-400">June 2026: 29 mentions, 21 citations, 18 cited pages.</p>
                </EvidenceFrame>
              </Reveal>
              <Reveal delay={0.08}>
                <EvidenceFrame alt="August 2026 AI performance showing 34 mentions, 91 citations and 44 cited pages" src="/images/wc-ai-performace-2.png">
                  <p className="text-sm text-zinc-400">August 2026: 34 mentions, 91 citations, 44 cited pages.</p>
                </EvidenceFrame>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                copy="The report shows visibility across local commercial, branded, informational, troubleshooting and technical search themes. No unverified ranking numbers are added beside these query examples."
                eyebrow="Keyword Themes"
                title="Search Coverage Expanded Across Multiple Intent Types"
              />
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {keywordThemes.map((theme, index) => (
                <Reveal delay={index * 0.04} key={theme.label}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h3 className="text-2xl text-white">{theme.label}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {theme.terms.map((term) => (
                        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-zinc-300" key={term}>
                          {term}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {[
                "wc-keywords-top-ranking-1.png",
                "wc-keywords-top-ranking-2.png",
                "wc-keywords-top-ranking-3.png",
                "wc-keywords-top-ranking-4.png",
                "wc-keywords-top-ranking-5.png",
                "wc-keywords-top-ranking-6.png"
              ].map((file, index) => (
                <Reveal delay={index * 0.025} key={file}>
                  <EvidenceFrame alt="WON Communications keyword visibility report screenshot" src={`/images/${file}`} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-zinc-950 to-black px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                copy="Call volume increased between the two campaign snapshots, while each screenshot also shows its own year-over-year comparison."
                eyebrow="Google Business Profile Performance"
                title="103 Google Business Profile Calls in July 2026"
              />
            </Reveal>
            <div className="grid gap-6 lg:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-8">
                  <Phone className="mb-6 h-8 w-8 text-[#2196F3]" />
                  <strong className="block text-6xl text-white">77 to 103</strong>
                  <p className="mt-4 text-zinc-300">Calls between the March and July Business Profile snapshots.</p>
                  <p className="mt-3 text-sm text-[#F59E0B]">Calculated change: +26 calls, approximately +33.8% between snapshots.</p>
                  <p className="mt-3 text-sm text-zinc-500">March 2026: -56.7% vs March 2025. July 2026: -26.4% vs July 2025.</p>
                </div>
              </Reveal>
              <div className="grid gap-6">
                <Reveal delay={0.05}>
                  <EvidenceFrame alt="Google Business Profile calls screenshot showing 77 calls in March 2026" src="/images/wc-google-profile-performance-1.png" />
                </Reveal>
                <Reveal delay={0.1}>
                  <EvidenceFrame alt="Google Business Profile calls screenshot showing 103 calls in July 2026" src="/images/wc-google-profile-performance-2.png" />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                copy="Search visibility translated into measurable actions on the website, including organic form activity and phone-intent interactions. Form data is labeled as form_start, so it is not described as completed form submissions."
                eyebrow="Turning Search Visibility Into Customer Actions"
                title="Organic Website Actions Increased Customer Intent Signals"
              />
            </Reveal>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                { label: "Organic Form-Start Events", note: "Latest 28 Days", value: "29" },
                { label: "Unique Organic Call-Button Users", note: "July 2026", value: "18" },
                { label: "Mobile Call-Button Users", note: "77.8% calculated device share", value: "14" },
                { label: "Desktop Call-Button Users", note: "July 2026", value: "4" }
              ].map((metric, index) => (
                <Reveal delay={index * 0.04} key={metric.label}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5">
                    <strong className="block text-4xl text-white">{metric.value}</strong>
                    <span className="mt-3 block text-zinc-300">{metric.label}</span>
                    <span className="mt-2 block text-sm text-zinc-500">{metric.note}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <Reveal>
                <EvidenceFrame alt="Analytics screenshot showing 107 all users form_start events and 29 organic traffic form_start events" src="/images/wc-leads.png" />
              </Reveal>
              <Reveal delay={0.08}>
                <EvidenceFrame alt="Report screenshot showing 18 unique users clicked a call button, 14 mobile users and 4 desktop users" src="/images/wc-leads-2.png" />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-zinc-950 to-black px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                copy="The content work included competitor research, topical planning, SEO content creation, Google search optimization, AI-search optimization and internal linking."
                eyebrow="Content Built for Search & AI Discovery"
                title="14 SEO Blog Posts Created in July"
              />
            </Reveal>
            <Reveal>
              <div className="rounded-3xl border border-[#2196F3]/20 bg-[#2196F3]/10 p-8 text-center">
                <strong className="block text-7xl text-white">14</strong>
                <p className="mt-4 text-xl text-zinc-300">SEO Blog Posts Created in July</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading eyebrow="What We Delivered" title="Documented July SEO Work" />
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {delivered.map((item, index) => (
                <Reveal delay={index * 0.025} key={item}>
                  <div className="flex h-full gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2196F3]/20 text-xs text-[#2196F3]">✓</span>
                    <p className="leading-relaxed text-zinc-300">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-zinc-950 to-black px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading eyebrow="Results at a Glance" title="Modern SEO Results Across Google, AI and Customer Actions" />
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {summary.map((metric, index) => (
                <Reveal delay={index * 0.02} key={metric.label}>
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
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <div className="mb-6 inline-flex rounded-full border border-[#F59E0B]/20 bg-[#F59E0B]/10 px-4 py-2 text-sm text-[#F59E0B]">
                The Outcome
              </div>
              <h2 className="text-4xl text-white md:text-5xl">Stronger Search Visibility Across Traditional and AI-Driven Discovery</h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                WON Communications developed substantially stronger search visibility across both traditional and
                AI-driven discovery. During the latest 28-day comparison, organic clicks increased from 117 to 469, a
                300% increase, while impressions grew from 9.02K to 86.8K, an 862% increase.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                Average position improved from 25.7 to 11.1. The campaign's ranking overview expanded from 284 to 593
                between July 4 and August 1, while AI Overview visibility increased from 2 to 24.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                AI-search performance also strengthened, with citations increasing from 21 in June to 91 in August and
                cited pages increasing from 18 to 44. The visibility translated into measurable customer intent,
                including 103 Google Business Profile calls in July, 29 tracked organic form-start events and 18 unique
                organic users interacting with website call buttons.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-gradient-to-b from-zinc-950 to-black px-6 py-20">
          <Reveal className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 text-center md:p-12">
              <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_top,rgba(33,150,243,0.2),transparent_42%)]" />
              <div className="relative z-10">
                <TrendingUp className="mx-auto mb-6 h-8 w-8 text-[#2196F3]" />
                <h2 className="text-4xl text-white md:text-5xl">Ready to Grow Beyond Traditional SEO?</h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">
                  We combine technical SEO, content, local search, AI-search optimization and high-performing websites
                  to help businesses grow across the changing search landscape.
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
