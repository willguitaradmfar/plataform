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
	redis : {
	    host : 'pub-redis-15819.us-east-1-3.1.ec2.garantiadata.com',
	    port : '15819',
	    password : 'willguitaradmfar'
	},
	solr : {
	    host : '192.241.176.21',
	    user : '',
	    password : ''
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