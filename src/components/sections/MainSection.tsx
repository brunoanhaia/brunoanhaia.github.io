import { useRecoilValue } from 'recoil';
import { gitHubProfileState } from '../../states/global.state';

export const MainSection = () => {
	const { name, company, bio, avatarUrl } =
		useRecoilValue(gitHubProfileState);

	return (
		<section className="section__main">
			<div className="div__image--profile">
				<figure>
					<img
						className="image--profile"
						src={avatarUrl}
						alt="Me"
					/>
					<figcaption>{name}</figcaption>
					<h1 className="company">{company}</h1>
				</figure>
			</div>
			<div className="div__footer--profile">
				<h1>{bio}</h1>
			</div>
		</section>
	);
};
