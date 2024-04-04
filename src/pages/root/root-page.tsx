import { Box } from '@mui/material';
import { UiNavbar } from '@src/components/ui-nav-bar';
import { Outlet } from 'react-router-dom';

const RootPage = () => {
	return (
		<>
			<Box>
				<UiNavbar />
			</Box>
			<Box className="content">
				<Outlet />
			</Box>
		</>
	);
};

export { RootPage };
