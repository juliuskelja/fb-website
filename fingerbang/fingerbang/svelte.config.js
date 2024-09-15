import adapter from '@sveltejs/adapter-static';
import {
    vitePreprocess
} from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter(),
        paths: {
            base: dev ? '' : process.env.BASE_PATH,
        }
    }
};

export default config;