import { UiAnimateOnScroll } from '@src/components/ui-animate-on-scroll';
import { UiGlassNavbar } from '@src/components/ui-glass-navbar';
import { UiScrollProgress } from '@src/components/ui-scroll-progress';
import { BlogSection } from '@src/sections/blog';
import { EducationSection } from '@src/sections/education';
import { ExperienceSection } from '@src/sections/experience';
import { FooterSection } from '@src/sections/footer';
import { HeroSection } from '@src/sections/hero';
import { ProjectsSection } from '@src/sections/projects';

export const HomePage = () => {
	return (
		<>
			<UiScrollProgress />
			<UiGlassNavbar />
			<main>
				<HeroSection />

				<UiAnimateOnScroll delay={0.1}>
					<ExperienceSection />
				</UiAnimateOnScroll>

				<UiAnimateOnScroll delay={0.1}>
					<EducationSection />
				</UiAnimateOnScroll>

				<UiAnimateOnScroll delay={0.1}>
					<ProjectsSection />
				</UiAnimateOnScroll>

				<UiAnimateOnScroll delay={0.1}>
					<BlogSection />
				</UiAnimateOnScroll>
			</main>
			<FooterSection />
		</>
	);
};
