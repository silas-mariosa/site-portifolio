'use client'

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";

import { Card } from "./ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Textarea } from "./ui/textarea";
import { formatarNumeroCelular } from "@/hooks/formater";
import SendEmail from "@/hooks/sendEmail";
import { LoaderCircle } from "lucide-react";

const formSchema = z.object({
	name: z.string().min(2, {
		message: "Nome precisa ter no mínimo 2 caracteres.",
	}),
	nameEmpresa: z.string().min(2, {
		message: "Nome da empresa precisa ter no mínimo 2 caracteres.",
	}),
	email: z.string().email({
		message: "Email inválido.",
	}),
	telefone: z.string().min(15, {
		message: "Telefone precisa ter no mínimo 11 caracteres.",
	}),
	checkBox: z.boolean().default(false),
	description: z.string().optional(),
	term: z.boolean().refine((value) => value === true, {
		message: "Você precisa aceitar os termos de uso.",
	})
});

export type FormSchema = z.infer<typeof formSchema>
type FormFieldType = {
	id: string;
	label: string;
	type: string;
	placeholder?: string;
}


const formField: FormFieldType[] = [
	{
		id: "name",
		label: "Nome",
		type: "text",
		placeholder: "Digite seu nome",
	},
	{
		id: "nameEmpresa",
		label: "Nome da empresa",
		type: "text",
		placeholder: "Digite o nome da empresa",
	},
	{
		id: "email",
		label: "Email",
		type: "email",
		placeholder: "Digite seu email",
	},
	{
		id: "telefone",
		label: "Telefone",
		type: "text",
		placeholder: "Digite seu telefone",
	},
	{
		id: "checkBox",
		label: "Este número também é o meu Whatsapp",
		type: "checkbox",
	},
	{
		id: "description",
		label: "Conte sobre o seu desafio de negócio:",
		type: "text",
		placeholder: "Descreva os principais desafios do seu negócio ou projeto e como podemos ajudar.",
	},
	{
		id: "term",
		label: "Li e estou de acordo com as políticas de privacidade do site",
		type: "checkbox",
	}
]

export default function Contato() {
	const { isLoading, onSubmitContato, sucesso } = SendEmail()
	const form = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			nameEmpresa: "",
			email: "",
			telefone: "",
			checkBox: false,
			description: "",
			term: false,
		},
	})

	function onSubmit(data: FormSchema) {
		onSubmitContato(data)
		console.log('Sucesso: ', sucesso)
		console.log('isLoading: ', isLoading)
		sucesso && form.reset()
	}
	return (
		<section className="flex flex-col sm:flex-row justify-center items-start gap-10 p-10">
			<div className="text-white max-w-xs">
				<h2 className="text-[36px] font-bold mb-5 leading-10">Vamos desenvolver o seu projeto?</h2>
				<p className="text-md font-medium leading-5">
					Conte um pouco mais sobre o seu projeto para que possamos encontrar a melhor solução e agendarmos uma conversa mais aprofundada.
				</p>
			</div>
			<Card className="p-5 bg-[#151922]">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
						{formField.map(({ id, type, label, placeholder }) => (
							<FormField
								key={id}
								control={form.control}
								name={id}
								render={({ field }) => (
									<FormItem>
										{type === "checkbox" ? null : <FormLabel className="text-white font-semibold">{label}</FormLabel>}
										<FormControl>
											{type === "checkbox" ? (
												<div className="flex items-center space-x-2">
													<Checkbox
														className="border-[#5271ff]"
														onCheckedChange={field.onChange}
													/>
													<div className="space-y-1 leading-none">
														<FormLabel className="text-white font-semibold">{label}</FormLabel>
													</div>
												</div>
											) : type === "description" ? (
												<Textarea className="bg-[#d9d9d9] text-[#151922] font-medium min-h-[120px]" placeholder={placeholder} {...field} />
											) : (
												id === "telefone" ?
													<Input className="bg-[#d9d9d9] text-[#151922] font-medium" type={type} placeholder={placeholder} {...field}
														onChange={(e) => {
															let numeroFormatado = e.target.value;
															numeroFormatado = formatarNumeroCelular(
																e.target.value
															);
															field.onChange(numeroFormatado);
														}} />
													:
													<Input className="bg-[#d9d9d9] text-[#151922] font-medium" type={type} placeholder={placeholder} {...field} />
											)}
										</FormControl>
										<FormMessage className="text-red-500 text-xs" />
									</FormItem>
								)}
							/>
						))}
						<div className="flex justify-center items-center mx-12">
							<Button
								className="bg-gradient-to-r from-[#8c52ff] to-[#5ce1e6] hover:bg-gradient-to-tr hover:from-[#8c52ff] hover:to-[#5ce1e6] text-white font-semibold w-full"
								type="submit"
							>
								{isLoading ? (
									<div className="flex items-center justify-center">
										<LoaderCircle className="h-4 w-4 mr-2" />
										Enviando...
									</div>
								) : (
									<div className="flex items-center justify-center">
										Enviar
									</div>
								)}
							</Button>
						</div>
					</form>
				</Form>
			</Card>
		</section>
	);
}