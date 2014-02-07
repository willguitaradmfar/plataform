
var config = {
        domain: {
                host: process.env.host,
                port: ''
        },
        env: 'dev', // dev or prod
        mongodb: {
                credentials: '', // username:password@
                host: 'jomowdb',
                port: ':27017', // :port
                dbName: 'ajrc'
        },
        twitter: {
                consumerKey: process.env.consumerKey,
                consumerSecret: process.env.consumerSecret
        },
        redis : {
            host : 'jomowdb',
            port : '6379',
            password : ''
        },
        solr : {
            host : 'jomowdb',
            user : '',
            password : ''
        },
        public: {
                blogName: 'ajrc.com.br',
                blogDescription: 'ajrc.com.br',
                url: {
                        site: '/',
                        admin: '/admin',
                        sitePartials: '/partials',
                        adminPartials: '/admin/partials'
                }
        }
};

module.exports = config;

