'use client'

import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/useTranslations";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";


export default function Portifolio() {
	const id = useParams().id
	console.log('ID', id)
	const { push } = useRouter()
	const { t } = useTranslations()

	const portifolioData = [
		{
			id: 1,
			image: '/smartGabinete.png',
			translate: 'smartGabinete',
			image2: '/smartGrabinetePack.png',
			link: 'https://www.smartgabinete.com.br/'
		},
		{
			id: 2,
			image: '/centercar.png',
			translate: 'centercar',
			image2: '/centercarPack.png',
			link: 'https://www.centercar.com.br/'
		},
		{
			id: 3,
			image: '/economizatudo.png',
			translate: 'economizatudo',
			image2: '/economizatudoPack.png',
			link: 'https://www.economizatudo.com.br/'
		},
		{
			id: 4,
			image: '/cometa.png',
			translate: 'cometa',
			image2: '/cometaPack.png',
			link: 'https://projetocometa.vercel.app/'
		},
		{
			id: 5,
			image: '/coompa.png',
			translate: 'coompa',
			image2: '/coompaPack.png',
			link: 'https://coompa.com.br/'
		},
		{
			id: 6,
			image: '/PrimeWoodGlass.png',
			translate: 'primewoodglass',
			image2: '/PrimeWoodGlassTelas.png',
			link: 'https://www.primewoodglass.com/'
		},
		{
			id: 7,
			image: '/aluminobre.png',
			translate: 'aluminobre',
			image2: '/aluminobrePack.png',
			link: 'https://www.aluminobre.com.br/'
		},
		{
			id: 8,
			image: '/farmaco.png',
			translate: 'farmaco',
			image2: '/farmacoPack.png',
			link: 'https://farmaco.io/'
		},
		{
			id: 9,
			image: '/notebook puro sabor.png',
			translate: 'puroSabor',
			image2: '/computador puro sabor.png',
			link: 'https://purosaborconfeitaria.com/'
		},
		{
			id: 10,
			image: '/celular.png',
			translate: 'balaiocriativos',
			image2: '/telas celulares.png',
			link: 'https://www.balaiocriativos.com.br/'
		},
	]

	const filteredPortifolio = portifolioData.filter((portifolio) => portifolio.id === Number(id))

	if (!filteredPortifolio || filteredPortifolio.length === 0) {
		return (
			<div className="flex flex-col justify-center items-center">
				<h1 className="font-bold text-[28px] md:text-[36px] xl:text-[48px]">{t(`Portifolio`, 'notFound')}</h1>
				<Button
					className="bg-gradient-to-r from-[#8c52ff] to-[#5ce1e6] hover:bg-gradient-to-tr hover:from-[#8c52ff] hover:to-[#5ce1e6] text-white font-semibold w-full"
					onClick={() => { push('/portifolio') }}
				>
					{t(`Portifolio`, 'backToPortifolio')}
				</Button>
			</div>
		)
	}

	const portifolio = filteredPortifolio[0]

	if (!portifolio) {
		throw new Error('Portifolio not found')
	}

	return (
		<>
			{filteredPortifolio.map((portifolio) => (
				<section key={portifolio.id} className="flex flex-col justify-center items-center text-[#d9d9d9]">
					<div className="flex flex-col justify-center items-center my-14">
						<h1 className="font-bold text-[28px] md:text-[36px] xl:text-[48px]">{t(`${portifolio.translate}`, 'title')}</h1>
						<p
							className="relative font-semibold text-[#5271ff] text-lg cursor-pointer
             after:content-[''] after:absolute after:left-0 after:bottom-0
             after:w-0 after:h-[3px] after:bg-[#5271ff]
             after:transition-all after:duration-300 hover:after:w-full"
							onClick={() => push(portifolio.link)}
						>
							Acessar o site
						</p>
					</div>
					<div className="flex flex-col gap-10 justify-center items-center bg-[#151922] px-[5%] md:px-[10%] xl:px-[20%] pb-16">
						<div className="flex flex-col lg:flex-row gap-20 justify-center items-center py-16">
							<div className="relative w-[225px] h-[150px] sm:w-[320px] sm:h-[216px] md:w-[320px] md:h-[224px]">
								<Image src={portifolio.image} alt="Notebook" fill className="object-cover"></Image>
							</div>
							<p className="text-lg max-w-md lg:max-w-xs">{t(`${portifolio.translate}`, 'description')}</p>
						</div>
						<div className="grid grid-row-1 lg:grid-cols-3 gap-5 justify-center items-stretch">
							<div className="col-span-1 flex flex-col justify-between h-full">
								<div className="flex flex-col gap-5 justify-center items-center border-2 border-[#8c52ff] rounded-xl p-8 mb-5 h-full">
									<h2 className="text-[32px] text-white font-bold">{t(`Portifolio`, 'challenge')}</h2>
									<p>
										{t(`${portifolio.translate}`, 'challenge')}
									</p>
								</div>
								<div className="bg-gradient-to-br from-[#8c52ff] to-[#5ce1e6] rounded-xl p-5"></div>
							</div>
							<div className="relative col-span-1 lg:col-span-2 border-2 border-[#5ce1e6] rounded-md p-5 flex flex-col h-full">
								<div className="flex flex-col gap-5 justify-center items-start h-full px-5">
									<h3 className="text-[32px] text-white font-bold">{t(`Portifolio`, 'whatsdone')}</h3>
									<div>
										{t(`${portifolio.translate}`, 'whatsdone')}
									</div>
								</div>
							</div>
						</div>
						<div className="grid grid-row-1 lg:grid-cols-3 gap-5 justify-center items-stretch">
							<div className="relative col-span-1 lg:col-span-2 border-2 border-[#5ce1e6] rounded-md p-5 flex flex-col h-full order-2 lg:order-1">
								<div className="flex flex-col gap-5 justify-center items-start h-full py-10 px-5">
									<h3 className="text-[32px] text-white font-bold">{t(`Portifolio`, 'solution')}</h3>
									<div>
										{t(`${portifolio.translate}`, 'solution')}
									</div>
								</div>
							</div>
							<div className="col-span-1 flex flex-col justify-between h-full order-1 lg:order-2">
								<div className="bg-gradient-to-l from-[#8c52ff] to-[#5ce1e6] rounded-xl h-full p-5"></div>
							</div>
						</div>
					</div>
					<div className="flex justify-center my-[5%] w-full">
						<div className="flex justify-center px-[5%] sm:px-[10%] lg:px-[20%] py-20 bg-gradient-to-l from-[#8c52ff] to-[#5ce1e6]  rounded-xl">
							<div className="relative w-[320px] h-[150px] sm:w-[350px] sm:h-[200px] md:w-[500px] md:h-[250px]">
								<Image src={portifolio.image2} alt="Notebook" fill className="object-cover"></Image>
							</div>
						</div>
					</div>
					{/* <div className="flex flex-col gap-10 justify-center items-center bg-[#151922] w-full p-10">
                        <h3 className="text-[36px] text-white font-bold">Resultados</h3>
                        <p className="max-w-xl">O novo design, aliado a uma estratégia de conteúdo eficiente, ajudou a aumentar a visibilidade da Belotur nas buscas online. Otimizamos a ferramenta de busca por meio de filtros intuitivos para melhorar a encontrabilidade das informações. Aprimoramos a usabilidade e o design visual, proporcionando aos usuários uma navegação mais intuitiva e prática.</p>
                    </div> */}
					<div className="flex my-[5%] w-full flex-col sm:flex-row justify-center items-start gap-10 p-10">
						<div className="text-white max-w-xs">
							<h3 className="text-[36px] font-bold mb-5 leading-10">{t(`contact`, 'goDevelopYourProject')}</h3>
						</div>
						<div className="flex flex-col gap-5 max-w-xs">
							<p>{t(`contact`, 'ContatoAbout')}</p>
							<Button
								className="bg-gradient-to-r from-[#8c52ff] to-[#5ce1e6] hover:bg-gradient-to-tr hover:from-[#8c52ff] hover:to-[#5ce1e6] text-white font-semibold w-full"
								onClick={() => { push('/contato') }}
							>
								{t(`contact`, 'sendSolicitation')}
							</Button>
						</div>
					</div>
				</section>
			))}
		</>
	)
}
