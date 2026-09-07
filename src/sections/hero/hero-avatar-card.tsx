import { UiBentoCard } from '@src/components/ui-bento-card';
import { Avatar, Box, Button, Stack, Typography, useTheme } from '@mui/material';
import { useGitHubProfile } from '@src/hooks/use-github-profile';
import { useSmoothScroll } from '@src/hooks/use-smooth-scroll';
import { useTranslation } from 'react-i18next';

export const HeroAvatarCard = () => {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';
	const { t } = useTranslation();
	const { name, avatarUrl } = useGitHubProfile();
	const { scrollTo } = useSmoothScroll();

	return (
		<UiBentoCard
			sx={{
				p: { xs: 3, sm: 4 },
				background: isDark
					? 'radial-gradient(ellipse at top left, rgba(0, 212, 255, 0.08) 0%, #121214 70%)'
					: 'radial-gradient(ellipse at top left, rgba(0, 145, 179, 0.08) 0%, #ffffff 70%)',
			}}
		>
			<Box>
				{/* Status Pill */}
				<Box
					sx={{
						display: 'inline-flex',
						alignItems: 'center',
						gap: 1,
						px: 1.5,
						py: 0.5,
						borderRadius: '2rem',
						backgroundColor: isDark ? 'rgba(0, 212, 255, 0.08)' : 'rgba(0, 145, 179, 0.08)',
						border: isDark ? '1px solid rgba(0, 212, 255, 0.2)' : '1px solid rgba(0, 145, 179, 0.2)',
						mb: 3,
					}}
				>
					<Box
						sx={{
							width: 8,
							height: 8,
							borderRadius: '50%',
							backgroundColor: '#10B981',
							boxShadow: '0 0 10px #10B981',
						}}
					/>
					<Typography
						variant="caption"
						sx={{
							color: theme.palette.primary.main,
							fontWeight: 600,
							letterSpacing: '0.02em',
						}}
					>
						{t('hero.status')}
					</Typography>
				</Box>

				<Stack
					direction={{ xs: 'column-reverse', sm: 'row' }}
					spacing={3}
					sx={{
						alignItems: { xs: 'flex-start', sm: 'center' },
						justifyContent: 'space-between',
						mb: 2.5,
					}}
				>
					<Box>
						<Typography
							variant="h1"
							sx={{
								fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.25rem' },
								fontWeight: 800,
								lineHeight: 1.1,
								mb: 1,
								color: theme.palette.text.primary,
							}}
						>
							{name || 'Bruno Anhaia'}
						</Typography>

						<Typography
							variant="h4"
							sx={{
								fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
								fontWeight: 700,
								background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
							}}
						>
							{t('hero.role')}
						</Typography>
					</Box>

					<Avatar
						src={avatarUrl}
						alt={name || 'Bruno Anhaia'}
						sx={{
							width: { xs: 84, sm: 100, md: 110 },
							height: { xs: 84, sm: 100, md: 110 },
							border: isDark ? '3px solid rgba(0, 212, 255, 0.4)' : '3px solid rgba(0, 145, 179, 0.4)',
							boxShadow: isDark ? '0 0 30px rgba(0, 212, 255, 0.25)' : '0 8px 24px rgba(0, 145, 179, 0.2)',
						}}
					/>
				</Stack>

				<Typography
					variant="body1"
					sx={{
						fontSize: { xs: '0.95rem', md: '1.05rem' },
						color: theme.palette.text.secondary,
						lineHeight: 1.6,
						mb: 3.5,
						maxWidth: 580,
					}}
				>
					{t('hero.tagline')}
				</Typography>
			</Box>

			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				spacing={1.5}
			>
				<Button
					variant="contained"
					color="primary"
					size="medium"
					onClick={() => scrollTo('#projects')}
					sx={{
						px: 3,
						py: 1,
						fontWeight: 700,
						boxShadow: isDark ? '0 0 20px rgba(0, 212, 255, 0.3)' : '0 4px 12px rgba(0, 145, 179, 0.3)',
					}}
				>
					{t('hero.viewProjects')}
				</Button>
				<Button
					variant="outlined"
					color="primary"
					size="medium"
					component="a"
					href="https://www.linkedin.com/in/anhaiabruno/"
					target="_blank"
					rel="noopener noreferrer"
					sx={{
						px: 3,
						py: 1,
						fontWeight: 700,
						borderWidth: '1.5px',
					}}
				>
					{t('hero.contactMe')}
				</Button>
			</Stack>
		</UiBentoCard>
	);
};
