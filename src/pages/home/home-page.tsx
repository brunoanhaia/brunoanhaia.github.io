import { UiGlassNavbar } from '@src/components/ui-glass-navbar';
import { BlogSection } from '@src/sections/blog';
import { EducationSection } from '@src/sections/education';
import { ExperienceSection } from '@src/sections/experience';
import { FooterSection } from '@src/sections/footer';
import { HeroSection } from '@src/sections/hero';
import { ProjectsSection } from '@src/sections/projects';

export const HomePage = () => {
	return (
		<>
			<UiGlassNavbar />
			<main>
				<HeroSection />
				<ExperienceSection />
				<EducationSection />
				<ProjectsSection />
				<BlogSection />
			</main>
			<FooterSection />
		</>
	);
};
