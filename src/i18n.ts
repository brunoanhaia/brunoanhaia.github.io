import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const tokens = {
	sections: {
		resume: {
			title: 'Resumé',
		},
	},
	education: {
		intitution: {
			FACENS: 'Sorocaba College of Engineering (FACENS)',
			UEC: 'Tokyo University of Electrical Communications (UEC)',
			FATEC: 'Sorocaba Technological College (FATEC)',
		},
		status: {
			finished: 'Finished',
			uncompleted: 'Uncompleted',
			inProgress: 'In progress',
		},
		courseName: {
			electricalEngineering: 'Bachelor in Electrical Engineering',
			sandwich: 'Sandwich degree',
			systemAnalisysAndDevelopment: 'System Analysis and Development - Information Technology',
		},
	},
	work: {
		company: {
			Fit: {
				name: 'FIT - Institute of Technology',
				experience: {
					trainee:
						'Develop automation for testing the ABECS library using a proprietary framework;Leader of the study on battery consumption in payment terminals;Developer of applications for point-of-sale (POS) terminals.',
					IDev: 'Creator of the onboarding guide for new members in the engineering department;Contribute to reducing the backlog bug count from 300 to zero;Started working with C# and Angular',
					ILead: '',
					IILead: "Technical leader of the development team;Maintainer of the project's source code repositories;Responsible for CI/CD pipelines;Member of the architecture committee;Mentor for new members in the engineering department.",
				},
			},
			Aegro: {
				name: 'Aegro',
				experience:
					'Developed hybrid applications, using both AngularJS and Angular 12;Proposed design improvements related to product usability and accessibility;Migration of AngularJS components to Angular 12+',
			},
			Crud: {
				name: 'Crud Works',
				experience:
					'Produced websites compatible with multiple browsers;Designed and updated layouts to meet usability and performance requirements;Worked together with the Designer team;Learned the core concepts of front-end development and Mobile-first.',
			},
		},
		role: {
			analyst: 'Software Development Analyst',
			engineer: '{{level}} Software Engineer',
			leadEngineer: '{{level}} Lead | Software Engineer',
		},
		period: {
			current: 'current',
		},
	},
};

i18n.use(initReactI18next).init({
	debug: true,
	returnObjects: true,
	resources: {
		en: {
			translation: {
				...tokens,
			},
		},
	},
	lng: 'en',
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
