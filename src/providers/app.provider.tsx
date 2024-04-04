import { PaletteMode, ThemeProvider, createTheme } from '@mui/material';
import { ThemeContext } from '@src/contexts/theme.context';
import { useDarkMode } from '@src/hooks/use-dark-mode';
import { ReactNode, useMemo, useState } from 'react';

type AppProviderProps = {
	children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
	const { systemDarkMode } = useDarkMode();
	const [mode, setMode] = useState<PaletteMode>(systemDarkMode ? 'dark' : 'light');
	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: mode,
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
				},
			}),
		[mode]
	);

	return (
		<ThemeContext.Provider value={{ mode, setMode }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export { AppProvider };
