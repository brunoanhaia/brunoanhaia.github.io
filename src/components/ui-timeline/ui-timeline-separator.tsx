import { UiTimelineDot } from './ui-timeline-dot';
import { TimelineConnector, TimelineSeparator } from '@mui/lab';
import { useTheme } from '@mui/material';
import { ReactNode } from 'react';

type UiTimelineSeparatorProps = {
	children: ReactNode;
};

const UiTimelineSeparator = ({ children }: UiTimelineSeparatorProps) => {
	const theme = useTheme();

	return (
		<TimelineSeparator sx={{ minWidth: '2.25rem', backgroundColor: 'inherit' }}>
			<UiTimelineDot>{children}</UiTimelineDot>
			<TimelineConnector
				sx={{
					backgroundColor: theme.palette.text.primary,
					color: theme.palette.background.default,
				}}
			/>
		</TimelineSeparator>
	);
};

export { UiTimelineSeparator };
export type { UiTimelineSeparatorProps };
