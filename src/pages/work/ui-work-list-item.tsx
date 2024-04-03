import { UiWorkExperienceList } from './ui-work-experience-list';
import { formatPeriod } from './utils';
import { UiTimeline } from '@components/ui-timeline';
import { Work } from '@src/types/resume.types';
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
			{data.roles
				.map((role) => ({
					title: t(role.name, { level: role.level }),
					subtitle: formatPeriod(role.period),
					key: `${role.name}-${role.experience}-${role.period.start}`,
				}))
				.map(UiTimeline.ItemOptional)}

			<UiWorkExperienceList roles={data.roles}></UiWorkExperienceList>
		</UiTimeline.Item>
	);
};

export { UiWorkListItem };
