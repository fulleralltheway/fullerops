import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — Get Your Free Audit",
  description:
    "Request a free online presence audit. I'll find every gap and tell you exactly what it's costing you. No strings attached.",
};

export default function ContactPage() {
  return (
    <section className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary leading-tight">
              Get Your Free Audit
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Tell me about your business and I&apos;ll audit your entire online
              presence — website, social media, Google reviews, SEO — and show
              you exactly what&apos;s costing you customers.
            </p>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              No sales pitch. No commitment. Just honest findings you can use
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
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <div>
                  <div className="font-semibold text-primary">Phone</div>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="text-accent hover:text-accent-hover"
                  >
                    {SITE.phone}
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
          </div>

          <div className="bg-muted-light p-8 rounded-xl">
            <h2 className="text-xl font-semibold text-primary mb-6">
              Request Your Free Audit
            </h2>
            <form
              action={`mailto:${SITE.email}`}
              method="POST"
              encType="text/plain"
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-primary mb-1.5"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Jonathan Fuller"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-primary mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="you@business.com"
                />
              </div>

              <div>
                <label
                  htmlFor="business"
                  className="block text-sm font-medium text-primary mb-1.5"
                >
                  Business Name & Website
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  required
                  className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Acme Lawn Care — acmelawncare.com"
                />
              </div>

              <div>
                <label
                  htmlFor="industry"
                  className="block text-sm font-medium text-primary mb-1.5"
                >
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                >
                  <option value="">Select your industry</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="lawn-care">Lawn Care / Landscaping</option>
                  <option value="restaurant">Restaurant / Coffee Shop</option>
                  <option value="coaching">Coaching / Consulting</option>
                  <option value="insurance">Insurance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary mb-1.5"
                >
                  What&apos;s your biggest challenge right now?{" "}
                  <span className="text-muted font-normal">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  placeholder="e.g., I'm not getting any leads from my website..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-hover transition-colors"
              >
                Request My Free Audit
              </button>

              <p className="text-xs text-muted text-center">
                I&apos;ll personally review your online presence and get back to
                you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
