

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output encoding="UTF-8"/>
<xsl:output method="html"/>
<xsl:template match="/">
<xsl:variable name="smallcase" select="'abcdefghijklmnopqrstuvwxyz'" />
<xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />
'use strict';

angular.module('app', ['app.controllers', 'app.resource', 'app.directive']).
    config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/', {controller: 'JomowController'});

    $routeProvider.otherwise({redirectTo: '/'});
}]);

</xsl:template>
</xsl:stylesheet>
