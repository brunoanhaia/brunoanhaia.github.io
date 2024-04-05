import { NavLink } from 'react-router-dom';

type UiNavLinkProps = Pick<Parameters<typeof NavLink>[0], 'to' | 'target' | 'children'>;

export type { UiNavLinkProps };
