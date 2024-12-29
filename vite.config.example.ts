import { defineConfig } from 'vite';

export default defineConfig({
	root: './example',
	base: './',
	build: {
		outDir: '../dist',
		rollupOptions: {
			input: {
				raster: 'example/raster.html',
				vector: 'example/vector.html',
			},
		},
	},
});
