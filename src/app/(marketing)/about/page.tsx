import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "I'm Jonathan Fuller. I build and run AI-powered digital operations for small businesses. One person, everything handled.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl text-primary leading-tight">
            One Person. Your Entire Digital Operation.
          </h1>
          <div className="mt-10 space-y-6 text-lg text-muted leading-relaxed">
            <p>
              I&apos;m Jonathan Fuller. I build and run AI-powered digital
              operations for small businesses.
            </p>
            <p>
              Here&apos;s what I kept seeing: small business owners who are
              incredible at what they do. Cutting lawns, selling homes, cooking
              food, coaching clients. But the digital side is eating them alive.
              Social media, websites, lead follow-up, reviews, email marketing.
              It never stops, and there&apos;s never enough time.
            </p>
            <p>
              So they hire a social media person. Then a website person. Then a
              marketing agency. Now they&apos;re managing three vendors who
              don&apos;t talk to each other, and the results are mediocre at
              best.
            </p>
            <p>
              I do all of it. One person, one system, everything connected. I
              use AI to handle the volume that normally takes a small team.
              Your website, your content, your lead generation, your follow-ups,
              your review management, your strategy. All running as one
              integrated operation that I personally manage and improve every
              week.
            </p>
            <p>
              The AI handles the repetitive work. I handle the thinking, the
              strategy, and understanding your specific business. You get your
              time back. Your online presence actually works. And you have one
              person to call when you need something.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="font-display text-2xl text-primary">
              Why This Works
            </h2>
            <div className="mt-8 space-y-6">
              {[
                {
                  title: "You Talk to Me. Directly.",
                  description:
                    "No account managers, no ticket systems, no getting passed around. I know your business because I work on it every single week. When you have a question, you text or call me.",
                },
                {
                  title: "AI Does the Heavy Lifting",
                  description:
                    "I use artificial intelligence to deliver what would normally require 3-4 people. Content creation, data analysis, competitive research, follow-up sequences. You get agency-level output at a fraction of the cost, and faster.",
                },
                {
                  title: "Built for Your Industry",
                  description:
                    "I don't do generic marketing. Every piece of content, every strategy, every system is tailored to your specific industry and your specific business. A real estate agent's system looks completely different from a lawn care company's.",
                },
                {
                  title: "60-Day Money-Back Guarantee",
                  description:
                    "If you don't see measurable improvement in your online presence and lead flow within 60 days, I refund your setup fee. Full stop. I only succeed when you succeed.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 rounded-lg about-feature">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
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
            <h2 className="font-display text-2xl text-primary">
              Want to See What I&apos;d Fix for Your Business?
            </h2>
            <p className="mt-4 text-muted">
              I&apos;ll audit your online presence for free. No commitment, no
              pitch. Just honest findings about what&apos;s working and what
              isn&apos;t.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-hover transition-colors press-scale"
              >
                Get Your Free Audit
              </Link>
              <a
                href="https://cal.com/fullerops/strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-muted-light transition-colors"
              >
                Book a 15-Min Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
