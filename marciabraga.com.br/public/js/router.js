
'use strict';

angular.module('app', ['app.controllers', 'app.resource', 'app.directive']).
    config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/', {templateUrl: 'partials/_construcao.tpl', controller: 'JomowController'});
    
    $routeProvider.when('/eventos', {templateUrl: 'partials/_eventos.tpl', controller: 'EventosController'});
    $routeProvider.when('/eventos/:id', {templateUrl: 'partials/_eventos.tpl', controller: 'EventosController'});
    $routeProvider.when('/artigos', {templateUrl: 'partials/_artigos.tpl', controller: 'ArtigosController'});
    $routeProvider.when('/artigos/:id', {templateUrl: 'partials/_artigos.tpl', controller: 'ArtigosController'});
    $routeProvider.when('/servicos', {templateUrl: 'partials/_servicos.tpl', controller: 'ServicosController'});
    $routeProvider.when('/servicos/:id', {templateUrl: 'partials/_servicos.tpl', controller: 'ServicosController'});
    $routeProvider.when('/parceiros', {templateUrl: 'partials/_parceiros.tpl', controller: 'ParceirosController'});
    $routeProvider.when('/parceiros/:id', {templateUrl: 'partials/_parceiros.tpl', controller: 'ParceirosController'});
    $routeProvider.when('/contato', {templateUrl: 'partials/_contato.tpl', controller: 'ContatoController'});
    $routeProvider.when('/contato/:id', {templateUrl: 'partials/_contato.tpl', controller: 'ContatoController'});
	$routeProvider.when('/post', {templateUrl: 'partials/_post.html', controller: 'PostController'});
    $routeProvider.when('/post/:id', {templateUrl: 'partials/_post.html', controller: 'PostController'});
	$routeProvider.when('/cliente', {templateUrl: 'partials/_cliente.html', controller: 'ClienteController'});
    $routeProvider.when('/cliente/:id', {templateUrl: 'partials/_cliente.html', controller: 'ClienteController'});

    $routeProvider.otherwise({redirectTo: '/'});
}]);


