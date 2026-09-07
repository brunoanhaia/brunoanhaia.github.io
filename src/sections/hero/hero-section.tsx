import { HeroAvatarCard } from './hero-avatar-card';
import { HeroStatsCard } from './hero-stats-card';
import { HeroTechStackCard } from './hero-tech-stack-card';
import { HeroTimelineCard } from './hero-timeline-card';
import { UiTerminalWidget } from '@src/components/ui-terminal-widget';
import { Box, Container } from '@mui/material';

export const HeroSection = () => {
	return (
		<Box
			id="hero"
			component="section"
			sx={{
				minHeight: { xs: 'auto', md: 'calc(100vh - 70px)' },
				pt: { xs: 11, md: 13 },
				pb: { xs: 6, md: 8 },
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<Container maxWidth="lg">
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
						gap: { xs: 2.5, md: 3 },
					}}
				>
					{/* Main Hero Card (2 columns on desktop) */}
					<Box sx={{ gridColumn: { xs: 'span 1', md: 'span 2' } }}>
						<HeroAvatarCard />
					</Box>

					{/* Terminal Widget (1 column on desktop) */}
					<Box sx={{ gridColumn: 'span 1', minHeight: { xs: 260, md: 'auto' } }}>
						<UiTerminalWidget />
					</Box>

					{/* Career Timeline Card */}
					<Box sx={{ gridColumn: 'span 1' }}>
						<HeroTimelineCard />
					</Box>

					{/* Tech Stack Card */}
					<Box sx={{ gridColumn: 'span 1' }}>
						<HeroTechStackCard />
					</Box>

					{/* Stats / Highlights Card */}
					<Box sx={{ gridColumn: 'span 1' }}>
						<HeroStatsCard />
					</Box>
				</Box>
			</Container>
		</Box>
	);
};
