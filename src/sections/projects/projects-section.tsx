import { Code as CodeIcon, GitHub as GitHubIcon, OpenInNew as OpenInNewIcon } from '@mui/icons-material';
import { Box, Button, Card, Chip, Container, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { useGitHubProfile } from '@src/hooks/use-github-profile';
import { useTranslation } from 'react-i18next';

export const ProjectsSection = () => {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';
	const { t } = useTranslation();
	const { repositoriesInfo } = useGitHubProfile();

	const fallbackProjects = [
		{
			name: 'brunoanhaia.github.io',
			html_url: 'https://github.com/brunoanhaia/brunoanhaia.github.io',
			description: 'Personal portfolio architected with React 19, TypeScript, MUI 9 & Vite.',
		},
		{
			name: 'planning-poker',
			html_url: 'https://github.com/brunoanhaia/planning-poker',
			description: 'Scrum and Agile real-time estimation platform.',
		},
		{
			name: 'git-aliases',
			html_url: 'https://github.com/brunoanhaia/git-aliases',
			description: 'Productivity Git aliases and developer workflow configurations.',
		},
	];

	const displayProjects = repositoriesInfo.length > 0 ? repositoriesInfo : fallbackProjects;

	return (
		<Box
			id="projects"
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
						{t('sections.projects.title')}
					</Typography>
					<Typography
						variant="body1"
						sx={{
							color: theme.palette.text.secondary,
							maxWidth: 600,
							mx: 'auto',
						}}
					>
						{t('sections.projects.subtitle')}
					</Typography>
				</Box>

				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
						gap: 3,
					}}
				>
					{displayProjects.map((repo) => (
						<Card
							key={repo.name}
							sx={{
								p: 3,
								height: '100%',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								backgroundColor: isDark ? '#121214' : '#ffffff',
								borderRadius: '1rem',
								transition: 'all 0.25s ease',
								'&:hover': {
									transform: 'translateY(-4px)',
									borderColor: theme.palette.primary.main,
									boxShadow: isDark
										? '0 10px 30px -10px rgba(0, 212, 255, 0.15)'
										: '0 10px 30px -10px rgba(0, 145, 179, 0.15)',
								},
							}}
						>
							<Box>
								<Stack
									direction="row"
									sx={{
										justifyContent: 'space-between',
										alignItems: 'center',
										mb: 2,
									}}
								>
									<Box
										sx={{
											width: 40,
											height: 40,
											borderRadius: '10px',
											backgroundColor: isDark ? 'rgba(0, 212, 255, 0.1)' : 'rgba(0, 145, 179, 0.1)',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											color: theme.palette.primary.main,
										}}
									>
										<CodeIcon sx={{ fontSize: 22 }} />
									</Box>

									<IconButton
										component="a"
										href={repo.html_url}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`Open repository ${repo.name}`}
										size="small"
										sx={{
											color: theme.palette.text.secondary,
											'&:hover': { color: theme.palette.primary.main },
										}}
									>
										<OpenInNewIcon sx={{ fontSize: 18 }} />
									</IconButton>
								</Stack>

								<Typography
									variant="h6"
									sx={{
										fontWeight: 700,
										fontSize: '1.1rem',
										mb: 1,
										wordBreak: 'break-word',
									}}
								>
									{repo.name}
								</Typography>

								<Typography
									variant="body2"
									sx={{
										color: theme.palette.text.secondary,
										lineHeight: 1.6,
										mb: 2,
									}}
								>
									{repo.description || 'Open source software repository.'}
								</Typography>
							</Box>

							<Stack
								direction="row"
								spacing={1}
								sx={{
									alignItems: 'center',
									pt: 2,
									borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid rgba(0, 0, 0, 0.06)',
								}}
							>
								<Chip
									size="small"
									label="GitHub"
									icon={<GitHubIcon sx={{ fontSize: '14px !important' }} />}
									sx={{
										fontSize: '0.75rem',
										fontWeight: 600,
										backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
									}}
								/>
							</Stack>
						</Card>
					))}
				</Box>

				<Box sx={{ textAlign: 'center', mt: 6 }}>
					<Button
						variant="outlined"
						color="primary"
						component="a"
						href="https://github.com/brunoanhaia?tab=repositories"
						target="_blank"
						rel="noopener noreferrer"
						endIcon={<OpenInNewIcon />}
						sx={{
							px: 3,
							py: 1,
							fontWeight: 600,
							borderRadius: '2rem',
						}}
					>
						{t('sections.projects.viewAll')}
					</Button>
				</Box>
			</Container>
		</Box>
	);
};
