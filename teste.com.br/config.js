

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
                dbName: 'teste_com_br'
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
                blogName: 'teste.com.br',
                blogDescription: 'teste.com.br',
                url: {
                        site: '/',
                        admin: '/admin',
                        sitePartials: '/partials',
                        adminPartials: '/admin/partials'
                }
        }
};

module.exports = config;

