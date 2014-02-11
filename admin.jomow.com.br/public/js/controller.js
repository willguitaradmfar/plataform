
'use strict';

angular.module('app.controllers', ['socket-io'])

.controller('MenuController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket',
	function($scope, $location,  $http, $templateCache, $routeParams, socket) {
		console.log('MenuController');

		$scope.isActive = function (viewLocation) {
			var active = (viewLocation === $location.path());
			return active;
		};
	}
])

.controller('JomowController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket',
	function($scope, $location,  $http, $templateCache, $routeParams, socket) {
		console.log('JomowController');
location.href = '/';
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
		        	location.href = '/';
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
		
		Login.get(function (res) {
			if(res.status === "oK"){
				$scope.user = res.user;
			}
		})

		$scope.sair = function () {
			Login.sair(function(res) {
				if(res.status === "oK"){
					location.href = '/';
				}
			});
		}		
	}
])

;

