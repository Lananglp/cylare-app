'use client';

import { useTransition } from 'react';
// import { useParams } from 'next/navigation';
import { Locale, useTranslations } from 'next-intl';

import { usePathname, useRouter } from '@/i18n/navigation';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { dataItems } from '@/types/global';

type Props = {
    value: string;
    label: string;
    locales: readonly string[];
};

export default function LocaleSwitcherSelect({
    value,
    label,
    locales,
}: Props) {
    const router = useRouter();
    const pathname = usePathname();
    // const params = useParams();

    const [isPending, startTransition] = useTransition();
    const language = useTranslations('System');

    function handleChange(nextLocale: string) {
        startTransition(() => {
            router.replace(
                {
                    pathname,
                    // query: params,
                },
                {
                    locale: nextLocale as Locale,
                }
            );
        });
    }

    return (
        <div className="flex items-center gap-2">
            <span className="sr-only">{label}</span>

            <Select
                value={value}
                disabled={isPending}
                onValueChange={handleChange}
                defaultValue='en'
            >
                <SelectTrigger size='sm' className='w-full max-w-48'>
                    <SelectValue placeholder="Language" />
                </SelectTrigger>

                <SelectContent position='popper'>
                    <SelectGroup>
                        <SelectLabel>{language('language')}</SelectLabel>
                        {locales && locales.map((locale) => (
                            <SelectItem key={locale} value={locale}>
                                {dataItems.language.find((item) => item.code === locale)?.name}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}
