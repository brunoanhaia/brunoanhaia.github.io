import { useTranslation } from 'react-i18next';
import { UiTimeline } from '../../ui-timeline';
import { UiExperienceList } from './ui-experience-list';
import { formatPeriod } from './utils';
import { Work } from './resume-section.types';

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

			<UiExperienceList roles={data.roles}></UiExperienceList>
		</UiTimeline.Item>
	);
};

export { UiWorkListItem };
