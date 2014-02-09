

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output encoding="UTF-8"/>
<xsl:output method="html"/>
<xsl:template match="/">
<xsl:variable name="smallcase" select="'abcdefghijklmnopqrstuvwxyz'" />
<xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />
'use strict';

angular.module('app', ['app.controllers', 'app.resource', 'app.directive']).
    config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/', {templateUrl: 'partials/_construcao.tpl', controller: 'JomowController'});
    <xsl:for-each select="modelos/modelo">
			<xsl:variable name="nome" select='nome' />
		    <xsl:variable name="Nome" select='concat(
		                    translate(substring(nome, 1, 1), $smallcase, $uppercase),
		                    translate(substring(nome, 2), $uppercase, $smallcase))' />
	$routeProvider.when('/<xsl:value-of select="$nome"/>', {templateUrl: 'partials/_<xsl:value-of select="$nome"/>.html', controller: '<xsl:value-of select="$Nome"/>Controller'});
    </xsl:for-each>

    $routeProvider.otherwise({redirectTo: '/'});
}]);

</xsl:template>
</xsl:stylesheet>
