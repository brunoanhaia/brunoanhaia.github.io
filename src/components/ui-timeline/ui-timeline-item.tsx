import { UiTimelineContent } from './ui-timeline-content';
import { UiTimelineSeparator } from './ui-timeline-separator';
import { Business } from '@mui/icons-material';
import { TimelineItem } from '@mui/lab';
import { ElementType, ReactNode } from 'react';

type UiTimelineItemProps = {
	children: ReactNode;
	timelineIconSlot?: ElementType;
	hideIcon: boolean;
};

const UiTimelineItem = ({ timelineIconSlot, hideIcon, children }: UiTimelineItemProps) => {
	const TimelineIconSlot = timelineIconSlot || Business;

	return (
		<TimelineItem>
			<UiTimelineSeparator>{!hideIcon && <TimelineIconSlot />}</UiTimelineSeparator>
			<UiTimelineContent {...{ hideIcon }}>{children}</UiTimelineContent>
		</TimelineItem>
	);
};

export { UiTimelineItem };
