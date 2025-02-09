'use client'

import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/useTranslations";
import Image from "next/image";

export default function Contact() {
    const { t } = useTranslations()
    return (
        <section className="flex flex-col items-center justify-center w-full h-screen">
            <Button
                onClick={() => { window.history.back() }}
                className="bg-gradient-to-r from-[#8c52ff] to-[#5ce1e6] hover:bg-gradient-to-tr hover:from-[#8c52ff] hover:to-[#5ce1e6] text-white font-semibold max-w-md transition-colors">
                {t('slug', 'button')}
            </Button>
            <div className="relative w-[300px] h-[200px] md:w-[600px] md:h-[400px] cursor-pointer">
                <Image src={'/404error.png'} alt="error" fill className="object-cover"></Image>
            </div>
        </section>
    )
}