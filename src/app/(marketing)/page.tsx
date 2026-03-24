import Link from "next/link";
import { SERVICES, STEPS, INDUSTRIES, FAQ_ITEMS, SITE, TESTIMONIALS } from "@/lib/constants";
import { StatsSection, FAQSection } from "@/components/HomePageSections";
import { ServiceIcon } from "@/components/ServiceIcon";
import { HeroVisual } from "@/components/HeroVisual";

function IndustryIcon({ slug }: { slug: string }) {
  const cls = "w-6 h-6 text-accent";
  switch (slug) {
    case "real-estate":
      return <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" /></svg>;
    case "lawn-care":
      return <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>;
    case "restaurants":
      return <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" /></svg>;
    case "coaches":
      return <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>;
    case "insurance":
      return <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>;
    default:
      return <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21" /></svg>;
  }
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section-v2 text-white relative overflow-hidden">
        {/* Background layers */}
        <div className="hero-bg-v2" />
        <div className="hero-grid-lines" />

        <div className="mx-auto max-w-[1200px] px-6 py-[120px] sm:py-[140px] relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div className="max-w-[560px] lg:max-w-none">
            <div className="hero-label-v2 animate-fade-in-up delay-1">
              <span className="hero-label-line" />
              AI-Powered Business Operations
            </div>

            <h1 className="font-display text-[clamp(2.5rem,4.5vw,3.75rem)] leading-[1.1] tracking-[-0.015em] animate-fade-in-up delay-2">
              Your Online Presence Should Be Working{" "}
              <em className="text-accent">as Hard as You Do</em>
            </h1>

            <p className="mt-6 text-lg leading-[1.7] text-gray-300/90 font-light max-w-[480px] animate-fade-in-up delay-3">
              I build and run your entire digital operation. Website, content,
              leads, follow-ups, reviews. One person. Everything handled.
              You focus on your business.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-4">
              <Link
                href="/contact"
                className="hero-btn-primary"
              >
                Get Your Free Audit
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
              <a
                href="#how-it-works"
                className="hero-btn-secondary"
              >
                See How It Works
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" /></svg>
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-6 animate-fade-in-up delay-5">
              <span className="hero-trust-item">
                <svg className="hero-trust-icon" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                60-Day Money-Back Guarantee
              </span>
              <span className="hero-trust-item">
                <svg className="hero-trust-icon" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                Your Data Stays Private
              </span>
              <span className="hero-trust-item">
                <svg className="hero-trust-icon" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                No Contracts
              </span>
            </div>
          </div>

          {/* Right: Floating Dashboard */}
          <div className="hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 bg-muted-light">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">The Problem</p>
            <h2 className="font-display text-3xl sm:text-4xl text-primary">
              Your Competitors Are Pulling Ahead
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Right now, your competitors are posting on social media every
              day, ranking above you on Google, collecting five-star reviews,
              and following up with every lead automatically.
            </p>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              They&apos;re not more talented than you. They just have better systems.
            </p>
          </div>

          <StatsSection />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">What I Handle</p>
            <h2 className="font-display text-3xl sm:text-4xl text-primary">
              Everything You Need.<br />One Partner.
            </h2>
            <p className="mt-4 text-lg text-muted">
              No juggling vendors. No agency runaround. One person who builds
              and runs every piece of your digital operation as a single system.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="group flex gap-5 p-6 rounded-xl service-card bg-white"
              >
                <div className="flex-shrink-0">
                  <ServiceIcon name={service.icon} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <div className="section-divider" />
            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-hover transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-accent/20 press-scale min-h-[48px]"
              >
                Get Your Free Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-muted-light scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">How It Works</p>
            <h2 className="font-display text-3xl sm:text-4xl text-primary">
              Three Steps. That&apos;s It.
            </h2>
            <p className="mt-4 text-lg text-muted">
              No complicated onboarding. No months of planning. I work with
              whatever you already have, fix the problems, and keep everything
              running.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-0">
            {STEPS.map((step, i) => (
              <div key={step.number} className={`text-center p-10 ${i < 2 ? "md:border-r md:border-border" : ""}`}>
                <div className="text-5xl font-display text-accent/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-hover transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-accent/20 press-scale min-h-[48px]"
            >
              Start With a Free Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted-light">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl text-primary">
              Real Results for Real Businesses
            </h2>
            <p className="mt-4 text-lg text-muted">
              Here&apos;s what business owners experience after partnering with
              FullerOps.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Featured testimonial */}
            <div className="lg:col-span-2 p-10 bg-primary text-white rounded-2xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-6 right-8 font-display text-8xl text-white/5 select-none">&ldquo;</div>
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="text-accent font-semibold text-sm mb-6 tracking-wide uppercase">
                    {TESTIMONIALS[0].result}
                  </div>
                  <p className="font-display text-xl sm:text-2xl leading-relaxed text-gray-100">
                    &ldquo;{TESTIMONIALS[0].quote}&rdquo;
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                    {TESTIMONIALS[0].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{TESTIMONIALS[0].name}</div>
                    <div className="text-gray-400 text-xs">{TESTIMONIALS[0].location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary testimonials */}
            <div className="flex flex-col gap-6">
              {TESTIMONIALS.slice(1).map((t) => (
                <div
                  key={t.name}
                  className="flex-1 p-8 bg-white rounded-2xl border border-border card-hover"
                >
                  <div className="text-accent font-semibold text-xs mb-3 tracking-wide uppercase">
                    {t.result}
                  </div>
                  <p className="text-muted text-sm leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xs">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-primary text-xs">{t.name}</div>
                      <div className="text-muted text-xs">{t.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-24 scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Industries</p>
            <h2 className="font-display text-3xl sm:text-4xl text-primary">
              Built for Your Industry
            </h2>
            <p className="mt-4 text-lg text-muted">
              Not generic marketing. Every system is tailored to your
              industry&apos;s specific problems and opportunities.
            </p>
          </div>

          <div className="mt-16 space-y-4">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.slug}
                href={`/services/${industry.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border bg-white p-8 sm:p-10 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 border-l-4 border-l-accent">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                        <IndustryIcon slug={industry.slug} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <span className="text-accent text-xs font-semibold tracking-widest uppercase">{industry.name}</span>
                      <h3 className="font-display text-xl sm:text-2xl text-primary leading-snug mt-1">
                        {industry.headline}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 self-center">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                        See how
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-muted-light scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Pricing</p>
            <h2 className="font-display text-3xl sm:text-4xl text-primary">
              Built Around Your Business
            </h2>
            <p className="mt-4 text-lg text-muted">
              Every business is different. I build a custom scope based on
              what you actually need, not a one-size-fits-all package.
              No long-term contracts. Cancel anytime.
            </p>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="p-8 bg-primary text-white rounded-xl relative overflow-hidden pricing-featured">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display text-2xl mb-4">What You Get</h3>
                  <ul className="space-y-3">
                    {[
                      "Website design & development",
                      "Content creation & publishing",
                      "Lead generation & follow-up",
                      "Review management",
                      "SEO & local search",
                      "Monthly strategy reviews",
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
                <div className="flex flex-col justify-center text-center md:text-left">
                  <p className="text-gray-300 text-sm mb-2">One person. Everything handled.</p>
                  <p className="text-2xl font-bold mb-6">Custom quote based on your needs</p>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-hover transition-colors press-scale min-h-[48px]"
                  >
                    Request a Quote
                  </a>
                  <p className="text-xs text-gray-400 mt-3">Free audit included with every quote</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-xl border border-border">
              <h3 className="font-semibold text-primary text-center mb-4">
                Why This Works Better
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-center">
                <div className="p-4">
                  <div className="font-semibold text-muted mb-1">
                    Marketing Agency
                  </div>
                  <div className="text-xs text-muted mt-1">
                    12-month contracts, big overhead,
                    you&apos;re one of 50 clients
                  </div>
                </div>
                <div className="p-4">
                  <div className="font-semibold text-muted mb-1">
                    Freelancer Stack
                  </div>
                  <div className="text-xs text-muted mt-1">
                    3-4 different people to manage,
                    nothing connects together
                  </div>
                </div>
                <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <div className="font-semibold text-accent mb-1">
                    FullerOps
                  </div>
                  <div className="text-xs text-muted mt-1">
                    Everything. One person. Cancel anytime.
                    Your business gets my full attention.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block p-6 bg-white rounded-xl border-2 border-accent">
              <p className="text-lg font-semibold text-primary">
                60-Day Guarantee
              </p>
              <p className="mt-2 text-sm text-muted max-w-md">
                If you don&apos;t see measurable results in 60 days, I refund
                your setup fee. That&apos;s the <strong>Fuller<span className="text-accent">Ops</span></strong> guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 scroll-mt-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">FAQ</p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-primary text-center">
            Common Questions
          </h2>

          <div className="mt-12">
            <FAQSection />
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

      {/* Trust & Security */}
      <section className="py-16 bg-muted-light">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <svg className="w-10 h-10 text-accent mx-auto mb-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
              <h3 className="font-semibold text-primary mb-2">Your Data is Protected</h3>
              <p className="text-sm text-muted">
                Every engagement starts with a confidentiality agreement. Credentials stored with encrypted password management. Your business data is never shared with anyone. Period.
              </p>
            </div>
            <div className="p-6">
              <svg className="w-10 h-10 text-accent mx-auto mb-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
              <h3 className="font-semibold text-primary mb-2">60-Day Guarantee</h3>
              <p className="text-sm text-muted">
                Measurable improvement in your online presence and lead flow within 60 days, or I refund your entire setup fee. No questions, no hassle.
              </p>
            </div>
            <div className="p-6">
              <svg className="w-10 h-10 text-accent mx-auto mb-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
              <h3 className="font-semibold text-primary mb-2">You Own Everything</h3>
              <p className="text-sm text-muted">
                Every website, piece of content, and system I build is 100% yours. If you leave, it all comes with you. No hostage situations. No proprietary lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl">
            Find Out What&apos;s Costing You Customers
          </h2>
          <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto">
            I&apos;ll personally audit your online presence and give you a
            clear breakdown of what&apos;s working, what isn&apos;t, and
            exactly what to fix. Free. Takes 15 minutes.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-10 py-4 text-lg font-semibold text-white hover:bg-accent-hover transition-colors"
            >
              Get Your Free Audit
            </Link>
            <a
              href="https://cal.com/fullerops/strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-10 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Book a 15-Min Call
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            Genuinely useful even if we never work together. No pitch, no pressure.
          </p>
        </div>
      </section>
    </>
  );
}
