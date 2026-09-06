import { GitHubProfileData } from '../types/global.types';
import { createContext } from 'react';

const defaultGitHubProfileState: GitHubProfileData = {
	name: '',
	company: '',
	avatarUrl: '',
	bio: '',
	repositoriesInfo: [],
};

const GitHubProfileContext = createContext<GitHubProfileData>(defaultGitHubProfileState);

export { GitHubProfileContext, defaultGitHubProfileState };
