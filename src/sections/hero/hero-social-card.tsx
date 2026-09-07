import { UiBentoCard } from '@src/components/ui-bento-card';
import { GitHub, LinkedIn, OpenInNew } from '@mui/icons-material';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';

export const HeroSocialCard = () => {
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
					Connect
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
					Profiles & Social
				</Typography>
			</Box>

			<Stack spacing={1}>
				<Button
					component="a"
					href="https://github.com/brunoanhaia"
					target="_blank"
					rel="noopener noreferrer"
					variant="outlined"
					startIcon={<GitHub />}
					endIcon={<OpenInNew sx={{ fontSize: 16 }} />}
					fullWidth
					sx={{
						justifyContent: 'space-between',
						py: 1,
						px: 2,
						borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
						color: theme.palette.text.primary,
						'&:hover': {
							borderColor: theme.palette.primary.main,
							backgroundColor: isDark ? 'rgba(0, 212, 255, 0.05)' : 'rgba(0, 145, 179, 0.05)',
						},
					}}
				>
					GitHub
				</Button>

				<Button
					component="a"
					href="https://www.linkedin.com/in/anhaiabruno/"
					target="_blank"
					rel="noopener noreferrer"
					variant="outlined"
					startIcon={<LinkedIn />}
					endIcon={<OpenInNew sx={{ fontSize: 16 }} />}
					fullWidth
					sx={{
						justifyContent: 'space-between',
						py: 1,
						px: 2,
						borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
						color: theme.palette.text.primary,
						'&:hover': {
							borderColor: theme.palette.primary.main,
							backgroundColor: isDark ? 'rgba(0, 212, 255, 0.05)' : 'rgba(0, 145, 179, 0.05)',
						},
					}}
				>
					LinkedIn
				</Button>
			</Stack>
		</UiBentoCard>
	);
};
