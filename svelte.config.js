import adapter from '@sveltejs/adapter-static';

const config = {

	kit: {
			adapter: adapter({
				fallback: 'app.html'
			}),
			paths: {
					base: process.env.NODE_ENV === 'production' ? '/fb-website/app.html' : '',
			}
	}
};

export default config;