'use client'
import Image from 'next/image'

export default function Whatsapp() {
    return (
        <a href="https://wa.me/5535997047110" className="fixed bottom-10 right-5 rounded-full p-3 text-white shadow-lg hover:bg- transition-colors duration-300">
            <div className="relative w-[45px] h-[45px] cursor-pointer">
                <Image src={'/whatsapp.png'} alt="Whatsaoo" fill className="object-cover"></Image>
            </div>
        </a>
    )
}