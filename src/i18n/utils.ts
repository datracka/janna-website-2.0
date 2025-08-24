import { translations, type Language } from "./translations";

export function getTranslations(lang: Language) {
  return translations[lang] || translations.es;
}

export function getCurrentLanguage(url: string): Language {
  if (url.includes("/en")) return "en";
  return "es";
}

export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === "es") return path;
  return `/en${path}`;
}

export function getAlternateLanguage(currentLang: Language): Language {
  return currentLang === "es" ? "en" : "es";
}
