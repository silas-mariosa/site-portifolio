'use client'

import { useRouter } from "next/navigation";
import AppSidebar from "./sideBar";
import Image from "next/image";

export default function Header() {
    const { push } = useRouter()
    return (
        <>
            <div className={`fixed top-2 left-2 z-50`}>
                <AppSidebar />
            </div>
            <header className="flex flex-row justify-center items-center p-2 color-white">
                <div onClick={() => { push('/') }} className="relative w-[200px] h-[60px] sm:w-[250px] sm:h-[80px] cursor-pointer">
                    <Image src={'/MariosaLogoHorizontal.png'} alt="Logo Mariosa Tech" fill className="object-cover"></Image>
                </div>
            </header>
        </>
    )
}