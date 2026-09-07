import { useEffect, useState } from 'react';

export type TerminalStep = {
	command: string;
	output: string;
};

export type RenderedLine = {
	type: 'command' | 'output';
	text: string;
	isTyping?: boolean;
};

export const useTypingAnimation = (steps: TerminalStep[]) => {
	const [renderedLines, setRenderedLines] = useState<RenderedLine[]>(() => {
		const prefersReducedMotion =
			typeof window !== 'undefined' && typeof window.matchMedia === 'function'
				? window.matchMedia('(prefers-reduced-motion: reduce)').matches
				: false;

		if (prefersReducedMotion) {
			const allLines: RenderedLine[] = [];
			steps.forEach((step) => {
				allLines.push({ type: 'command', text: `$ ${step.command}` });
				allLines.push({ type: 'output', text: step.output });
			});
			return allLines;
		}
		return [];
	});

	const [currentStepIndex, setCurrentStepIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [phase, setPhase] = useState<'typing' | 'pausing' | 'output' | 'next'>('typing');

	useEffect(() => {
		const prefersReducedMotion =
			typeof window !== 'undefined' && typeof window.matchMedia === 'function'
				? window.matchMedia('(prefers-reduced-motion: reduce)').matches
				: false;

		if (prefersReducedMotion) {
			return;
		}

		if (currentStepIndex >= steps.length) {
			const loopTimeout = setTimeout(() => {
				setRenderedLines([]);
				setCurrentStepIndex(0);
				setCharIndex(0);
				setPhase('typing');
			}, 6000);
			return () => clearTimeout(loopTimeout);
		}

		const currentStep = steps[currentStepIndex];

		if (phase === 'typing') {
			if (charIndex < currentStep.command.length) {
				const timer = setTimeout(() => {
					setCharIndex((prev) => prev + 1);
				}, 45);
				return () => clearTimeout(timer);
			} else {
				const pauseTimer = setTimeout(() => {
					setPhase('pausing');
				}, 45);
				return () => clearTimeout(pauseTimer);
			}
		}

		if (phase === 'pausing') {
			const timer = setTimeout(() => {
				setPhase('output');
			}, 300);
			return () => clearTimeout(timer);
		}

		if (phase === 'output') {
			const timer = setTimeout(() => {
				setRenderedLines((prev) => [
					...prev,
					{ type: 'command', text: `$ ${currentStep.command}` },
					{ type: 'output', text: currentStep.output },
				]);
				setPhase('next');
			}, 50);
			return () => clearTimeout(timer);
		}

		if (phase === 'next') {
			const timer = setTimeout(() => {
				setCurrentStepIndex((prev) => prev + 1);
				setCharIndex(0);
				setPhase('typing');
			}, 600);
			return () => clearTimeout(timer);
		}
	}, [charIndex, currentStepIndex, phase, steps]);

	const currentCommandText =
		phase === 'typing' && currentStepIndex < steps.length
			? `$ ${steps[currentStepIndex].command.slice(0, charIndex)}`
			: null;

	return {
		renderedLines,
		currentCommandText,
		isTyping: phase === 'typing',
	};
};
