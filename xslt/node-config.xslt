

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output encoding="UTF-8"/>
<xsl:output method="html"/>
<xsl:template match="/">
<xsl:variable name="smallcase" select="'abcdefghijklmnopqrstuvwxyz'" />
<xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />

<xsl:variable name="domainNormal" select="translate($domain,'.','_')"/>

var config = {
        app : {
                tenant : '<xsl:value-of select="$domain"/>'  
        },
        domain: {
                host: process.env.host,
                port: ''
        },
        env: 'dev', // dev or prod
        mongodb: {
                credentials: '', // username:password@
                host: '<xsl:value-of select="modelos/jomowdb"/>', //
                port: ':27017', // :port
                dbName: '<xsl:value-of select="$domainNormal"/>'
        },
        twitter: {
                consumerKey: process.env.consumerKey,
                consumerSecret: process.env.consumerSecret
        },
        redis : {
            host : '<xsl:value-of select="modelos/jomowdb"/>',
            port : '6379',
            password : ''
        },
        solr : {
            host : '<xsl:value-of select="modelos/jomowdb"/>',
            user : '',
            password : ''
        },
        public: {
                blogName: '<xsl:value-of select="$domain"/>',
                blogDescription: '<xsl:value-of select="$domain"/>',
                url: {
                        site: '/',
                        admin: '/admin',
                        sitePartials: '/partials',
                        adminPartials: '/admin/partials'
                }
        }
};

module.exports = config;
</xsl:template>
</xsl:stylesheet>
