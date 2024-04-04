type ResumeData = {
	name: string;
	born: Date;
	education: Education[];
	work: Work[];
};

type Education = {
	institution: string;
	status: string;
	name: string;
	period: Period
};

type Work = {
	company: string;
	roles: Array<Role>;
};

type Role = {
	name: string;
	level: string;
	experience?: string;
	period: Period;
	typeOfChange?: TypeOfChange;
};

type Period = {
	start: Date;
	end?: Date;
};

enum TypeOfChange {
	None,
	Promotion,
	RoleChange,
}

export { TypeOfChange };
export type { ResumeData, Education, Work, Role, Period };
