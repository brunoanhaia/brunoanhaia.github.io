import { UiTechBadge } from '@src/components/ui-tech-badge';
import { FeaturedProject } from '@src/projects.data';
import { GitHub, Launch, StarRounded } from '@mui/icons-material';
import { Box, Button, Card, Chip, IconButton, Stack, Tooltip, Typography, useTheme } from '@mui/material';

export type ProjectCardProps = {
	project: FeaturedProject;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';

	return (
		<Card
			sx={{
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				backgroundColor: isDark ? '#121214' : '#ffffff',
				borderRadius: '1.25rem',
				border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
				overflow: 'hidden',
				transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
				'&:hover': {
					transform: 'translateY(-6px)',
					borderColor: theme.palette.primary.main,
					boxShadow: isDark
						? '0 16px 40px -10px rgba(0, 212, 255, 0.18)'
						: '0 16px 40px -10px rgba(0, 145, 179, 0.18)',
				},
			}}
		>
			{/* Preview Gradient Banner */}
			<Box
				sx={{
					height: 120,
					background: project.gradient,
					p: 2,
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'flex-start',
					position: 'relative',
				}}
			>
				{project.featured && (
					<Chip
						label="Featured"
						size="small"
						icon={<StarRounded sx={{ fontSize: '14px !important' }} />}
						sx={{
							backgroundColor: isDark ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 145, 179, 0.2)',
							color: theme.palette.primary.main,
							fontWeight: 700,
							fontSize: '0.7rem',
							backdropFilter: 'blur(8px)',
						}}
					/>
				)}

				<Stack
					direction="row"
					spacing={0.5}
					sx={{ ml: 'auto' }}
				>
					<Tooltip title="View Source Code">
						<IconButton
							component="a"
							href={project.repoUrl}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`GitHub repository for ${project.title}`}
							size="small"
							sx={{
								backgroundColor: isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.6)',
								color: theme.palette.text.primary,
								backdropFilter: 'blur(8px)',
								'&:hover': { color: theme.palette.primary.main },
							}}
						>
							<GitHub sx={{ fontSize: 18 }} />
						</IconButton>
					</Tooltip>

					{project.demoUrl && (
						<Tooltip title="Live Demo">
							<IconButton
								component="a"
								href={project.demoUrl}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Live demo for ${project.title}`}
								size="small"
								sx={{
									backgroundColor: isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.6)',
									color: theme.palette.text.primary,
									backdropFilter: 'blur(8px)',
									'&:hover': { color: theme.palette.primary.main },
								}}
							>
								<Launch sx={{ fontSize: 18 }} />
							</IconButton>
						</Tooltip>
					)}
				</Stack>
			</Box>

			{/* Content Body */}
			<Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
				<Typography
					variant="h5"
					sx={{
						fontWeight: 800,
						fontSize: '1.25rem',
						mb: 1.25,
						color: theme.palette.text.primary,
					}}
				>
					{project.title}
				</Typography>

				<Typography
					variant="body2"
					sx={{
						color: theme.palette.text.secondary,
						lineHeight: 1.65,
						mb: 3,
						flex: 1,
					}}
				>
					{project.description}
				</Typography>

				{/* Tech Stack Pills */}
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: 0.75,
						mb: 3,
					}}
				>
					{project.techStack.map((tech) => (
						<UiTechBadge
							key={tech}
							name={tech}
						/>
					))}
				</Box>

				{/* Action Footer */}
				<Stack
					direction="row"
					spacing={1.5}
					sx={{
						pt: 2,
						borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid rgba(0, 0, 0, 0.06)',
					}}
				>
					<Button
						component="a"
						href={project.repoUrl}
						target="_blank"
						rel="noopener noreferrer"
						variant="outlined"
						size="small"
						startIcon={<GitHub />}
						sx={{
							flex: 1,
							fontWeight: 600,
							fontSize: '0.8rem',
						}}
					>
						Repository
					</Button>

					{project.demoUrl && (
						<Button
							component="a"
							href={project.demoUrl}
							target="_blank"
							rel="noopener noreferrer"
							variant="contained"
							size="small"
							startIcon={<Launch />}
							sx={{
								flex: 1,
								fontWeight: 700,
								fontSize: '0.8rem',
							}}
						>
							Live Site
						</Button>
					)}
				</Stack>
			</Box>
		</Card>
	);
};
