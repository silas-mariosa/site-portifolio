'use client'

import { BriefcaseBusiness, CircleFadingPlus, HouseIcon, Menu, PhoneIcon, TvMinimalPlay } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";
import Language from "./language";
import { useRouter } from "next/navigation";

export default function AppSidebar() {
	const { t } = useTranslations()
	const { push } = useRouter()

	const buttons = [
		{
			id: Math.random(),
			label: t('sideBar', 'home'),
			href: "/#home",
			icon: <HouseIcon className="text-white w-10 h-10" />,
		},
		{
			id: Math.random(),
			label: t('sideBar', 'atributos'),
			href: "/#atributos",
			icon: <CircleFadingPlus className="text-white w-10 h-10" />,
		},
		{
			id: Math.random(),
			label: t('sideBar', 'portifolio'),
			href: "/#portifolios",
			icon: <BriefcaseBusiness className="text-white w-10 h-10" />,
		},
		{
			id: Math.random(),
			label: t('sideBar', 'canalYoutube'),
			href: "/#channel",
			icon: <TvMinimalPlay className="text-white w-10 h-10" />,
		},
		{
			id: Math.random(),
			label: t('sideBar', 'contact'),
			href: "/#contato",
			icon: <PhoneIcon className="text-white w-10 h-10" />,
		},
	]

	return (
		<Sheet>
			<SheetTrigger asChild className="p-0 m-0 border-none">
				<Button asChild variant={"ghost"} className="hover:bg-[#8c52ff] hover:text-white">
					<Menu className="text-[#5271ff] w-10 h-10 hover:text-[#cdffd8] mr-2" />
				</Button>
			</SheetTrigger>
			<SheetContent side={"left"} className="bg-[#151922] text-white w-[200px] border-[#8c52ff]">
				<div className="h-screen overflow-y-auto">
					<div className="flex flex-col items-center gap-6">
						<SheetClose>
							<div onClick={() => { push('/') }} className="relative w-[50px] h-[50px] cursor-pointer">
								<Image src={'/logoMariosaTech.png'} alt="Logo Mariosa Tech" fill className="object-cover"></Image>
							</div>
						</SheetClose>
						<SheetClose>
							<Language />
						</SheetClose>
						<div className="flex flex-col gap-2 mx-[5%]">
							{buttons.map((button) => (
								<SheetClose asChild key={button.id}>
									<Button
										variant={"ghost"}
										className="flex flex-row gap-2 text-white hover:text-[#8c52ff] hover:bg-[#151922] bg-[#151922] w-full justify-start border-none">
										{button.icon}
										<a href={button.href}>{button.label}</a>
									</Button>
								</SheetClose>
							))}
						</div>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}