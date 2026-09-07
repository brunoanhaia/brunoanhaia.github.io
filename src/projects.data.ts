export type FeaturedProject = {
	title: string;
	description: string;
	techStack: string[];
	repoUrl: string;
	demoUrl?: string;
	gradient: string;
	featured?: boolean;
};

export const featuredProjects: FeaturedProject[] = [
	{
		title: 'brunoanhaia.github.io',
		description:
			'Modern, responsive developer portfolio architected with React 19, TypeScript, MUI 9, Vite 8, and automated CI/CD pipeline.',
		techStack: ['React 19', 'TypeScript', 'MUI 9', 'Vite', 'Vitest'],
		repoUrl: 'https://github.com/brunoanhaia/brunoanhaia.github.io',
		demoUrl: 'https://brunoanhaia.github.io',
		gradient: 'linear-gradient(135deg, #00D4FF22 0%, #8B5CF633 100%)',
		featured: true,
	},
	{
		title: 'planning-poker',
		description:
			'Real-time Scrum & Agile estimation tool engineered for distributed engineering teams with interactive card voting.',
		techStack: ['React', 'TypeScript', 'WebSocket', 'Tailwind'],
		repoUrl: 'https://github.com/brunoanhaia/planning-poker',
		gradient: 'linear-gradient(135deg, #3B82F622 0%, #10B98133 100%)',
		featured: true,
	},
	{
		title: 'git-aliases',
		description:
			'Developer productivity tooling and shell configuration suite for streamlined Git workflows and branch management.',
		techStack: ['Shell', 'Git', 'CLI', 'DevOps'],
		repoUrl: 'https://github.com/brunoanhaia/git-aliases',
		gradient: 'linear-gradient(135deg, #F59E0B22 0%, #EF444433 100%)',
		featured: false,
	},
];
