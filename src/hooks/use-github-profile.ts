import { GitHubProfileContext } from '@src/contexts/github-profile.context';
import { useContext } from 'react';

const useGitHubProfile = () => useContext(GitHubProfileContext);

export { useGitHubProfile };
