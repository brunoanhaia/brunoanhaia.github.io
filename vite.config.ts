/// <reference types="vitest/config" />
import { readFileSync } from 'node:fs';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { type PluginOption, defineConfig } from 'vite';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));

function versionMetadataPlugin(): PluginOption {
	return {
		name: 'version-metadata',
		generateBundle() {
			this.emitFile({
				type: 'asset',
				fileName: 'version.json',
				source: JSON.stringify(
					{
						version: pkg.version,
						builtAt: new Date().toISOString(),
					},
					null,
					2
				),
			});
		},
	};
}

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), visualizer() as PluginOption, versionMetadataPlugin()],
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
