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

.controller('CreateAccountController', ['$scope','$location', '$http', '$templateCache', 
	function($scope, $location,  $http, $templateCache) {
		console.log('CreateAccountController');	

	}
])

.controller('RememberPasswordController', ['$scope','$location', '$http', '$templateCache', 
	function($scope, $location,  $http, $templateCache) {
		console.log('RememberPasswordController');
		
	}
])

.controller('HomeController', ['$scope','$location', '$http', '$templateCache', '$routeParams',
	function($scope, $location,  $http, $templateCache, $routeParams) {
		console.log('HomeController');
		$scope.posto = {};
		$scope.posto.estoque = 66;
		
	}
])

.controller('RecordSalesController', ['$scope','$location', '$http', '$templateCache', '$routeParams',
	function($scope, $location,  $http, $templateCache, $routeParams) {
		console.log('RecordSalesController');
		if($routeParams.numBomba){
			$scope.recordsales = {};
			$scope.recordsales.numbomba = $routeParams.numBomba;
			$scope.recordsales.user = "Aministrator"; //usuário logado
		}

		$scope.validaCliente = function () {
			$scope.recordsales.obj = undefined;
			if(/^\w{3}\d{4}$/.test($scope.recordsales.cliente)
				|| /^\w{3}-\d{4}$/.test($scope.recordsales.cliente)){
				$scope.recordsales.obj = {};
				$scope.recordsales.obj.cliente = {};
				$scope.recordsales.obj.cliente.nome = "Lucas Neri Fernando";
				$scope.recordsales.obj.cliente.saldo = 987.66;
				$scope.recordsales.obj.cliente.liberado = 'Liberado';
				$scope.recordsales.obj.cliente.placa = $scope.recordsales.cliente;
			}
		}		
	}
])

//

.controller('InputSupplyController', ['$scope','$location', '$http', '$templateCache', '$routeParams',
	function($scope, $location,  $http, $templateCache, $routeParams) {
		console.log('InputSupplyController');
		
		
	}
])

;