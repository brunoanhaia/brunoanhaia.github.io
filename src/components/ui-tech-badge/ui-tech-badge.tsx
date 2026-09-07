import { UiTechBadgeProps } from './ui-tech-badge.type';
import { Chip, useTheme } from '@mui/material';

const TECH_COLORS: Record<string, string> = {
	'React 19': '#00D4FF',
	React: '#00D4FF',
	TypeScript: '#3178C6',
	'Node.js': '#22C55E',
	Vite: '#BD34FE',
	'MUI 9': '#007FFF',
	MUI: '#007FFF',
	Vitest: '#FCC72B',
	Firebase: '#FFCA28',
	WebSocket: '#EC4899',
	Tailwind: '#38BDF8',
	Git: '#F05032',
	Shell: '#4EAA25',
	CLI: '#8B5CF6',
	DevOps: '#10B981',
};

export const UiTechBadge = ({ name, size = 'small' }: UiTechBadgeProps) => {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';
	const color = TECH_COLORS[name] || theme.palette.primary.main;

	return (
		<Chip
			label={name}
			size={size}
			sx={{
				fontSize: size === 'small' ? '0.7rem' : '0.8rem',
				fontWeight: 600,
				backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)',
				border: `1px solid ${color}33`,
				color: theme.palette.text.primary,
				transition: 'all 0.2s ease',
				'&:hover': {
					borderColor: color,
					backgroundColor: `${color}15`,
				},
			}}
		/>
	);
};
