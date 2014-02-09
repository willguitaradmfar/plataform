
'use strict';

angular.module('app', ['app.controllers', 'app.resource', 'app.directive']).
    config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/', {templateUrl: 'partials/_construcao.tpl', controller: 'JomowController'});
    
	$routeProvider.when('/produto', {templateUrl: 'partials/_produto.html', controller: 'ProdutoController'});
    
	$routeProvider.when('/contato', {templateUrl: 'partials/_contato.html', controller: 'ContatoController'});
    
	$routeProvider.when('/post', {templateUrl: 'partials/_post.html', controller: 'PostController'});
    

    $routeProvider.otherwise({redirectTo: '/'});
}]);


