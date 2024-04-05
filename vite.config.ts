import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { type PluginOption, defineConfig, splitVendorChunkPlugin } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths(), splitVendorChunkPlugin(), visualizer() as PluginOption],
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
					if (id.includes('recoil')) {
						return '@recoil';
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
