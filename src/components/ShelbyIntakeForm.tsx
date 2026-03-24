"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const API_URL =
  process.env.NODE_ENV === "development"
    ? "/api/shelby-intake"
    : "https://fullerops-api.jonathan-067.workers.dev/api/shelby-intake";

const STORAGE_KEY = "shelby-intake-draft";
const STORAGE_VERSION = 1;
const EXPIRY_MS = 30 * 24 * 60 * 60 * 1000;

interface IntakeQuestion {
  id: string;
  section: string;
  sectionIndex: number;
  question: string;
  placeholder: string;
}

const SECTIONS = [
  "The Basics",
  "Finding Clients",
  "Follow-Up & Pipeline",
  "Content & Marketing",
  "Property Management",
  "Tools & Priorities",
];

const QUESTIONS: IntakeQuestion[] = [
  {
    id: "q1",
    section: "The Basics",
    sectionIndex: 0,
    question: "What's a typical day look like for you? Walk me through it, morning to end of day.",
    placeholder: "I usually start by checking my phone for new messages, then...",
  },
  {
    id: "q2",
    section: "The Basics",
    sectionIndex: 0,
    question: "What takes up the most time that ISN'T showing houses or meeting clients face-to-face?",
    placeholder: "Probably all the follow-up texts and emails, and then...",
  },
  {
    id: "q3",
    section: "The Basics",
    sectionIndex: 0,
    question: "If you could snap your fingers and never do one work task again, what would it be?",
    placeholder: "Honestly, I'd love to never have to...",
  },
  {
    id: "q4",
    section: "Finding Clients",
    sectionIndex: 1,
    question: "How do you find new buyers right now? Word of mouth, social media, open houses, Zillow, cold calling... tell me everything.",
    placeholder: "Most of my buyers come from...",
  },
  {
    id: "q5",
    section: "Finding Clients",
    sectionIndex: 1,
    question: "How about sellers? How do listing opportunities come to you?",
    placeholder: "Usually it's...",
  },
  {
    id: "q6",
    section: "Finding Clients",
    sectionIndex: 1,
    question: "Do you do any cold outreach or marketing, or is it mostly referrals and inbound?",
    placeholder: "It's mostly...",
  },
  {
    id: "q7",
    section: "Finding Clients",
    sectionIndex: 1,
    question: "What websites, apps, or tools do you use when looking for leads?",
    placeholder: "I check Zillow, and then...",
  },
  {
    id: "q8",
    section: "Follow-Up & Pipeline",
    sectionIndex: 2,
    question: "When someone new reaches out to you, a potential buyer or seller, what happens next? Walk me through your process.",
    placeholder: "First I usually...",
  },
  {
    id: "q9",
    section: "Follow-Up & Pipeline",
    sectionIndex: 2,
    question: "How do you keep track of who you've talked to and where they are in the process? CRM, spreadsheet, notebook, memory?",
    placeholder: "Right now I use...",
  },
  {
    id: "q10",
    section: "Follow-Up & Pipeline",
    sectionIndex: 2,
    question: "How many active leads or clients would you say you're juggling at any given time?",
    placeholder: "On average, probably...",
  },
  {
    id: "q11",
    section: "Follow-Up & Pipeline",
    sectionIndex: 2,
    question: "How do you usually communicate with clients? Text, email, phone calls, in person? What's the split?",
    placeholder: "Mostly text, but...",
  },
  {
    id: "q12",
    section: "Content & Marketing",
    sectionIndex: 3,
    question: "Do you post on social media for your business? If so, which platforms and how often?",
    placeholder: "I try to post on...",
  },
  {
    id: "q13",
    section: "Content & Marketing",
    sectionIndex: 3,
    question: "Do you send email newsletters or any regular updates to past clients?",
    placeholder: "Not really, but...",
  },
  {
    id: "q14",
    section: "Content & Marketing",
    sectionIndex: 3,
    question: "What kind of content do you wish you were putting out there but never have time for?",
    placeholder: "I've always wanted to...",
  },
  {
    id: "q15",
    section: "Property Management",
    sectionIndex: 4,
    question: "How many rental properties are you managing right now? Tell me about the PM side of things.",
    placeholder: "Right now I'm managing...",
  },
  {
    id: "q16",
    section: "Property Management",
    sectionIndex: 4,
    question: "How do you handle maintenance requests and tenant communication?",
    placeholder: "Usually tenants text me or...",
  },
  {
    id: "q17",
    section: "Tools & Priorities",
    sectionIndex: 5,
    question: "List every app, website, or piece of software you use for work, even if it's just your notes app.",
    placeholder: "My phone contacts, Notes app, Zillow...",
  },
  {
    id: "q18",
    section: "Tools & Priorities",
    sectionIndex: 5,
    question: "If I could build you one thing right now that would make the biggest difference in your business, what would it be?",
    placeholder: "Honestly, the biggest thing would be...",
  },
];

// Total steps: intro (0) + 18 questions (1-18) + review (19)
const TOTAL_STEPS = QUESTIONS.length + 2;

