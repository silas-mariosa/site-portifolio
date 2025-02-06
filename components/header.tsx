'use client'

import Language from "./language";
import AppSidebar from "./sideBar";

export default function Header() {
    return (
        <>
            <div className={`fixed top-2 left-2 z-50`}>
                <AppSidebar />
            </div>
            <header className="flex flex-row justify-between items-center p-2 color-white">
                <div></div>
                <h1 className="text-white text-[30px]">Mariosa Tech</h1>
                <Language />
            </header>
        </>
    )
}