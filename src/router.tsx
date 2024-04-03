import { MainPage, ProjectsPage, RootPage, WorkPage } from './pages';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootPage />,
		children: [
			{
				path: '',
				element: <MainPage />,
			},
			{
				path: 'projects',
				element: <ProjectsPage />,
			},
			{
				path: 'work',
				element: <WorkPage />,
			},
			{
				path: 'education',
				element: <WorkPage />,
			},
			{
				path: '*',
				element: <MainPage />,
			},
		],
	},
]);

export { router };
