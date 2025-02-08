'use client'

import Portifolios from "@/components/portifolios"
import { useTranslations } from "@/hooks/useTranslations"
import { useRouter } from "next/navigation"
import portifolio from "@/lib/portifolios.json"


export default function Portifolio() {
    const { t } = useTranslations()

    return (
        <section className="text-white">
            <div className="flex flex-col p-2 text-white mx-[5%] md:mx-[10%] xl:mx-[25%] my-5 gap-4">
                <div className="flex flex-col justify-center items-center gap-2">
                    <h1 className="text-center text-4xl font-bold uppercase">{t('portifolioPage', 'Title')}</h1>
                    <h2 className="text-4xl text-[#5271ff] font-light">MARIOSA TECH</h2>
                </div>
                <p className="text-md">
                    {t('portifolioPage', 'texto1')}
                </p>
                <p>
                    {t('portifolioPage', 'texto2')}
                </p>
            </div>
            <Portifolios data={portifolio} isHome={false} />
        </section>
    )
}