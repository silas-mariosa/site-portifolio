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
        <div className="flex flex-row gap-2 p-1">
            {languages.map((lang) => (
                <Button
                    className="cursor-pointer"
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