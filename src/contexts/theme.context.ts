import { PaletteMode } from '@mui/material';
import { Dispatch, SetStateAction, createContext } from 'react';

const ThemeContext = createContext<{ mode: string; setMode: Dispatch<SetStateAction<PaletteMode>> }>({
	mode: 'dark',
	setMode: () => {},
});

export { ThemeContext };
