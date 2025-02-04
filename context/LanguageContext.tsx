'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

// Tipos para o contexto
interface LanguageContextProps {
    language: string;
    setLanguage: (lang: string) => void;
}

// Criando o contexto
const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// Provedor de idioma
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<string>('en'); // Idioma padrão: inglês

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Hook para acessar o contexto facilmente
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
    }
    return context;
};
