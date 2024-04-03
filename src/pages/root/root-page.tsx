import { Box } from '@mui/material';
import { Navbar } from '@src/components/ui-navbar';
import { menuItemList } from '@src/menu.config';
import { Outlet } from 'react-router-dom';

const RootPage = () => {
	return (
		<>
			<Box>
				<Navbar items={menuItemList} />
			</Box>
			<Box className="content">
				<Outlet />
			</Box>
		</>
	);
};

export { RootPage };
