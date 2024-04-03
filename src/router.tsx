import { MainPage, ProjectsPage, ResumePage, RootPage } from './pages';
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
				element: <ResumePage />,
			},
			{
				path: 'education',
				element: <ResumePage />,
			},
			{
				path: '*',
				element: <MainPage />,
			},
		],
	},
]);

export { router };
