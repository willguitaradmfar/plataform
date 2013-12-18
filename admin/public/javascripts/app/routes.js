'use strict';

// Declare app level module which depends on filters, and services
angular.module('app', ['app.controllers', 'app.resource']).
config(['$routeProvider', function($routeProvider) {

$routeProvider.when('/login', {templateUrl: 'partials/_login.html', controller: 'LoginController'});
$routeProvider.when('/create-account', {templateUrl: 'partials/_create-account.html', controller: 'CreateAccountController'});
$routeProvider.when('/remember-password', {templateUrl: 'partials/_remember-password.html', controller: 'RememberPasswordController'});
$routeProvider.when('/home', {templateUrl: 'partials/_home.html', controller: 'HomeController'});
$routeProvider.when('/input-supply', {templateUrl: 'partials/_input-supply.html', controller: 'InputSupplyController'});
$routeProvider.when('/messages', {templateUrl: 'partials/_messages.html', controller: 'MSGController'});
$routeProvider.when('/record-sales/:numBomba', {templateUrl: 'partials/_record-sales.html', controller: 'RecordSalesController'});
$routeProvider.when('/search-usuario', {templateUrl: 'partials/_search-usuario.html', controller: 'SearchUsuarioController'});
$routeProvider.when('/create-vehicle', {templateUrl: 'partials/_create-vehicle.html', controller: 'CreateVehicleController'});

$routeProvider.otherwise({redirectTo: '/login'});
}]);
