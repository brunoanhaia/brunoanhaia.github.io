import { ResumeData, TypeOfChange } from "@src/types/resume.types";

export const resumeData: ResumeData = {
	name: 'Bruno Anhaia',
	born: new Date(1993, 2),
	education: [
		{
			institution: 'education.institution.FACENS',
			status: 'education.status.finished',
			name: 'education.courseName.electricalEngineering',
		},
		{
			institution: 'education.institution.UEC',
			status: 'education.status.finished',
			name: 'education.courseName.sandwich',
		},
		{
			institution: 'education.institution.FATEC',
			status: 'education.status.uncompleted',
			name: 'education.courseName.systemAnalisysAndDevelopment',
		},
	],
	work: [
		{
			company: 'work.company.Fit.name',
			roles: [
				{
					period: {
						start: new Date(2023, 10),
					},
					name: 'work.role.leadEngineer',
					level: 'II',
					experience: 'work.company.Fit.experience.IILead',
					typeOfChange: TypeOfChange.Promotion,
				},
				{
					period: {
						start: new Date(2022, 5),
						end: new Date(2023, 9),
					},
					name: 'work.role.leadEngineer',
					level: 'I',
				},
			],
		},
		{
			company: 'work.company.Aegro.name',
			roles: [
				{
					period: {
						start: new Date(2022, 2),
						end: new Date(2022, 5),
					},
					name: 'work.role.engineer',
					level: 'II',
					experience: 'work.company.Aegro.experience',
				},
			],
		},
		{
			company: 'work.company.Fit.name',
			roles: [
				{
					period: {
						start: new Date(2020, 3),
						end: new Date(2022, 2),
					},
					name: 'work.role.engineer',
					level: 'I',
					experience: 'work.company.Fit.experience.IDev',
				},
				{
					period: {
						start: new Date(2019, 0),
						end: new Date(2020, 3),
					},
					name: 'work.role.engineer',
					level: 'Trainne',
					experience: 'work.company.Fit.experience.trainee',
				},
			],
		},
		{
			company: 'work.company.Crud.name',
			roles: [
				{
					period: {
						start: new Date(2018, 2),
						end: new Date(2019, 0),
					},
					name: 'work.role.analyst',
					level: 'none',
					experience: 'work.company.Crud.experience',
				},
			],
		},
	],
};
