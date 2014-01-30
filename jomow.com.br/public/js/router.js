
'use strict';

angular.module('app', ['app.controllers', 'app.resource']).
    config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/', {controller: 'JomowController'});

    $routeProvider.otherwise({redirectTo: '/'});
}]);


