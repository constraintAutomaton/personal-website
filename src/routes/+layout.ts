import { automaticLangSet } from '$lib/lang';

export const load = async ({ url }) => {
    const { pathname, searchParams } = url;
    await automaticLangSet({ pathname, searchParams });
    return {};
}


