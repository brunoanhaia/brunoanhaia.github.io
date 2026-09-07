import { createBrowserRouter } from 'react-router-dom';

const routes = [
	{
		path: '/',
		lazy: () => import('@src/pages/home').then((m) => ({ Component: m.HomePage })),
	},
	{
		path: '*',
		lazy: () => import('@src/pages/home').then((m) => ({ Component: m.HomePage })),
	},
];

const router = createBrowserRouter(routes);

export { router, routes };
