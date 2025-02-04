'use client'

import { ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import Image from "next/image"

const portifolio = [
	{
		id: Math.random(),
		title: "Projeto 1",
		description: "Descrição do projeto 1",
		image: "/notebook.png",
		abount: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nunc, vitae aliquam nisl nisl vitae nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nunc, vitae aliquam nisl nisl vitae nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nunc, vitae aliquam nisl nisl vitae nisl."
	},
	{
		id: Math.random(),
		title: "Projeto 2",
		description: "Descrição do projeto 2",
		image: "/notebook.png",
		abount: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nunc, vitae aliquam nisl nisl vitae nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nunc, vitae aliquam nisl nisl vitae nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nunc, vitae aliquam nisl nisl vitae nisl."
	},
	{
		id: Math.random(),
		title: "Projeto 3",
		description: "Descrição do projeto 3",
		image: "/notebook.png",
		abount: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nunc, vitae aliquam nisl nisl vitae nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nunc, vitae aliquam nisl nisl vitae nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nunc, vitae aliquam nisl nisl vitae nisl."
	}
]

export default function Portifolios() {
	return (
		<section id='portifolios' className="flex flex-col gap-4 mx-[5%] sm:mx-[20%] text-white mb-[5%]">
			<div className="flex justify-center items-center mb-4">
				<h2 className="text-center text-2x1 sm:text-[48px] max-w-md font-bold leading-tight">Construindo projetos para impactar</h2>
			</div>
			<div className="flex flex-col gap-8">
				{portifolio.map((portifolio) => (
					<Card key={portifolio.id} className="flex flex-col xl:flex-row justify-between items-center bg-[#151922] border-[#151922] sm:m-2 p-6 xl:pl-0 xl:pb-0 sm:pt-6 sm:pr-6 gap-4">
						<div className="px-8 pb-4 bg-gradient-to-r from-[#cdffd8] to-[#94b9ff] rounded-xl">
							<div className="relative w-[225px] h-[150px]  sm:w-[280px] sm:h-[196px] md:w-[320px] md:h-[224px]">
								<Image src={portifolio.image} alt="Notebook" fill className="-mt-6 object-cover"></Image>
							</div>
						</div>
						<div className="flex flex-col justify-center items-center gap-2 text-white max-w-xl">
							<h3 className="text-5xl font-semibold">{portifolio.title}</h3>
							<p className="font-semibold text-[#5271ff] text-lg">{portifolio.description}</p>
							<p className="text-sm">{portifolio.abount}</p>
							<div className="flex flex-row justify-end items-center mt-2">
								<Button className="bg-[#5271ff] hover:bg-gradient-to-r from-[#cdffd8] to-[#94b9ff] hover:text-[#5271ff] text-white font-light px-8 py-2 hover- rounded-lg">Ver mais</Button>
							</div>
						</div>
					</Card>
				))}
			</div>
			<div className="grid justify-items-end">
				<Button variant={"ghost"} className="text-[#5271ff] rounded-none p-0 text-3xl hover:bg-[#07090e] hover:text-[#5271ff] pb-4 hover:border-b-4 border-b-[#5271ff]">Portifólio<ChevronRight className="w-4 h-4" /></Button>
			</div>
		</section>
	)
}