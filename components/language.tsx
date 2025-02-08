'use client'

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { Button } from "./ui/button";

const languages = [
    {
        name: "pt-br",
        image: "/brasil.ico",
        alt: "brasil"
    },
    {
        name: "en",
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
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex flex-row gap-4 p-1">
            {languages.map((lang) => (
                <Button
                    className={`cursor-pointer p-1 ${lang.name === language ? "bg-gradient-to-r from-[#cdffd8] to-[#94b9ff]" : "bg-[#151922]"} hover:bg-[#07090e]`}
                    key={lang.name}
                    variant={"ghost"}
                    onClick={() => {
                        setLanguage(lang.name);
                    }}
                >
                    <Image src={lang.image} alt={lang.alt} width={25} height={25} />
                </Button>
            ))}
        </div>
    );
}