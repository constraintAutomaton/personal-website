import { beforeEach, describe, expect, test, vi } from "vitest";
import { automaticLangSet } from "$lib/lang";
import { loadTranslations, setCachedLang } from "$lib";

vi.mock('$lib/translations', async (importOriginal: any) => {
    const mod = await importOriginal()
    return {
        ...mod,
        loadTranslations: vi.fn()
    };
})

describe("automaticLangSet", () => {
    const A_PATH_NAME = "foo";

    beforeEach(() => {
        Object.defineProperty(navigator, 'language', {
            configurable: true,
            get: () => 'es',
        });
        setCachedLang();
        vi.resetAllMocks();
    });

    test("given a lang in the cache and no lang search param it should return the cache lang", async () => {
        const searchParams: any = {
            get: (key: string) => {
                if (key === 'lang') {
                    return undefined
                }
            }
        };
        setCachedLang('fr');
        await automaticLangSet({ pathname: A_PATH_NAME, searchParams });

        expect(loadTranslations).toHaveBeenCalledOnce();
        expect(loadTranslations).toHaveBeenCalledExactlyOnceWith('fr', A_PATH_NAME);
    });

    test("given a lang in the cache and a lang search param it should return the from the search param", async () => {
        const searchParams: any = {
            get: (key: string) => {
                if (key === 'lang') {
                    return 'en'
                }
            }
        };
        setCachedLang('fr');
        await automaticLangSet({ pathname: A_PATH_NAME, searchParams });

        expect(loadTranslations).toHaveBeenCalledOnce();
        expect(loadTranslations).toHaveBeenCalledExactlyOnceWith('en', A_PATH_NAME);
    });

    test("given a lang in the cache and a lang search param that is not fr or en it should return the cached lang", async () => {
        const searchParams: any = {
            get: (key: string) => {
                if (key === 'lang') {
                    return 'foo'
                }
            }
        };
        setCachedLang('fr');
        await automaticLangSet({ pathname: A_PATH_NAME, searchParams });

        expect(loadTranslations).toHaveBeenCalledOnce();
        expect(loadTranslations).toHaveBeenCalledExactlyOnceWith('fr', A_PATH_NAME);
    });

    test("given no lang in the cache and a lang search param it should return the from the search param", async () => {
        const searchParams: any = {
            get: (key: string) => {
                if (key === 'lang') {
                    return 'fr'
                }
            }
        };

        await automaticLangSet({ pathname: A_PATH_NAME, searchParams });

        expect(loadTranslations).toHaveBeenCalledOnce();
        expect(loadTranslations).toHaveBeenCalledExactlyOnceWith('fr', A_PATH_NAME);
    });

    test("given no lang in the cache and a lang search param that is not en or fr it should the navigator language", async () => {
        const searchParams: any = {
            get: (key: string) => {
                if (key === 'lang') {
                    return 'foo'
                }
            }
        };

        Object.defineProperty(navigator, 'language', {
            configurable: true,
            get: () => 'fr',
        });

        await automaticLangSet({ pathname: A_PATH_NAME, searchParams });

        expect(loadTranslations).toHaveBeenCalledOnce();
        expect(loadTranslations).toHaveBeenCalledExactlyOnceWith(navigator.language, A_PATH_NAME);
    });

    test("given no lang in the cache and no lang in the search param should return the navigator language", async () => {
        const searchParams: any = {
            get: (key: string) => {
                if (key === 'lang') {
                    return undefined
                }
            }
        };
        Object.defineProperty(navigator, 'language', {
            configurable: true,
            get: () => 'fr',
        });

        await automaticLangSet({ pathname: A_PATH_NAME, searchParams });

        expect(loadTranslations).toHaveBeenCalledOnce();
        expect(loadTranslations).toHaveBeenCalledExactlyOnceWith(navigator.language, A_PATH_NAME);
    });

    test("given no lang in the cache and no lang in the search param and a navigator language that is not fr or en should return en", async () => {
        const searchParams: any = {
            get: (key: string) => {
                if (key === 'lang') {
                    return undefined
                }
            }
        };
        Object.defineProperty(navigator, 'language', {
            configurable: true,
            get: () => 'es',
        });

        await automaticLangSet({ pathname: A_PATH_NAME, searchParams });

        expect(loadTranslations).toHaveBeenCalledOnce();
        expect(loadTranslations).toHaveBeenCalledExactlyOnceWith('en', A_PATH_NAME);
    });
});