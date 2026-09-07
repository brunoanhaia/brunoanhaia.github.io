import { SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';

export type UiBentoCardProps = {
	children: ReactNode;
	sx?: SxProps<Theme>;
	className?: string;
};
