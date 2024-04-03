import { Typography } from '@mui/material';

type UiTimelineItemTitleProps = {
	title: string;
	subtitle: string;
};

const UiTimelineItemTitle = ({ title, subtitle }: UiTimelineItemTitleProps) => {
	return (
		<>
			<Typography variant="subtitle1">{title}</Typography>
			<Typography variant="subtitle2">{subtitle}</Typography>
		</>
	);
};

export { UiTimelineItemTitle };
