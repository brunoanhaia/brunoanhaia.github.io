import { getFirebaseTranslations } from './use-firebase';
import { i18nextInit } from '@src/i18n';
import { useMemo } from 'react';

const useFirebaseI18nTranslations = (lang: string = 'en') => {
	return useMemo(() => {
		const translationsPromise = getFirebaseTranslations(lang);

		return new Promise((resolve, reject) => {
			translationsPromise
				.then(({ tokens }) => tokens)
				.then(i18nextInit)
				.then(() => resolve(true))
				.catch(() => reject(new Error('Something went wrong')));
		});
	}, [lang]);
};

export { useFirebaseI18nTranslations };
