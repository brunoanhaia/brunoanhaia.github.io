import './App.css';
import { MainSection } from './components/sections/MainSection';
import { resumeData } from './resume.data';
import { Suspense, useEffect, useState } from 'react';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { Navbar } from './components/Navbar';
import { menuItemList } from './menu.config';
import { InitialLoading } from './components/InitialLoading';
import { ResumeSection } from './components/sections/ResumeSection';
import { Box } from '@mui/material';
import { useGetFirebaseTranslations } from './utils/use-firebase';

const App = () => {
	const [state, setState] = useState({});
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
					<MainSection />
					<ProjectsSection />
					<ResumeSection resumeData={resumeData} />
				</Box>
			</Suspense>
		</Box>
	);
};

export { App };
