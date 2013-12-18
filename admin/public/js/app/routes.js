'use strict';

// Declare app level module which depends on filters, and services
angular.module('app', ['app.controllers', 'app.resource']).
config(['$routeProvider', function($routeProvider) {

$routeProvider.when('/login', {templateUrl: 'partials/_login.html', controller: 'LoginController'});

$routeProvider.otherwise({redirectTo: '/login'});
}]);
