
'use strict';

angular.module('app', ['app.controllers', 'app.resource', 'app.directive']).
    config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/', {templateUrl: 'partials/_construcao.tpl', controller: 'JomowController'});
    
	$routeProvider.when('/imovel', {templateUrl: 'partials/_imovel.tpl', controller: 'ImovelController'});
	$routeProvider.when('/imovel/:id', {templateUrl: 'partials/_imovel.tpl', controller: 'ImovelController'});

    

    $routeProvider.otherwise({redirectTo: '/'});
}]);


