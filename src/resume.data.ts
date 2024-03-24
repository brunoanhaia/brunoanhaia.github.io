import { ResumeData } from './components/sections/ResumeSection.type';

export const resumeData: ResumeData = {
	name: 'Bruno Anhaia',
	born: new Date(1993, 2),
	education: [
		{
			institution: 'Sorocaba College of Engineering (FACENS)',
			status: 'finished',
			name: 'Bachelor in Electrical Engineering',
		},
		{
			institution: 'Tokyo University of Electrical Communications (UEC)',
			status: 'finished',
			name: 'Sandwich degree',
		},
		{
			institution: 'Sorocaba Technological College (FATEC)',
			status: 'uncompleted',
			name: 'System Analysis and Development - Information Technology',
		},
	],
	work: [
		{
			company: 'FIT - Institute of Technology',
			period: {
				start: new Date(2023, 10),
			},
			role: 'Tech Lead | II Software Engineer',
			experience: [
				'Technical leader of the development team;',
				"Maintainer of the project's source code repositories; ",
				'Responsible for CI/CD pipelines;',
				'Member of the architecture committee;',
				'Mentor for new members in the engineering department.',
			],
		},
		{
			company: 'FIT - Institute of Technology',
			period: {
				start: new Date(2022, 5),
				end: new Date(2023, 9),
			},
			role: 'Tech Lead | I Software Engineer',
			experience: [''],
		},
		{
			company: 'Aegro',
			period: {
				start: new Date(2022, 3),
			},
			role: 'Mid Software Engineer',
			experience: [
				'Developed hybrid applications, using  both AngularJS and Angular 12;',
				'Proposed design improvements related to product usability and accessibility;',
				'Migration of AngularJS components to Angular 12+.',
			],
		},
		{
			company: 'FIT - Institute of Technology',
			period: {
				start: new Date(2020, 3),
				end: new Date(2022, 2),
			},
			role: 'I Software Engineer',
			experience: [
				'Creator of the onboarding guide for new members in the engineering department;',
				'Contribute to reducing the backlog bug count from 300 to zero;',
				'Started working with C# and Angular.',
			],
		},
		{
			company: 'FIT - Institute of Technology',
			period: {
				start: new Date(2019, 0),
				end: new Date(2020, 3),
			},
			role: 'Trainne Software Engineer',
			experience: [
				'Develop automation for testing the ABECS library using a proprietary framework;',
				'Leader of the study on battery consumption in payment terminals;',
				'Developer of applications for point-of-sale (POS) terminals.',
			],
		},
		{
			company: 'Crud Works',
			period: {
				start: new Date(2018, 2),
				end: new Date(2019, 0),
			},
			role: 'Software Engineer',
			experience: [
				'Produced websites compatible with multiple browsers.',
				'Designed and updated layouts to meet usability and performance requirements.',
				'Worked together with the Designer team.',
				'Learned the core concepts of front-end development and Mobile-first.',
			],
		},
	],
};
