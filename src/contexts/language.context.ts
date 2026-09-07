import { createContext } from 'react';

export type SupportedLanguage = 'en' | 'pt-BR';

export type LanguageContextType = {
	language: SupportedLanguage;
	setLanguage: (lang: SupportedLanguage) => void;
	toggleLanguage: () => void;
};

export const LanguageContext = createContext<LanguageContextType>({
	language: 'en',
	setLanguage: () => {},
	toggleLanguage: () => {},
});
