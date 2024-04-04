import { MenuConfig } from './components/ui-nav-bar/ui-nav-bar.type';

export const menuConfig: MenuConfig = {
	textList: [
		{
			href: '/',
			text: 'Home',
		},
		{
			href: '/work',
			text: 'Work',
		},
		{
			href: '/education',
			text: 'Education',
		},
		{
			href: '/projects',
			text: 'Projects',
		},
	],
	iconList: [
		{
			href: 'https://www.linkedin.com/in/anhaiabruno/',
			target: '_blank',
			text: 'Linkedin',
			icon: 'linkedin',
		},
		{
			href: 'https://github.com/brunoanhaia/',
			target: '_blank',
			text: 'Github',
			icon: 'github',
		},
	],
};
