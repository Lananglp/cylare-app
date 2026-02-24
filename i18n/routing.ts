import { dataItems } from '@/types/global';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: dataItems.language.map((item) => item.code),

    // Used when no locale matches
    defaultLocale: 'en'
});