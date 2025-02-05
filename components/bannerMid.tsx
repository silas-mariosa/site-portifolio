'use client'

import Image from 'next/image'
import { useTranslations } from '@/hooks/useTranslations'

export default function BannerMid() {
	const { t } = useTranslations()
	return (
		<section className="flex flex-col xl:flex-row justify-center items-center p-2 text-white mx-[5%] sm:mx-[20%] my-[10%]">
			<div className='mb-10 xl:mb-0 mr-10 max-w-xl'>
				<Image
					src="/perfil.png"
					alt="Silas Mariosa"
					width={300}
					height={300}
				></Image>
			</div>
			<div className='flex flex-col max-w-lg gap-2'>
				<h1 className='font-bold text-4xl'>{t('bannerMid', 'title')}</h1>
				<h3 className='font-semibold text-[#a6a6a6]'>{t('bannerMid', 'description')}</h3>
				<p>
					{t('bannerMid', 'text')}
				</p>
			</div>
		</section>
	)
}