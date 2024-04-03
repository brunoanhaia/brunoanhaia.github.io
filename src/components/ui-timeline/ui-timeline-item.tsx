import { TimelineItem } from '@mui/lab';
import { Business } from '@mui/icons-material';
import { ElementType, ReactNode } from 'react';
import { UiTimelineSeparator } from './ui-timeline-separator';
import { UiTimelineContent } from './ui-timeline-content';

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
