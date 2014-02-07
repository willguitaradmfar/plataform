
'use strict';

angular.module('app.controllers', ['socket-io'])


.controller('PrincipalController', ['$scope','$location', '$http', '$templateCache', '$routeParams',
	function($scope, $location,  $http, $templateCache, $routeParams) {
		console.log('PrincipalController');
	}
])

.controller('RelatorioController', ['$scope','$location', '$http', '$templateCache', '$routeParams',
	function($scope, $location,  $http, $templateCache, $routeParams) {
		console.log('PrincipalController');
	}
])


.controller('MenuController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket',
	function($scope, $location,  $http, $templateCache, $routeParams, socket) {
		console.log('MenuController');
		
		$scope.isActive = function (viewLocation) {
             var active = (viewLocation === $location.path());
             return active;
        };
	}
])

;