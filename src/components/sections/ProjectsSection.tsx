import { ProjectsSectionProps } from './ProjectsSection.type';

export function ProjectsSection({ gitHubProfileData }: ProjectsSectionProps) {
	return (
		<section
			id="projects"
			className="section__gh--projects"
		>
			<div className="wrapper">
				<h1>Github projects</h1>
				<ul className="gh--projects-list">
					{gitHubProfileData.repositoriesInfo.map(
						(repositoryInfo) => {
							return (
								<li key={repositoryInfo.name}>
									<a href={repositoryInfo.url}>
										{repositoryInfo.name}
									</a>
								</li>
							);
						}
					)}
				</ul>
			</div>
		</section>
	);
}
