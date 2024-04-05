import { useMediaQuery } from '@mui/material';

export const useDarkMode = () => {
	const systemDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	return { systemDarkMode };
};
