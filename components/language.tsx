'use client'

import Image from "next/image";

const languages = [
    {
        name: "pt-br",
        image: "/brasil.ico",
        alt: "brasil"
    },
    {
        name: "en-us",
        image: "/usa.ico",
        alt: "americano"
    },
    {
        name: "it-it",
        image: "/italia.ico",
        alt: "italiano"
    }
];

export default function Language() {
    return (
        <div className="flex flex-row gap-2 p-1">
            {languages.map((lang) => (
                <a className="cursor-pointer" key={lang.name}>
                    <Image src={lang.image} alt={lang.alt} width={25} height={25} />
                </a>
            ))}
        </div>
    );
}