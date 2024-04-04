import { Period } from "@src/types/resume.types";
import dayjs from "dayjs";
import { t } from "i18next";

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

export { formatDate, formatPeriod }
