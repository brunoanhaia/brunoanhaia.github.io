import { GitHub as GitHubIcon, KeyboardArrowUpRounded, LinkedIn as LinkedInIcon } from '@mui/icons-material';
import { Box, Button, Container, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { useSmoothScroll } from '@src/hooks/use-smooth-scroll';
import { useTranslation } from 'react-i18next';

export const FooterSection = () => {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';
	const { t } = useTranslation();
	const { scrollTo } = useSmoothScroll();
	const currentYear = new Date().getFullYear();

	return (
		<Box
			component="footer"
			sx={{
				py: 6,
				mt: 8,
				borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
				backgroundColor: isDark ? '#08080a' : '#f8fafc',
			}}
		>
			<Container maxWidth="lg">
				<Stack
					direction={{ xs: 'column', sm: 'row' }}
					spacing={3}
					sx={{
						justifyContent: 'space-between',
						alignItems: { xs: 'center', sm: 'flex-start' },
					}}
				>
					<Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
						<Typography
							variant="subtitle1"
							sx={{
								fontWeight: 700,
								color: theme.palette.text.primary,
								fontSize: '1.05rem',
							}}
						>
							Bruno Anhaia
						</Typography>
						<Typography
							variant="body2"
							sx={{
								color: theme.palette.text.secondary,
								fontSize: '0.875rem',
								maxWidth: 440,
								mt: 0.5,
								lineHeight: 1.6,
							}}
						>
							{t('footer.tagline')}
						</Typography>
					</Box>

					<Stack
						direction="row"
						spacing={1.5}
						sx={{ alignItems: 'center' }}
					>
						<IconButton
							component="a"
							href="https://github.com/brunoanhaia"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub Profile"
							sx={{
								color: theme.palette.text.secondary,
								border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
								borderRadius: '0.75rem',
								p: 1,
								'&:hover': {
									color: theme.palette.text.primary,
									borderColor: theme.palette.primary.main,
								},
							}}
						>
							<GitHubIcon sx={{ fontSize: 20 }} />
						</IconButton>

						<IconButton
							component="a"
							href="https://www.linkedin.com/in/anhaiabruno/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn Profile"
							sx={{
								color: theme.palette.text.secondary,
								border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
								borderRadius: '0.75rem',
								p: 1,
								'&:hover': {
									color: theme.palette.text.primary,
									borderColor: theme.palette.primary.main,
								},
							}}
						>
							<LinkedInIcon sx={{ fontSize: 20 }} />
						</IconButton>

						<Button
							onClick={() => scrollTo('#hero')}
							variant="outlined"
							size="small"
							startIcon={<KeyboardArrowUpRounded />}
							aria-label="Back to top"
							sx={{
								borderRadius: '0.75rem',
								color: theme.palette.text.secondary,
								borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
								fontSize: '0.75rem',
								fontWeight: 600,
								'&:hover': {
									color: theme.palette.text.primary,
									borderColor: theme.palette.primary.main,
								},
							}}
						>
							Top
						</Button>
					</Stack>
				</Stack>

				<Box
					sx={{
						pt: 4,
						mt: 4,
						borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.04)' : '1px solid rgba(0, 0, 0, 0.04)',
						display: 'flex',
						flexDirection: { xs: 'column', sm: 'row' },
						justifyContent: 'space-between',
						alignItems: 'center',
						gap: 1,
					}}
				>
					<Typography
						variant="caption"
						sx={{ color: theme.palette.text.secondary }}
					>
						© {currentYear} Bruno Anhaia. {t('footer.allRightsReserved')}
					</Typography>
					<Typography
						variant="caption"
						sx={{ color: theme.palette.text.secondary }}
					>
						{t('footer.builtWith')}
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};
