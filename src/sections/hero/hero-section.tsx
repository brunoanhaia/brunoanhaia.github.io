import { Avatar, Box, Button, Container, Stack, Typography, useTheme } from '@mui/material';
import { useGitHubProfile } from '@src/hooks/use-github-profile';
import { useSmoothScroll } from '@src/hooks/use-smooth-scroll';
import { useTranslation } from 'react-i18next';

export const HeroSection = () => {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';
	const { t } = useTranslation();
	const { name, avatarUrl } = useGitHubProfile();
	const { scrollTo } = useSmoothScroll();

	return (
		<Box
			id="hero"
			component="section"
			sx={{
				minHeight: { xs: 'calc(100vh - 64px)', md: 'calc(100vh - 70px)' },
				display: 'flex',
				alignItems: 'center',
				pt: { xs: 12, md: 14 },
				pb: { xs: 8, md: 10 },
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			<Container maxWidth="lg">
				<Stack
					direction={{ xs: 'column', md: 'row' }}
					spacing={{ xs: 4, md: 6 }}
					sx={{
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Box sx={{ maxWidth: { xs: '100%', md: 650 } }}>
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
								mb: 2.5,
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

						<Typography
							variant="h1"
							sx={{
								fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.25rem' },
								fontWeight: 800,
								lineHeight: 1.05,
								mb: 1.5,
								color: theme.palette.text.primary,
							}}
						>
							{name || 'Bruno Anhaia'}
						</Typography>

						<Typography
							variant="h3"
							sx={{
								fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' },
								fontWeight: 700,
								background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
								mb: 2.5,
							}}
						>
							{t('hero.role')}
						</Typography>

						<Typography
							variant="body1"
							sx={{
								fontSize: { xs: '1rem', md: '1.15rem' },
								color: theme.palette.text.secondary,
								mb: 4,
								maxWidth: 560,
							}}
						>
							{t('hero.tagline')}
						</Typography>

						<Stack
							direction={{ xs: 'column', sm: 'row' }}
							spacing={2}
						>
							<Button
								variant="contained"
								color="primary"
								size="large"
								onClick={() => scrollTo('#projects')}
								sx={{
									px: 3.5,
									py: 1.25,
									fontWeight: 700,
									boxShadow: isDark ? '0 0 24px rgba(0, 212, 255, 0.3)' : '0 4px 14px rgba(0, 145, 179, 0.3)',
								}}
							>
								{t('hero.viewProjects')}
							</Button>
							<Button
								variant="outlined"
								color="primary"
								size="large"
								component="a"
								href="https://www.linkedin.com/in/anhaiabruno/"
								target="_blank"
								rel="noopener noreferrer"
								sx={{
									px: 3.5,
									py: 1.25,
									fontWeight: 700,
									borderWidth: '1.5px',
								}}
							>
								{t('hero.contactMe')}
							</Button>
						</Stack>
					</Box>

					<Box
						sx={{
							position: 'relative',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<Box
							sx={{
								position: 'absolute',
								inset: -15,
								borderRadius: '50%',
								background: `radial-gradient(circle, ${theme.palette.primary.main}33 0%, transparent 70%)`,
								filter: 'blur(20px)',
								zIndex: 0,
							}}
						/>
						<Avatar
							src={avatarUrl}
							alt={name || 'Bruno Anhaia'}
							sx={{
								width: { xs: 200, sm: 260, md: 320 },
								height: { xs: 200, sm: 260, md: 320 },
								border: isDark ? '3px solid rgba(0, 212, 255, 0.4)' : '3px solid rgba(0, 145, 179, 0.4)',
								boxShadow: isDark
									? '0 0 40px rgba(0, 212, 255, 0.2)'
									: '0 10px 30px rgba(0, 145, 179, 0.15)',
								position: 'relative',
								zIndex: 1,
							}}
						/>
					</Box>
				</Stack>
			</Container>
		</Box>
	);
};
