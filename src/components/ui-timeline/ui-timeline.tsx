import { Timeline, TimelineProps, timelineItemClasses } from '@mui/lab';

type UiTimelineRootProps = {} & TimelineProps;

const timelineResetClassStyle = {
	[`& .${timelineItemClasses.root}:before`]: {
		flex: 0,
		padding: 0,
	},
};

const UiTimelineRoot = ({ children, ...rest }: UiTimelineRootProps) => {
	return <Timeline {...{ sx: timelineResetClassStyle, rest }}>{children}</Timeline>;
};

export { UiTimelineRoot, timelineResetClassStyle };
