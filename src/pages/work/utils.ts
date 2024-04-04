import { Role, TypeOfChange, Work } from '@src/types/resume.types';
import { t } from 'i18next';

const transformWorkArray = (value: Array<Work>): Array<Work> => {
	return value.flatMap((work) => {
		if (work.roles.length === 1) {
			return work;
		}

		const hasPromotion = work.roles.find(({ typeOfChange }) => typeOfChange === TypeOfChange.Promotion);
		if (hasPromotion) {
			return work;
		}

		return expandWorkRoles(work);
	});
};

const expandWorkRoles = (value: Work): Array<Work> => {
	return value.roles.map((role, roleIndex) => ({
		...value,
		company: !roleIndex ? value.company : '',
		roles: [role],
	}));
};

const formatExperience = (experience: Role['experience']): Array<string> => {
	return t(experience ?? '').split(';');
};

const expandRolesExperiences = (value: Array<Role>): Array<string> => {
	return value.flatMap((role) => formatExperience(role.experience)).filter((experience) => !!experience);
};

export { transformWorkArray, expandWorkRoles, formatExperience, expandRolesExperiences };
