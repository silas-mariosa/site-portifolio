'use client'

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";

import { Card } from "./ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Textarea } from "./ui/textarea";
import { formatarNumeroCelular } from "@/hooks/formater";
import SendEmail from "@/hooks/sendEmail";
import { LoaderCircle } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

type FormFieldType = {
	id: string;
	label: string;
	type: string;
	placeholder?: string;
}

export default function Contato() {
	const { t } = useTranslations()

	const formSchema = z.object({
		name: z.string().min(2, {
			message: t('contact', 'formName'),
		}),
		nameEmpresa: z.string().min(2, {
			message: t('contact', 'formEmpresa'),
		}),
		email: z.string().email({
			message: t('contact', 'formEmail'),
		}),
		telefone: z.string().min(15, {
			message: t('contact', 'formPhone'),
		}),
		checkBox: z.boolean().default(false),
		description: z.string().optional(),
		term: z.boolean().refine((value) => value === true, {
			message: t('contact', 'formTerm'),
		})
	});


	type FormSchema = z.infer<typeof formSchema>

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

	const formField: FormFieldType[] = [
		{
			id: "name",
			label: t('contact', 'Name'),
			type: "text",
			placeholder: t('contact', 'NamePlaceHolder'),
		},
		{
			id: "nameEmpresa",
			label: t('contact', 'NameCompany'),
			type: "text",
			placeholder: t('contact', 'NameCompanyPlaceHolder'),
		},
		{
			id: "email",
			label: t('contact', 'Email'),
			type: "email",
			placeholder: t('contact', 'EmailPlaceHolder'),
		},
		{
			id: "telefone",
			label: t('contact', 'Phone'),
			type: "text",
			placeholder: t('contact', 'PhonePlaceHolder'),
		},
		{
			id: "checkBox",
			label: t('contact', 'CheckBox'),
			type: "checkbox",
		},
		{
			id: "description",
			label: t('contact', 'Description'),
			type: "text",
			placeholder: t('contact', 'DescriptionPlaceHolder'),
		},
		{
			id: "term",
			label: t('contact', 'CheckBoxTerm'),
			type: "checkbox",
		}
	]

	function onSubmit(data: FormSchema) {
		onSubmitContato(data)
		sucesso && form.reset()
	}
	return (
		<section id='contato' className="flex flex-col sm:flex-row justify-center items-start gap-10 p-10">
			<div className="text-white max-w-xs">
				<h2 className="text-[36px] font-bold mb-5 leading-10">{t('contact', 'ContatoTitle')}</h2>
				<p className="text-md font-medium leading-5">
					{t('contact', 'ContatoAbout')}
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
												<Textarea
													lassName="bg-[#d9d9d9] text-[#151922] font-medium min-h-[120px]"
													placeholder={placeholder}
													{...field} />
											) : (
												id === "telefone" ?
													<Input
														className="bg-[#d9d9d9] text-[#151922] font-medium"
														type={type}
														placeholder={placeholder}
														{...field}
														onChange={(e) => {
															let numeroFormatado = e.target.value;
															numeroFormatado = formatarNumeroCelular(
																e.target.value
															);
															field.onChange(numeroFormatado);
														}}
													/>
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
										{t('contact', 'Sending')}
									</div>
								) : (
									<div className="flex items-center justify-center">
										{t('contact', 'Send')}
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