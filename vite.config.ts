import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		outDir: 'build',
		sourcemap: true,
		lib: {
			entry: 'src/index.ts',
			name: 'TemporalControl',
			fileName: 'index',
		},
		rollupOptions: {
			external: ['maplibre-gl'],
			output: {
				globals: {
					'maplibre-gl': 'maplibregl',
				},
			},
		},
	},
});
