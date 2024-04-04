import './app.css';
import { useGetFirebaseTranslations } from './hooks/use-firebase';
import { AppProvider } from './providers/app.provider';
import { router } from './router';
import { UiInitialLoading } from '@components/ui-initial-loading';
import { Box, CssBaseline } from '@mui/material';
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
		<AppProvider>
			<CssBaseline>
				<Box>
					<Suspense fallback={<UiInitialLoading />}>
						<RouterProvider router={router} />
					</Suspense>
				</Box>
			</CssBaseline>
		</AppProvider>
	);
};

export { App };
