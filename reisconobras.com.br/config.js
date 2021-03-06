

var config = {
        domain: {
                host: process.env.host,
                port: ''
        },
        env: 'dev', // dev or prod
        mongodb: {
                credentials: '', // username:password@
                host: '107.170.15.88', //
                port: ':27017', // :port
                dbName: 'reisconobras_com_br'
        },
        twitter: {
                consumerKey: process.env.consumerKey,
                consumerSecret: process.env.consumerSecret
        },
        redis : {
            host : '107.170.15.88',
            port : '6379',
            password : ''
        },
        solr : {
            host : '107.170.15.88',
            user : '',
            password : ''
        },
        public: {
                blogName: 'reisconobras.com.br',
                blogDescription: 'reisconobras.com.br',
                url: {
                        site: '/',
                        admin: '/admin',
                        sitePartials: '/partials',
                        adminPartials: '/admin/partials'
                }
        }
};

module.exports = config;

