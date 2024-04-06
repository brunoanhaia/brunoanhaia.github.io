import { I18nTokenFormat } from './types/i18n.types';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const i18nextInit = (translation: I18nTokenFormat) => {
	return i18n.use(initReactI18next).init({
		returnObjects: true,
		resources: {
			en: {
				translation,
			},
		},
		lng: 'en',
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
	});
};

export { i18nextInit };
