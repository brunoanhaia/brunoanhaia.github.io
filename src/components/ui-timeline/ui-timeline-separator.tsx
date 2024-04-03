import { TimelineSeparator, TimelineDot, TimelineConnector } from '@mui/lab';
import { ReactNode } from 'react';

type UiTimelineSeparatorProps = {
	children: ReactNode;
};

const UiTimelineSeparator = ({ children }: UiTimelineSeparatorProps) => {
	return (
		<TimelineSeparator sx={{ minWidth: '36px' }}>
			<TimelineDot
				color="primary"
				sx={{
					marginLeft: 'auto',
					marginRight: 'auto',
				}}
			>
				{children}
			</TimelineDot>
			<TimelineConnector />
		</TimelineSeparator>
	);
};

export { UiTimelineSeparator };
export type { UiTimelineSeparatorProps };
