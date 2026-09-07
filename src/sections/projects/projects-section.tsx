import { ProjectCard } from './project-card';
import { OpenInNew } from '@mui/icons-material';
import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import { FeaturedProject, featuredProjects } from '@src/projects.data';
import { useTranslation } from 'react-i18next';

export const ProjectsSection = () => {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';
	const { t } = useTranslation();

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

				{/* Projects Grid */}
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
						gap: 3.5,
					}}
				>
					{featuredProjects.map((project: FeaturedProject) => (
						<ProjectCard
							key={project.title}
							project={project}
						/>
					))}
				</Box>

				{/* Footer CTA */}
				<Box sx={{ textAlign: 'center', mt: 7 }}>
					<Button
						variant="outlined"
						color="primary"
						component="a"
						href="https://github.com/brunoanhaia?tab=repositories"
						target="_blank"
						rel="noopener noreferrer"
						endIcon={<OpenInNew />}
						sx={{
							px: 3.5,
							py: 1.25,
							fontWeight: 600,
							borderRadius: '2rem',
							borderWidth: '1.5px',
						}}
					>
						{t('sections.projects.viewAll')}
					</Button>
				</Box>
			</Container>
		</Box>
	);
};
