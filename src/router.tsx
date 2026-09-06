import { createBrowserRouter } from 'react-router-dom';

const pageNameConstants = {
	root: '/',
	main: '/main',
	projects: '/projects',
	education: '/education',
	work: '/work',
};

const pagesMap = {
	[pageNameConstants.root]: () => import('@src/pages/root').then((m) => ({ Component: m.RootPage })),
	[pageNameConstants.main]: () => import('@src/pages/main').then((m) => ({ Component: m.MainPage })),
	[pageNameConstants.projects]: () => import('@src/pages/projects').then((m) => ({ Component: m.ProjectsPage })),
	[pageNameConstants.education]: () => import('@src/pages/education').then((m) => ({ Component: m.EducationPage })),
	[pageNameConstants.work]: () => import('@src/pages/work').then((m) => ({ Component: m.WorkPage })),
};

const routes = [
	{
		path: '/',
		lazy: pagesMap[pageNameConstants.root],
		children: [
			{
				path: '',
				lazy: pagesMap[pageNameConstants.main],
			},
			{
				path: 'projects',
				lazy: pagesMap[pageNameConstants.projects],
			},
			{
				path: 'work',
				lazy: pagesMap[pageNameConstants.work],
			},
			{
				path: 'education',
				lazy: pagesMap[pageNameConstants.education],
			},
			{
				path: '*',
				lazy: pagesMap[pageNameConstants.main],
			},
		],
	},
];

const router = createBrowserRouter(routes);

export { router, routes };
