var config = {
	domain: {
		host: process.env.host,
		port: ''
	},
	env: 'dev', // dev or prod
	mongodb: {
		credentials: '', // username:password@
		host: 'localhost',
		port: ':27017', // :port
		dbName: 'model-test'
	},
	twitter: {
		consumerKey: process.env.consumerKey,
		consumerSecret: process.env.consumerSecret
	},
	public: {
		blogName: 'model-test',
		blogDescription: 'model-test',
		url: {
			site: '/',
			admin: '/admin',
			sitePartials: '/partials',
			adminPartials: '/admin/partials'
		}
	}
};

module.exports = config;