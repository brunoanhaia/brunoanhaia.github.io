import { Box, Typography } from '@mui/material';
import { Timeline } from '@mui/lab';
import { ResumeSectionProps, TypeOfChange, UiTimelineItem, Work } from '.';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const transformWorkArray = (value: Array<Work>): Array<Work> => {
	return value.flatMap((work) => {
		if (work.roles.length === 1) {
			return work;
		}

		const hasPromotion = work.roles.find(({ typeOfChange }) => typeOfChange === TypeOfChange.Promotion);
		if (hasPromotion) {
			return work;
		}

		return expandWorkRoles(work);
	});
};

const expandWorkRoles = (value: Work): Array<Work> => {
	return value.roles.map((role, roleIndex) => ({
		...value,
		company: !roleIndex ? value.company : '',
		roles: [role],
	}));
};

export const ResumeSection = ({ resumeData }: ResumeSectionProps) => {
	const { t } = useTranslation();

	const workData = useMemo(() => transformWorkArray(resumeData.work), [resumeData.work]);
	const timelineItemList = workData.map((work) => <UiTimelineItem data={work} />);

	return (
		<Box
			component="section"
			id="resume"
			className="section__resume"
		>
			<Box className="wrapper">
				<Typography component="h1">{t('sections.resume.title')}</Typography>
				<Timeline position="right">{timelineItemList}</Timeline>
			</Box>
		</Box>
	);
};
