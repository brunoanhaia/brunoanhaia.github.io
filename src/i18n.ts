import en from './locales/en.json';
import ptBR from './locales/pt-BR.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const getInitialLanguage = (): string => {
	if (typeof window !== 'undefined') {
		const stored = localStorage.getItem('app_language');
		if (stored === 'pt-BR' || stored === 'en') {
			return stored;
		}
		if (navigator.language.startsWith('pt')) {
			return 'pt-BR';
		}
	}
	return 'en';
};

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: en,
		},
		'pt-BR': {
			translation: ptBR,
		},
	},
	lng: getInitialLanguage(),
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
export { i18n };
