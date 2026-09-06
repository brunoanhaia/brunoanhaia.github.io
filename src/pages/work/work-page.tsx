import { UiWorkListItem } from './ui-work-list-item';
import { transformWorkArray } from './utils';
import { UiTimeline } from '@components/ui-timeline';
import { Stack } from '@mui/material';
import { resumeData } from '@src/resume.data';
import { useMemo } from 'react';

export const WorkPage = () => {
	const workData = useMemo(() => transformWorkArray(resumeData.work), []);
	const timelineItemList = workData.map((data, index) => (
		<UiWorkListItem
			{...{
				data,
				key: `ui-work-list-item-${data.company}-${index}`,
			}}
		/>
	));

	return (
		<Stack
			component="section"
			direction="column"
			sx={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<UiTimeline.Root sx={{ mt: '2rem' }}>
				{timelineItemList}
				<UiTimeline.EmptyItem />
			</UiTimeline.Root>
		</Stack>
	);
};
