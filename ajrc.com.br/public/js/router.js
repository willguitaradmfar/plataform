
'use strict';

angular.module('app', ['app.controllers', 'app.resource', 'app.directive']).
    config(['$routeProvider', function($routeProvider) {

   
    $routeProvider.when('/', {templateUrl: 'partials/_principal.html', controller: 'PrincipalController'});
    $routeProvider.when('/relatorio', {templateUrl: 'partials/_relatorio.html', controller: 'RelatorioController'});

    $routeProvider.otherwise({redirectTo: '/'});
}]);


