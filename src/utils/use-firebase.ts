import { initializeApp } from 'firebase/app';
import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from 'firebase/firestore';
import { useMemo } from 'react';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const useFirebase = () => {
	initializeApp(firebaseConfig);

	const firestore = useMemo(() => getFirestore(), []);

	return {
		firestore,
	};
};

const useGetFirebaseTranslations = async (lang: string) => {
	const { firestore } = useFirebase();

	const collectionRef = useMemo(
		() => collection(firestore, 'translations'),
		[firestore]
	);

	const tokens = useMemo(async () => {
		const q = query(collectionRef, where('lang', '==', lang));
		const translations = await getDocs(q);
		const tokens = await getDocs(
			collection(translations.docs[0].ref, 'tokens')
		);

		return tokens.docs.map((doc) => doc.data());
	}, [collectionRef, lang]);

	return tokens;
};

export { useFirebase, useGetFirebaseTranslations };
