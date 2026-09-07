import { UiTimeline } from '@components/ui-timeline';
import { CheckCircleOutlineRounded } from '@mui/icons-material';
import { Box, Card, Container, List, ListItem, ListItemIcon, Typography, useTheme } from '@mui/material';
import { resumeData } from '@src/resume.data';
import { formatPeriod } from '@src/utils/format-period';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const ExperienceSection = () => {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';
	const { t } = useTranslation();

	const workItems = useMemo(() => resumeData.work, []);

	return (
		<Box
			id="experience"
			component="section"
			sx={{
				py: { xs: 8, md: 12 },
				backgroundColor: isDark ? 'rgba(255, 255, 255, 0.01)' : 'rgba(0, 0, 0, 0.01)',
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
						{t('sections.experience.title')}
					</Typography>
					<Typography
						variant="body1"
						sx={{
							color: theme.palette.text.secondary,
							maxWidth: 600,
							mx: 'auto',
						}}
					>
						{t('sections.experience.subtitle')}
					</Typography>
				</Box>

				<Box sx={{ maxWidth: 850, mx: 'auto' }}>
					<UiTimeline.Root>
						{workItems.map((work) =>
							work.roles.map((role, rIdx) => {
								const expList = role.experience ? t(role.experience).split(';') : [];
								return (
									<UiTimeline.Item
										key={`${work.company}-${role.name}-${role.level}-${rIdx}`}
										hideIcon={false}
									>
										<Card
											sx={{
												p: 2.5,
												mb: 2,
												backgroundColor: isDark ? '#121214' : '#ffffff',
												borderRadius: '1rem',
												transition: 'transform 0.2s ease, border-color 0.2s ease',
												'&:hover': {
													borderColor: theme.palette.primary.main,
													transform: 'translateY(-2px)',
												},
											}}
										>
											<Typography
												variant="caption"
												sx={{
													color: theme.palette.primary.main,
													fontWeight: 700,
													letterSpacing: '0.04em',
													textTransform: 'uppercase',
												}}
											>
												{t(work.company)}
											</Typography>

											<Typography
												variant="h6"
												sx={{
													fontWeight: 700,
													color: theme.palette.text.primary,
													mt: 0.5,
												}}
											>
												{t(role.name)} {role.level !== 'none' ? `• ${role.level}` : ''}
											</Typography>

											<Typography
												variant="caption"
												sx={{
													color: theme.palette.text.secondary,
													display: 'block',
													mb: 1.5,
												}}
											>
												{formatPeriod(role.period)}
											</Typography>

											{expList.length > 0 && (
												<List
													disablePadding
													sx={{ mt: 1 }}
												>
													{expList.map((item, idx) => (
														<ListItem
															key={idx}
															disablePadding
															sx={{ alignItems: 'flex-start', mb: 0.75 }}
														>
															<ListItemIcon sx={{ minWidth: 26, mt: 0.4 }}>
																<CheckCircleOutlineRounded
																	sx={{ fontSize: 16, color: theme.palette.primary.main }}
																/>
															</ListItemIcon>
															<Typography
																variant="body2"
																sx={{ color: theme.palette.text.secondary }}
															>
																{item}
															</Typography>
														</ListItem>
													))}
												</List>
											)}
										</Card>
									</UiTimeline.Item>
								);
							})
						)}
						<UiTimeline.EmptyItem />
					</UiTimeline.Root>
				</Box>
			</Container>
		</Box>
	);
};
