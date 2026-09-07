import { useEffect, useState } from 'react';

export const useActiveSection = (sectionIds: string[], defaultSection: string = 'hero'): string => {
	const [activeSection, setActiveSection] = useState<string>(defaultSection);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + 120;

			for (const id of sectionIds) {
				const element = document.getElementById(id);
				if (!element) {
					continue;
				}

				const top = element.offsetTop;
				const height = element.offsetHeight;

				if (scrollPosition >= top && scrollPosition < top + height) {
					setActiveSection(id);
					return;
				}
			}

			if (window.scrollY < 100) {
				setActiveSection(defaultSection);
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [sectionIds, defaultSection]);

	return activeSection;
};
