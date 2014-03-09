
var config = {
        app : {
                tenant : 'admin.jomow.com.br',
                pathFileImg : '/var/lib/stickshift/52fa6dabe0b8cd3c4d000328/app-root/data/767576/img'
        },
        domain: {
                host: process.env.host,
                port: ''
        },
        env: 'dev', // dev or prod
        mongodb: {
                credentials: '', // username:password@
                host: '107.170.15.88', //
                port: ':27017', // :port
                dbName: 'admin_jomow_com_br'
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
                blogName: 'admin.jomow.com.br',
                blogDescription: 'admin.jomow.com.br',
                url: {
                        site: '/',
                        admin: '/admin',
                        sitePartials: '/partials',
                        adminPartials: '/admin/partials'
                }
        }
};

module.exports = config;

