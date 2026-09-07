import { PaletteMode, ThemeOptions, createTheme } from '@mui/material';

export const getTheme = (paletteMode: PaletteMode): ThemeOptions => {
	const isDark = paletteMode === 'dark';

	return {
		palette: {
			mode: paletteMode,
			primary: {
				main: isDark ? '#00D4FF' : '#0091B3',
				light: '#66E5FF',
				dark: '#00A3C4',
				contrastText: '#0a0a0c',
			},
			secondary: {
				main: isDark ? '#8B5CF6' : '#7C3AED',
				light: '#A78BFA',
				dark: '#6D28D9',
				contrastText: '#ffffff',
			},
			background: {
				default: isDark ? '#0a0a0c' : '#f8fafc',
				paper: isDark ? '#121214' : '#ffffff',
			},
			text: {
				primary: isDark ? '#f4f4f5' : '#09090b',
				secondary: isDark ? '#a1a1aa' : '#64748b',
			},
			divider: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
		},
		typography: {
			fontFamily: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif`,
			h1: {
				fontWeight: 700,
				letterSpacing: '-0.02em',
			},
			h2: {
				fontWeight: 700,
				letterSpacing: '-0.02em',
			},
			h3: {
				fontWeight: 600,
				letterSpacing: '-0.01em',
			},
			h4: {
				fontWeight: 600,
				letterSpacing: '-0.01em',
			},
			h5: {
				fontWeight: 600,
			},
			h6: {
				fontWeight: 600,
			},
			subtitle1: {
				fontWeight: 500,
			},
			body1: {
				lineHeight: 1.6,
			},
			body2: {
				lineHeight: 1.5,
			},
			button: {
				textTransform: 'none',
				fontWeight: 600,
			},
		},
		shape: {
			borderRadius: 12,
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: {
					body: {
						backgroundColor: isDark ? '#0a0a0c' : '#f8fafc',
						color: isDark ? '#f4f4f5' : '#09090b',
						scrollBehavior: 'smooth',
					},
				},
			},
			MuiButtonBase: {
				defaultProps: {
					disableRipple: true,
				},
			},
			MuiButton: {
				styleOverrides: {
					root: {
						borderRadius: '0.75rem',
						textTransform: 'none',
						fontWeight: 600,
					},
				},
			},
			MuiPaper: {
				styleOverrides: {
					root: {
						backgroundImage: 'none',
						border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
					},
				},
			},
			MuiCard: {
				styleOverrides: {
					root: {
						backgroundImage: 'none',
						backgroundColor: isDark ? '#121214' : '#ffffff',
						border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
						borderRadius: '1rem',
					},
				},
			},
		},
	};
};

export const createAppTheme = (mode: PaletteMode) => createTheme(getTheme(mode));
