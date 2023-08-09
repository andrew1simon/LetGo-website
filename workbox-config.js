module.exports = {
	
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