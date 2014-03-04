
'use strict';

angular.module('app', ['app.controllers', 'app.resource', 'app.directive']).
    config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/', {templateUrl: 'partials/_construcao.tpl', controller: 'JomowController'});
    
	$routeProvider.when('/imovel', {templateUrl: 'partials/_imovel.tpl', controller: 'ImovelController'});
	$routeProvider.when('/imovel/:id', {templateUrl: 'partials/_imovel.tpl', controller: 'ImovelController'});
	$routeProvider.when('/quemsomos', {templateUrl: 'partials/_quemsomos.tpl', controller: 'QuemsomosController'});
	$routeProvider.when('/quemsomos/:id', {templateUrl: 'partials/_quemsomos.tpl', controller: 'QuemsomosController'});
	$routeProvider.when('/imoveis', {templateUrl: 'partials/_imoveis.tpl', controller: 'ImoveisController'});
	$routeProvider.when('/imoveis/:id', {templateUrl: 'partials/_imoveis.tpl', controller: 'ImoveisController'});
	$routeProvider.when('/simulador', {templateUrl: 'partials/_simulador.tpl', controller: 'SimuladorController'});
	$routeProvider.when('/simulador/:id', {templateUrl: 'partials/_simulador.tpl', controller: 'SimuladorController'});
    $routeProvider.when('/contato', {templateUrl: 'partials/_contato.tpl', controller: 'ContatoController'});
	$routeProvider.when('/contato/:id', {templateUrl: 'partials/_contato.tpl', controller: 'ContatoController'});
    $routeProvider.when('/CadastreSeuImovel', {templateUrl: 'partials/_cadastreseuimovel.tpl', controller: 'CadastreseuimovelController'});
	$routeProvider.when('/cadastreseuimovel/:id', {templateUrl: 'partials/_cadastreseuimovel.tpl', controller: 'CadastreseuimovelController'});
	
    $routeProvider.otherwise({redirectTo: '/'});
}]);


