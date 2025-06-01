import { getCachedLang, loadTranslations, setCachedLang } from "./translations";

export async function automaticLangSet({ pathname, searchParams }: { pathname: string, searchParams: URLSearchParams }): Promise<void> {
    const definedLang = getDefinedLang(searchParams);

    let lang = getCachedLang();
    if (definedLang !== undefined) {
        lang = definedLang;
        setCachedLang(lang);
    }
    if (lang === undefined) {
        lang = preferedLang()
        setCachedLang(lang);
    }
    await loadTranslations(lang, pathname);
}

function preferedLang(): string {
    let lang = navigator.language;

    if (lang.startsWith('en')) {
        lang = 'en'
    } else if (lang.startsWith('fr')) {
        lang = 'fr'
    } else {
        lang = 'en'
    }

    return lang;
}

function getDefinedLang(searchParams: URLSearchParams): string | undefined {
    const definedLang = searchParams.get('lang')
    if (definedLang !== undefined) {
        if (definedLang === 'fr' || definedLang === 'en') {
            return definedLang;
        }
    }
}