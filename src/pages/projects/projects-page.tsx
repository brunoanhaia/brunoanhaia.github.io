import { GitHub } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemIcon, Stack, Tooltip } from '@mui/material';
import { useGitHubProfile } from '@src/hooks/use-github-profile';
import { Link } from 'react-router-dom';

export const ProjectsPage = () => {
	const gitHubProfileData = useGitHubProfile();

	return (
		<Stack
			direction="column"
			sx={{
				alignItems: 'center',
				marginTop: '2rem',
			}}
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
