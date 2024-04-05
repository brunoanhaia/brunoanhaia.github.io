import { App } from './app';
import './i18n';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';

const rootElement = document.getElementById('root');

const renderFn = () => {
	if (!rootElement) {
		return;
	}

	const root = createRoot(rootElement);

	root.render(
		<RecoilRoot>
			<StrictMode>
				<App />
			</StrictMode>
		</RecoilRoot>
	);
};

renderFn();
