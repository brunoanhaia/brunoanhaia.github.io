import { UiSuspense } from './components/ui-suspense';
import { AppProvider } from './providers/app.provider';
import { router } from './router';
import { CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';

const App = () => {
	return (
		<AppProvider>
			<CssBaseline />
			<UiSuspense>
				<RouterProvider router={router} />
			</UiSuspense>
		</AppProvider>
	);
};

export { App };
