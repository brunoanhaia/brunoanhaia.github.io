import { MainSectionProps } from './MainSection.type';

export function MainSection({ gitHubProfileData }: MainSectionProps) {
	return (
		<section className="section__main">
			<div className="div__image--profile">
				<figure>
					<img
						className="image--profile"
						src={gitHubProfileData.avatarUrl}
						alt="Me"
					/>
					<figcaption>{gitHubProfileData.name}</figcaption>
					<h1 className="company">{gitHubProfileData.company}</h1>
				</figure>
			</div>
			<div className="div__footer--profile">
				<h1>Embedded Software Developer</h1>
			</div>
		</section>
	);
}
