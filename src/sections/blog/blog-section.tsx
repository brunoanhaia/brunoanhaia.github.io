import { Article as ArticleIcon, AutoAwesome as SparklesIcon, NotificationsActive as NotificationIcon } from '@mui/icons-material';
import { Box, Card, Chip, Container, Stack, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

const UPCOMING_TOPICS = [
	'React 19 & Actions Architecture',
	'Strict TypeScript Patterns',
	'Component-Driven Design Systems',
	'Automated CI/CD & Semantic Releases',
	'Web Performance & Bundle Craft',
];

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
				{/* Section Header */}
				<Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
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

				{/* Coming Soon Card */}
				<Card
					sx={{
						maxWidth: 780,
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
								width: 64,
								height: 64,
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
							label="In Progress"
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
							variant="h4"
							sx={{
								fontWeight: 800,
								fontSize: { xs: '1.4rem', sm: '1.75rem' },
								color: theme.palette.text.primary,
							}}
						>
							{t('sections.blog.comingSoon')}
						</Typography>

						<Typography
							variant="body1"
							sx={{
								color: theme.palette.text.secondary,
								maxWidth: 540,
								lineHeight: 1.65,
							}}
						>
							{t('sections.blog.stayTuned')}
						</Typography>

						{/* Planned Topics */}
						<Box sx={{ pt: 2, width: '100%' }}>
							<Typography
								variant="caption"
								sx={{
									color: theme.palette.primary.main,
									fontWeight: 700,
									letterSpacing: '0.04em',
									textTransform: 'uppercase',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									gap: 0.5,
									mb: 1.5,
								}}
							>
								<SparklesIcon sx={{ fontSize: 14 }} />
								Upcoming Articles
							</Typography>

							<Box
								sx={{
									display: 'flex',
									flexWrap: 'wrap',
									justifyContent: 'center',
									gap: 1,
								}}
							>
								{UPCOMING_TOPICS.map((topic) => (
									<Chip
										key={topic}
										label={topic}
										size="small"
										sx={{
											fontSize: '0.75rem',
											fontWeight: 500,
											backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)',
											border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
											color: theme.palette.text.secondary,
										}}
									/>
								))}
							</Box>
						</Box>
					</Stack>
				</Card>
			</Container>
		</Box>
	);
};
