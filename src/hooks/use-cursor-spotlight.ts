import { useCallback, useRef } from 'react';

export const useCursorSpotlight = <T extends HTMLElement = HTMLDivElement>() => {
	const ref = useRef<T | null>(null);

	const handleMouseMove = useCallback((e: React.MouseEvent<T>) => {
		if (!ref.current) {
			return;
		}

		const rect = ref.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		ref.current.style.setProperty('--mouse-x', `${x}px`);
		ref.current.style.setProperty('--mouse-y', `${y}px`);
	}, []);

	return { ref, handleMouseMove };
};
