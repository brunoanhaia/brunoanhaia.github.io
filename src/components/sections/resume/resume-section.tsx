import { Box, Typography } from '@mui/material';
import { Timeline, timelineItemClasses } from '@mui/lab';
import { ResumeSectionProps, UiTimelineItem } from '.';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { transformWorkArray } from './utils';

export const ResumeSection = ({ resumeData }: ResumeSectionProps) => {
	const { t } = useTranslation();

	const workData = useMemo(() => transformWorkArray(resumeData.work), [resumeData.work]);
	const timelineItemList = workData.map((work, index) => (
		<UiTimelineItem
			data={work}
			key={`${work.company}-${index}`}
		/>
	));

	return (
		<Box
			component="section"
			id="resume"
			className="section__resume"
		>
			<Box className="wrapper">
				<Typography component="h1">{t('sections.resume.title')}</Typography>
				<Timeline
					sx={{
						[`& .${timelineItemClasses.root}:before`]: {
							flex: 0,
							padding: 0,
						},
					}}
				>
					{timelineItemList}
				</Timeline>
			</Box>
		</Box>
	);
};
