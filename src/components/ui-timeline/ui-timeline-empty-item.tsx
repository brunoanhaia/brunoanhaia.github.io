import { TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';

const UiTimelineEmptyItem = () => {
	return (
		<TimelineItem>
			<TimelineSeparator sx={{ minWidth: '36px' }}>
				<TimelineDot
					color="primary"
					sx={{
						marginLeft: 'auto',
						marginRight: 'auto',
					}}
				></TimelineDot>
			</TimelineSeparator>
		</TimelineItem>
	);
};

export { UiTimelineEmptyItem };
