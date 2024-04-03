import { TimelineItem, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent } from '@mui/lab';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Work } from './resume-section.types';
import { UiExperienceList } from './ui-experience-list';
import { Business } from '@mui/icons-material';
import { UiTimelineItemTitle } from './ui-timeline-item-title';
import { formatPeriod } from './utils';

type UiTimelineItemProps = {
	data: Work;
};

const UiTimelineItem = ({ data }: UiTimelineItemProps) => {
	const { t } = useTranslation();
	const hasCompany = !!data.company;

	return (
		<TimelineItem>
			<TimelineSeparator sx={{ minWidth: '36px' }}>
				<TimelineDot
					color="primary"
					sx={{
						marginLeft: 'auto',
						marginRight: 'auto',
					}}
				>
					{hasCompany && <Business />}
				</TimelineDot>
				<TimelineConnector />
			</TimelineSeparator>

			<TimelineContent sx={{ py: hasCompany ? '12px' : '4px', px: 2 }}>
				<Typography variant="h6">{data.company && t(data.company)}</Typography>
				{data.roles
					.map((role) => ({
						title: t(role.name, { level: role.level }),
						subtitle: formatPeriod(role.period),
						key: `${role.name}-${role.experience}-${role.period.start}`,
					}))
					.map(UiTimelineItemTitle)}
				<UiExperienceList roles={data.roles}></UiExperienceList>
			</TimelineContent>
		</TimelineItem>
	);
};

export { UiTimelineItem };
