import {defineConfig} from 'vite'


export default defineConfig({
	plugins: [],	

	build: {
		outDir: 'dist',
        rollupOptions: {
            input: {
                index: 'C:/Users/hunny/Desktop/Dev/Photography Portoflio/index.html',
                about: 'C:/Users/hunny/Desktop/Dev/Photography Portoflio/about.html',
                Cancalanog: 'C:/Users/hunny/Desktop/Dev/Photography Portoflio/Cancalanog.html',
                bon: 'C:/Users/hunny/Desktop/Dev/Photography Portoflio/bon.html',
                Simala: 'C:/Users/hunny/Desktop/Dev/Photography Portoflio/Simala.html',
                Otaku: 'C:/Users/hunny/Desktop/Dev/Photography Portoflio/Otaku.html',
            },
          },
	  },
})