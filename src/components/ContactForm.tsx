"use client";

import { useState, FormEvent } from "react";

const API_URL =
  process.env.NODE_ENV === "development"
    ? "/api/contact"
    : "https://fullerops-api.jonathan-067.workers.dev/api/contact";

function FieldError({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <p className="mt-1 text-sm text-error" role="alert">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string | null>>({});

  function validateField(name: string, value: string) {
    let error: string | null = null;
    if (name === "name" && !value.trim()) {
      error = "Please enter your name";
    } else if (name === "email") {
      if (!value.trim()) error = "Please enter your email";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Please enter a valid email";
    } else if (name === "business" && !value.trim()) {
      error = "Please enter your business name";
    }
    setFieldErrors((prev) => ({ ...prev, [name]: error }));
    return !error;
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    validateField(name, value);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      business: formData.get("business") as string,
      industry: formData.get("industry") as string,
      message: formData.get("message") as string,
    };

    const nameValid = validateField("name", data.name);
    const emailValid = validateField("email", data.email);
    const businessValid = validateField("business", data.business);
    if (!nameValid || !emailValid || !businessValid) return;

    setStatus("submitting");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-muted-light p-8 rounded-xl text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <svg
            className="w-8 h-8 text-success"
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
        </div>
        <h2 className="text-xl font-semibold text-primary mb-2">
          Audit Requested!
        </h2>
        <p className="text-muted">
          I&apos;ll personally review your online presence and get back to you
          within 24 hours.
        </p>
      </div>
    );
  }

  const inputClass = (name: string) =>
    `w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-accent focus:border-transparent transition-colors min-h-[44px] ${
      fieldErrors[name] ? "border-error" : "border-border"
    }`;

  return (
    <div className="bg-muted-light p-8 rounded-xl">
      <h2 className="text-xl font-semibold text-primary mb-6">
        Request Your Free Audit
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-primary mb-1.5"
          >
            Your Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className={inputClass("name")}
            placeholder="Jonathan Fuller"
            onBlur={handleBlur}
          />
          <FieldError message={fieldErrors.name ?? null} />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-primary mb-1.5"
          >
            Email <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className={inputClass("email")}
            placeholder="you@business.com"
            onBlur={handleBlur}
          />
          <FieldError message={fieldErrors.email ?? null} />
        </div>

        <div>
          <label
            htmlFor="business"
            className="block text-sm font-medium text-primary mb-1.5"
          >
            Business Name & Website <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="business"
            name="business"
            required
            autoComplete="organization"
            className={inputClass("business")}
            placeholder="Acme Lawn Care, acmelawncare.com"
            onBlur={handleBlur}
          />
          <FieldError message={fieldErrors.business ?? null} />
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
            className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:ring-2 focus:ring-accent focus:border-transparent bg-white min-h-[44px]"
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
            className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
            placeholder="e.g., I'm not getting any leads from my website..."
          />
        </div>

        {status === "error" && (
          <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200" role="alert">
            <svg className="w-5 h-5 text-error flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            <div>
              <p className="text-sm text-error font-medium">Something went wrong</p>
              <p className="text-sm text-muted mt-1">
                Please try again or email me directly at jonathan@fullerops.com
              </p>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed press-scale min-h-[48px] flex items-center justify-center gap-2"
        >
          {status === "submitting" ? (
            <>
              <span className="spinner" />
              Sending...
            </>
          ) : (
            "Request My Free Audit"
          )}
        </button>

        <p className="text-xs text-muted text-center">
          I&apos;ll personally review your online presence and get back to you
          within 24 hours.
        </p>
      </form>
    </div>
  );
}
