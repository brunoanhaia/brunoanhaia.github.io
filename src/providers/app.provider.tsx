import { PaletteMode, ThemeOptions, ThemeProvider, createTheme } from '@mui/material';
import { GitHubProfileContext, defaultGitHubProfileState } from '@src/contexts/github-profile.context';
import { ThemeContext } from '@src/contexts/theme.context';
import { useDarkMode } from '@src/hooks/use-dark-mode';
import { GitHubProfileData } from '@src/types/global.types';
import { ReactNode, useEffect, useMemo, useState } from 'react';

type AppProviderProps = {
	children: ReactNode;
};

const getTheme = (paletteMode: PaletteMode) => {
	const defaultTheme = createTheme({
		palette: {
			mode: paletteMode,
		},
	});

	const theme: ThemeOptions = {
		palette: {
			mode: paletteMode,
		},
		components: {
			MuiButtonBase: {
				defaultProps: {
					disableRipple: true,
					sx: {
						borderRadius: '1rem',
					},
				},
			},
			MuiSvgIcon: {
				defaultProps: {
					sx: {
						color: defaultTheme.palette.text.primary,
					},
				},
			},
		},
	};

	return theme;
};

const AppProvider = ({ children }: AppProviderProps) => {
	const { systemDarkMode } = useDarkMode();
	const [mode, setMode] = useState<PaletteMode>(systemDarkMode ? 'dark' : 'light');
	const [profileData, setProfileData] = useState<GitHubProfileData>(defaultGitHubProfileState);
	const memoizedMode = useMemo(() => ({ mode, setMode }), [mode]);
	const theme = useMemo(() => createTheme(getTheme(mode)), [mode]);

	useEffect(() => {
		Promise.all([
			fetch('https://api.github.com/users/brunoanhaia'),
			fetch('https://api.github.com/users/brunoanhaia/repos'),
		])
			.then(([personalInfo, repositoriesInfo]) => Promise.all([personalInfo.json(), repositoriesInfo.json()]))
			.then(([{ name, company, avatar_url: avatarUrl, bio }, repositoriesInfo]) => {
				setProfileData({
					name: name ?? '',
					company: company ?? '',
					avatarUrl: avatarUrl ?? '',
					repositoriesInfo: Array.isArray(repositoriesInfo) ? repositoriesInfo : [],
					bio: bio ?? '',
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<ThemeContext.Provider value={memoizedMode}>
			<ThemeProvider theme={theme}>
				<GitHubProfileContext.Provider value={profileData}>{children}</GitHubProfileContext.Provider>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export { AppProvider };
