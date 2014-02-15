
'use strict';

var daoGenerics = function($scope, Model, sModel, sDomain, listSubObj) {
        var smodelo = sModel.toLowerCase();
 	    $scope['ui'+smodelo] = {};
 	    $scope[smodelo] = {};
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
		
		$scope['seleciona'+sModel] = function (m) {
		    console.log('seleciona'+sModel+' '+m._id);
		    $scope[smodelo] = m;
		}
		
		$scope['limpar'+sModel] = function () {
		    console.log('limpar'+sModel);
		    $scope[smodelo] = {};
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
		
		for(var i in listSubObj){
		    var $this = listSubObj[i];
		    var ssmodelo = $this.toLowerCase();
		    var ssmodelos = $this.toLowerCase()+'s';
		    $scope._tmp = {};
		    
		    console.log('registrando ... add'+$this+'To'+sModel);
		    $scope['add'+$this+'To'+sModel] = function(){ 
    		    console.log('call add'+$this+'To'+sModel);
    		    if(!$scope[smodelo][ssmodelos]){
    		        $scope[smodelo][ssmodelos] = [];
    		    }
    		    if(!$scope._tmp[ssmodelo]._id){
    		        $scope[smodelo][ssmodelos].push($scope._tmp[ssmodelo]);
    		    }
    		    
    		    Model.update({id : $scope[smodelo]._id}, $scope[smodelo], function(res){
				    console.log('update do '+'add'+$this+'To'+sModel+' em '+sModel+' id:'+$scope[smodelo]._id);
				    $scope[smodelo] = Model.get({id : $scope[smodelo]._id}, function () {
				        $scope._tmp[ssmodelo] = {};    
				    })
				    
				});
		    
    		    console.log($scope[smodelo]);
    		}
    		
    		console.log('registrando ... seleciona'+$this+'From'+sModel+'(dominio)');
		    $scope['seleciona'+$this+'From'+sModel] = function(d){ 
    		    $scope._tmp[ssmodelo] = d;
    		    console.log('selecionado ... '+JSON.stringify($scope._tmp[ssmodelo]));
    		}
    		
    		console.log('registrando ... excluir'+$this+'From'+sModel+'(dominio)');
		    $scope['excluir'+$this+'From'+sModel] = function(d){ 
    		    for(var c in $scope[smodelo][ssmodelos]){
     		        if(d.$$hashKey == $scope[smodelo][ssmodelos][c].$$hashKey){
     		            $scope[smodelo][ssmodelos].splice(c, 1);
     		        }
     		    }
     		    Model.update({id : $scope[smodelo]._id}, $scope[smodelo], function(res){
				    console.log('update do '+'add'+$this+'To'+sModel+' em '+sModel+' id:'+$scope[smodelo]._id);
				    $scope[smodelo] = Model.get({id : $scope[smodelo]._id}, function () {
				        $scope._tmp[ssmodelo] = {};    
				    })
				});
    		    console.log('excluindo ... '+JSON.stringify($scope[smodelo][ssmodelos]));
    		}
		}
	
		
    return $scope;
}

var module = angular.module('app.controllers', ['socket-io']);

module.controller('HomeController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket',
	function($scope, $location,  $http, $templateCache, $routeParams, socket) {
		console.log('HomeController');
		
		
	}
])

.controller('RelatorioController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket',
	function($scope, $location,  $http, $templateCache, $routeParams, socket) {
		console.log('RelatorioController');
	}
])

.controller('UsuarioController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket', 'Email', 'Login', 'Pessoa',
	function($scope, $location,  $http, $templateCache, $routeParams, socket, Email, Login, Pessoa) {
		console.log('UsuarioController');
		
		$scope.uiusuario = {};
		$scope.uiusuario.login = {};
		$scope.uiusuario.cadastro = {};
		$scope.uiusuario.restaurar = {};

		$scope.autenticar = function () {
		    Login.logar($scope.usuario, function (res) {
		        if(res.status === "oK"){
		        	location.href = '/#/home';
		        }else{
		        	$scope.uiusuario.login.msg = res.msg;
		        }
		    })
		}

		$scope.restaurar = function () {		    
		    Login.restaurar($scope.restaurarusuario, function (res) {
		        if(res.status === "oK"){
		        	$scope.restaurarusuario = {};
		        	$scope.uiusuario.restaurar.msg = res.msg;
		        }else{
		        	$scope.uiusuario.restaurar.msg = res.msg;
		        }
		    })
		}

		$scope.salvarUsuario = function () {
		    if($scope.newusuario.senha != $scope.newusuario.csenha){
		    	$scope.uiusuario.cadastro.msg = "Senhas não conferem";
		    	return ;
		    }

		    if(!$scope.newusuario.acceptPolicy){
		    	$scope.uiusuario.cadastro.msg = "Deve aceitar o contrato de uso";
		    	return ;
		    }
		    $scope.uiusuario.cadastro.msg = "";
		    
		    Pessoa.save($scope.newusuario, function (res) {
		    	if(res.status === "Ok"){
		    		 var msg = 'Email de confirmação de cadastro em http://admin.jOmOw.com.br \nusuário:'+$scope.newusuario.email+'\nsenha:'+$scope.newusuario.senha;
        		     Email.enviar({
                        from : 'contato@jomow.com.br',
                        to : $scope.newusuario.email,
                        subject : 'Cadastro efetuado '+$scope.newusuario.nome,
                        text : msg
                    }, function (data) {
                        console.log(data);
                        if(data.status)
                        	if(data.status == "Ok"){
        	                    $scope.uiusuario.cadastro.msg = "Usuário cadastrado com sucesso";
		    		            $scope.newusuario = {};
        	                }
                    });
		    	}
		    });
		}
	}
])

.controller('MenuController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'Menu', 'Login',
	function($scope, $location,  $http, $templateCache, $routeParams, Menu, Login) {
		console.log('MenuController');
		
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

.controller('PessoaController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'Pessoa', 'Menu',
	function($scope, $location,  $http, $templateCache, $routeParams, Pessoa, Menu) {
		console.log('PessoaController');
		
		daoGenerics($scope, Pessoa, 'Pessoa', 'admin.jomow.com.br', ["Dominio", "Menu"]);
		//daoGenerics($scope, Menu, 'Menu', 'admin.jomow.com.br', []);
		$scope.recarregarPessoas();
		//$scope.recarregarMenus();
		console.log($scope);

	}
])

;

