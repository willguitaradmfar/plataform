
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
                dbName: 'gessocentral.com.br'
        },
        twitter: {
                consumerKey: process.env.consumerKey,
                consumerSecret: process.env.consumerSecret
        },
        redis : {
            host : 'pub-redis-15819.us-east-1-3.1.ec2.garantiadata.com',
            port : '15819',
            password : 'admfarguitarwill'
        },
        solr : {
            host : '192.241.176.21',
            user : '',
            password : ''
        },
        public: {
                blogName: 'gessocentral.com.br',
                blogDescription: 'gessocentral.com.br',
                url: {
                        site: '/',
                        admin: '/admin',
                        sitePartials: '/partials',
                        adminPartials: '/admin/partials'
                }
        }
};

module.exports = config;

