import { UiBentoCard } from '@src/components/ui-bento-card';
import { Box, Chip, Typography, useTheme } from '@mui/material';

const TECH_ITEMS = [
	{ name: 'React 19', color: '#00D4FF' },
	{ name: 'TypeScript', color: '#3178C6' },
	{ name: 'Node.js', color: '#22C55E' },
	{ name: 'Vite', color: '#BD34FE' },
	{ name: 'MUI 9', color: '#007FFF' },
	{ name: 'Vitest', color: '#FCC72B' },
	{ name: 'Firebase', color: '#FFCA28' },
	{ name: 'CI/CD', color: '#10B981' },
];

export const HeroTechStackCard = () => {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';

	return (
		<UiBentoCard>
			<Box sx={{ mb: 2 }}>
				<Typography
					variant="caption"
					sx={{
						color: theme.palette.primary.main,
						fontWeight: 700,
						letterSpacing: '0.04em',
						textTransform: 'uppercase',
					}}
				>
					Tech Stack
				</Typography>
				<Typography
					variant="h6"
					sx={{
						fontWeight: 700,
						fontSize: '1rem',
						color: theme.palette.text.primary,
						mt: 0.25,
					}}
				>
					Core Technologies
				</Typography>
			</Box>

			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: 1,
				}}
			>
				{TECH_ITEMS.map(({ name, color }) => (
					<Chip
						key={name}
						label={name}
						size="small"
						sx={{
							fontWeight: 600,
							fontSize: '0.75rem',
							py: 0.5,
							backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)',
							border: `1px solid ${color}33`,
							color: theme.palette.text.primary,
							transition: 'all 0.2s ease',
							'&:hover': {
								borderColor: color,
								backgroundColor: `${color}15`,
								transform: 'translateY(-1px)',
							},
						}}
					/>
				))}
			</Box>
		</UiBentoCard>
	);
};
