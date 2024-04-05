import { menuIconType } from './ui-nav-bar.constants';
import { navbarOrientation } from './ui-nav-bar.enum';

type MenuConfig = {
	textList: Array<MenuItem>;
	iconList: Array<MenuItemIcon>;
};

type MenuItem = Readonly<{
	href: string;
	target?: string;
	text: string;
}>;

type MenuItemIcon = Readonly<
	MenuItem & {
		icon?: keyof typeof menuIconType;
	}
>;

type NavbarProps = Readonly<{
	items: Array<MenuItem>;
}>;

type NavbarItemsProps = {
	items: Array<MenuItem>;
	orientation: keyof typeof navbarOrientation | undefined;
};

export type { MenuItem, MenuItemIcon, NavbarProps, NavbarItemsProps, MenuConfig };
