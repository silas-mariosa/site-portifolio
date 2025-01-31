'use client'

import exp from "constants"

const Expertises = [
	{
		id: Math.random(),
		name: "4 ANOS",
		spanName: "de experiência",
		icon: "/plus.png",
		alt: "plus"
	},
	{
		id: Math.random(),
		name: "Ads",
		spanName: "",
		icon: "/marketing.png",
		alt: "marketing"
	},
	{
		id: Math.random(),
		name: "Web Design",
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

export default function Expertise() {
	return (
		<section className="flex flex-col gap-6 justify-center items-center mb-[5%]">
			<h3 className="text-white text-center text-[28px] sm:text-[32px] md:text-[48px] px-4 font-bold my-10 sm:my-0">DESENVOLVEDOR FULL STACK</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-4">
				{Expertises.map((expertise) => (
					<div key={expertise.id} className="flex flex-row gap-4 mb-6">
						<div>
							<img src={expertise.icon} alt={expertise.alt} className="w-12 h-12" />
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