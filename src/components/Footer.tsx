import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">{SITE.name}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              AI-powered business operations for small businesses. I build and
              run your entire digital operation so you can focus on what you do
              best.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>{SITE.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
