'use client'

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import Image from "next/image";

export default function AppSidebar() {
	return (
		<Sheet >
			<SheetTrigger asChild className="p-0 m-0 border-none">
				<Button asChild variant={"ghost"}>
					<Menu className="text-white w-10 h-10 mr-2" />
				</Button>
			</SheetTrigger>
			<SheetContent side={"left"} className="">
				<div className="h-screen overflow-y-auto">
					<SheetHeader>
						<div className="flex relative items-center mx-3.5 py-4 px-3.5">
							<Image src={''} alt="Logo" width={45}></Image>
							<h3 className={`pl-2 font-bold text-lg`}>Mariosa Tech</h3>
						</div>
					</SheetHeader>
				</div>
			</SheetContent>
		</Sheet>
	);
}