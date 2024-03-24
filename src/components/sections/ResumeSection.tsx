import { Box, Typography } from '@mui/material';
import { ResumeData, ResumeSectionProps } from './ResumeSection.type';
import {
	Timeline,
	TimelineItem,
	TimelineOppositeContent,
	TimelineSeparator,
	TimelineConnector,
	TimelineDot,
	TimelineContent,
} from '@mui/lab';
import dayjs from 'dayjs';

type ArrayElement<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const formatDate = (date?: Date) => {
	if (!date) {
		return;
	}

	return dayjs(date).format('MM/YYYY');
};

const formatStartEndPeriod = ({
	start,
	end,
}: ArrayElement<ResumeData['work']>['period']) => {
	const startDate = formatDate(start);
	const endDate = formatDate(end);

	if (!endDate) {
		return `${startDate} - current`;
	}

	return `${startDate} - ${endDate}`;
};

const UiTimelineItem = (value: ArrayElement<ResumeData['work']>) => {
	return (
		<TimelineItem key={Number(value.period.start)}>
			<TimelineOppositeContent
				sx={{ m: 'auto 0' }}
				align="right"
				variant="body2"
				color="text.secondary"
			>
				<Typography variant="h6">{value.company}</Typography>
				<Typography variant="subtitle1">{value.role}</Typography>
				<Typography variant="subtitle2">
					{formatStartEndPeriod(value.period)}
				</Typography>
			</TimelineOppositeContent>
			<TimelineSeparator>
				<TimelineConnector />
				<TimelineDot></TimelineDot>
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent sx={{ py: '12px', px: 2 }}>
				{value.experience.map((experience) => (
					<Typography
						variant="body1"
						component="p"
					>
						{experience}
					</Typography>
				))}
			</TimelineContent>
		</TimelineItem>
	);
};

const transformWorkArray = (value: ResumeData['work']) => {
	value.reverse();

	for (let i = 0; i < value.length; i++) {
		const nextIndex = i + 1;

		if (nextIndex >= value.length) {
			break;
		}

		if (value[i].company === value[nextIndex].company) {
			value[i].company = '';
		}
	}

	return value;
};

export function ResumeSection({ resumeData }: ResumeSectionProps) {
	return (
		<Box
			component="section"
			id="resume"
			className="section__resume"
		>
			<Box className="wrapper">
				<Typography component="h1">Resumé</Typography>
				<Timeline position="right">
					{transformWorkArray(resumeData.work).map(UiTimelineItem)}
				</Timeline>
			</Box>
		</Box>
	);
}
