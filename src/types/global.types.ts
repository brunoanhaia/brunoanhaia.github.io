export type GitHubProfileData = {
	name: string;
	company: string;
	avatarUrl: string;
	bio: string;
	repositoriesInfo: Array<GitHubRepositoryInfo>;
};

export type GitHubRepositoryInfo = {
	name: string;
	url: string;
};
