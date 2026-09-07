type I18nTokenFormat = {
	nav: {
		home: string;
		experience: string;
		education: string;
		projects: string;
		blog: string;
	};
	hero: {
		role: string;
		tagline: string;
		location: string;
		status: string;
		viewProjects: string;
		contactMe: string;
	};
	sections: {
		experience: {
			title: string;
			subtitle: string;
		};
		education: {
			title: string;
			subtitle: string;
		};
		projects: {
			title: string;
			subtitle: string;
			viewAll: string;
		};
		blog: {
			title: string;
			subtitle: string;
			comingSoon: string;
			stayTuned: string;
		};
		resume: {
			title: string;
		};
	};
	education: {
		institution: {
			FACENS: string;
			UEC: string;
			FATEC: string;
		};
		status: {
			completed: string;
			notCompleted: string;
			inProgress: string;
		};
		courseName: {
			electricalEngineering: string;
			sandwich: string;
			systemAnalysisAndDevelopment: string;
		};
	};
	work: {
		company: {
			Fit: {
				name: string;
				experience: {
					trainee: string;
					IDev: string;
					ILead: string;
					IILead: string;
				};
			};
			Aegro: {
				name: string;
				experience: string;
			};
			Crud: {
				name: string;
				experience: string;
			};
		};
		role: {
			analyst: string;
			engineer: string;
			leadEngineer: string;
		};
		period: {
			current: string;
		};
	};
	footer: {
		tagline: string;
		allRightsReserved: string;
		builtWith: string;
	};
	common: {
		toggleTheme: string;
		toggleLanguage: string;
		openMenu: string;
		closeMenu: string;
	};
};

export type { I18nTokenFormat };
