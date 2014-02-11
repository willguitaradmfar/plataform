
'use strict';

angular.module('app.controllers', ['socket-io'])


.controller('PrincipalController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'Pedido',
	function($scope, $location,  $http, $templateCache, $routeParams, Pedido) {
		console.log('PrincipalController');
	
	}
])


.controller('RelatorioController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'Pedido',
	function($scope, $location,  $http, $templateCache, $routeParams, Pedido) {
		console.log('RelatorioController');
		
		var pedidoFilter = {};
		pedidoFilter.codigo = {"$gt" : 10, "$lt" : 21};
		
		$scope.pedidos = Pedido.query({query : JSON.stringify(pedidoFilter)}, function (res) {
		    $scope.pedido = {};
		    $scope.pedido.total = 0;
		    for(var i in $scope.pedidos){
		        $scope.pedido.total += $scope.pedidos[i].valorProduto;
		    }      
		    return res;
		})
	}
])


.controller('MenuController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket',
	function($scope, $location,  $http, $templateCache, $routeParams, socket) {
		console.log('MenuController');
		
		$scope.isActive = function (viewLocation) {
             return (viewLocation === $location.path());
        };
	}
])

;