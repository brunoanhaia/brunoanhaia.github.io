import { Avatar, Stack, Typography } from '@mui/material';
import { gitHubProfileState } from '@src/states/global.state';
import { useRecoilValue } from 'recoil';

export const MainPage = () => {
	const { name, company, bio, avatarUrl } = useRecoilValue(gitHubProfileState);

	return (
		<Stack
			direction="column"
			alignItems="center"
			justifyContent="space-around"
			spacing={2}
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
