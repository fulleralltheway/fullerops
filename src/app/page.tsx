import Link from "next/link";
import { SERVICES, STEPS, INDUSTRIES, FAQ_ITEMS, SITE } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-primary text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Stop Losing Customers to a Broken Online Presence
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
              I build and run your entire digital operation — website, content,
              leads, follow-ups, reviews — so you can focus on your business.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-hover transition-colors"
              >
                Get Your Free Audit
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                See How It Works
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              Free online presence audit. No strings attached.
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-muted-light">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Your Competitors Are Pulling Ahead
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              While you&apos;re busy running your business, your competitors are
              posting daily on social media, ranking first on Google, collecting
              reviews, and following up with every lead automatically.
            </p>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              The difference isn&apos;t talent. It&apos;s systems.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                stat: "97%",
                label: "of consumers check online reviews before choosing a local business",
              },
              {
                stat: "70%",
                label: "of your potential customers are searching on their phone right now",
              },
              {
                stat: "53%",
                label: "of visitors leave if your site takes longer than 3 seconds to load",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="text-center p-8 bg-white rounded-xl shadow-sm"
              >
                <div className="text-4xl font-bold text-accent">
                  {item.stat}
                </div>
                <p className="mt-3 text-sm text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Everything You Need. One Partner.
            </h2>
            <p className="mt-4 text-lg text-muted">
              No piecemeal vendors. No juggling agencies. One person who builds
              and runs your entire digital operation.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-hover transition-colors"
            >
              Get Your Free Audit
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-primary text-white scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Three Steps. That&apos;s It.
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              No complicated onboarding. No months of planning. I find your
              problems, fix them, and keep everything running.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div key={step.number} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-white text-2xl font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-hover transition-colors"
            >
              Start With a Free Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-20 scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Built for Your Industry
            </h2>
            <p className="mt-4 text-lg text-muted">
              Not generic marketing. Every system is tailored to your
              industry&apos;s specific problems and opportunities.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.slug}
                href={`/services/${industry.slug}`}
                className="group p-8 rounded-xl border border-border hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-4">{industry.icon}</div>
                <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                  {industry.name}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {industry.problem}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-accent">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-muted-light scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-muted">
              One partner. Everything included. No hidden fees, no surprise
              charges, no long-term contracts.
            </p>
          </div>

          <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-xl shadow-sm border border-border">
              <h3 className="text-lg font-semibold text-primary">Setup</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-primary">
                  $1,500
                </span>
                <span className="text-muted ml-1">- $2,500</span>
              </div>
              <p className="mt-2 text-sm text-muted">One-time investment</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Complete system build",
                  "Website design & development",
                  "Content engine setup",
                  "Lead generation channels",
                  "Follow-up automation",
                  "First month included",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-primary text-white rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                Most Popular
              </div>
              <h3 className="text-lg font-semibold">Monthly Retainer</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">$1,000</span>
                <span className="text-gray-300 ml-1">- $1,500/mo</span>
              </div>
              <p className="mt-2 text-sm text-gray-300">
                Everything. Every month.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Weekly content creation",
                  "Active lead generation",
                  "Follow-up sequences",
                  "Review management",
                  "Website maintenance",
                  "Monthly strategy review",
                  "Continuous improvement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block p-6 bg-white rounded-xl border-2 border-accent">
              <p className="text-lg font-semibold text-primary">
                60-Day Guarantee
              </p>
              <p className="mt-2 text-sm text-muted max-w-md">
                If you don&apos;t see measurable results in 60 days, I refund
                your setup fee. I only win when you win.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 scroll-mt-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center">
            Common Questions
          </h2>

          <div className="mt-12 space-y-6">
            {FAQ_ITEMS.map((item) => (
              <div
                key={item.question}
                className="p-6 rounded-xl border border-border"
              >
                <h3 className="text-lg font-semibold text-primary">
                  {item.question}
                </h3>
                <p className="mt-3 text-muted text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: FAQ_ITEMS.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                  },
                })),
              }),
            }}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Fix Your Online Presence?
          </h2>
          <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto">
            I&apos;ll audit your business for free and show you exactly
            what&apos;s costing you customers. No commitment, no sales pitch —
            just honest answers.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-10 py-4 text-lg font-semibold text-white hover:bg-accent-hover transition-colors"
            >
              Get Your Free Audit
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Takes 15 minutes. Genuinely useful even if we never work together.
          </p>
        </div>
      </section>
    </>
  );
}
