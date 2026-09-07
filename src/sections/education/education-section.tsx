import { PublicRounded, SchoolRounded } from '@mui/icons-material';
import { Box, Card, Chip, Container, Stack, Typography, useTheme } from '@mui/material';
import { resumeData } from '@src/resume.data';
import { formatPeriod } from '@src/utils/format-period';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const EducationSection = () => {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';
	const { t } = useTranslation();

	const sortedEducation = useMemo(
		() => resumeData.education.toSorted((a, b) => (dayjs(a.period.start).isAfter(dayjs(b.period.start)) ? -1 : 1)),
		[]
	);

	const getFlagBadge = (institution: string) => {
		if (institution.includes('UEC')) {
			return { label: 'Tokyo, Japan 🇯🇵', isHighlight: true };
		}
		return { label: 'Sorocaba, Brazil 🇧🇷', isHighlight: false };
	};

	return (
		<Box
			id="education"
			component="section"
			sx={{
				py: { xs: 8, md: 12 },
			}}
		>
			<Container maxWidth="lg">
				{/* Header */}
				<Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
					<Typography
						variant="h2"
						sx={{
							fontSize: { xs: '2rem', md: '2.75rem' },
							fontWeight: 800,
							mb: 1.5,
						}}
					>
						{t('sections.education.title')}
					</Typography>
					<Typography
						variant="body1"
						sx={{
							color: theme.palette.text.secondary,
							maxWidth: 650,
							mx: 'auto',
						}}
					>
						{t('sections.education.subtitle')}
					</Typography>
				</Box>

				{/* Cards Grid */}
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
						gap: 3,
					}}
				>
					{sortedEducation.map((education) => {
						const flag = getFlagBadge(education.institution);
						const isCompleted =
							education.status.includes('completed') && !education.status.includes('notCompleted');

						return (
							<Card
								key={education.institution}
								sx={{
									p: 3.5,
									height: '100%',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-between',
									backgroundColor: isDark ? '#121214' : '#ffffff',
									borderRadius: '1.25rem',
									border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
									position: 'relative',
									overflow: 'hidden',
									transition: 'all 0.25s ease',
									'&:hover': {
										transform: 'translateY(-4px)',
										borderColor: theme.palette.primary.main,
										boxShadow: isDark
											? '0 12px 30px -10px rgba(0, 212, 255, 0.15)'
											: '0 12px 30px -10px rgba(0, 145, 179, 0.15)',
									},
								}}
							>
								<Box>
									{/* Top Bar: Icon + Location Pill */}
									<Stack
										direction="row"
										sx={{
											justifyContent: 'space-between',
											alignItems: 'center',
											mb: 2.5,
										}}
									>
										<Box
											sx={{
												width: 44,
												height: 44,
												borderRadius: '12px',
												backgroundColor: isDark ? 'rgba(0, 212, 255, 0.1)' : 'rgba(0, 145, 179, 0.1)',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												color: theme.palette.primary.main,
											}}
										>
											{flag.isHighlight ? (
												<PublicRounded sx={{ fontSize: 24 }} />
											) : (
												<SchoolRounded sx={{ fontSize: 24 }} />
											)}
										</Box>

										<Chip
											label={flag.label}
											size="small"
											sx={{
												fontSize: '0.75rem',
												fontWeight: 600,
												backgroundColor: flag.isHighlight
													? isDark
														? 'rgba(0, 212, 255, 0.12)'
														: 'rgba(0, 145, 179, 0.12)'
													: isDark
														? 'rgba(255, 255, 255, 0.04)'
														: 'rgba(0, 0, 0, 0.04)',
												color: flag.isHighlight ? theme.palette.primary.main : theme.palette.text.secondary,
												border: flag.isHighlight
													? `1px solid ${theme.palette.primary.main}40`
													: '1px solid rgba(255, 255, 255, 0.06)',
											}}
										/>
									</Stack>

									<Typography
										variant="h6"
										sx={{
											fontWeight: 700,
											fontSize: '1.1rem',
											lineHeight: 1.35,
											mb: 1,
											color: theme.palette.text.primary,
										}}
									>
										{t(education.name)}
									</Typography>

									<Typography
										variant="body2"
										sx={{
											color: theme.palette.text.secondary,
											mb: 2.5,
											fontSize: '0.875rem',
										}}
									>
										{t(education.institution)}
									</Typography>
								</Box>

								{/* Footer: Period + Status */}
								<Stack
									direction="row"
									sx={{
										justifyContent: 'space-between',
										alignItems: 'center',
										pt: 2.5,
										borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid rgba(0, 0, 0, 0.06)',
									}}
								>
									<Typography
										variant="caption"
										sx={{
											color: theme.palette.text.secondary,
											fontWeight: 600,
											fontSize: '0.8rem',
										}}
									>
										{formatPeriod(education.period)}
									</Typography>

									<Chip
										label={t(education.status)}
										size="small"
										sx={{
											height: 22,
											fontSize: '0.7rem',
											fontWeight: 700,
											backgroundColor: isCompleted
												? 'rgba(16, 185, 129, 0.12)'
												: isDark
													? 'rgba(255, 255, 255, 0.05)'
													: 'rgba(0, 0, 0, 0.05)',
											color: isCompleted ? '#10B981' : theme.palette.text.secondary,
										}}
									/>
								</Stack>
							</Card>
						);
					})}
				</Box>
			</Container>
		</Box>
	);
};
