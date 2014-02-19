'use strict';

// Declare app level module which depends on filters, and services
angular.module('app', ['app.controllers', 'app.resource', 'app.directive']).
config(['$routeProvider', function($routeProvider) {

$routeProvider.when('/', {controller: 'JomowController'});

$routeProvider.when('/url/:url', {controller: 'JomowController'});

$routeProvider.otherwise({redirectTo: '/'});
}]);
