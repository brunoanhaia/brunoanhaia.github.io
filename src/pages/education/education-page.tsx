import { UiTimeline } from '@components/ui-timeline';
import { School } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import { resumeData } from '@src/resume.data';
import { formatPeriod } from '@src/utils/format-period';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const EducationPage = () => {
	const { t } = useTranslation();
	const sortedEducation = useMemo(
		() => resumeData.education.sort((a, b) => (dayjs(a.period.start).isAfter(dayjs(b.period.start)) ? -1 : 1)),
		[]
	);
	return (
		<Stack
			component="section"
			direction="column"
			justifyContent="center"
			alignItems="center"
		>
			<UiTimeline.Root sx={{ mt: '2rem' }}>
				{sortedEducation.map((education) => (
					<UiTimeline.Item
						hideIcon={false}
						timelineIconSlot={School}
						key={education.institution}
					>
						<UiTimeline.ItemTitle>{t(education.name)}</UiTimeline.ItemTitle>
						<UiTimeline.ItemOptional
							title={t(education.institution)}
							subtitle={t(education.status)}
						/>
						<Typography>{formatPeriod(education.period)}</Typography>
					</UiTimeline.Item>
				))}
				<UiTimeline.EmptyItem />
			</UiTimeline.Root>
		</Stack>
	);
};
