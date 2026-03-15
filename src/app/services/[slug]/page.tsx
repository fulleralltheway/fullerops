import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { INDUSTRIES, SITE } from "@/lib/constants";

const INDUSTRY_DETAILS: Record<
  string,
  {
    headline: string;
    subheadline: string;
    problems: string[];
    solutions: string[];
    results: { day: string; items: string[] }[];
    pitch: string;
  }
> = {
  "real-estate": {
    headline: "Your Competitor Has 47 Google Reviews. You Have 3.",
    subheadline:
      "I build and run your entire digital operation — website, content, leads, follow-ups, reviews — so you can focus on showings and closings.",
    problems: [
      "Your website is a generic IDX template that looks like every other agent's",
      "Your Instagram hasn't been posted to in weeks",
      "You're losing leads because nobody followed up",
      "Competitors dominate Google search results in your area",
      "You know you should ask for reviews but never get around to it",
    ],
    solutions: [
      "A website that actually generates leads — not a generic template, but a fast site with property search, neighborhood guides, and lead capture",
      "Content in your voice, on schedule — social media posts, blog articles, and email newsletters every week without you lifting a finger",
      "FSBO and expired listing monitoring — opportunities delivered to you automatically",
      "Follow-up sequences that nurture every lead — past client check-ins that generate referrals",
      "Review request automation after every closing — your review count grows every month",
    ],
    results: [
      { day: "Day 30", items: ["Website live or optimized", "Content posting weekly", "Google Business optimized"] },
      { day: "Day 60", items: ["New leads coming in", "Follow-up sequences running", "Review requests going out"] },
      { day: "Day 90", items: ["More Google reviews", "Higher search visibility", "Measurable lead increase"] },
    ],
    pitch: "The agent down the street has a beautiful website, posts daily, and has 50+ reviews. The difference isn't talent — it's systems. I build the system.",
  },
  "lawn-care": {
    headline: "You're Losing Jobs to the Company That Shows Up First on Google.",
    subheadline:
      "I build and run your entire online presence — website, booking, content, reviews, follow-ups — so you can focus on the work.",
    problems: [
      "You don't have a real website (or it's a single page from 2015)",
      "You get all your work from word of mouth and hope it keeps coming",
      "Customers who got an estimate never heard back",
      "The bigger company in town shows up first in every search",
      "You have zero online reviews while competitors have dozens",
    ],
    solutions: [
      "A professional website with online booking — customers find you, see your work, and book without calling",
      "Google Business domination — optimized profile, reviews rolling in, showing up in local searches",
      "Before/after photo galleries and seasonal content that showcase your quality",
      "Follow-up sequences for every estimate — no more wondering if they went with someone else",
      "Seasonal campaigns — spring cleanup, fall leaf removal, winterization — timed and automated",
    ],
    results: [
      { day: "Day 30", items: ["Professional website live with booking", "Google Business optimized", "First content posted"] },
      { day: "Day 60", items: ["Showing up in local searches", "Reviews growing", "Estimate follow-ups running"] },
      { day: "Day 90", items: ["More inbound calls/bookings", "Review count growing", "Seasonal campaigns running"] },
    ],
    pitch: "You're not losing because your work is worse. You're losing because the other company is easier to find. I fix that.",
  },
  restaurants: {
    headline: "Your Instagram Hasn't Been Posted to in 3 Weeks.",
    subheadline:
      "I handle your entire online presence — social media, reviews, website, email list — so you can focus on the food.",
    problems: [
      "You started strong on social media, then got slammed on a Friday and never posted again",
      "Your menu on the website doesn't match what you're actually serving",
      "You have 12 Google reviews while the place down the street has 200+",
      "You're not building an email list of regulars",
      "Seasonal promotions get planned but never executed",
    ],
    solutions: [
      "Daily social media content — food features, behind-the-scenes, specials — posted consistently in your voice",
      "Website with current menu, hours, online ordering or reservations — always up to date",
      "Review request automation — every happy customer gets asked, your rating climbs",
      "Email marketing that keeps regulars coming back — weekly specials, events, loyalty touches",
      "Seasonal campaigns planned and executed automatically — Valentine's, patio season, holidays",
    ],
    results: [
      { day: "Day 30", items: ["Daily social media posting", "Website updated", "Google Business optimized"] },
      { day: "Day 60", items: ["Review count growing", "Email list building", "Consistent engagement"] },
      { day: "Day 90", items: ["More online orders/reservations", "Higher review count", "Regulars coming back more"] },
    ],
    pitch: "Running a restaurant is already a 70-hour week. I take the entire digital side off your plate so you can focus on what you love.",
  },
  coaches: {
    headline: "You're Spending 10 Hours a Week on Marketing That Isn't Converting.",
    subheadline:
      "I build and run your lead funnel, content engine, and follow-up system — so you can focus on your clients.",
    problems: [
      "Your website looks fine but generates zero leads — no lead magnet, no funnel",
      "Writing a single LinkedIn post takes 45 minutes, so you don't do it",
      "People visit your site, leave, and you never hear from them again",
      "Discovery calls turn into 'let me think about it' and then nothing",
      "You have happy clients but only 2 testimonials on your website",
    ],
    solutions: [
      "A lead magnet funnel — free guide or assessment, email capture, nurture sequence, booking page",
      "Content engine in your voice — weekly blog posts, daily social media, monthly newsletter",
      "Website that converts — clear offer, CTA above the fold, booking integration, testimonials front and center",
      "Follow-up automation — every discovery call gets a nurture sequence, every past client gets check-ins",
      "Testimonial collection system — automated requests at the right moments, specific prompts that get great quotes",
    ],
    results: [
      { day: "Day 30", items: ["Website optimized with lead magnet", "Content engine running", "Booking integration live"] },
      { day: "Day 60", items: ["Leads coming through funnel", "Follow-ups running", "Testimonials collecting"] },
      { day: "Day 90", items: ["Consistent lead flow", "Growing email list", "Authority positioning established"] },
    ],
    pitch: "The coaches who have full practices aren't better than you. They just have better systems. I build the system.",
  },
  insurance: {
    headline: "How Many Renewals Slipped Because Nobody Followed Up?",
    subheadline:
      "I build and run your digital operation — renewals, referrals, content, reviews, website — so no client ever falls through the cracks.",
    problems: [
      "Renewals slip because you're juggling too many policies manually",
      "Your best customers have been with you 10 years and never been asked for a referral",
      "You want to post educational content but compliance makes it intimidating",
      "You have 4 Google reviews while the agent across town has 40",
      "Your website is the generic template your agency gave you",
    ],
    solutions: [
      "Renewal reminder automation — timed sequences before every renewal, nothing slips ever",
      "Referral system — automated requests at the right moments, tracked and systematized",
      "Compliant content in your voice — insurance tips, coverage guides, seasonal reminders",
      "Review collection — systematic requests after every new policy and renewal",
      "Website that builds trust — shows who you are, why people choose you, easy quote request",
    ],
    results: [
      { day: "Day 30", items: ["Website live or improved", "Renewal system active", "Content engine running"] },
      { day: "Day 60", items: ["Referral requests running", "Review count growing", "Email newsletter started"] },
      { day: "Day 90", items: ["Higher renewal rate", "Measurable referral increase", "Online authority established"] },
    ],
    pitch: "Insurance is a relationship business. But relationships need systems behind them to scale. I build those systems.",
  },
};

