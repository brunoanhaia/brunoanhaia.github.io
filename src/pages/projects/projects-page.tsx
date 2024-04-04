import { GitHub } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemIcon, Stack, Tooltip } from '@mui/material';
import { gitHubProfileState } from '@src/states/global.state';
import { GitHubProfileData } from '@src/types/global.types';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

export const ProjectsPage = () => {
	const gitHubProfileData = useRecoilValue<GitHubProfileData>(gitHubProfileState);

	return (
		<Stack
			direction="column"
			alignItems="center"
			marginTop="2rem"
		>
			<List>
				{gitHubProfileData.repositoriesInfo.map(({ name, html_url, description }) => {
					return (
						<Tooltip
							key={name}
							title={description}
							arrow
						>
							<ListItem>
								<ListItemIcon>
									<GitHub color="inherit" />
								</ListItemIcon>
								<ListItemButton
									to={html_url}
									component={Link}
								>
									{name}
								</ListItemButton>
							</ListItem>
						</Tooltip>
					);
				})}
			</List>
		</Stack>
	);
};
