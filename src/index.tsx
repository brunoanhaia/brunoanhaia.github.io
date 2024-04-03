import { App } from './app';
import './i18n';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

const rootElement = document.getElementById('root');

const renderFn = () => {
	if (!rootElement) {
		return;
	}

	const root = ReactDOM.createRoot(rootElement);

	root.render(
		<RecoilRoot>
			<React.StrictMode>
				<CssBaseline>
					<App />
				</CssBaseline>
			</React.StrictMode>
		</RecoilRoot>
	);
};

renderFn();
