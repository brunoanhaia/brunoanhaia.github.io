import { CheckCircleOutlineRounded } from '@mui/icons-material';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { t } from 'i18next';
import { Role } from './resume-section.types';
import { ElementType, useMemo } from 'react';

type UiExperienceListProps = { roles: Array<Role>; iconSlot?: ElementType };

const formatExperience = (experience: Role['experience']): Array<string> => {
	return t(experience ?? '').split(';');
};

const expandRolesExperiences = (value: Array<Role>): Array<string> => {
	return value.flatMap((role) => formatExperience(role.experience)).filter((experience) => !!experience);
};

const UiExperienceList = ({ roles, iconSlot }: UiExperienceListProps) => {
	const IconComponent = iconSlot ?? CheckCircleOutlineRounded;
	const expandedRolesExperiences = useMemo(() => expandRolesExperiences(roles), [roles]);

	return (
		<List>
			{expandedRolesExperiences.map((experience) => (
				<ListItem sx={{ pl: 4 }}>
					<ListItemIcon>
						<IconComponent />
					</ListItemIcon>
					<ListItemText sx={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
						{experience}
					</ListItemText>
				</ListItem>
			))}
		</List>
	);
};

export { UiExperienceList };
