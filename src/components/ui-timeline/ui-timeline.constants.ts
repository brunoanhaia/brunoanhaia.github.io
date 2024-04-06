import { timelineItemClasses } from '@mui/lab';

const timelineResetClassStyle = {
	[`& .${timelineItemClasses.root}:before`]: {
		flex: 0,
		padding: 0,
	},
};

export { timelineResetClassStyle };
