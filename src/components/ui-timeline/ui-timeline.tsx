import { timelineResetClassStyle } from './ui-timeline.constants';
import { Timeline } from '@mui/lab';

type UiTimelineRootProps = Parameters<typeof Timeline>[0];

const UiTimelineRoot = ({ children, sx, ...rest }: UiTimelineRootProps) => {
	return <Timeline {...{ sx: { ...timelineResetClassStyle, ...sx }, ...rest }}>{children}</Timeline>;
};

export { UiTimelineRoot };
