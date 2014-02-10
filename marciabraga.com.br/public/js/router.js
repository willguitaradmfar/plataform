
'use strict';

angular.module('app', ['app.controllers', 'app.resource', 'app.directive']).
    config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/', {templateUrl: 'partials/_construcao.tpl', controller: 'JomowController'});
    
	$routeProvider.when('/post', {templateUrl: 'partials/_post.html', controller: 'PostController'});
    $routeProvider.when('/post/:id', {templateUrl: 'partials/_post.html', controller: 'PostController'});
	$routeProvider.when('/cliente', {templateUrl: 'partials/_cliente.html', controller: 'ClienteController'});
    $routeProvider.when('/cliente/:id', {templateUrl: 'partials/_cliente.html', controller: 'ClienteController'});

    $routeProvider.otherwise({redirectTo: '/'});
}]);


