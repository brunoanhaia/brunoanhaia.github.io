import { UiSuspense } from './components/ui-suspense';
import { useFirebaseI18nTranslations } from './hooks/use-firebase-i18n-translations';
import { AppProvider } from './providers/app.provider';
import { router } from './router';
import { CssBaseline } from '@mui/material';
import { Await, RouterProvider } from 'react-router-dom';

const App = () => {
	const i18nLoaded = useFirebaseI18nTranslations();

	return (
		<AppProvider>
			<CssBaseline>
				<UiSuspense>
					<Await resolve={i18nLoaded}>
						<RouterProvider router={router} />
					</Await>
				</UiSuspense>
			</CssBaseline>
		</AppProvider>
	);
};

export { App };
