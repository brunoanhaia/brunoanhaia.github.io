import { useRecoilValue } from 'recoil';
import { gitHubProfileState } from '../../states/global.state';
import { GitHubProfileData } from '../../types/global.types';

export function ProjectsSection() {
	const gitHubProfileData =
		useRecoilValue<GitHubProfileData>(gitHubProfileState);
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
}
