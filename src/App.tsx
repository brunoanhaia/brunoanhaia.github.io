import './App.css';
import { MainSection } from './components/sections/MainSection';
import { resumeData } from './resume.data';
import { Suspense } from 'react';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { Navbar } from './components/Navbar';
import { menuItemList } from './menu.config';
import { InitialLoading } from './components/InitialLoading';
import { ResumeSection } from './components/sections/ResumeSection';

function App() {
	return (
		<div className="App">
			<Suspense fallback={<InitialLoading />}>
				<header>
					<Navbar items={menuItemList} />
				</header>
				<div className="content">
					<MainSection />
					<ProjectsSection />
					<ResumeSection resumeData={resumeData} />
				</div>
			</Suspense>
		</div>
	);
}

export default App;
