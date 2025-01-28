'use client'

const social = [
	{
		name: "Youtube",
		link: "https://www.youtube.com/channel/UCrgLh4MaTXGJJ_KQdFOmk3w",
	},
	{
		name: "Instagram",
		link: "https://www.instagram.com/silasmv.dev/",
	},
	{
		name: "Linkedin",
		link: "https://www.linkedin.com/in/silasrmv/",
	},
]

export default function BannerTop() {
	return (
		<section className="flex flex-col justify-center items-center p-2 text-white">
			<div className="flex flex-col mx-[5%] sm:mx-[20%] mt-[10%] gap-2">
				<h1 className="text-[48px] text-start"> HUAHU AHU AHU UHAH UAHUAHU AHU AHU AHUA HUAHU HAH UAHUA UHAUHUA HUA HUA</h1>
				<div className="flex flex-row justify-start items-center gap-4 text-white">
					{
						social.map((item) => (
							<a
								key={item.name}
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								className="cursor-pointer bg-gradient-to-r from-[#8c52ff] to-[#5ce1e6] py-1 px-3 rounded-xl">
								{item.name}
							</a>
						))
					}
				</div>
			</div>
		</section>
	);
}