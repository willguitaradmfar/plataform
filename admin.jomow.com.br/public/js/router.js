
'use strict';

angular.module('app', ['app.controllers', 'app.resource', 'app.directive']).
    config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.when('/', {templateUrl: 'partials/_home.html', controller: 'HomeController'});
	$routeProvider.when('/home', {templateUrl: 'partials/_home.html', controller: 'HomeController'});
	$routeProvider.when('/menu', {templateUrl: 'partials/_menu.html', controller: 'MenuController'});
	$routeProvider.when('/pessoa', {templateUrl: 'partials/_pessoa.html', controller: 'PessoaController'});
	
	$routeProvider.when('/relatorio', {templateUrl: 'partials/_relatorio.ajrc.com.br.html', controller: 'RelatorioController'});
	$routeProvider.when('/imovel', {templateUrl: 'partials/_imoveis.facilitiimoveis.com.br.html', controller: 'ImovelController'});
	

    $routeProvider.otherwise({redirectTo: '/'});
}]);


