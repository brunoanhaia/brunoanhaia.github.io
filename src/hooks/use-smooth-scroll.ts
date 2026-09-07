import Lenis from 'lenis';
import { useCallback, useEffect, useRef } from 'react';

export const useSmoothScroll = () => {
	const lenisRef = useRef<Lenis | null>(null);

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		const prefersReducedMotion =
			typeof window.matchMedia === 'function' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

		if (prefersReducedMotion) {
			return;
		}

		try {
			const lenis = new Lenis({
				duration: 1.2,
				easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
				smoothWheel: true,
			});

			lenisRef.current = lenis;

			let animationFrameId: number;
			const raf = (time: number) => {
				lenis.raf(time);
				if (typeof requestAnimationFrame === 'function') {
					animationFrameId = requestAnimationFrame(raf);
				}
			};

			if (typeof requestAnimationFrame === 'function') {
				animationFrameId = requestAnimationFrame(raf);
			}

			return () => {
				if (typeof cancelAnimationFrame === 'function' && animationFrameId) {
					cancelAnimationFrame(animationFrameId);
				}
				lenis.destroy();
				lenisRef.current = null;
			};
		} catch (error) {
			console.warn('Lenis smooth scroll initialization skipped:', error);
		}
	}, []);

	const scrollTo = useCallback((target: string | HTMLElement) => {
		if (lenisRef.current) {
			lenisRef.current.scrollTo(target, { offset: -80 });
		} else {
			if (typeof target === 'string') {
				const element = document.querySelector(target);
				element?.scrollIntoView({ behavior: 'smooth' });
			} else {
				target.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, []);

	return { scrollTo };
};
