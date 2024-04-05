import { PaletteMode, ThemeOptions, ThemeProvider, createTheme } from '@mui/material';
import { ThemeContext } from '@src/contexts/theme.context';
import { useDarkMode } from '@src/hooks/use-dark-mode';
import { ReactNode, useMemo, useState } from 'react';

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
	const memoizedMode = useMemo(() => ({ mode, setMode }), [mode]);
	const theme = useMemo(() => createTheme(getTheme(mode)), [mode]);

	return (
		<ThemeContext.Provider value={memoizedMode}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export { AppProvider };
