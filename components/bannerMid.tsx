'use client'

import Image from 'next/image'

export default function BannerMid() {
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
				<h1 className='font-bold text-4xl'>Building software
					to impact the world</h1>
				<h3 className='font-semibold text-[#a6a6a6]'>Senior iOS Engineer at Riot Games (by X-Team)</h3>
				<p>
					I'm Karol Attekita, a senior software engineer with a strong passion for UX. With over 13 years of expertise in app and game development, I’m also a content creator, speaker, LinkedIn Top Voice and WTM.
				</p>
			</div>
		</section>
	)
}