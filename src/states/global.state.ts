import { selector } from 'recoil';
import { GitHubProfileData } from '../types/global.types';

export enum RecoilStates {
	GitHub = 'GitHub',
	Linkedin = 'Linkedin',
}

const defaultGitHubProfileState: GitHubProfileData = {
	name: '',
	company: '',
	avatarUrl: '',
	bio: '',
	repositoriesInfo: [],
};

export const gitHubProfileState = selector<GitHubProfileData>({
	key: RecoilStates.GitHub,
	get: async () => {
		return Promise.all([
			fetch('https://api.github.com/users/brunoanhaia'),
			fetch('https://api.github.com/users/brunoanhaia/repos'),
			new Promise(function (resolve) {
				setTimeout(resolve, 2000);
			}),
		])
			.then(([personalInfo, repositoriesInfo]) =>
				Promise.all([personalInfo.json(), repositoriesInfo.json()])
			)
			.then(
				([
					{ name, company, avatar_url: avatarUrl, bio },
					repositoriesInfo,
				]) => {
					const data: GitHubProfileData = {
						name,
						company,
						avatarUrl,
						repositoriesInfo,
						bio,
					};
					return data;
				}
			)
			.catch((error) => {
				console.error(error);
				return defaultGitHubProfileState;
			});
	},
});
