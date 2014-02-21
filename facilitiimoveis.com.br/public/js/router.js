
'use strict';

angular.module('app', ['app.controllers', 'app.resource', 'app.directive']).
    config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/', {templateUrl: 'partials/_construcao.tpl', controller: 'JomowController'});
    
	$routeProvider.when('/imovel', {templateUrl: 'partials/_imovel.tpl', controller: 'ImovelController'});
	$routeProvider.when('/imovel/:id', {templateUrl: 'partials/_imovel.tpl', controller: 'ImovelController'});
	$routeProvider.when('/imoveis', {templateUrl: 'partials/_imoveis.tpl', controller: 'ImoveisController'});
	$routeProvider.when('/imoveis/:id', {templateUrl: 'partials/_imoveis.tpl', controller: 'ImoveisController'});

    

    $routeProvider.otherwise({redirectTo: '/'});
}]);


