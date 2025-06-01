import i18n from 'sveltekit-i18n';
import { type Config } from 'sveltekit-i18n';

const globalConfig = [
	{
		locale: 'fr',
		key: 'global',
		loader: async () => (await import('./translation/global/fr')).default
	},
	{
		locale: 'en',
		key: 'global',
		loader: async () => (await import('./translation/global/en')).default
	}
];

const homeConfig = [
	{
		locale: 'en',
		key: 'home',
		routes: ['/'],
		loader: async () => (await import('./translation/home/en')).default
	},
	{
		locale: 'fr',
		key: 'home',
		routes: ['/'],
		loader: async () => (await import('./translation/home/fr')).default
	}
];

const publicationConfig = [
	{
		locale: 'en',
		key: 'publication',
		routes: ['/publication'],
		loader: async () => (await import('./translation/publication/en')).default
	},
	{
		locale: 'fr',
		key: 'publication',
		routes: ['/publication'],
		loader: async () => (await import('./translation/publication/fr')).default
	}
];
const config: Config = {
	loaders: [...globalConfig, ...homeConfig, ...publicationConfig]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);

let cachedLang: string | undefined = undefined;

export function getCachedLang(): string | undefined {
	return cachedLang;
}

export function setCachedLang(lang?: string | undefined): void {
	cachedLang = lang;
}
