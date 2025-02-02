import { FormSchema } from "@/components/contato";
import { useState } from "react";
import { toast } from "./use-toast";
import { set } from "zod";


export default function SendEmail() {
    const [isLoading, setIsLoading] = useState(false);
    const [sucesso, setSucesso] = useState(false);

    const onSubmitContato = async (formData: FormSchema) => {
        setIsLoading(true);
        setSucesso(false);
        const anyInputFilled = Object.values(formData).some(
            (value) => value !== ""
        );

        if (!anyInputFilled) {
            toast({
                title: "Erro",
                description: "Por favor, preencha os campos.",
                variant: "destructive",
            });
            return;
        }
        try {
            setIsLoading(true);
            const response1 = await fetch("https://formsubmit.co/ajax/siloks.developer@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response1.ok) {
                toast({
                    title: "Sucesso!",
                    description: "Solicitação enviada com sucesso!",
                });
                setIsLoading(false);
                setSucesso(true);

            } else {
                toast({
                    title: "Erro",
                    description: "Erro ao enviar formulário.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            console.error("Erro no envio do formulário:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        onSubmitContato,
        isLoading,
        sucesso
    };
}