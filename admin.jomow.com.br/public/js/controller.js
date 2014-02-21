
'use strict';

var jomowModel = function (Model, $scope) {
    
    Model.prototype.update = function () {
        var $this = this;
	    if($this._id){
	        Model.update({id : $this._id}, $this, function (res) {
	            parse(res.obj, $this);
	            return res;
	        });
	    }else{
	        Model.save($this, function (res) {
	            parse(res.obj, $this);
	            return res;
	        });
	    }
	    return $this;
	}
	
	var parse = function (de, para) {
	    for(var i in de){
	        if(!(de[i] instanceof Function))
	            para[i] = de[i];
	    }
	}
	
	$scope.novo = function (list) {
	    return list.push(new Model())-1;
	}
	
	$scope.initArray = function (obj, _sObj) {
	    if(!obj[_sObj])
	        obj[_sObj] = [];
	}
	
	Model.prototype.select = function (o1, o2) {
	    $scope[o1] = o2;
	}
	
	Model.prototype.remove = function (list, $index) {
	    var $this = this;
	    if(list[$index].update){
     	    Model.excluir({id : this._id}, function (res) {
     	        if(res.status == "Ok")
     	            list.splice($index, 1);
     	        return res;
     	    });
	    }else{
	        list.splice($index, 1 );
	        Model.update({id : $this._id}, $this, function (res) {
	            parse(res.obj, $this);
     	        return res;
     	    });
	    }
 	    return this;
	}
	
	Model.prototype.reloadAll = function (obj) {
	    $scope[obj] = Model.list(function (res) {
	        console.log(res);
	        return res;
	    });
	}
}

var module = angular.module('app.controllers', ['socket-io']);

module.controller('HomeController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket',
	function($scope, $location,  $http, $templateCache, $routeParams, socket) {
		console.log('HomeController');
		
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
		        	location.href = '/index.html#/home';
		        }else{
		        	$scope.uiusuario.login.msg = res.msg;
		        }
		    });
		}

		$scope.restaurar = function () {		    
		    Login.restaurar($scope.restaurarusuario, function (res) {
		        if(res.status === "oK"){
		        	$scope.restaurarusuario = {};
		        	$scope.uiusuario.restaurar.msg = res.msg;
		        }else{
		        	$scope.uiusuario.restaurar.msg = res.msg;
		        }
		    });
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

.controller('UserMenuController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket', 'Menu', 'Login',
	function($scope, $location,  $http, $templateCache, $routeParams, socket, Menu, Login) {
		console.log('UserMenuController');
		
    	Login.get(function (res) {
			if(res.status === "oK"){
				 $scope.user = res.user;
				 if($scope.user.dominios && $scope.user.dominios.length > 0){
				        $scope.dominio = $scope.user.dominios[0];
				        $scope.dominios = $scope.user.dominios;
				        $scope.menus = $scope.dominio.menus
				 }
			}
		})
		
		$scope.selectDominio = function (obj) {
		    $scope.dominio = obj;
		     $scope.menus = $scope.dominio.menus
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

.controller('MenuController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket', 'Menu',
	function($scope, $location,  $http, $templateCache, $routeParams, socket, Menu) {
		console.log('RelatorioController');
		jomowModel(Menu, $scope);
		$scope.menu = new Menu();
		$scope.menu.reloadAll('menus');
	}
])

.controller('PessoaController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'Pessoa', 'Menu',
	function($scope, $location,  $http, $templateCache, $routeParams, Pessoa, Menu) {
		console.log('PessoaController');
	
		jomowModel(Pessoa, $scope);
		$scope.pessoa = new Pessoa();
		$scope.pessoa.reloadAll('pessoas');
		
		$scope.menus = Menu.list(function (res) {
		    return res;
		})
	}
])

.controller('RelatorioController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket', 'Pedido',
	function($scope, $location,  $http, $templateCache, $routeParams, socket, Pedido) {
		console.log('RelatorioController');
		jomowModel(Pedido, $scope);
		$scope.pedido = new Pedido();
		$scope.pedido.reloadAll('pedidos');
	}
])

.controller('ImovelController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket', 'Menu', 'Imovel',
	function($scope, $location,  $http, $templateCache, $routeParams, socket, Menu, Imovel) {
		console.log('ImovelController');
		jomowModel(Imovel, $scope);
		$scope.imovel = new Imovel();
		$scope.imovel.reloadAll('imovels');
		
	}
])


;

