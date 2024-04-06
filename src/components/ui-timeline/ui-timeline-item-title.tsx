import { Typography } from '@mui/material';
import { ReactNode } from 'react';

type UiTimelineItemTitleProps = {
	children: ReactNode;
};

const UiTimelineItemTitle = ({ children }: UiTimelineItemTitleProps) => {
	return <Typography variant="h6">{children}</Typography>;
};
export { UiTimelineItemTitle };
