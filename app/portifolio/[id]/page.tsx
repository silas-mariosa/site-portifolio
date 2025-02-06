'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";


export default function Portifolio({ id }: { id: number }) {
    const pathname = useParams()
    const { push } = useRouter()

    const portifolio = [
        {
            id: 1,
            title: 'Smart Gabinete',
            brief: 'O Smart Gabinete é uma plataforma desenvolvida para otimizar a gestão diária de gabinetes parlamentares, oferecendo diversas funcionalidades integradas em um único sistema.',
            image: '/notebook.png',
            description: 'O Smart Gabinete é uma plataforma desenvolvida para otimizar a gestão diária de gabinetes parlamentares, oferecendo diversas funcionalidades integradas em um único sistema.',
            whatsDoing: 'O Smart Gabinete é uma plataforma desenvolvida para otimizar a gestão diária de gabinetes parlamentares, oferecendo diversas funcionalidades integradas em um único sistema.',
            image2: '/notebook.png',
            resume: 'Otimizamos a ferramenta de busca por meio de filtros intuitivos para melhorar a encontrabilidade das informações. Aprimoramos a usabilidade e o design visual, proporcionando aos usuários uma navegação mais intuitiva e prática.'
        },
        {
            id: 2,
            title: 'Smart Gabinete',
            brief: 'O Smart Gabinete é uma plataforma desenvolvida para otimizar a gestão diária de gabinetes parlamentares, oferecendo diversas funcionalidades integradas em um único sistema.',
            image: '/notebook.png',
            description: 'O Smart Gabinete é uma plataforma desenvolvida para otimizar a gestão diária de gabinetes parlamentares, oferecendo diversas funcionalidades integradas em um único sistema.',
            whatsDoing: 'O Smart Gabinete é uma plataforma desenvolvida para otimizar a gestão diária de gabinetes parlamentares, oferecendo diversas funcionalidades integradas em um único sistema.',
            image2: '/notebook.png',
            resume: 'lorem as'
        },
        {
            id: 3,
            title: 'Smart Gabinete',
            brief: 'O Smart Gabinete é uma plataforma desenvolvida para otimizar a gestão diária de gabinetes parlamentares, oferecendo diversas funcionalidades integradas em um único sistema.',
            image: '/notebook.png',
            description: 'O Smart Gabinete é uma plataforma desenvolvida para otimizar a gestão diária de gabinetes parlamentares, oferecendo diversas funcionalidades integradas em um único sistema.',
            whatsDoing: 'O Smart Gabinete é uma plataforma desenvolvida para otimizar a gestão diária de gabinetes parlamentares, oferecendo diversas funcionalidades integradas em um único sistema.',
            image2: '/notebook.png',
            resume: 'lorem as'
        }
    ]


    return (
        <section className="flex flex-col justify-center items-center text-[#d9d9d9]">
            <div className="flex justify-center items-center my-14">
                <h1 className="text-[48px]">SMART GABINETE</h1>
            </div>
            <div className="flex flex-col gap-10 justify-center items-center bg-[#151922] px-[20%] pb-16">
                <div className="flex flex-row gap-20 justify-center items-center py-16">
                    <div className="relative w-[225px] h-[150px] sm:w-[320px] sm:h-[216px] md:w-[320px] md:h-[224px]">
                        <Image src={'/notebook.png'} alt="Notebook" fill className="object-cover"></Image>
                    </div>
                    <p className="text-lg max-w-xs">O Smart Gabinete é uma plataforma desenvolvida para otimizar a gestão diária de gabinetes parlamentares, oferecendo diversas funcionalidades integradas em um único sistema.</p>
                </div>
                <div className="grid grid-cols-3 gap-5 justify-center items-stretch">
                    <div className="col-span-1 flex flex-col justify-between h-full">
                        <div className="flex flex-col gap-5 justify-center items-center border-2 border-[#8c52ff] rounded-xl p-8 mb-5 h-full">
                            <h2 className="text-[32px] text-white font-bold">Desafio</h2>
                            <p>
                                O Smart Gabinete é uma plataforma desenvolvida para otimizar a gestão diária de gabinetes parlamentares, oferecendo diversas funcionalidades integradas em um único sistema.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-[#8c52ff] to-[#5ce1e6] rounded-xl p-5"></div>
                    </div>

                    <div className="relative col-span-2 border-2 border-[#5ce1e6] rounded-md p-5 flex flex-col h-full">
                        <div className="flex flex-col gap-5 justify-center items-start h-full px-5">
                            <h3 className="text-[32px] text-white font-bold">O que foi feito</h3>
                            <div>
                                O Smart Gabinete é uma plataforma desenvolvida para otimizar a gestão diária de gabinetes parlamentares, oferecendo diversas funcionalidades integradas em um único sistema.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5 justify-center items-stretch">
                    <div className="relative col-span-2 border-2 border-[#5ce1e6] rounded-md p-5 flex flex-col h-full">
                        <div className="flex flex-col gap-5 justify-center items-start h-full py-10 px-5">
                            <h3 className="text-[32px] text-white font-bold">O que foi feito</h3>
                            <div>
                                O Smart Gabinete é uma plataforma desenvolvida para otimizar a gestão diária de gabinetes parlamentares, oferecendo diversas funcionalidades integradas em um único sistema.
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col justify-between h-full">
                        <div className="bg-gradient-to-l from-[#8c52ff] to-[#5ce1e6] rounded-xl h-full"></div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center my-[5%] w-full">
                <div className="flex justify-center px-[20%] py-20 bg-gradient-to-l from-[#8c52ff] to-[#5ce1e6]  rounded-xl">
                    <div className="relative w-[225px] h-[150px] sm:w-[500px] sm:h-[350px] md:w-[320px] md:h-[224px]">
                        <Image src={'/notebook.png'} alt="Notebook" fill className="object-cover"></Image>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-10 justify-center items-center bg-[#151922] w-full p-10">
                <h3 className="text-[36px] text-white font-bold">Resultados</h3>
                <p className="max-w-xl">O novo design, aliado a uma estratégia de conteúdo eficiente, ajudou a aumentar a visibilidade da Belotur nas buscas online. Otimizamos a ferramenta de busca por meio de filtros intuitivos para melhorar a encontrabilidade das informações. Aprimoramos a usabilidade e o design visual, proporcionando aos usuários uma navegação mais intuitiva e prática.</p>
            </div>
            <div className="flex my-[5%] w-full flex-col sm:flex-row justify-center items-start gap-10 p-10">
                <div className="text-white max-w-xs">
                    <h3 className="text-[36px] font-bold mb-5 leading-10">Vamos desenvolver o seu projeto?</h3>
                </div>
                <div className="flex flex-col gap-5 max-w-xs">
                    <p>Conte um pouco mais sobre o seu projeto para que possamos encontrar a melhor solução e agendarmos uma conversa mais aprofundada.</p>
                    <Button
                        className="bg-gradient-to-r from-[#8c52ff] to-[#5ce1e6] hover:bg-gradient-to-tr hover:from-[#8c52ff] hover:to-[#5ce1e6] text-white font-semibold w-full"
                        onClick={() => { push('/contato') }}
                    >
                        Enviar Solicitação
                    </Button>
                </div>
            </div>
        </section>
    )
}