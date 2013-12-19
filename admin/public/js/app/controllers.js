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
    		   return list; 
    		});    
		}
		
		$scope.list();
	
        $scope.salvar = function () {
            if($scope.produto._id){
                Produto.update({id : $scope.produto._id}, $scope.produto, function () {
                    $scope.msg.text = "Produto "+$scope.produto.nome+" Atualizado com sucesso";
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
		
		$scope.excluir = function (produto){ 
            if (produto._id){
                Produto.excluir({id : produto._id }, function () {
    		       $scope.limpar(); 
    		       $scope.list(); 
    		       $scope.msg.text = "O produto "+produto.nome+" foi exluido do servidor ..";
    		    });
            }
		}
		 
	   	$scope.seleciona = function (produto) {
		    $scope.produto = produto;
		}
		
		Produto.get({id : $routeParams.id}, function (produto) {
		    $scope.seleciona(produto);
		    if(produto._id)
		        $scope.mostrar = true;
		});
		
		$scope.alternar = function () {
		    if($scope.mostrar){
		        $scope.mostrar = false;
		    }else{
		        $scope.mostrar = true;
		    }
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