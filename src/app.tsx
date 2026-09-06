import { UiSuspense } from './components/ui-suspense';
import { useFirebaseI18nTranslations } from './hooks/use-firebase-i18n-translations';
import { AppProvider } from './providers/app.provider';
import { router } from './router';
import { CssBaseline } from '@mui/material';
import { use } from 'react';
import { RouterProvider } from 'react-router-dom';

const AppContent = ({ i18nLoaded }: { i18nLoaded: Promise<unknown> }) => {
	use(i18nLoaded);

	return <RouterProvider router={router} />;
};

const App = () => {
	const i18nLoaded = useFirebaseI18nTranslations();

	return (
		<AppProvider>
			<CssBaseline>
				<UiSuspense>
					<AppContent i18nLoaded={i18nLoaded} />
				</UiSuspense>
			</CssBaseline>
		</AppProvider>
	);
};

export { App };
