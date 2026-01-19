"use client";

import { useEffect, useState } from "react";

const REVIEWS = [
  {
    name: "Nancy V.",
    location: "San Diego, CA",
    text: "Jose and the team at Orozco Law Firm were incredibly professional and knowledgeable. From the very beginning, they took the time to listen and made me feel heard and supported when I needed it most. Communication throughout the process was excellent, which gave me confidence and peace of mind. I would absolutely recommend Orozco Law Firm to family and friends.",
  },
  {
    name: "Ilse C.",
    location: "Chula Vista, CA",
    text: "Choosing the right attorney can be difficult, but Orozco Law Firm made the process clear and reassuring. The entire team was professional, efficient, and supportive at every step. Their dedication and hard work gave me confidence throughout my case, and I’m truly grateful for their guidance.",
  },
  {
    name: "Kimberly R.",
    location: "San Diego, CA",
    text: "I’m grateful to Jose Orozco for taking the time to help me through a difficult situation. The firm was welcoming, understanding, and professional from the start. Their guidance and hard work gave me confidence throughout the process, and I strongly recommend Orozco Law Firm.",
  },
];

export default function ReviewsCarousel({ t }) {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const copy = {
    heading: t?.reviewsCarousel?.heading ?? "Real Clients. Real Relief.",
    subheading:
      t?.reviewsCarousel?.subheading ??
      "Here's what people say about working with Orozco Law Firm.",
    dotAriaLabel:
      t?.reviewsCarousel?.dotAriaLabel ?? "Go to review",
    privacyNote:
      t?.reviewsCarousel?.privacyNote ?? "Client names abbreviated for privacy.",
  };

  function goTo(newIndex) {
    if (isFading) return; // prevents skipping multiple cards fast
    setIsFading(true);

    // 1) Fade out
    setTimeout(() => {
      // 2) Swap content while hidden
      setIndex(newIndex);

      // 3) Fade back in on the next paint (avoids React batching)
      requestAnimationFrame(() => {
        setIsFading(false);
      });
    }, 300); // keep in sync with fade duration
  }

  // Auto-advance the carousel every 10 seconds
  useEffect(() => {
    if (isFading) return;

    const id = setInterval(() => {
      goTo((index + 1) % REVIEWS.length);
    }, 10000);

    return () => clearInterval(id);
  }, [index, isFading]);

  return (
    <section className="mx-auto w-full max-w-screen-2xl px-6 py-14">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-brand-purple">
          {copy.heading}
        </h2>
        <p className="mt-3 text-brand-gray">{copy.subheading}</p>
      </div>

      <div className="mt-10 flex justify-center">
        <div className={`w-full max-w-2xl rounded-2xl bg-white/80 p-8 shadow-lg ring-1 ring-black/5 backdrop-blur-sm transition-all duration-300 ${
          isFading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
        }`}>
          <p className="text-lg leading-relaxed text-brand-gray">
            “{REVIEWS[index].text}”
          </p>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="font-semibold text-brand-purple">{REVIEWS[index].name}</p>
              <p className="text-sm text-brand-gray">{REVIEWS[index].location}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {REVIEWS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`${copy.dotAriaLabel} ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index
                ? "bg-brand-purple"
                : "bg-brand-gray/30 hover:bg-brand-gray/50"
            }`}
          />
        ))}
      </div>
      <p className="mt-3 text-center text-xs text-brand-gray/70">
        {copy.privacyNote}
      </p>
    </section>
  );
}