import { useLanguage } from "@/context/LanguageContext";
import translations from "@/lib/texts.json";

// Tipagem para os idiomas suportados
type SupportedLanguages = "en" | "it-it" | "pt-br";

// Tipagem para o JSON de traduções
type TranslationsType = {
  [section: string]: {
    [key: string]: {
      [lang in SupportedLanguages]: string;
    };
  };
};

// Convertendo o JSON para o tipo definido
const typedTranslations: TranslationsType = translations;

export const useTranslations = () => {
  const { language } = useLanguage();

  const t = (section: string, key: string) => {
    return (
      typedTranslations[section]?.[key]?.[language as SupportedLanguages] || ""
    );
  };

  return { t };
};
