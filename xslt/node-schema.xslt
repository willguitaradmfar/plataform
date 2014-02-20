<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output encoding="UTF-8"/>
<xsl:output method="html"/>
<xsl:template match="/">
<xsl:variable name="smallcase" select="'abcdefghijklmnopqrstuvwxyz'" />
<xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />


var mongoose = require('mongoose');

mongoose.connect('mongodb://' + config.mongodb.credentials + config.mongodb.host + config.mongodb.port + '/' + config.mongodb.dbName, function(err) {
    if (err) {
        console.log('POSSIVEL SOLUCAO \nsudo service mongodb stop\nsudo rm /var/lib/mongodb/mongod.lock\nsudo chown -R mongodb:mongodb /var/lib/mongodb/\nsudo service mongodb start\n');
        throw err;
    }
});

<xsl:for-each select="modelos/modelo">
			<xsl:variable name="nome" select='nome' />
		    <xsl:variable name="Nome" select='concat(
		                    translate(substring(nome, 1, 1), $smallcase, $uppercase),
		                    translate(substring(nome, 2), $uppercase, $smallcase))' />
// ########################## Schema de produto <xsl:value-of select="$Nome"/> ###################
var <xsl:value-of select="$nome"/>ObjSchema = {};
<xsl:value-of select="$nome"/>ObjSchema.dtcreate = {type: Date,default: Date.now};
<xsl:value-of select="$nome"/>ObjSchema.dtupdate = {type: Date,default: Date.now};

<xsl:for-each select="atributos/atributo">			
<xsl:value-of select="$nome"/>ObjSchema.<xsl:value-of select="nome"/> = <xsl:value-of select="tipo"/>;
</xsl:for-each>

var <xsl:value-of select="$nome"/>Schema = mongoose.Schema(<xsl:value-of select="$nome"/>ObjSchema);
module.exports.<xsl:value-of select="$Nome"/> = mongoose.model('<xsl:value-of select="$domain"/>.<xsl:value-of select="$nome"/>', <xsl:value-of select="$nome"/>Schema);

</xsl:for-each>
</xsl:template>
</xsl:stylesheet>
