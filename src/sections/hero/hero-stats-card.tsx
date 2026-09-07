import { UiBentoCard } from '@src/components/ui-bento-card';
import { Box, Typography, useTheme } from '@mui/material';

const STATS = [
	{ label: 'Years Experience', value: '7+' },
	{ label: 'Current Level', value: 'Lead II' },
	{ label: 'International Study', value: 'Tokyo 🇯🇵' },
	{ label: 'Engineering Degree', value: 'FACENS 🇧🇷' },
];

export const HeroStatsCard = () => {
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
					Profile Highlights
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
					Key Metrics
				</Typography>
			</Box>

			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(2, 1fr)',
					gap: 1.5,
				}}
			>
				{STATS.map(({ label, value }) => (
					<Box
						key={label}
						sx={{
							p: 1.5,
							borderRadius: '0.75rem',
							backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
							border: isDark ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid rgba(0, 0, 0, 0.06)',
						}}
					>
						<Typography
							variant="h6"
							sx={{
								fontWeight: 800,
								fontSize: '1.05rem',
								color: theme.palette.primary.main,
								lineHeight: 1.2,
							}}
						>
							{value}
						</Typography>
						<Typography
							variant="caption"
							sx={{
								color: theme.palette.text.secondary,
								fontSize: '0.7rem',
								fontWeight: 500,
								display: 'block',
								mt: 0.25,
							}}
						>
							{label}
						</Typography>
					</Box>
				))}
			</Box>
		</UiBentoCard>
	);
};
