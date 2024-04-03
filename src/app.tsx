import './app.css';
import { useGetFirebaseTranslations } from './hooks/use-firebase';
import { router } from './router';
import { InitialLoading } from '@components/InitialLoading';
import { Box } from '@mui/material';
import { Suspense, useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';

const App = () => {
	const [, setState] = useState({});
	const translations = useGetFirebaseTranslations('pt-br');

	useEffect(() => {
		translations.then((value) => {
			setState(value);
		});
	}, [translations]);

	return (
		<Box className="App">
			<Suspense fallback={<InitialLoading />}>
				<RouterProvider router={router} />
			</Suspense>
		</Box>
	);
};

export { App };
