import { UiBentoCard } from '@src/components/ui-bento-card';
import { Box, Stack, Typography, useTheme } from '@mui/material';

const MILESTONES = [
	{ period: '2023 — Present', role: 'Lead Engineer II', company: 'FIT', active: true },
	{ period: '2022 — 2023', role: 'Lead Engineer I', company: 'FIT', active: false },
	{ period: '2022', role: 'Software Engineer II', company: 'Aegro', active: false },
	{ period: '2019 — 2022', role: 'Engineer I & Trainee', company: 'FIT', active: false },
];

export const HeroTimelineCard = () => {
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
					Career Trajectory
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
					Key Milestones
				</Typography>
			</Box>

			<Stack spacing={1.5}>
				{MILESTONES.map(({ period, role, company, active }) => (
					<Stack
						key={`${role}-${company}`}
						direction="row"
						spacing={1.5}
						sx={{ alignItems: 'center' }}
					>
						<Box
							sx={{
								width: 8,
								height: 8,
								borderRadius: '50%',
								backgroundColor: active ? theme.palette.primary.main : theme.palette.text.secondary,
								boxShadow: active ? `0 0 8px ${theme.palette.primary.main}` : 'none',
								flexShrink: 0,
							}}
						/>
						<Box sx={{ flex: 1, minWidth: 0 }}>
							<Typography
								variant="body2"
								sx={{
									fontWeight: active ? 700 : 500,
									color: active ? theme.palette.text.primary : theme.palette.text.secondary,
									fontSize: '0.8rem',
									whiteSpace: 'nowrap',
									overflow: 'hidden',
									textOverflow: 'ellipsis',
								}}
							>
								{role} <Typography component="span" sx={{ fontSize: '0.75rem', opacity: 0.8 }}>@{company}</Typography>
							</Typography>
							<Typography
								variant="caption"
								sx={{
									color: isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)',
									fontSize: '0.7rem',
								}}
							>
								{period}
							</Typography>
						</Box>
					</Stack>
				))}
			</Stack>
		</UiBentoCard>
	);
};
