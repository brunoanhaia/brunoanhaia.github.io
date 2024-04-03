import { expandRolesExperiences } from './utils';
import { CheckCircleOutlineRounded } from '@mui/icons-material';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Role } from '@src/types/resume.types';
import { ElementType, useMemo } from 'react';

type UiExperienceListProps = { roles: Array<Role>; iconSlot?: ElementType };

const UiWorkExperienceList = ({ roles, iconSlot }: UiExperienceListProps) => {
	const IconComponent = iconSlot ?? CheckCircleOutlineRounded;
	const expandedRolesExperiences = useMemo(() => expandRolesExperiences(roles), [roles]);

	return (
		<List>
			{expandedRolesExperiences.map((experience) => (
				<ListItem
					key={experience}
					sx={{ pl: 4 }}
				>
					<ListItemIcon>
						<IconComponent />
					</ListItemIcon>
					<ListItemText>{experience}</ListItemText>
				</ListItem>
			))}
		</List>
	);
};

export { UiWorkExperienceList };
