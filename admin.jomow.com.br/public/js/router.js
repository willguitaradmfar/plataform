
'use strict';

angular.module('app', ['app.controllers', 'app.resource', 'app.directive']).
    config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/', {templateUrl: 'partials/_home.html', controller: 'HomeController'});
	$routeProvider.when('/home', {templateUrl: 'partials/_home.html', controller: 'HomeController'});
	$routeProvider.when('/relatorio', {templateUrl: 'partials/_relatorio.html', controller: 'RelatorioController'});
	$routeProvider.when('/menu', {templateUrl: 'partials/_menu.html', controller: 'MenuController'});

    $routeProvider.otherwise({redirectTo: '/'});
}]);


