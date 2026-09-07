import { Article as ArticleIcon, NotificationsActive as NotificationIcon } from '@mui/icons-material';
import { Box, Card, Chip, Container, Stack, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const BlogSection = () => {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';
	const { t } = useTranslation();

	return (
		<Box
			id="blog"
			component="section"
			sx={{
				py: { xs: 8, md: 12 },
			}}
		>
			<Container maxWidth="lg">
				<Box sx={{ textAlign: 'center', mb: 6 }}>
					<Typography
						variant="h2"
						sx={{
							fontSize: { xs: '2rem', md: '2.75rem' },
							fontWeight: 800,
							mb: 1.5,
						}}
					>
						{t('sections.blog.title')}
					</Typography>
					<Typography
						variant="body1"
						sx={{
							color: theme.palette.text.secondary,
							maxWidth: 600,
							mx: 'auto',
						}}
					>
						{t('sections.blog.subtitle')}
					</Typography>
				</Box>

				<Card
					sx={{
						maxWidth: 700,
						mx: 'auto',
						p: { xs: 4, sm: 6 },
						textAlign: 'center',
						backgroundColor: isDark ? '#121214' : '#ffffff',
						borderRadius: '1.5rem',
						border: isDark ? '1px dashed rgba(0, 212, 255, 0.3)' : '1px dashed rgba(0, 145, 179, 0.3)',
						background: isDark
							? 'radial-gradient(ellipse at center, rgba(0, 212, 255, 0.04) 0%, #121214 70%)'
							: 'radial-gradient(ellipse at center, rgba(0, 145, 179, 0.04) 0%, #ffffff 70%)',
					}}
				>
					<Stack
						spacing={2.5}
						sx={{ alignItems: 'center' }}
					>
						<Box
							sx={{
								width: 60,
								height: 60,
								borderRadius: '16px',
								backgroundColor: isDark ? 'rgba(0, 212, 255, 0.1)' : 'rgba(0, 145, 179, 0.1)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: theme.palette.primary.main,
							}}
						>
							<ArticleIcon sx={{ fontSize: 32 }} />
						</Box>

						<Chip
							label="Coming Soon"
							icon={<NotificationIcon sx={{ fontSize: '14px !important' }} />}
							size="small"
							sx={{
								backgroundColor: isDark ? 'rgba(139, 92, 246, 0.15)' : 'rgba(124, 58, 237, 0.15)',
								color: theme.palette.secondary.main,
								border: `1px solid ${theme.palette.secondary.main}40`,
								fontWeight: 700,
								fontSize: '0.75rem',
							}}
						/>

						<Typography
							variant="h5"
							sx={{
								fontWeight: 700,
								color: theme.palette.text.primary,
							}}
						>
							{t('sections.blog.comingSoon')}
						</Typography>

						<Typography
							variant="body2"
							sx={{
								color: theme.palette.text.secondary,
								maxWidth: 480,
								lineHeight: 1.6,
							}}
						>
							{t('sections.blog.stayTuned')}
						</Typography>
					</Stack>
				</Card>
			</Container>
		</Box>
	);
};
