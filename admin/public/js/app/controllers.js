'use strict';

angular.module('app.controllers', [])

.controller('PrincipalController', ['$scope','$location', '$http', '$templateCache', '$routeParams',
	function($scope, $location,  $http, $templateCache, $routeParams) {
		console.log('PrincipalController');
	
	}
])

.controller('ProdutoController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'Produto',
	function($scope, $location,  $http, $templateCache, $routeParams, Produto) {
		console.log('ProdutoController');
		$scope.msg = {};
		
		//Esse metodo busca os produtos e atualiza a table
		$scope.list = function () {
		    $scope.produtos = Produto.list(function (list) {
    		    $scope.msg.text = "Listando "+list.length+" Produtos do Servidor";
    		   return list; 
    		});    
		}
		
		$scope.list();
		
		//Esse metodo salva um novo produto ou atualiza um existente
		$scope.salvar = function () {
		    if($scope.produto._id){
		        Produto.update({id : $scope.produto._id}, $scope.produto, function () {
    		        $scope.msg.text = "Produto "+$scope.produto.nome+" Salvo com sucesso";
    		        $scope.limpar();
    		        $scope.list();
    		    });
		    }else{
    		    Produto.save($scope.produto, function () {
    		        $scope.msg.text = "Produto "+$scope.produto.nome+" Salvo com sucesso";
    		        $scope.limpar();
    		        $scope.list();
    		    });
		    }
		}
		
		//Esse metodo limpa o formulário
		$scope.limpar = function () {
		    $scope.produto = {};
		}
		
		//Esse metodo seleciona um produto clicado
		$scope.seleciona = function (produto) {
		    $scope.produto = produto;
		}
	}
])

.controller('ClienteController', ['$scope','$location', '$http', '$templateCache', '$routeParams',
	function($scope, $location,  $http, $templateCache, $routeParams) {
		console.log('ClienteController');
	
	}
])

.controller('VendaController', ['$scope','$location', '$http', '$templateCache', '$routeParams',
	function($scope, $location,  $http, $templateCache, $routeParams) {
		console.log('VendaController');
		
	}
])


.controller('MenuController', ['$scope','$location', '$http', '$templateCache', '$routeParams',
	function($scope, $location,  $http, $templateCache, $routeParams) {
		console.log('MenuController');
		
		$scope.isActive = function (viewLocation) {
             var active = (viewLocation === $location.path());
             return active;
        };
		
	}
])
;