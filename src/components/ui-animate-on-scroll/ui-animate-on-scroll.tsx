import { motion } from 'motion/react';
import { ReactNode } from 'react';

export type UiAnimateOnScrollProps = {
	children: ReactNode;
	delay?: number;
	direction?: 'up' | 'down' | 'left' | 'right' | 'none';
	className?: string;
};

export const UiAnimateOnScroll = ({
	children,
	delay = 0,
	direction = 'up',
	className,
}: UiAnimateOnScrollProps) => {
	const getInitialOffset = () => {
		switch (direction) {
			case 'up':
				return { y: 24, x: 0 };
			case 'down':
				return { y: -24, x: 0 };
			case 'left':
				return { x: 24, y: 0 };
			case 'right':
				return { x: -24, y: 0 };
			case 'none':
			default:
				return { x: 0, y: 0 };
		}
	};

	const offset = getInitialOffset();

	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, ...offset }}
			whileInView={{ opacity: 1, x: 0, y: 0 }}
			viewport={{ once: true, margin: '-60px' }}
			transition={{
				duration: 0.5,
				delay,
				ease: [0.25, 0.1, 0.25, 1],
			}}
		>
			{children}
		</motion.div>
	);
};
