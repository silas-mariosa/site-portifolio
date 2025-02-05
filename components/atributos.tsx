'use client'

import { PanelsTopLeft, Store, Code, HandHelping } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'

export default function Atributos() {
	const { t } = useTranslations()

	const atributos = [
		{
			icone: PanelsTopLeft,
			nome: t('AtributosComponent', 'nomeDesign'),
			descricao: t('AtributosComponent', 'describeDesign')
		},
		{
			icone: Store,
			nome: t('AtributosComponent', 'nomeMarketing'),
			descricao: t('AtributosComponent', 'describeMarketing')
		},
		{
			icone: Code,
			nome: t('AtributosComponent', 'nomeDevelopment'),
			descricao: t('AtributosComponent', 'describeDevelopment')
		},
		{
			icone: HandHelping,
			nome: t('AtributosComponent', 'nomeMaintenance'),
			descricao: t('AtributosComponent', 'describeMaintenance')
		}
	]

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