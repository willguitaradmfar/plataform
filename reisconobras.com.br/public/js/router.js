
'use strict';

angular.module('app', ['app.controllers', 'app.resource', 'app.directive']).
    config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/', {templateUrl: 'partials/_construcao.tpl', controller: 'JomowController'});
    
	$routeProvider.when('/Contato', {templateUrl: 'partials/_Contato.html', controller: 'ContatoController'});
	$routeProvider.when('/Contato/:id', {templateUrl: 'partials/_Contato.html', controller: 'ContatoController'});
    

    $routeProvider.otherwise({redirectTo: '/'});
}]);


