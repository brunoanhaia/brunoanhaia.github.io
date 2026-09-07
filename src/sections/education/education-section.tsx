import { School as SchoolIcon } from '@mui/icons-material';
import { Box, Card, Container, Stack, Typography, useTheme } from '@mui/material';
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

	return (
		<Box
			id="education"
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
						{t('sections.education.title')}
					</Typography>
					<Typography
						variant="body1"
						sx={{
							color: theme.palette.text.secondary,
							maxWidth: 600,
							mx: 'auto',
						}}
					>
						{t('sections.education.subtitle')}
					</Typography>
				</Box>

				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
						gap: 3,
					}}
				>
					{sortedEducation.map((education) => {
						const isInternational = education.institution.includes('UEC');
						return (
							<Card
								key={education.institution}
								sx={{
									p: 3,
									height: '100%',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-between',
									backgroundColor: isDark ? '#121214' : '#ffffff',
									borderRadius: '1rem',
									position: 'relative',
									overflow: 'hidden',
									transition: 'all 0.2s ease',
									'&:hover': {
										transform: 'translateY(-4px)',
										borderColor: theme.palette.primary.main,
									},
								}}
							>
								{isInternational && (
									<Box
										sx={{
											position: 'absolute',
											top: 16,
											right: 16,
											px: 1,
											py: 0.25,
											borderRadius: '1rem',
											backgroundColor: isDark ? 'rgba(0, 212, 255, 0.1)' : 'rgba(0, 145, 179, 0.1)',
											border: `1px solid ${theme.palette.primary.main}40`,
										}}
									>
										<Typography
											variant="caption"
											sx={{
												fontWeight: 700,
												color: theme.palette.primary.main,
												fontSize: '0.7rem',
											}}
										>
											Tokyo, Japan 🇯🇵
										</Typography>
									</Box>
								)}

								<Box>
									<Box
										sx={{
											width: 44,
											height: 44,
											borderRadius: '10px',
											backgroundColor: isDark ? 'rgba(0, 212, 255, 0.1)' : 'rgba(0, 145, 179, 0.1)',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											color: theme.palette.primary.main,
											mb: 2,
										}}
									>
										<SchoolIcon />
									</Box>

									<Typography
										variant="h6"
										sx={{
											fontWeight: 700,
											fontSize: '1.05rem',
											lineHeight: 1.3,
											mb: 1,
										}}
									>
										{t(education.name)}
									</Typography>

									<Typography
										variant="body2"
										sx={{
											color: theme.palette.text.secondary,
											mb: 2,
										}}
									>
										{t(education.institution)}
									</Typography>
								</Box>

								<Stack
									direction="row"
									sx={{
										justifyContent: 'space-between',
										alignItems: 'center',
										pt: 2,
										borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid rgba(0, 0, 0, 0.06)',
									}}
								>
									<Typography
										variant="caption"
										sx={{
											color: theme.palette.text.secondary,
											fontWeight: 600,
										}}
									>
										{formatPeriod(education.period)}
									</Typography>
									<Typography
										variant="caption"
										sx={{
											color:
												education.status.includes('completed') && !education.status.includes('notCompleted')
													? '#10B981'
													: theme.palette.text.secondary,
											fontWeight: 700,
										}}
									>
										{t(education.status)}
									</Typography>
								</Stack>
							</Card>
						);
					})}
				</Box>
			</Container>
		</Box>
	);
};
