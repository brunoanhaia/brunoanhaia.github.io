import { UiWorkExperienceList } from './ui-work-experience-list';
import { UiTimeline } from '@components/ui-timeline';
import { Work } from '@src/types/resume.types';
import { formatPeriod } from '@src/utils/format-period';
import { useTranslation } from 'react-i18next';

type UiWorkListItemProps = {
	data: Work;
};

const UiWorkListItem = ({ data }: UiWorkListItemProps) => {
	const { t } = useTranslation();
	const hideIcon = !data.company;

	return (
		<UiTimeline.Item {...{ hideIcon }}>
			{data.company && <UiTimeline.ItemTitle>{t(data.company)}</UiTimeline.ItemTitle>}
			{data.roles.map((role) => (
				<UiTimeline.ItemOptional
					{...{
						title: t(role.name, { level: role.level }),
						subtitle: formatPeriod(role.period),
						key: `ui-timeline-${role.name}-${role.experience}-${role.period.start}`,
					}}
				/>
			))}

			<UiWorkExperienceList roles={data.roles}></UiWorkExperienceList>
		</UiTimeline.Item>
	);
};

export { UiWorkListItem };
