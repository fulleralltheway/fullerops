"use client";

import { CountUp } from "@/components/CountUp";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Accordion } from "@/components/Accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export function StatsSection() {
  const stats = [
    { value: 97, suffix: "%", label: "of consumers check online reviews before choosing a local business" },
    { value: 70, suffix: "%", label: "of your potential customers are searching on their phone right now" },
    { value: 53, suffix: "%", label: "of visitors leave if your site takes longer than 3 seconds to load" },
  ];

  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((item, i) => (
        <AnimateOnScroll key={item.value} delay={i * 0.15}>
          <div className="text-center p-8 bg-white rounded-xl shadow-sm stat-card">
            <div className="text-4xl font-bold text-accent">
              <CountUp end={item.value} suffix={item.suffix} />
            </div>
            <p className="mt-3 text-sm text-muted">{item.label}</p>
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  );
}

export function FAQSection() {
  return (
    <AnimateOnScroll>
      <Accordion items={FAQ_ITEMS} />
    </AnimateOnScroll>
  );
}

export function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <AnimateOnScroll className={className} delay={delay}>
      {children}
    </AnimateOnScroll>
  );
}
