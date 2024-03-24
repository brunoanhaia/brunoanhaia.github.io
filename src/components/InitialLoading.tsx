import { Backdrop, CircularProgress } from '@mui/material';

export const InitialLoading = () => {
	return (
		<Backdrop
			sx={{
				color: 'white',
				zIndex: (theme) => theme.zIndex.drawer + 1,
			}}
			open={true}
		>
			<CircularProgress
				color="inherit"
				size="10em"
			/>
		</Backdrop>
	);
};
