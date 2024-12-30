import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
	root: './example',
	base: './',
	build: {
		outDir: '../dist',
    chunkSizeWarningLimit: 1000,
    emptyOutDir: true,
		rollupOptions: {
			input: {
        index: 'example/index.html',
				raster: 'example/raster.html',
				vector: 'example/vector.html',
			},
		},
	},
  plugins: [
    visualizer({
      filename: './dist/stats.html',
      open: false,
    }),
  ],
});

