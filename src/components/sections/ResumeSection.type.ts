export type ResumeSectionProps = {
	resumeData: ResumeData;
};

export type ResumeData = {
	name: string;
	age: string;
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
	period: string;
	experience: string;
};
