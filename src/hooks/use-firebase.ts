import { I18nTokenFormat } from '@src/types/i18n.types';
import { getApps, initializeApp } from 'firebase/app';
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const firestore = getFirestore(app);

const useFirebase = () => {
	return {
		firestore,
	};
};

const getFirebaseTranslations = async (lang: string) => {
	const collectionRef = collection(firestore, 'translations');
	const langDoc = await getDoc(doc(collectionRef, lang));

	return langDoc.data() as { tokens: I18nTokenFormat };
};

export { useFirebase, getFirebaseTranslations, getFirebaseTranslations as useGetFirebaseTranslations };

