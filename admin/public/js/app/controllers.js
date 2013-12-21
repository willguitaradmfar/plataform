'use strict';

angular.module('app.controllers', ['socket-io'])

.controller('PrincipalController', ['$scope','$location', '$http', '$templateCache', '$routeParams',
	function($scope, $location,  $http, $templateCache, $routeParams) {
		console.log('PrincipalController');
	}
])

.controller('ProdutoController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'Produto', 'socket',
	function($scope, $location,  $http, $templateCache, $routeParams, Produto, socket) {
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
                    $scope.uiproduto.formulario = '';
                });
            }else{
                Produto.save($scope.produto, function () {
                    $scope.msg.text = "Produto "+$scope.produto.nome+" Salvo com sucesso";
                    $scope.limpar();
                    $scope.list();
                    $scope.uiproduto.formulario = '';
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
		if($routeParams.id){
    		Produto.get({id : $routeParams.id}, function (produto) {
    		    $scope.seleciona(produto);
    		    if(produto._id){
    		        $scope.uiproduto = {};
    		        $scope.uiproduto.formulario = 'mostrar';
    		    }
    		});
		}
		
		$scope._tmp = {};
		$scope._tmp.caracteristicas = [];
		$scope.addCaracteristica = function () {
		    $scope._tmp.caracteristicas.push($scope._tmp.caracteristica);
		    $scope._tmp.caracteristica = {};
		}
		
		$scope.excluirCaracteristica = function (caracteristica) {
		    for(var c in $scope._tmp.caracteristicas){
		        if(caracteristica.$$hashKey == $scope._tmp.caracteristicas[c].$$hashKey){
		            $scope._tmp.caracteristicas.splice(c, 1);
		        }
		    }
		}
		
		$scope._tmp.tags = [];
		$scope.addTag = function () {
		    $scope._tmp.tags.push($scope._tmp.tag);
		    $scope._tmp.tag = {};
		}
		
		$scope.excluirTag = function (tag) {
		    for(var c in $scope._tmp.tags){
		        if(tag.$$hashKey == $scope._tmp.tags[c].$$hashKey){
		            $scope._tmp.tags.splice(c, 1);
		        }
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

.controller('MenuController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket',
	function($scope, $location,  $http, $templateCache, $routeParams, socket) {
		console.log('MenuController');
		
		$scope.notificacoes = [];
		socket.on('produto::create', function(data) {
		    data.text = "Um Produto foi adicionado";
		    data.entidade = "produto";
		    data.nivel = "success";
            $scope.notificacoes.push(data)
        });
        socket.on('produto::update', function(data) {
            data.text = "Um Produto foi atualizado";
		    data.entidade = "produto";
		    data.nivel = "warning";
            $scope.notificacoes.push(data)
        });
        socket.on('produto::remove', function(data) {
            data.text = "Um Produto foi removido";
		    data.entidade = "produto";
		    data.nivel = "danger";
            $scope.notificacoes.push(data)
        });
        
        socket.on('produto::indexSolr', function(data) {
		    data.text = "Um Produto foi indexado(Solr)";
		    data.entidade = "produto";
		    data.nivel = "success";
            $scope.notificacoes.push(data)
        });
        socket.on('produto::updateSolr', function(data) {
            data.text = "Um Produto foi atualizado(Solr)";
		    data.entidade = "produto";
		    data.nivel = "warning";
            $scope.notificacoes.push(data)
        });
        socket.on('produto::deletaSolr', function(data) {
            data.text = "Um Produto foi removido(Solr)";
		    data.entidade = "produto";
		    data.nivel = "danger";
            $scope.notificacoes.push(data)
        });
        
		$scope.isActive = function (viewLocation) {
             var active = (viewLocation === $location.path());
             return active;
        };
	}
])
;