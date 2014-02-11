
'use strict';

angular.module('app', ['app.controllers', 'app.resource', 'app.directive']).
    config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/', {templateUrl: 'partials/_empresa.tpl', controller: 'JomowController'});
    
	$routeProvider.when('/servicos', {templateUrl: 'partials/_servicos.tpl', controller: 'ServicosController'});
	$routeProvider.when('/servicos/:id', {templateUrl: 'partials/_servicos.tpl', controller: 'ServicosController'});
    $routeProvider.when('/clientes', {templateUrl: 'partials/_clientes.tpl', controller: 'ClientesController'});
	$routeProvider.when('/clientes/:id', {templateUrl: 'partials/_clientes.tpl', controller: 'ClientesController'});
    $routeProvider.when('/obras', {templateUrl: 'partials/_obras.tpl', controller: 'ObrasController'});
	$routeProvider.when('/obras/:id', {templateUrl: 'partials/_obras.tpl', controller: 'ObrasController'});
    $routeProvider.when('/contato', {templateUrl: 'partials/_contato.tpl', controller: 'ContatoController'});
	$routeProvider.when('/contato/:id', {templateUrl: 'partials/_contato.tpl', controller: 'ContatoController'});
    

    $routeProvider.otherwise({redirectTo: '/'});
}]);


