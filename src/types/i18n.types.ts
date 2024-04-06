type I18nTokenFormat = {
	sections: {
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
			systemAnalisysAndDevelopment: string;
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
};

export type { I18nTokenFormat };
