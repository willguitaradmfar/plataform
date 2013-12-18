'use strict';

angular.module('app.controllers', [])

.controller('LoginController', ['$scope','$location', '$http', '$templateCache', '$routeParams',
	function($scope, $location,  $http, $templateCache, $routeParams) {
		console.log('LoginController');
		$scope.autenticar = function() {
			if($scope.login.user == "admin" && $scope.login.password == "admin"){				
				window.location.href = 'home.html#/home'
			}
		}
	}
])


;