import { Typography } from '@mui/material';

type UiTimelineItemOptionalProps = {
	title: string;
	subtitle: string;
};

const UiTimelineItemOptional = ({ title, subtitle }: UiTimelineItemOptionalProps) => {
	return (
		<>
			<Typography variant="subtitle1">{title}</Typography>
			<Typography variant="subtitle2">{subtitle}</Typography>
		</>
	);
};

export { UiTimelineItemOptional };
