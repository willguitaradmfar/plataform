
'use strict';

angular.module('app.controllers', ['socket-io'])


.controller('HomeController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket',
	function($scope, $location,  $http, $templateCache, $routeParams, socket) {
		console.log('HomeController');
	}
])

.controller('RelatorioController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket',
	function($scope, $location,  $http, $templateCache, $routeParams, socket) {
		console.log('RelatorioController');
	}
])

.controller('PessoaController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket', 'Email', 'Login', 'Pessoa',
	function($scope, $location,  $http, $templateCache, $routeParams, socket, Email, Login, Pessoa) {
		console.log('PessoaController');
		$scope.uipessoa = {};
		$scope.uipessoa.login = {};
		$scope.uipessoa.cadastro = {};
		$scope.uipessoa.restaurar = {};

		$scope.autenticar = function () {		    
		    Login.logar($scope.pessoa, function (res) {
		        if(res.status === "oK"){
		        	location.href = '/#/home';
		        }else{
		        	$scope.uipessoa.login.msg = res.msg;
		        }
		    })
		}

		$scope.restaurar = function () {		    
		    Login.restaurar($scope.restaurarpessoa, function (res) {
		        if(res.status === "oK"){
		        	$scope.restaurarpessoa = {};
		        	$scope.uipessoa.restaurar.msg = res.msg;
		        }else{
		        	$scope.uipessoa.restaurar.msg = res.msg;
		        }
		    })
		}

		$scope.salvarPessoa = function () {
		    if($scope.newpessoa.senha != $scope.newpessoa.csenha){
		    	$scope.uipessoa.cadastro.msg = "Senhas não conferem";
		    	return ;
		    }

		    if(!$scope.newpessoa.acceptPolicy){
		    	$scope.uipessoa.cadastro.msg = "Deve aceitar o contrato de uso";
		    	return ;
		    }
		    $scope.uipessoa.cadastro.msg = "";
		    
		    Pessoa.save($scope.newpessoa, function (res) {
		    	if(res.status === "Ok"){
		    		$scope.uipessoa.cadastro.msg = "Usuário cadastrado com sucesso";
		    		$scope.newpessoa = {};
		    	}
		    });
		}
	}
])

.controller('MenuController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket', 'Email', 'Menu', 'Login',
	function($scope, $location,  $http, $templateCache, $routeParams, socket, Email, Menu, Login) {
		console.log('MenuController');		
		
		$scope.uimenu = {};
		$scope.uimenu.msg = {};
		
		$scope.recarregarMenus = function(){
			$scope.menus = Menu.list(function(res){
				return res;
			});
		}
		
		$scope.recarregarMenus();
		
		
		Login.get(function (res) {
			if(res.status === "oK"){
				$scope.user = res.user;
			}
		})
		
		$scope.salvarMenu = function(){
			if($scope.menu._id){
				Menu.update({id : $scope.menu._id}, $scope.menu, function(res){
					$scope.uimenu.msg.text = "Menu "+$scope.menu._id+" Atualizado com sucesso";
					$scope.limparMenu();
					$scope.recarregarMenus();
				});
			}else{
				Menu.save($scope.menu, function(res){
					$scope.uimenu.msg.text = "Menu "+$scope.menu._id+" Salvo com sucesso";
					$scope.limparMenu();
					$scope.recarregarMenus();
				});
			}
		}
		
		$scope.limparMenu = function () {
		    $scope.menu = {};
		}

		$scope.excluirMenu = function(menu){ 
			if (menu._id){
				Menu.excluir({id : menu._id }, function () {
					$scope.limparMenu();
					$scope.recarregarMenus();
					$scope.uimenu.msg.text = "O Menu "+menu._id+" foi exluido do servidor ..";
				});
			}
		}

		$scope.sair = function () {
			Login.sair(function(res) {
				if(res.status === "oK"){
					location.href = '/login.html';
				}
			});
		}		
	}
])

;

