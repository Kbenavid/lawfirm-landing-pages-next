"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Do I have to pay anything upfront?",
    a: "No. We handle personal injury cases on a contingency fee basis — you don’t pay unless we recover compensation for you.",
  },
  {
    q: "How quickly should I call after an accident?",
    a: "As soon as you can. Evidence can disappear quickly, and early guidance helps protect your claim and your medical care.",
  },
  {
    q: "What if the insurance company already called me?",
    a: "That’s common. You can politely decline to give a recorded statement and contact us — we’ll help you understand what to say and what not to sign.",
  },
  {
    q: "How long will my case take?",
    a: "It depends on your injuries, treatment timeline, and how the insurance company responds. We’ll give you a clear plan and keep you updated throughout the process.",
  },
  {
    q: "What should I bring to a consultation?",
    a: "If you have them: photos, police report info, insurance details, medical paperwork, and any messages from the other party or insurer. If not, that’s okay — we can still help.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto w-full max-w-screen-2xl px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-brand-purple">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-brand-gray">
          Clear answers to help you feel confident about your next step.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {FAQS.map((item, i) => {
          const isOpen = i === openIndex;

          return (
            <div
              key={item.q}
              className="rounded-2xl bg-white/80 shadow-lg ring-1 ring-black/5 backdrop-blur-sm"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-base font-semibold text-brand-purple">
                  {item.q}
                </span>

                <span className="text-2xl leading-none text-brand-gray">
                  {isOpen ? "–" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 text-brand-gray">
                  <div className="mb-4 h-px w-full bg-brand-gold/30" />
                  <p className="leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* CTA BLOCK */}
      <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white/80 p-8 shadow-lg ring-1 ring-black/5 backdrop-blur-sm">
        <h3 className="text-xl font-bold text-brand-purple">Still have questions?</h3>
        <p className="mt-2 text-brand-gray">
          A quick conversation can bring clarity. Call now or send a message and we’ll respond
          shortly.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="tel:+16197361268"
            className="inline-flex items-center justify-center rounded-md bg-brand-gold px-5 py-3 text-base font-semibold text-white"
          >
            Call Now
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-base font-semibold text-brand-purple hover:bg-gray-50"
          >
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}