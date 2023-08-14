import './App.css';
import { menuItemList } from './menu.config';
import { MainSection } from './components/sections/MainSection';
import { ResumeSection } from './components/sections/ResumeSection';
import { resumeData } from './resume.data';
import { Navbar } from './components/Navbar';
import React from 'react';
import { ProjectsSection } from './components/sections/ProjectsSection';

function App() {
	return (
		<div className="App">
			<React.Suspense fallback={<div>Loading...</div>}>
				<header>
					<Navbar items={menuItemList}></Navbar>
				</header>
				<div className="content">
					<MainSection></MainSection>
					<ProjectsSection></ProjectsSection>
					<ResumeSection resumeData={resumeData}></ResumeSection>
				</div>
			</React.Suspense>
		</div>
	);
}

export default App;
