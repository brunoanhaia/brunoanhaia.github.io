import { PaletteMode, ThemeProvider } from '@mui/material';
import { GitHubProfileContext, defaultGitHubProfileState } from '@src/contexts/github-profile.context';
import { LanguageContext, SupportedLanguage } from '@src/contexts/language.context';
import { ThemeContext } from '@src/contexts/theme.context';
import { useDarkMode } from '@src/hooks/use-dark-mode';
import i18n from '@src/i18n';
import { createAppTheme } from '@src/theme';
import { GitHubProfileData } from '@src/types/global.types';
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

type AppProviderProps = {
	children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
	const { systemDarkMode } = useDarkMode();
	const [mode, setMode] = useState<PaletteMode>(() => {
		const stored = localStorage.getItem('app_theme_mode');
		if (stored === 'dark' || stored === 'light') {
			return stored;
		}
		return systemDarkMode ? 'dark' : 'light';
	});

	const [language, setLanguageState] = useState<SupportedLanguage>(() => {
		const current = i18n.language;
		return current === 'pt-BR' ? 'pt-BR' : 'en';
	});

	const [profileData, setProfileData] = useState<GitHubProfileData>(defaultGitHubProfileState);

	const handleSetMode = useCallback((newMode: PaletteMode | ((prev: PaletteMode) => PaletteMode)) => {
		setMode((prev) => {
			const resolved = typeof newMode === 'function' ? newMode(prev) : newMode;
			localStorage.setItem('app_theme_mode', resolved);
			return resolved;
		});
	}, []);

	const setLanguage = useCallback((newLang: SupportedLanguage) => {
		setLanguageState(newLang);
		i18n.changeLanguage(newLang);
		localStorage.setItem('app_language', newLang);
		document.documentElement.lang = newLang;
	}, []);

	const toggleLanguage = useCallback(() => {
		const next = language === 'en' ? 'pt-BR' : 'en';
		setLanguage(next);
	}, [language, setLanguage]);

	const memoizedThemeContext = useMemo(() => ({ mode, setMode: handleSetMode }), [mode, handleSetMode]);
	const memoizedLanguageContext = useMemo(
		() => ({ language, setLanguage, toggleLanguage }),
		[language, setLanguage, toggleLanguage]
	);

	const theme = useMemo(() => createAppTheme(mode), [mode]);

	useEffect(() => {
		document.documentElement.lang = language;
	}, [language]);

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
				console.error('Failed to fetch GitHub profile data:', error);
			});
	}, []);

	return (
		<LanguageContext.Provider value={memoizedLanguageContext}>
			<ThemeContext.Provider value={memoizedThemeContext}>
				<ThemeProvider theme={theme}>
					<GitHubProfileContext.Provider value={profileData}>{children}</GitHubProfileContext.Provider>
				</ThemeProvider>
			</ThemeContext.Provider>
		</LanguageContext.Provider>
	);
};

export { AppProvider };
