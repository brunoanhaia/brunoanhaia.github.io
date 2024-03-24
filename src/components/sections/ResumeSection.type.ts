export type ResumeSectionProps = {
	resumeData: ResumeData;
};

export type ResumeData = {
	name: string;
	born: Date;
	education: Education[];
	work: Work[];
};

export type Education = {
	institution: string;
	status: string;
	name: string;
};

export type Work = {
	company: string;
	period: {
		start: Date;
		end?: Date;
	};
	role: string;
	experience: string[];
};
