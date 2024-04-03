import { NavbarOrientation } from "./navbar.enum";

export type MenuItem = {
	href: string;
	target: string | undefined;
	text: string;
};

export type NavbarProps = {
	items: Array<MenuItem>;
};

export type NavbarItemsProps = {
	items: Array<MenuItem>;
	orientation: NavbarOrientation | undefined;
};
