import {defineConfig} from 'vite'
import path from 'path';

export default defineConfig({
	plugins: [],	

	build: {
		outDir: 'dist',
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, 'index.html'),
                about: path.resolve(__dirname, 'about.html'),
                Cancalanog: path.resolve(__dirname, 'Cancalanog.html'),
                bon: path.resolve(__dirname, 'bon.html'),
                Simala: path.resolve(__dirname, 'Simala.html'),
                Otaku: path.resolve(__dirname, 'Otaku.html'),
            },
          },
	  },
})