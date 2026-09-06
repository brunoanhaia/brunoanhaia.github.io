/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { type PluginOption, defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), visualizer() as PluginOption],
	resolve: {
		tsconfigPaths: true,
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./src/setup-tests.ts'],
	},
	envDir: './env',
	build: {
		rollupOptions: {
			output: {
				manualChunks(id: string) {
					if (id.includes('@firebase')) {
						return '@firebase';
					}
					if (id.includes('react-router-dom') || id.includes('@remix-run') || id.includes('react-router')) {
						return '@react-router';
					}
					if (id.includes('react-dom')) {
						return '@react-dom';
					}
					if (id.includes('i18next')) {
						return '@i18next';
					}
				},
			},
		},
	},
});
