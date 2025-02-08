'use client'

import { useTranslations } from "@/hooks/useTranslations";

export default function Contact() {
    const { t } = useTranslations()

    return (
        <h1 className="text-4x1 text-white font-bold">{t('slugPage', 'title')}</h1>
    )
}