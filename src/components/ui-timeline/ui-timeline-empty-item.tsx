import { UiTimelineDot } from './ui-timeline-dot';
import { TimelineItem, TimelineSeparator } from '@mui/lab';

const UiTimelineEmptyItem = () => {
	return (
		<TimelineItem color="inherit">
			<TimelineSeparator sx={{ minWidth: '36px' }}>
				<UiTimelineDot />
			</TimelineSeparator>
		</TimelineItem>
	);
};

export { UiTimelineEmptyItem };
