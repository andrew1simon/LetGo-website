module.exports = {
	runtimeCaching: [
		{
		  urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/font\-awesome\/.*/i,
		  handler: 'CacheFirst',
		  options: {
			cacheName: 'fontaw-cache',
			expiration: {
			  maxEntries: 10,
			  maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
			},
			cacheableResponse: {
			  statuses: [0, 200]
			}
		  }
		}
		,
		{
			// https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&family=Josefin+Sans:wght@100&family=Oswald:wght@300;500;600&family=Roboto+Condensed&family=Ysabeau+Infant:ital,wght@0,300;1,200&family=Ysabeau+SC:wght@100;200;300;400&display=swap
			urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
			handler: 'CacheFirst',
			options: {
			  cacheName: 'google-font',
			  expiration: {
				maxEntries: 10,
				maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
			  },
			  cacheableResponse: {
				statuses: [0, 200]
			  }
			}
		  }
	  ],
	globDirectory: './',
	globPatterns: [
		'**/*.{html,png,jpg,jpeg,css,json,ico}'
	],
	
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};