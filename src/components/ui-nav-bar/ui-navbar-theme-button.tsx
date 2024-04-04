import { UiIconButton } from '@components/ui-icon-button';
import { DarkMode, LightMode } from '@mui/icons-material';
import { ThemeContext } from '@src/contexts/theme.context';
import { useContext } from 'react';

const UiNavbarThemeButton = () => {
	const { mode, setMode } = useContext(ThemeContext);
	const handleThemeChange = () => {
		setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
	};

	return <UiIconButton onClick={handleThemeChange}>{mode === 'dark' ? <LightMode /> : <DarkMode />}</UiIconButton>;
};

export { UiNavbarThemeButton };
