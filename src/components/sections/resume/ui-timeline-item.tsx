import {
	TimelineItem,
	TimelineOppositeContent,
	TimelineSeparator,
	TimelineConnector,
	TimelineDot,
	TimelineContent,
} from '@mui/lab';
import { Typography } from '@mui/material';
import dayjs from 'dayjs';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { Period, Work } from './resume-section.types';
import { UiExperienceList } from './ui-experience-list';

type UiTimelineItemProps = {
	data: Work;
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

const UiTimelineItem = ({ data }: UiTimelineItemProps) => {
	const { t } = useTranslation();

	return (
		<TimelineItem>
			<TimelineOppositeContent
				sx={{ m: 'auto 0' }}
				align="right"
				variant="body2"
				color="text.secondary"
			>
				<Typography variant="h6">{data.company && t(data.company)}</Typography>
				{data.roles.map((role) => (
					<>
						<Typography variant="subtitle1">{t(role.name, { level: role.level })}</Typography>
						<Typography variant="subtitle2">{formatPeriod(role.period)}</Typography>
					</>
				))}
			</TimelineOppositeContent>
			<TimelineSeparator>
				<TimelineConnector />
				<TimelineDot />
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent sx={{ py: '12px', px: 2 }}>
				<UiExperienceList roles={data.roles} />
			</TimelineContent>
		</TimelineItem>
	);
};

export { UiTimelineItem };
