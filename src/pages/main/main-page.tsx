import { Avatar, Stack, Typography } from '@mui/material';
import { useGitHubProfile } from '@src/hooks/use-github-profile';

export const MainPage = () => {
	const { name, company, bio, avatarUrl } = useGitHubProfile();

	return (
		<Stack
			direction="column"
			spacing={2}
			sx={{
				alignItems: 'center',
				justifyContent: 'space-around',
				marginTop: '2rem',
			}}
		>
			<Avatar
				src={avatarUrl}
				alt={name}
				sx={{
					width: '100%',
					height: '100%',
					maxWidth: 500,
				}}
			/>
			<Typography>{name}</Typography>
			<Typography>{company}</Typography>
			<Typography>{bio}</Typography>
		</Stack>
	);
};
