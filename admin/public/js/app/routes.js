'use strict';

// Declare app level module which depends on filters, and services
angular.module('app', ['app.controllers', 'app.resource']).
config(['$routeProvider', function($routeProvider) {

$routeProvider.when('/', {templateUrl: 'partials/_principal.html', controller: 'PrincipalController'});
$routeProvider.when('/produto', {templateUrl: 'partials/_produtos.html', controller: 'ProdutoController'});
$routeProvider.when('/produto/:id', {templateUrl: 'partials/_produtos.html', controller: 'ProdutoController'});
$routeProvider.when('/cliente', {templateUrl: 'partials/_clientes.html', controller: 'ClienteController'});
$routeProvider.when('/cliente/:id', {templateUrl: 'partials/_clientes.html', controller: 'ClienteController'});
$routeProvider.when('/venda', {templateUrl: 'partials/_vendas.html', controller: 'VendaController'});
$routeProvider.when('/venda/:id', {templateUrl: 'partials/_vendas.html', controller: 'VendaController'});

$routeProvider.otherwise({redirectTo: '/'});

}]);
