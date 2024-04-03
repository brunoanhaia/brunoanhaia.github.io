import './App.css';
import { MainPage, ProjectsPage, ResumePage } from '@src/pages/';
import { resumeData } from './resume.data';
import { Suspense, useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { menuItemList } from './menu.config';
import { InitialLoading } from '@components/InitialLoading';
import { Box } from '@mui/material';
import { useGetFirebaseTranslations } from './hooks/use-firebase';

const App = () => {
	const [, setState] = useState({});
	const translations = useGetFirebaseTranslations('pt-br');

	useEffect(() => {
		translations.then((value) => {
			setState(value);
		});
	}, [translations]);

	return (
		<Box className="App">
			<Suspense fallback={<InitialLoading />}>
				<Box>
					<Navbar items={menuItemList} />
				</Box>
				<Box className="content">
					<MainPage />
					<ProjectsPage />
					<ResumePage resumeData={resumeData} />
				</Box>
			</Suspense>
		</Box>
	);
};

export { App };
