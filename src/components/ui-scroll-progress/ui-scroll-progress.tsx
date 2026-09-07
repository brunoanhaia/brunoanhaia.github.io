import { useTheme } from '@mui/material';
import { motion, useScroll, useSpring } from 'motion/react';

export const UiScrollProgress = () => {
	const theme = useTheme();
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 200,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<motion.div
			style={{
				scaleX,
				transformOrigin: '0%',
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				height: '3px',
				background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
				zIndex: theme.zIndex.appBar + 10,
			}}
		/>
	);
};
