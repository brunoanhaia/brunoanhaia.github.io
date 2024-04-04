import { PaletteMode } from "@mui/material";
import { createContext, Dispatch, SetStateAction } from "react";

const ThemeContext = createContext<{ mode: string, setMode: Dispatch<SetStateAction<PaletteMode>> }>({ mode: 'dark', setMode: () => { } });

export { ThemeContext }
