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
        <section className="flex flex-col gap-4 mx-[5%] sm:mx-[20%] text-white mb-[5%]">
            <div className="flex justify-center items-center mb-4">
                <h2 className="text-center text-2x1 sm:text-[48px] max-w-md font-bold leading-tight">Construindo projetos para impactar</h2>
            </div>
            <div className="flex flex-col gap-8">
                {portifolio.map((portifolio) => (
                    <Card key={portifolio.id} className="flex flex-row justify-between items-center bg-[#151922] border-[#151922] pt-6 pr-6 gap-4">
                        <div className="px-8 pb-4 bg-gradient-to-r from-[#cdffd8] to-[#94b9ff] rounded-xl">
                            <div className="relative w-[400px] h-[280px]">
                                <Image src={portifolio.image} alt="Notebook" fill className="-mt-6 object-cover"></Image>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 text-white max-w-xl">
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
                <Button variant={"ghost"} className="text-[28px] text-[#5271ff] hover:text-white font-light py-2 hover:bg-[#07090e]">Portifólio<ChevronRight className="w-4 h-4" /></Button>
            </div>
        </section>
    )
}