interface SavedState {
  version: number;
  name: string;
  email: string;
  responses: Record<string, string>;
  currentStep: number;
  lastSaved: number;
  submitted: boolean;
}

export function ShelbyIntakeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [restored, setRestored] = useState(false);
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Restore from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return;
      const data: SavedState = JSON.parse(saved);
      if (data.version !== STORAGE_VERSION) return;
      if (Date.now() - data.lastSaved > EXPIRY_MS) {
        localStorage.removeItem(STORAGE_KEY);
        return;
      }
      if (data.submitted) {
        setAlreadySubmitted(true);
        return;
      }
      setName(data.name || "");
      setEmail(data.email || "");
      setResponses(data.responses || {});
      setCurrentStep(data.currentStep || 0);
      setRestored(true);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const saveToStorage = useCallback(() => {
    try {
      const state: SavedState = {
        version: STORAGE_VERSION,
        name,
        email,
        responses,
        currentStep,
        lastSaved: Date.now(),
        submitted: false,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Storage full or unavailable
    }
  }, [name, email, responses, currentStep]);

  // Auto-focus textarea on step change
  useEffect(() => {
    if (currentStep >= 1 && currentStep <= QUESTIONS.length) {
      setTimeout(() => textareaRef.current?.focus(), 100);
    }
  }, [currentStep]);

  // Auto-grow textarea
  function handleTextareaInput(e: React.FormEvent<HTMLTextAreaElement>) {
    const el = e.currentTarget;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, window.innerHeight * 0.5) + "px";
  }

  function goNext() {
    if (currentStep === 0) {
      let valid = true;
      if (!name.trim()) {
        setNameError("What's your name?");
        valid = false;
      }
      if (!email.trim()) {
        setEmailError("Need your email so Jonathan can follow up");
        valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setEmailError("That doesn't look like an email address");
        valid = false;
      }
      if (!valid) return;
    }
    saveToStorage();
    setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  }

  function goBack() {
    saveToStorage();
    setCurrentStep((s) => Math.max(s - 1, 0));
  }

  function goToStep(step: number) {
    saveToStorage();
    setCurrentStep(step);
  }

  function updateResponse(questionId: string, value: string) {
    setResponses((prev) => ({ ...prev, [questionId]: value }));
  }

  async function handleSubmit() {
    setStatus("submitting");
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          responses,
          submittedAt: new Date().toISOString(),
        }),
      });
      if (res.ok) {
        setStatus("success");
        try {
          localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({ version: STORAGE_VERSION, submitted: true, lastSaved: Date.now() } as SavedState)
          );
        } catch { /* ok */ }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function startFresh() {
    localStorage.removeItem(STORAGE_KEY);
    setAlreadySubmitted(false);
    setName("");
    setEmail("");
    setResponses({});
    setCurrentStep(0);
    setStatus("idle");
    setRestored(false);
  }

  const progress = ((currentStep + 1) / TOTAL_STEPS) * 100;

  // Already submitted state
  if (alreadySubmitted) {
    return (
      <div className="flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-md">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
            <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-display text-2xl text-primary mb-3">Already submitted!</h1>
          <p className="text-muted mb-6">
            You&apos;ve already sent in your answers. Jonathan&apos;s working on it.
          </p>
          <button
            onClick={startFresh}
            className="text-sm text-accent hover:underline"
          >
            Fill it out again
          </button>
        </div>
      </div>
    );
  }

  // Success state
  if (status === "success") {
    return (
      <div className="flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-md">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
            <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-display text-2xl text-primary mb-3">All sent!</h1>
          <p className="text-muted">
            Thanks, {name.split(" ")[0]}. I&apos;ve got everything I need to get started.
            I&apos;ll go through your answers and follow up soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-border z-50">
        <div
          className="h-full bg-accent transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Step counter */}
      {currentStep > 0 && (
        <div className="fixed top-3 right-4 text-xs text-muted z-50">
          {currentStep <= QUESTIONS.length
            ? `${currentStep} / ${QUESTIONS.length}`
            : "Review"}
        </div>
      )}

      {/* Main content area */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-lg">

          {/* INTRO STEP */}
          {currentStep === 0 && (
            <div>
              <h1 className="font-display text-3xl sm:text-4xl text-primary mb-4">
                Hey Shelby!
              </h1>
              <p className="text-muted text-base mb-2">
                This is a quick way for me to learn how you work so I can
                build the right tools for you.
              </p>
              <p className="text-muted text-base mb-8">
                Answer as much or as little as you want. You can leave and come
                back anytime &mdash; your answers are saved.
              </p>

              {restored && (
                <div className="mb-6 p-3 rounded-lg bg-green-50 text-sm text-green-800">
                  Welcome back! Picking up where you left off.
                </div>
              )}

              <div className="space-y-4 mb-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (nameError) setNameError(null);
                    }}
                    autoComplete="name"
                    className={`w-full rounded-xl border px-5 py-4 text-base focus:ring-2 focus:ring-accent focus:border-transparent transition-colors min-h-[48px] ${
                      nameError ? "border-error" : "border-border"
                    }`}
                    placeholder="Shelby Freeman"
                  />
                  {nameError && (
                    <p className="mt-1 text-sm text-error" role="alert">{nameError}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError(null);
                    }}
                    autoComplete="email"
                    className={`w-full rounded-xl border px-5 py-4 text-base focus:ring-2 focus:ring-accent focus:border-transparent transition-colors min-h-[48px] ${
                      emailError ? "border-error" : "border-border"
                    }`}
                    placeholder="shelby@email.com"
                  />
                  {emailError && (
                    <p className="mt-1 text-sm text-error" role="alert">{emailError}</p>
                  )}
                </div>
              </div>

              <button
                onClick={goNext}
                className="w-full rounded-xl bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-hover transition-colors press-scale min-h-[48px]"
              >
                Let&apos;s Get Started
              </button>
            </div>
          )}

          {/* QUESTION STEPS */}
          {currentStep >= 1 && currentStep <= QUESTIONS.length && (() => {
            const q = QUESTIONS[currentStep - 1];
            return (
              <div>
                <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-6">
                  Section {q.sectionIndex + 1} of {SECTIONS.length} &mdash; {q.section}
                </p>
                <h2 className="font-display text-2xl sm:text-3xl text-primary leading-snug mb-8">
                  {q.question}
                </h2>
                <textarea
                  ref={textareaRef}
                  value={responses[q.id] || ""}
                  onChange={(e) => updateResponse(q.id, e.target.value)}
                  onInput={handleTextareaInput}
                  onBlur={saveToStorage}
                  placeholder={q.placeholder}
                  className="w-full rounded-xl border border-border bg-white px-5 py-4 text-base focus:ring-2 focus:ring-accent focus:border-transparent resize-none transition-colors"
                  style={{ minHeight: "120px" }}
                />
                <button
                  onClick={goNext}
                  className="text-xs text-muted hover:text-primary mt-2 transition-colors"
                  type="button"
                >
                  Skip this one for now
                </button>
              </div>
            );
          })()}

          {/* REVIEW STEP */}
          {currentStep === TOTAL_STEPS - 1 && (
            <div>
              <h2 className="font-display text-2xl sm:text-3xl text-primary mb-2">
                Here&apos;s what you wrote
              </h2>
              <p className="text-muted text-sm mb-8">
                Take a look. You can edit anything or just send it over.
              </p>

              <div className="space-y-4 mb-8 max-h-[60vh] overflow-y-auto pr-1">
                {QUESTIONS.map((q, i) => {
                  const answer = responses[q.id];
                  return (
                    <div key={q.id} className="border border-border rounded-xl p-4">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className="text-xs text-accent font-semibold tracking-wide uppercase">
                          {q.section}
                        </p>
                        <button
                          onClick={() => goToStep(i + 1)}
                          className="text-xs text-muted hover:text-accent transition-colors flex-shrink-0"
                        >
                          Edit
                        </button>
                      </div>
                      <p className="text-sm text-primary font-medium mb-1">{q.question}</p>
                      {answer && answer.trim() ? (
                        <p className="text-sm text-muted whitespace-pre-wrap">{answer}</p>
                      ) : (
                        <p className="text-sm text-muted/50 italic">Skipped</p>
                      )}
                    </div>
                  );
                })}
              </div>

              {status === "error" && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 mb-4" role="alert">
                  <svg className="w-5 h-5 text-error flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                  <div>
                    <p className="text-sm text-error font-medium">Something went wrong</p>
                    <p className="text-sm text-muted mt-1">Try again or text Jonathan directly.</p>
                  </div>
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === "submitting"}
                className="w-full rounded-xl bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed press-scale min-h-[48px] flex items-center justify-center gap-2"
              >
                {status === "submitting" ? (
                  <>
                    <span className="spinner" />
                    Sending...
                  </>
                ) : (
                  "Send to Jonathan"
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom navigation */}
      {currentStep >= 1 && currentStep <= QUESTIONS.length && (
        <div className="sticky bottom-0 bg-background/80 backdrop-blur-sm border-t border-border px-6 py-4">
          <div className="max-w-lg mx-auto flex items-center justify-between">
            <button
              onClick={goBack}
              className="text-sm text-muted hover:text-primary font-medium transition-colors min-h-[44px] px-2"
            >
              &larr; Back
            </button>
            <button
              onClick={goNext}
              className="rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors press-scale min-h-[44px]"
            >
              {currentStep === QUESTIONS.length ? "Review My Answers" : "Next"}
            </button>
          </div>
        </div>
      )}

      {/* Review back button */}
      {currentStep === TOTAL_STEPS - 1 && (
        <div className="sticky bottom-0 bg-background/80 backdrop-blur-sm border-t border-border px-6 py-4">
          <div className="max-w-lg mx-auto">
            <button
              onClick={goBack}
              className="text-sm text-muted hover:text-primary font-medium transition-colors min-h-[44px] px-2"
            >
              &larr; Back to questions
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
