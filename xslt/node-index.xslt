<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output encoding="UTF-8"/>
<xsl:output method="html"/>
<xsl:template match="/">
<xsl:variable name="smallcase" select="'abcdefghijklmnopqrstuvwxyz'" />
<xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />

<html lang="pt-br" ng-app="app">
  <head>
    <!-- Meta -->
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="description" content="Site, web site, loja virtual, negocio na web, desenvolvimento web"/>
    <meta name="author" content="Jomow"/>

    <title>jOmOw</title>
        
    <!-- Css -->
    <link rel="stylesheet" href="/css/vendors/bootstrap/bootstrap.min.css"/>
    <link rel="stylesheet" href="/css/{$domain}.css"/>

  </head>

  <body>
        
    <div ng-view=""></div>

    <!-- Js/vendors UI -->
    <script src="/js/vendors/jquery/jquery-2.0.2.min.js"></script>
    <script type="text/javascript" src="/js/vendors/bootstrap/bootstrap.min.js"></script>
    <!-- Js/vendors ANGULAR -->
    <script type="text/javascript" src="/js/vendors/angular/angular.min.js"></script>
    <script type="text/javascript" src="/js/vendors/angular/angular-resource.min.js"></script>
    <script type="text/javascript" src="/js/vendors/angular/angular-cookies.min.js"></script>
    <script type="text/javascript" src="/js/vendors/angular/ng-socket-io.js"></script>
    <script type="text/javascript" src="/js/vendors/angular/angular-loader.min.js"></script>
    <script type="text/javascript" src="/js/vendors/angular/angular-sanitize.min.js"></script>
    <script type="text/javascript" src="/socket.io/socket.io.js"></script>
    <!-- Js -->
    <script type="text/javascript" src="/js/resource.js"></script>
    <script type="text/javascript" src="/js/controller.js"></script>
    <script type="text/javascript" src="/js/diretivas.js"></script>
    <script type="text/javascript" src="/js/router.js"></script>
    <script type="text/javascript" src="/js/analytics.js"></script>

  </body>

</html>


</xsl:template>
</xsl:stylesheet>