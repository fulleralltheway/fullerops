"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { LogoMark } from "@/components/LogoMark";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "header-scrolled border-border"
          : transparent
            ? "bg-transparent border-transparent"
            : "bg-white/95 backdrop-blur-sm border-border"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <LogoMark size={32} className="w-8 h-8" variant={transparent ? "inverted" : undefined} />
            <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${transparent ? "text-white" : "text-primary"}`}>
              Fuller<span className="text-accent">Ops</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  transparent
                    ? "text-gray-300 hover:text-white"
                    : "text-muted hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
            >
              Get Your Free Audit
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center ${transparent ? "text-white" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className={`md:hidden border-t py-4 mobile-menu-enter ${transparent ? "border-white/10 bg-[#0f0f1a]/95 backdrop-blur-md rounded-b-xl" : "border-border"}`}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-2 text-base font-medium min-h-[44px] flex items-center ${
                  transparent ? "text-gray-300 hover:text-white" : "text-muted hover:text-primary"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 block w-full rounded-lg bg-accent px-5 py-3 text-center text-sm font-semibold text-white hover:bg-accent-hover min-h-[44px]"
              onClick={() => setMenuOpen(false)}
            >
              Get Your Free Audit
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
