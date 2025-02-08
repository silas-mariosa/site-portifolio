'use client'

import { useTranslations } from "@/hooks/useTranslations"
import Image from "next/image"

export default function Expertise() {
	const { t } = useTranslations()

	const Expertises = [
		{
			id: Math.random(),
			name: t('expertise', 'name'),
			spanName: t('expertise', 'spanName'),
			icon: "/plus.png",
			alt: "plus"
		},
		{
			id: Math.random(),
			name: t('expertise', 'ads'),
			spanName: "",
			icon: "/marketing.png",
			alt: "marketing"
		},
		{
			id: Math.random(),
			name: t('expertise', 'webDesign'),
			spanName: "",
			icon: "/design.png",
			alt: "design"
		},
		{
			id: Math.random(),
			name: "Next.js",
			spanName: "",
			icon: "/next.png",
			alt: "next"
		},
		{
			id: Math.random(),
			name: "React.js",
			spanName: "",
			icon: "/react.png",
			alt: "react"
		},
		{
			id: Math.random(),
			name: "Dev SaaS",
			spanName: "",
			icon: "/saas.png",
			alt: "saas"
		}
	]

	return (
		<section className="flex flex-col gap-6 justify-center items-center mb-[5%]">
			<h3 className="text-white text-center text-[28px] sm:text-[32px] md:text-[48px] px-4 font-bold my-10 sm:my-0">{t('expertise', 'developer')}</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-4">
				{Expertises.map((expertise) => (
					<div key={expertise.id} className="flex flex-row gap-4 mb-6">
						<div>
							<Image src={expertise.icon} alt={expertise.alt} width={42} height={42} />
						</div>
						<div className="flex flex-col">
							<p className="text-white text-[36px]">{expertise.name}</p>
							{expertise.spanName !== "" && (
								<span className="text-[#5271ff] text-[16px]">{expertise.spanName}</span>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}