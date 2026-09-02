import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { EssentialAutowerksSeoCaseStudy } from "@/components/make/essential-autowerks-seo-case-study";
import { ImperialLandscapingSeoCaseStudy } from "@/components/make/imperial-landscaping-seo-case-study";
import { WonCommunicationsSeoCaseStudy } from "@/components/make/won-communications-seo-case-study";
import { MakeHeader } from "@/components/make/header";
import { MakeFooter } from "@/components/make/shared";
import { getCaseStudies, getCaseStudy, getSiteSettings } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/seo";
import { createMetadata } from "@/lib/site-config";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies();
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) {
    return createMetadata({
      description: "Case study not found.",
      noIndex: true,
      pathname: `/case-studies/${slug}`,
      title: "Case Study Not Found | Higher Marketing Plus"
    });
  }

  if (caseStudy.slug === "essential-autowerks-seo") {
    return createMetadata({
      description:
        "See how our SEO strategy helped Essential Autowerks increase organic clicks by 54.2%, grow Google Business Profile interactions by 226.5%, and achieve top-3 local visibility across key Nixa searches.",
      imagePath: "/images/ea-Clicks.png",
      pathname: "/case-studies/essential-autowerks-seo",
      title: "Essential Autowerks SEO Case Study | Local SEO Results"
    });
  }

  if (caseStudy.slug === "imperial-landscaping-seo") {
    return createMetadata({
      description:
        "See how Imperial Landscaping increased 28-day organic clicks by 450%, expanded search visibility from 13 to 158 in the campaign ranking overview, and generated measurable calls and leads through SEO.",
      imagePath: "/images/il-Clicks.png",
      pathname: "/case-studies/imperial-landscaping-seo",
      title: "Imperial Landscaping SEO Case Study | Organic & Local SEO Results"
    });
  }

  if (caseStudy.slug === "won-communications-seo") {
    return createMetadata({
      description:
        "See how WON Communications increased organic clicks by 300%, grew search impressions by 862%, improved average ranking position from 25.7 to 11.1, and expanded visibility across Google and AI search.",
      imagePath: "/images/wc-Clicks.png",
      pathname: "/case-studies/won-communications-seo",
      title: "WON Communications SEO Case Study | +300% Organic Click Growth"
    });
  }

  return createMetadata({
    description: caseStudy.summary,
    pathname: `/case-studies/${caseStudy.slug}`,
    title: `${caseStudy.title} | Higher Marketing Plus`
  });
}

export default async function CaseStudyDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const [caseStudy, settings] = await Promise.all([getCaseStudy(slug), getSiteSettings()]);

  if (!caseStudy) {
    notFound();
  }

  if (caseStudy.slug === "essential-autowerks-seo") {
    return (
      <>
        <JsonLd
          data={breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
            { name: "Essential Autowerks SEO Case Study", path: "/case-studies/essential-autowerks-seo" }
          ])}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            description:
              "See how Higher Marketing Plus helped Essential Autowerks improve organic clicks, Google Business Profile engagement, local rankings, and AI search visibility in Nixa, Missouri.",
            headline: "Essential Autowerks SEO Case Study",
            mainEntityOfPage: "/case-studies/essential-autowerks-seo",
            publisher: {
              "@type": "Organization",
              name: settings.companyName,
              url: settings.siteUrl
            }
          }}
        />
        <EssentialAutowerksSeoCaseStudy
          bookingUrl={settings.bookingUrl}
          contactEmail={settings.contactEmail}
          supportPhone={settings.supportPhone}
        />
      </>
    );
  }

  if (caseStudy.slug === "imperial-landscaping-seo") {
    return (
      <>
        <JsonLd
          data={breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
            { name: "Imperial Landscaping SEO Case Study", path: "/case-studies/imperial-landscaping-seo" }
          ])}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            description:
              "See how Higher Marketing Plus helped Imperial Landscaping grow organic search clicks, ranking visibility, local search presence, and measurable lead activity in Springfield, Missouri.",
            headline: "Imperial Landscaping SEO Case Study",
            mainEntityOfPage: "/case-studies/imperial-landscaping-seo",
            publisher: {
              "@type": "Organization",
              name: settings.companyName,
              url: settings.siteUrl
            }
          }}
        />
        <ImperialLandscapingSeoCaseStudy
          bookingUrl={settings.bookingUrl}
          contactEmail={settings.contactEmail}
          supportPhone={settings.supportPhone}
        />
      </>
    );
  }

  if (caseStudy.slug === "won-communications-seo") {
    return (
      <>
        <JsonLd
          data={breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
            { name: "WON Communications SEO Case Study", path: "/case-studies/won-communications-seo" }
          ])}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            description:
              "See how Higher Marketing Plus helped WON Communications improve organic clicks, impressions, average ranking position, AI search visibility, Google Business Profile calls and website action signals.",
            headline: "WON Communications SEO Case Study",
            mainEntityOfPage: "/case-studies/won-communications-seo",
            publisher: {
              "@type": "Organization",
              name: settings.companyName,
              url: settings.siteUrl
            }
          }}
        />
        <WonCommunicationsSeoCaseStudy
          bookingUrl={settings.bookingUrl}
          contactEmail={settings.contactEmail}
          supportPhone={settings.supportPhone}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <MakeHeader bookingUrl={settings.bookingUrl} />
      <div>
        <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 pb-20 pt-32">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black" />
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:40px_40px]" />
          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <div className="mb-8 flex justify-center gap-3 text-sm text-zinc-400">
              <Link className="transition-colors hover:text-white" href="/">
                Home
              </Link>
              <span>/</span>
              <Link className="transition-colors hover:text-white" href="/case-studies">
                Case Studies
              </Link>
            </div>
            <div className="mb-6 inline-flex rounded-full border border-[#2196F3]/20 bg-[#2196F3]/10 px-4 py-2 text-sm text-[#2196F3]">
              Case Study
            </div>
            <h1 className="mx-auto max-w-5xl bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-5xl text-transparent md:text-7xl lg:text-8xl">
              {caseStudy.title}
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-zinc-400">
              Case study details coming soon.
            </p>
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
