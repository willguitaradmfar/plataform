

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output encoding="UTF-8"/>
<xsl:output method="html"/>
<xsl:template match="/">
<xsl:variable name="smallcase" select="'abcdefghijklmnopqrstuvwxyz'" />
<xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />
'use strict';

angular.module('app.resource', ["ngResource"])
  
   .factory('Email', function ($resource) {
      return $resource('/mail', {}, {
        enviar: {method:'POST'}
      });
  })  

<xsl:for-each select="modelos/modelo">
    <xsl:variable name="nome" select='nome' />
    <xsl:variable name="Nome" select='concat(
                    translate(substring(nome, 1, 1), $smallcase, $uppercase),
                    translate(substring(nome, 2), $uppercase, $smallcase))' />
  .factory('<xsl:value-of select="$Nome"/>', function ($resource) {
      return $resource('/<xsl:value-of select="$nome"/>/:id', {}, {
        list: {method:'GET', params : {id : 'all'}, isArray:true},
        get: {method:'GET', params : {id : 'idPassado'}},
        save: {method:'POST'},
        update: {method:'PUT', params : {id : 'idPassado'}},
        excluir: {method:'DELETE', params : {id : 'idPassado'}}
      });
  })
</xsl:for-each>

;
</xsl:template>
</xsl:stylesheet>
