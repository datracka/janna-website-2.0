import { translations, type Language } from "./translations";

export function getTranslations(lang: Language) {
  return translations[lang] || translations.es;
}

export function getCurrentLanguage(url: string): Language {
  if (url.includes("/en")) return "en";
  if (url.includes("/de")) return "de";
  return "es";
}

export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === "es") return path;
  return `/${lang}${path}`;
}

export function getAlternateLanguages(currentLang: Language): Language[] {
  const allLanguages: Language[] = ['es', 'en', 'de'];
  return allLanguages.filter(lang => lang !== currentLang);
}
