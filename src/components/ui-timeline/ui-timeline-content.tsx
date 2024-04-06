import { TimelineContent } from '@mui/lab';
import { ReactNode } from 'react';

type UiTimelineContentProps = {
	hideIcon: boolean;
	children: ReactNode;
};

const UiTimelineContent = ({ hideIcon, children }: UiTimelineContentProps) => {
	return <TimelineContent sx={{ py: !hideIcon ? '12px' : '4px', px: 2 }}>{children}</TimelineContent>;
};

export { UiTimelineContent };
