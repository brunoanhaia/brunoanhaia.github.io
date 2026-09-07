import { App } from './app';
import './i18n';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/jetbrains-mono/400.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');

const renderFn = () => {
	if (!rootElement) {
		return;
	}

	const root = createRoot(rootElement);

	root.render(
		<StrictMode>
			<App />
		</StrictMode>
	);
};

renderFn();
