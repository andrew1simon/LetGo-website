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