import { UiTerminalWidgetProps } from './ui-terminal-widget.type';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { TerminalStep, useTypingAnimation } from '@src/hooks/use-typing-animation';

const DEFAULT_STEPS: TerminalStep[] = [
	{ command: 'whoami', output: 'Bruno Anhaia — Lead Engineer' },
	{ command: 'cat stack.txt', output: 'React 19 • TypeScript • Vite • Node' },
	{ command: 'echo $STATUS', output: 'Ready for high-impact challenges ✓' },
];

export const UiTerminalWidget = ({ title = 'bash', steps = DEFAULT_STEPS }: UiTerminalWidgetProps) => {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';
	const { renderedLines, currentCommandText, isTyping } = useTypingAnimation(steps);

	return (
		<Box
			sx={{
				backgroundColor: isDark ? '#09090b' : '#18181b',
				borderRadius: '0.875rem',
				border: '1px solid rgba(255, 255, 255, 0.08)',
				overflow: 'hidden',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
			}}
		>
			{/* Terminal Header */}
			<Stack
				direction="row"
				sx={{
					alignItems: 'center',
					justifyContent: 'space-between',
					px: 2,
					py: 1.25,
					backgroundColor: 'rgba(255, 255, 255, 0.03)',
					borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
				}}
			>
				<Stack
					direction="row"
					spacing={1}
				>
					<Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ef4444' }} />
					<Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#eab308' }} />
					<Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#22c55e' }} />
				</Stack>
				<Typography
					sx={{
						fontFamily: `'JetBrains Mono', monospace`,
						fontSize: '0.75rem',
						color: '#71717a',
						fontWeight: 500,
					}}
				>
					{title}
				</Typography>
				<Box sx={{ width: 42 }} />
			</Stack>

			{/* Terminal Body */}
			<Box
				sx={{
					p: 2,
					flex: 1,
					fontFamily: `'JetBrains Mono', monospace`,
					fontSize: '0.8rem',
					lineHeight: 1.6,
					color: '#e4e4e7',
					overflowY: 'auto',
				}}
			>
				{renderedLines.map((line, idx) => (
					<Box
						key={idx}
						sx={{ mb: line.type === 'output' ? 1.25 : 0.25 }}
					>
						{line.type === 'command' ? (
							<Typography
								component="div"
								sx={{
									fontFamily: 'inherit',
									fontSize: 'inherit',
									color: '#22c55e',
									fontWeight: 600,
								}}
							>
								{line.text}
							</Typography>
						) : (
							<Typography
								component="div"
								sx={{
									fontFamily: 'inherit',
									fontSize: 'inherit',
									color: '#a1a1aa',
									pl: 1.5,
									borderLeft: '2px solid rgba(0, 212, 255, 0.3)',
								}}
							>
								{line.text}
							</Typography>
						)}
					</Box>
				))}

				{/* Currently typing command */}
				{currentCommandText !== null && (
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Typography
							component="span"
							sx={{
								fontFamily: 'inherit',
								fontSize: 'inherit',
								color: '#22c55e',
								fontWeight: 600,
							}}
						>
							{currentCommandText}
						</Typography>
						<Box
							component="span"
							sx={{
								display: 'inline-block',
								width: 7,
								height: 14,
								backgroundColor: theme.palette.primary.main,
								ml: 0.5,
								animation: 'blink 1s step-start infinite',
								'@keyframes blink': {
									'0%, 100%': { opacity: 1 },
									'50%': { opacity: 0 },
								},
							}}
						/>
					</Box>
				)}

				{!isTyping && currentCommandText === null && renderedLines.length > 0 && (
					<Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
						<Typography
							component="span"
							sx={{
								fontFamily: 'inherit',
								fontSize: 'inherit',
								color: '#22c55e',
								fontWeight: 600,
							}}
						>
							${' '}
						</Typography>
						<Box
							component="span"
							sx={{
								display: 'inline-block',
								width: 7,
								height: 14,
								backgroundColor: theme.palette.primary.main,
								ml: 0.5,
								animation: 'blink 1s step-start infinite',
								'@keyframes blink': {
									'0%, 100%': { opacity: 1 },
									'50%': { opacity: 0 },
								},
							}}
						/>
					</Box>
				)}
			</Box>
		</Box>
	);
};
