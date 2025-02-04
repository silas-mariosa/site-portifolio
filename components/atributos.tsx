'use client'

import { PanelsTopLeft, Store, Code, HandHelping } from 'lucide-react'

const atributos = [
	{
		icone: PanelsTopLeft,
		nome: 'Design',
		descricao: 'Oferecemos soluções completas de design para empresas em todos os seus estágios. Nossas entregas vão da concepção da marca à criação de interfaces com design estratégico de serviços e produtos digitais focados na experiência do usuário.'
	},
	{
		icone: Store,
		nome: 'Marketing Digital',
		descricao: 'Na consultoria em transformação digital, sempre tratamos tecnologia e usabilidade como negócio. Desenvolvemos e orientamos estratégias digitais com metodologia para transformar a realidade das empresas.'
	},
	{
		icone: Code,
		nome: 'Desenvolvimento',
		descricao: 'Oferecemos soluções completas de design para empresas em todos os seus estágios. Nossas entregas vão da concepção da marca à criação de interfaces com design estratégico de serviços e produtos digitais focados na experiência do usuário.'
	},
	{
		icone: HandHelping,
		nome: 'Manutenção',
		descricao: 'Garantimos a performance e a confiabilidade dos seus ativos online por meio de manutenção contínua, para que você possa focar no crescimento do seu negócio.'
	}
]

export default function Atributos() {
	return (
		<section id='atributos' className="grid grid-cols-1 xl:grid-cols-2 gap-4 my-[10%] mx-[5%] sm:mx-[20%]">
			{atributos.map((atributo, index) => (
				<div key={index} className="flex flex-row mx-6 my-4">
					<div>
						<atributo.icone className="w-10 h-10 text-[#004aad]" />
					</div>
					<div className='flex flex-col text-white ml-2'>
						<h3 className="text-[18px] md:text-[32px] font-bold">{atributo.nome}</h3>
						<p className="text-[14px] sm:text-[18px] text-left font-medium mt-4">{atributo.descricao}</p>
					</div>
				</div>
			))}
		</section>
	);
}   