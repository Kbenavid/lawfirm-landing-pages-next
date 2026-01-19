"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DEFAULT_LANG, LANGS, MESSAGES } from "@/lib/i18n";

const LanguageContext = createContext(null);

export function LanguageProvider({ children, initialLang }) {
  const [lang, setLang] = useState(initialLang || DEFAULT_LANG);

  useEffect(() => {
    if (initialLang && LANGS.includes(initialLang)) {
      setLang(initialLang);
      return;
    }

    const saved = window.localStorage.getItem("lang");
    if (saved && LANGS.includes(saved)) setLang(saved);
  }, [initialLang]);

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => {
    const t = MESSAGES[lang] ?? MESSAGES[DEFAULT_LANG];
    return { lang, setLang, t };
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error("useLanguage must be used inside <LanguageProvider />");
  return ctx;
}