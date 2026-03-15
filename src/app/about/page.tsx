import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "I'm Jonathan Fuller — I build and run AI-powered digital operations for small businesses. One partner, everything included.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary leading-tight">
            One Person. Your Entire Digital Operation.
          </h1>
          <div className="mt-10 space-y-6 text-lg text-muted leading-relaxed">
            <p>
              I&apos;m Jonathan Fuller. I build and run AI-powered digital operations
              for small businesses.
            </p>
            <p>
              Here&apos;s what I noticed: small business owners are great at what
              they do — cutting lawns, selling homes, cooking food, coaching
              clients — but they&apos;re drowning in the digital side. Social
              media, websites, lead follow-up, reviews, email marketing — it
              never stops, and there&apos;s never enough time.
            </p>
            <p>
              So they hire a social media person. Then a website person. Then a
              marketing agency. Now they&apos;re managing three vendors who
              don&apos;t talk to each other, and the results are mediocre at
              best.
            </p>
            <p>
              I do all of it. One person, one system, everything connected. I
              use AI to deliver what normally takes a small team — your website,
              your content, your lead generation, your follow-ups, your review
              management, your strategy — all running as one integrated
              operation.
            </p>
            <p>
              You get your time back. Your online presence actually works. And
              you have one person to call when you need something.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-primary">
              Why This Works
            </h2>
            <div className="mt-8 space-y-6">
              {[
                {
                  title: "One Point of Contact",
                  description:
                    "No account managers, no ticket systems, no getting passed around. You talk to me directly. I know your business because I run your business's digital operations every day.",
                },
                {
                  title: "AI-Powered Efficiency",
                  description:
                    "I use artificial intelligence to deliver what would normally require 3-4 people. That means you get agency-level output at a fraction of the cost — and faster.",
                },
                {
                  title: "Industry-Specific",
                  description:
                    "I don't do generic marketing. Every piece of content, every strategy, every system is tailored to your specific industry and your specific business.",
                },
                {
                  title: "Results-Driven",
                  description:
                    "60-day guarantee. If you don't see measurable improvement, I refund your setup fee. I only succeed when you succeed.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <svg
                    className="w-6 h-6 text-accent flex-shrink-0 mt-1"
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
                  <div>
                    <h3 className="font-semibold text-primary">{item.title}</h3>
                    <p className="mt-1 text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 p-8 bg-muted-light rounded-xl text-center">
            <h2 className="text-2xl font-bold text-primary">
              Want to See What I&apos;d Fix for Your Business?
            </h2>
            <p className="mt-4 text-muted">
              I&apos;ll audit your online presence for free — no commitment, no
              sales pitch. Just honest answers about what&apos;s working and
              what isn&apos;t.
            </p>
            <div className="mt-8">
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
    </>
  );
}
