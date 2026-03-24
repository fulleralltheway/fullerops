import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="font-display text-9xl text-accent pulse-404 mb-6 select-none">404</div>
        <h1 className="font-display text-3xl sm:text-4xl text-primary">
          Page Not Found
        </h1>
        <p className="mt-6 text-lg text-muted max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-hover transition-colors press-scale min-h-[48px]"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-muted-light transition-colors press-scale min-h-[48px]"
          >
            Get Your Free Audit
          </Link>
        </div>
      </div>
    </section>
  );
}
