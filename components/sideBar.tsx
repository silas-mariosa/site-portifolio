'use client'

import { BriefcaseBusiness, CircleFadingPlus, HouseIcon, Menu, PhoneIcon, TvMinimalPlay } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";

export default function AppSidebar() {
	const { t } = useTranslations()

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
				<Button asChild variant={"ghost"} className="hover:bg-[#151922]">
					<Menu className="text-[#5271ff] w-10 h-10 hover:text-[#cdffd8] mr-2" />
				</Button>
			</SheetTrigger>
			<SheetContent side={"left"} className="bg-[#151922] text-white w-[200px]">
				<div className="h-screen overflow-y-auto">
					<SheetHeader>
						<div className="flex flex-col items-center">
							<Image src={''} alt="Logo" width={45} />
							<h3 className={`font-bold text-lg`}>Mariosa Tech</h3>
							<div className="flex flex-col gap-2 mx-[5%]">
								{buttons.map((button) => (
									<SheetClose asChild key={button.id}>
										<Button
											variant={"default"}
											className="flex flex-row gap-2 text-white w-full justify-start">
											{button.icon}
											<a href={button.href}>{button.label}</a>
										</Button>
									</SheetClose>
								))}
							</div>
						</div>
					</SheetHeader>
				</div>
			</SheetContent>
		</Sheet>
	);
}