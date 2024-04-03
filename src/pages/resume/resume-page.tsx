import { UiWorkListItem } from './ui-work-list-item';
import { transformWorkArray } from './utils';
import { UiTimeline } from '@components/ui-timeline';
import { Box, Typography } from '@mui/material';
import { resumeData } from '@src/resume.data';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const ResumePage = () => {
	const { t } = useTranslation();

	const workData = useMemo(() => transformWorkArray(resumeData.work), [resumeData.work]);
	const timelineItemList = workData
		.map((data, index) => ({
			data,
			key: `${data.company}-${index}`,
		}))
		.map(UiWorkListItem);

	return (
		<Box
			component="section"
			id="resume"
			className="section__resume"
		>
			<Box className="wrapper">
				<Typography component="h1">{t('sections.resume.title')}</Typography>
				<UiTimeline.Root>{timelineItemList}</UiTimeline.Root>
			</Box>
		</Box>
	);
};
