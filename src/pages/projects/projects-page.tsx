import { useRecoilValue } from 'recoil';
import { gitHubProfileState } from '@src/states/global.state';
import { GitHubProfileData } from '@src/types/global.types';

export const ProjectsPage = () => {
	const gitHubProfileData = useRecoilValue<GitHubProfileData>(gitHubProfileState);
	return (
		<section
			id="projects"
			className="section__gh--projects"
		>
			<div className="wrapper">
				<h1>Github projects</h1>
				<ul className="gh--projects-list">
					{gitHubProfileData.repositoriesInfo.map(({ name, url }) => {
						return (
							<li key={name}>
								<a href={url}>{name}</a>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};
