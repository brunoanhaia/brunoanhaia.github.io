import { UiBentoCardProps } from './ui-bento-card.type';
import { Card, useTheme } from '@mui/material';

export const UiBentoCard = ({ children, sx, className }: UiBentoCardProps) => {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';

	return (
		<Card
			className={className}
			sx={{
				p: { xs: 2.5, sm: 3 },
				backgroundColor: isDark ? '#121214' : '#ffffff',
				backgroundImage: isDark
					? 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 100%)'
					: 'linear-gradient(180deg, rgba(0, 0, 0, 0.01) 0%, rgba(0, 0, 0, 0) 100%)',
				border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
				borderRadius: '1.25rem',
				position: 'relative',
				overflow: 'hidden',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
				'&:hover': {
					borderColor: isDark ? 'rgba(0, 212, 255, 0.3)' : 'rgba(0, 145, 179, 0.3)',
					boxShadow: isDark
						? '0 12px 36px -10px rgba(0, 212, 255, 0.12)'
						: '0 12px 36px -10px rgba(0, 145, 179, 0.12)',
				},
				...sx,
			}}
		>
			{children}
		</Card>
	);
};
