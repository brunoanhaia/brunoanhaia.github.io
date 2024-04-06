import { useGetFirebaseTranslations } from './use-firebase';
import { i18nextInit } from '@src/i18n';

const useFirebaseI18nTranslations = (lang: string = 'en') => {
	const translationsPromise = useGetFirebaseTranslations(lang);

	return new Promise((resolve, reject) => {
		translationsPromise
			.then(({ tokens }) => tokens)
			.then(i18nextInit)
			.then(() => resolve(true))
			.catch(() => reject(new Error('Something went wrong')));
	});
};

export { useFirebaseI18nTranslations };
