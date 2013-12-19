'use strict';

// Declare app level module which depends on filters, and services
angular.module('app', ['app.controllers', 'app.resource']).
config(['$routeProvider', function($routeProvider) {

$routeProvider.when('/', {templateUrl: 'partials/_principal.html', controller: 'PrincipalController'});
$routeProvider.when('/produtos', {templateUrl: 'partials/_produtos.html', controller: 'ProdutoController'});
$routeProvider.when('/clientes', {templateUrl: 'partials/_clientes.html', controller: 'ClienteController'});
$routeProvider.when('/vendas', {templateUrl: 'partials/_vendas.html', controller: 'VendaController'});

$routeProvider.otherwise({redirectTo: '/'});

}]);
