import { useState } from "react";
import { toast } from "./use-toast";
import { z } from "zod";
import { useTranslations } from "./useTranslations";

export default function useSendEmail() {
    const [isLoading, setIsLoading] = useState(false);
    const [sucesso, setSucesso] = useState(false);
    const { t } = useTranslations();

    const formSchema = z.object({
        name: z.string().min(2, { message: t("contact", "formName") }),
        nameEmpresa: z.string().min(2, { message: t("contact", "formEmpresa") }),
        email: z.string().email({ message: t("contact", "formEmail") }),
        telefone: z.string().min(15, { message: t("contact", "formPhone") }),
        checkBox: z.boolean().default(false),
        description: z.string().optional(),
        term: z.boolean().refine((value) => value === true, {
            message: t("contact", "formTerm"),
        }),
    });

    type FormSchema = z.infer<typeof formSchema>;

    const onSubmitContato = async (formData: FormSchema) => {
        try {
            setIsLoading(true);
            setSucesso(false);

            const validationResult = formSchema.safeParse(formData);
            if (!validationResult.success) {
                toast({
                    title: "Erro",
                    description: "Por favor, preencha os campos corretamente.",
                    variant: "destructive",
                });
                return;
            }

            const response = await fetch(
                "https://formsubmit.co/ajax/siloks.developer@gmail.com",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                toast({
                    title: "Sucesso!",
                    description: "Solicitação enviada com sucesso!",
                });
                setSucesso(true);
            } else {
                throw new Error("Erro ao enviar formulário.");
            }
        } catch (error: Error | any) {
            toast({
                title: "Erro",
                description: error.message || "Erro inesperado ao enviar o formulário.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return { onSubmitContato, isLoading, sucesso };
}
