import { UiTimelineContent } from './ui-timeline-content';
import { UiTimelineSeparator } from './ui-timeline-separator';
import { Business } from '@mui/icons-material';
import { TimelineItem } from '@mui/lab';
import { useTheme } from '@mui/material';
import { ElementType, ReactNode } from 'react';

type UiTimelineItemProps = {
	children: ReactNode;
	timelineIconSlot?: ElementType;
	hideIcon: boolean;
};

const UiTimelineItem = ({ timelineIconSlot, hideIcon, children }: UiTimelineItemProps) => {
	const TimelineIconSlot = timelineIconSlot || Business;
	const theme = useTheme();

	return (
		<TimelineItem>
			<UiTimelineSeparator>
				{!hideIcon && (
					<TimelineIconSlot
						sx={{
							color: theme.palette.background.default,
						}}
					/>
				)}
			</UiTimelineSeparator>
			<UiTimelineContent {...{ hideIcon }}>{children}</UiTimelineContent>
		</TimelineItem>
	);
};

export { UiTimelineItem };
