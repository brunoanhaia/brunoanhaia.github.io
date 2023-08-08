export type GitHubProfileData = {
	name: string;
	company: string;
	avatarUrl: string;
	repositoriesInfo: Array<GitHubRepositoryInfo>;
};

export type GitHubRepositoryInfo = {
	name: string;
	url: string;
};
