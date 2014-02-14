
'use strict';

var daoGenerics = function($scope, Model, sModel, sDomain) {
        var smodelo = sModel.toLowerCase();
    
 	    $scope['ui'+smodelo] = {};
		$scope['ui'+smodelo].msg = {};
		
		$scope['recarregar'+sModel+'s'] = function(){
			$scope[smodelo+'s'] = Model.list(function(res){
			    console.log('recarregando lista size : '+res.length);
				return res;
			});
		}
		
		$scope['salvar'+sModel] = function(){
			if($scope[smodelo]._id){
				Model.update({id : $scope[smodelo]._id}, $scope[smodelo], function(res){
				    console.log('update em '+sModel+' id:'+$scope[smodelo]._id);
					$scope['ui'+smodelo].msg.text = sModel+" "+$scope[smodelo]._id+" Atualizado com sucesso";
					$scope['ui'+smodelo].msg.type = 'warning';
					$scope['limpar'+sModel]();
					$scope['recarregar'+sModel+'s']();
				});
			}else{
				Model.save($scope[smodelo], function(res){
				    console.log('save em '+sModel+' id:'+$scope[smodelo]._id);
				    $scope['ui'+smodelo].msg.text = sModel+" Salvo com sucesso";
				    $scope['ui'+smodelo].msg.type = 'success';
					$scope['limpar'+sModel]();
					$scope['recarregar'+sModel+'s']();
				});
			}
		}
		
		$scope['limpar'+sModel] = function () {
		    console.log('limpar'+sModel);
		    $scope[smodelo] = {};
		}
		
        $scope['closeMessage'+sModel] = function () {
            console.log('closeMessage'+sModel);
            $scope['ui'+smodelo].msg = {};
        }
        
		$scope['excluir'+sModel] = function(res){ 
			if (res._id){
				Model.excluir({id : res._id }, function () {
				    console.log('excluindo em '+sModel+' id:'+res._id);
					$scope['limpar'+sModel]();
					$scope['recarregar'+sModel+'s']();
					$scope['ui'+smodelo].msg.text = sModel+" "+res._id+" foi exluido do servidor ..";
					$scope['ui'+smodelo].msg.type = 'danger';
				});
			}
		}
    return $scope;
}
		

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
		
		daoGenerics($scope, Menu, 'Menu', 'admin.jomow.com.br');
		
		$scope.recarregarMenus();
		
		Login.get(function (res) {
			if(res.status === "oK"){
				$scope.user = res.user;
			}
		})
	
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

