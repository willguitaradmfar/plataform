<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output encoding="UTF-8"/>
<xsl:output method="html"/>

<xsl:variable name="smallcase" select="'abcdefghijklmnopqrstuvwxyz'" />
<xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />

<xsl:param name="modelo" select="translate(modelo/nome, $uppercase, $smallcase)"/>
<xsl:param name="Modelo" select="concat(translate(substring(modelo/nome, 1, 1), $smallcase, $uppercase),
              translate(substring(modelo/nome, 2), $uppercase, $smallcase))"/>

<xsl:template match="/">
{
        "name": "<xsl:value-of select="$domain"/>",
        "version": "0.1.0",
        "private": true,
        "scripts": {
                "start": "node app.js"
        },
        "dependencies": {
                "express": "3.2.6",
                "nodemon": "*",
                "jade": "0.32.0",
                "stylus": "0.33.1",
                "mongoose": "3.6.14",
                "socket.io": "0.9.16",
                "passport": "0.1.17",
                "passport-twitter": "0.1.5",
                "uglify-js": "*",
                "active-x-obfuscator": "*",
                "ejs": "~0.8.4",
                "tingodb" : "*",
                "tungus" : "*"
        }
}
</xsl:template>
</xsl:stylesheet>
