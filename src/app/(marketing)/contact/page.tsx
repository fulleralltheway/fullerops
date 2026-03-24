import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Get Your Free Audit",
  description:
    "Request a free online presence audit. I'll find every gap and tell you exactly what it's costing you. No strings attached.",
};

export default function ContactPage() {
  return (
    <section className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Contact</p>
            <h1 className="font-display text-4xl sm:text-5xl text-primary leading-tight">
              Get Your Free Audit
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Tell me about your business and I&apos;ll personally audit your
              entire online presence. Website, social media, Google reviews, SEO.
              I&apos;ll show you exactly what&apos;s costing you customers and
              what to do about it.
            </p>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              No pitch. No commitment. Just honest findings you can act on
              whether we work together or not.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <div>
                  <div className="font-semibold text-primary">Email</div>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-accent hover:text-accent-hover"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
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
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <div>
                  <div className="font-semibold text-primary">Location</div>
                  <span className="text-muted">{SITE.location}</span>
                  <p className="text-sm text-muted mt-1">
                    Serving businesses nationwide
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-muted-light rounded-xl">
              <h3 className="font-semibold text-primary mb-2">
                Prefer to talk first?
              </h3>
              <p className="text-sm text-muted mb-4">
                Book a call directly. No form needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://cal.com/fullerops/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-accent px-6 py-3 text-sm font-semibold text-accent hover:bg-accent hover:text-white transition-colors"
                >
                  15-Min Strategy Call
                </a>
                <a
                  href="https://cal.com/fullerops/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
                >
                  30-Min Discovery Call
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
