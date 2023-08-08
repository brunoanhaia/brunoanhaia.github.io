import { useEffect, useState } from 'react';
import './App.css';
import { menuItemList } from './menu.config';
import { GitHubProfileData } from './App.types';
import { MainSection } from './components/sections/MainSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ResumeSection } from './components/sections/ResumeSection';
import { resumeData } from './resume.data';
import { Navbar } from './components/Navbar';

function App() {
	const [gitHubProfileData, setGitHubProfileData] =
		useState<GitHubProfileData>({
			name: '',
			company: '',
			avatarUrl: '',
			repositoriesInfo: [],
		});

	useEffect(() => {
		Promise.all([
			fetch('https://api.github.com/users/brunoanhaia'),
			fetch('https://api.github.com/users/brunoanhaia/repos'),
		])
			.then(([personalInfo, repositoriesInfo]) =>
				Promise.all([personalInfo.json(), repositoriesInfo.json()])
			)
			.then(
				([
					{ name, company, avatar_url: avatarUrl },
					repositoriesInfo,
				]) => {
					console.log('Sucess');
					setGitHubProfileData({
						name,
						company,
						avatarUrl,
						repositoriesInfo,
					});
				}
			)
			.catch((error) => console.error(error));
	}, []);

	return (
		<div className="App">
			<header>
				<Navbar items={menuItemList}></Navbar>
			</header>
			<div className="content">
				<MainSection
					gitHubProfileData={gitHubProfileData}
				></MainSection>
				<ProjectsSection
					gitHubProfileData={gitHubProfileData}
				></ProjectsSection>
				<ResumeSection resumeData={resumeData}></ResumeSection>
			</div>
		</div>
	);
}

export default App;
