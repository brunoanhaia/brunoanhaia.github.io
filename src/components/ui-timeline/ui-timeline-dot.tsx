import { TimelineDot, TimelineDotProps } from '@mui/lab';
import { useTheme } from '@mui/material';

type UiTimelineDotProps = TimelineDotProps;

export const UiTimelineDot = ({ children }: UiTimelineDotProps) => {
	const theme = useTheme();

	return (
		<TimelineDot
			sx={{
				backgroundColor: theme.palette.text.primary,
				color: theme.palette.background.default,
				marginLeft: 'auto',
				marginRight: 'auto',
			}}
		>
			{children}
		</TimelineDot>
	);
};
