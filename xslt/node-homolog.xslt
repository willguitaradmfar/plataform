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
    
    <link href="/font-awesome/css/font-awesome.css" rel="stylesheet"/>
    
    
    <style type="text/css">
        html,body{
          height:100%;
          overflow:hidden;
          }
        .iframe-jomow{
            margin-top:50px;
            width:100%;
            height:100%;
          }
        .remove-frame{
            position:absolute;
            right:5px;
            top:8px;
          }
    </style>
   
  </head>

  <body ng-controller="JomowController">
    
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="remove-frame btn btn-danger">Remover está barra 
              <i class="fa fa-times"></i></button>
            <a class="navbar-brand" href="http://jomow.com.br">jOmOw</a>
            <ul class="nav navbar-nav">
                <li class="active"><p class="navbar-text">Ambiente de Homologação</p></li>
            </ul>
          </div>
        </div>
    </nav>
    
    <iframe class="iframe-jomow" src="index.html" frameborder="0"></iframe> 
   
    <!-- Js/vendors UI -->
    <script type="text/javascript" src="/js/vendors/jquery/jquery-2.0.2.min.js"></script>
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
    
    <script type="text/javascript">
        $(function() { $('.remove-frame').click(function(){
            $('nav').hide();
            $('.iframe-jomow').css("margin-top","0px");});
        });
    </script>

  </body>

</html>


</xsl:template>
</xsl:stylesheet>