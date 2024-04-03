import { Box, Typography } from '@mui/material';
import { ResumeSectionProps } from './resume-section.types';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { transformWorkArray } from './utils';
import { UiTimeline } from '../../ui-timeline';
import { UiWorkListItem } from './ui-work-list-item';

export const ResumeSection = ({ resumeData }: ResumeSectionProps) => {
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
