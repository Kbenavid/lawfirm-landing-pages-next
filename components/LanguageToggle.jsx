"use client";

import { useLanguage } from "./LanguageProvider";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageToggle() {
  const { setLang } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const activeLang = pathname.startsWith("/es") ? "es" : "en";

  const goTo = (nextLang) => {
    if (nextLang === "en") {
      const nextPath = pathname.startsWith("/es")
        ? pathname.replace(/^\/es/, "") || "/"
        : pathname;

      setLang("en");
      router.push(nextPath);
      return;
    }

    if (nextLang === "es") {
      const nextPath = pathname.startsWith("/es") ? pathname : `/es${pathname}`;
      setLang("es");
      router.push(nextPath);
    }
  };

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-brand-purple/20 bg-white/90 p-1 shadow-sm"
      role="group"
      aria-label="Language selector"
      title="Language"
    >
      <span className="sr-only">Language</span>

      <button
        type="button"
        onClick={() => goTo("en")}
        className={`rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 ${
          activeLang === "en"
            ? "bg-brand-purple text-white"
            : "text-brand-purple hover:bg-brand-purple/5"
        }`}
        aria-pressed={activeLang === "en"}
        aria-label="Switch to English"
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => goTo("es")}
        className={`rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 ${
          activeLang === "es"
            ? "bg-brand-purple text-white"
            : "text-brand-purple hover:bg-brand-purple/5"
        }`}
        aria-pressed={activeLang === "es"}
        aria-label="Switch to Spanish"
      >
        ES
      </button>
    </div>
  );
}