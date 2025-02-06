'use client'

import { useTranslations } from "@/hooks/useTranslations"

export default function Footer() {

    const { t } = useTranslations()

    return (
        <footer className=" text-black font-bold bg-gradient-to-br from-[#8c52ff] to-[#5ce1e6] p-2 text-center">
            {t('footer', 'title')}
        </footer>
    )
}