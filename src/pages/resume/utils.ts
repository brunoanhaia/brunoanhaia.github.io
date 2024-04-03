import dayjs from "dayjs";
import { t } from "i18next";
import { Work, TypeOfChange, Period, Role } from "./resume-page.types";

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

const formatDate = (date: Date) => {
    return dayjs(date).format('MM/YYYY');
};

const formatPeriod = ({ start, end }: Period): string => {
    const startDate = formatDate(start);
    if (!end) {
        return `${startDate} - ${t('work.period.current')}`;
    }

    const endDate = formatDate(end);
    return `${startDate} - ${endDate}`;
};

const formatExperience = (experience: Role['experience']): Array<string> => {
    return t(experience ?? '').split(';');
};

const expandRolesExperiences = (value: Array<Role>): Array<string> => {
    return value.flatMap((role) => formatExperience(role.experience)).filter((experience) => !!experience);
};

export {
    transformWorkArray,
    expandWorkRoles,
    formatDate,
    formatPeriod,
    formatExperience,
    expandRolesExperiences
}