export async function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) return {};
  return {
    title: `AI Operations for ${industry.name}`,
    description: `${industry.headline} I build and run your entire digital operation — website, content, leads, follow-ups, reviews. Free audit.`,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  const details = INDUSTRY_DETAILS[slug];

  if (!industry || !details) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-primary text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-accent mb-4">
              {industry.icon} {industry.name}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              {details.headline}
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              {details.subheadline}
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-hover transition-colors"
              >
                Get Your Free Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary">Sound Familiar?</h2>
          <div className="mt-8 space-y-4">
            {details.problems.map((problem) => (
              <div
                key={problem}
                className="flex items-start gap-4 p-5 rounded-lg bg-muted-light"
              >
                <svg
                  className="w-6 h-6 text-accent flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
                <p className="text-muted">{problem}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg font-medium text-primary">
            {details.pitch}
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-muted-light">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary">What I Build for You</h2>
          <div className="mt-8 space-y-4">
            {details.solutions.map((solution) => (
              <div
                key={solution}
                className="flex items-start gap-4 p-5 rounded-lg bg-white"
              >
                <svg
                  className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-muted">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center">
            What Results Look Like
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {details.results.map((result) => (
              <div
                key={result.day}
                className="p-8 rounded-xl border border-border text-center"
              >
                <div className="text-2xl font-bold text-accent">
                  {result.day}
                </div>
                <ul className="mt-4 space-y-2">
                  {result.items.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">
            Ready to Fix Your Online Presence?
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            I&apos;ll audit your {industry.name.toLowerCase()} business for free
            and show you exactly what&apos;s costing you customers.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-10 py-4 text-lg font-semibold text-white hover:bg-accent-hover transition-colors"
            >
              Get Your Free Audit
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-300">
            <strong>60-Day Guarantee:</strong> Measurable results or your setup
            fee back.
          </p>
        </div>
      </section>
    </>
  );
}
