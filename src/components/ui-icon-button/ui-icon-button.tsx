import { IconButton, IconButtonProps } from '@mui/material';
import { forwardRef } from 'react';

const UiIconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ children, size, color, sx, ...rest }, ref) => {
	return (
		<IconButton
			ref={ref}
			size={size ?? 'medium'}
			disableTouchRipple
			color={color ?? 'inherit'}
			sx={{
				...{
					borderRadius: '1rem',
				},
				...sx,
			}}
			{...rest}
		>
			{children}
		</IconButton>
	);
});

export { UiIconButton };
