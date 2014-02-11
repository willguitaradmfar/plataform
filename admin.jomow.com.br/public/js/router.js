
'use strict';

angular.module('app', ['app.controllers', 'app.resource', 'app.directive']).
    config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/', {templateUrl: 'partials/_construcao.tpl', controller: 'JomowController'});
    
	$routeProvider.when('/pessoa', {templateUrl: 'partials/_pessoa.html', controller: 'PessoaController'});
	$routeProvider.when('/pessoa/:id', {templateUrl: 'partials/_pessoa.html', controller: 'PessoaController'});
    
	$routeProvider.when('/menu', {templateUrl: 'partials/_menu.html', controller: 'MenuController'});
	$routeProvider.when('/menu/:id', {templateUrl: 'partials/_menu.html', controller: 'MenuController'});
    

    $routeProvider.otherwise({redirectTo: '/'});
}]);


