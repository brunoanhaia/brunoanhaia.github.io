import { CheckCircleOutlineRounded, TrendingUpRounded, WorkOutlineRounded } from '@mui/icons-material';
import { Box, Card, Chip, Container, Stack, Typography, useTheme } from '@mui/material';
import { resumeData } from '@src/resume.data';
import { Role, TypeOfChange } from '@src/types/resume.types';
import { formatPeriod } from '@src/utils/format-period';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

type FlattenedWorkItem = {
	id: string;
	companyKey: string;
	companyName: string;
	role: Role;
	isCurrent: boolean;
};

export const ExperienceSection = () => {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';
	const { t } = useTranslation();

	const flattenedRoles = useMemo<FlattenedWorkItem[]>(() => {
		const items: FlattenedWorkItem[] = [];
		resumeData.work.forEach((work) => {
			work.roles.forEach((role, rIdx) => {
				items.push({
					id: `${work.company}-${role.name}-${role.level}-${rIdx}`,
					companyKey: work.company,
					companyName: t(work.company),
					role,
					isCurrent: !role.period.end,
				});
			});
		});
		return items;
	}, [t]);

	const [selectedIndex, setSelectedIndex] = useState(0);
	const activeItem = flattenedRoles[selectedIndex] || flattenedRoles[0];
	const expList = activeItem?.role.experience ? t(activeItem.role.experience).split(';') : [];

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

				{/* Interactive Experience Grid */}
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', md: '320px 1fr' },
						gap: 3.5,
						alignItems: 'start',
					}}
				>
					{/* Left Column: Milestones Selector */}
					<Stack
						spacing={1.5}
						sx={{
							maxHeight: { md: 540 },
							overflowY: 'auto',
							pr: { md: 1 },
						}}
					>
						{flattenedRoles.map((item, idx) => {
							const isSelected = selectedIndex === idx;
							const isPromotion = item.role.typeOfChange === TypeOfChange.Promotion;

							return (
								<Card
									key={item.id}
									onClick={() => setSelectedIndex(idx)}
									sx={{
										p: 2,
										cursor: 'pointer',
										backgroundColor: isSelected
											? isDark
												? 'rgba(0, 212, 255, 0.08)'
												: 'rgba(0, 145, 179, 0.08)'
											: isDark
												? '#121214'
												: '#ffffff',
										borderColor: isSelected
											? theme.palette.primary.main
											: isDark
												? 'rgba(255, 255, 255, 0.06)'
												: 'rgba(0, 0, 0, 0.06)',
										borderRadius: '1rem',
										transition: 'all 0.2s ease',
										position: 'relative',
										'&:hover': {
											borderColor: theme.palette.primary.main,
											transform: 'translateX(4px)',
										},
									}}
								>
									{item.isCurrent && (
										<Box
											sx={{
												position: 'absolute',
												top: 14,
												right: 14,
												width: 8,
												height: 8,
												borderRadius: '50%',
												backgroundColor: '#10B981',
												boxShadow: '0 0 8px #10B981',
											}}
										/>
									)}

									<Typography
										variant="caption"
										sx={{
											color: isSelected ? theme.palette.primary.main : theme.palette.text.secondary,
											fontWeight: 700,
											fontSize: '0.7rem',
											letterSpacing: '0.04em',
											textTransform: 'uppercase',
											display: 'flex',
											alignItems: 'center',
											gap: 0.5,
										}}
									>
										{item.companyName}
										{isPromotion && (
											<Chip
												label="Promotion"
												size="small"
												icon={<TrendingUpRounded sx={{ fontSize: '12px !important' }} />}
												sx={{
													height: 18,
													fontSize: '0.65rem',
													fontWeight: 700,
													backgroundColor: isDark ? 'rgba(139, 92, 246, 0.2)' : 'rgba(124, 58, 237, 0.15)',
													color: theme.palette.secondary.main,
												}}
											/>
										)}
									</Typography>

									<Typography
										variant="subtitle2"
										sx={{
											fontWeight: 700,
											color: theme.palette.text.primary,
											fontSize: '0.95rem',
											mt: 0.5,
										}}
									>
										{t(item.role.name)} {item.role.level !== 'none' ? `• ${item.role.level}` : ''}
									</Typography>

									<Typography
										variant="caption"
										sx={{
											color: theme.palette.text.secondary,
											display: 'block',
											mt: 0.25,
											fontSize: '0.75rem',
										}}
									>
										{formatPeriod(item.role.period)}
									</Typography>
								</Card>
							);
						})}
					</Stack>

					{/* Right Column: Active Role Detail Card */}
					<Card
						sx={{
							p: { xs: 3, sm: 4 },
							backgroundColor: isDark ? '#121214' : '#ffffff',
							borderRadius: '1.25rem',
							border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
							boxShadow: isDark
								? '0 20px 40px -15px rgba(0, 212, 255, 0.08)'
								: '0 20px 40px -15px rgba(0, 145, 179, 0.08)',
						}}
					>
						{activeItem && (
							<Box>
								{/* Header */}
								<Stack
									direction={{ xs: 'column', sm: 'row' }}
									spacing={2}
									sx={{
										justifyContent: 'space-between',
										alignItems: { xs: 'flex-start', sm: 'center' },
										pb: 3,
										mb: 3,
										borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid rgba(0, 0, 0, 0.06)',
									}}
								>
									<Box>
										<Stack
											direction="row"
											spacing={1}
											sx={{ alignItems: 'center', mb: 0.5 }}
										>
											<Box
												sx={{
													width: 32,
													height: 32,
													borderRadius: '8px',
													backgroundColor: isDark ? 'rgba(0, 212, 255, 0.1)' : 'rgba(0, 145, 179, 0.1)',
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
													color: theme.palette.primary.main,
												}}
											>
												<WorkOutlineRounded sx={{ fontSize: 18 }} />
											</Box>
											<Typography
												variant="subtitle1"
												sx={{
													fontWeight: 700,
													color: theme.palette.primary.main,
													fontSize: '1rem',
												}}
											>
												{activeItem.companyName}
											</Typography>
										</Stack>

										<Typography
											variant="h4"
											sx={{
												fontWeight: 800,
												fontSize: { xs: '1.35rem', sm: '1.65rem' },
												color: theme.palette.text.primary,
											}}
										>
											{t(activeItem.role.name)}{' '}
											{activeItem.role.level !== 'none' && (
												<Typography
													component="span"
													sx={{
														color: theme.palette.primary.main,
														fontWeight: 700,
														fontSize: 'inherit',
													}}
												>
													Level {activeItem.role.level}
												</Typography>
											)}
										</Typography>
									</Box>

									<Box
										sx={{
											px: 2,
											py: 0.75,
											borderRadius: '2rem',
											backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)',
											border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
										}}
									>
										<Typography
											variant="caption"
											sx={{
												color: theme.palette.text.secondary,
												fontWeight: 700,
												fontSize: '0.8rem',
											}}
										>
											{formatPeriod(activeItem.role.period)}
										</Typography>
									</Box>
								</Stack>

								{/* Achievements / Responsibilities */}
								<Typography
									variant="subtitle2"
									sx={{
										fontWeight: 700,
										color: theme.palette.text.primary,
										mb: 2,
										letterSpacing: '0.02em',
									}}
								>
									Key Deliverables & Responsibilities
								</Typography>

								<Stack spacing={2}>
									{expList.map((bullet, bIdx) => (
										<Stack
											key={bIdx}
											direction="row"
											spacing={1.5}
											sx={{ alignItems: 'flex-start' }}
										>
											<CheckCircleOutlineRounded
												sx={{
													fontSize: 18,
													color: theme.palette.primary.main,
													mt: 0.25,
													flexShrink: 0,
												}}
											/>
											<Typography
												variant="body2"
												sx={{
													color: theme.palette.text.secondary,
													lineHeight: 1.65,
													fontSize: '0.9rem',
												}}
											>
												{bullet}
											</Typography>
										</Stack>
									))}
								</Stack>
							</Box>
						)}
					</Card>
				</Box>
			</Container>
		</Box>
	);
};
