
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
		
		function registraAdd(ssmodelo, ssmodelos) {
		    $scope['add'+$this.domain+'To'+sModel] = function(_tmp, spath, forcePush){
		        
    		    console.log('call add'+ssmodelo+'To'+sModel);
    		    if(!eval('$scope.'+spath)){
    		        eval('$scope.'+spath.split('.')[0])[spath.split('.')[spath.split('.').length-1]] = [];
    		    }
    		    if(!$scope[_tmp]._id || forcePush){
    		        eval('$scope.'+spath).push($scope[_tmp]);
    		    }
    		    Model.update({id : $scope[smodelo]._id}, $scope[smodelo], function(res){
				    console.log('update do '+'add'+ssmodelo+'To'+sModel+' em '+sModel+' id:'+$scope[smodelo]._id);
				    $scope[smodelo] = Model.get({id : $scope[smodelo]._id}, function (res) {
				        $scope[_tmp] = {};
				        return res;
				    })
				});
    		    console.log($scope[smodelo]);
    		}
		}
		
		function registraSeleciona(ssmodelo, ssmodelos) {
		    $scope['seleciona'+$this.domain+'From'+sModel] = function(_tmp, d){ 
    		    $scope[_tmp] = d;
    		    console.log('selecionado ... '+JSON.stringify($scope[_tmp]));
    		}
		}
		
		function registraExclui(ssmodelo, ssmodelos) {
		    $scope['excluir'+$this.domain+'From'+sModel] = function(d, spath){
    		    for(var c in eval('$scope.'+spath.split('.')[0])[spath.split('.')[spath.split('.').length-1]]){
     		        if(d.$$hashKey == eval('$scope.'+spath.split('.')[0])[spath.split('.')[spath.split('.').length-1]][c].$$hashKey){
     		            eval('$scope.'+spath.split('.')[0])[spath.split('.')[spath.split('.').length-1]].splice(c, 1);
     		        }
     		    }
     		    Model.update({id : $scope[smodelo]._id}, $scope[smodelo], function(res){
				    console.log('update do '+'add'+ssmodelo.domain+'To'+sModel+' em '+sModel+' id:'+$scope[smodelo]._id);
				    $scope[smodelo] = Model.get({id : $scope[smodelo]._id}, function () {
				        $scope._tmp[ssmodelo] = {};
				    });
				});
    		    console.log('excluindo ... '+JSON.stringify($scope[smodelo][ssmodelos]));
    		}
		}
		
		for(var i in listSubObj){
		    var $this = listSubObj[i];
		    var ssmodelo = $this.domain.toLowerCase();
		    var ssmodelos = $this.domain.toLowerCase()+'s';
		    $scope._tmp = {};
		    
		    console.log('registrando ... add'+$this.domain+'To'+sModel);
		    registraAdd(ssmodelo, ssmodelos);
    		
    		console.log('registrando ... seleciona'+$this.domain+'From'+sModel+'(dominio)');
		    registraSeleciona(ssmodelo, ssmodelos);
    		
    		console.log('registrando ... excluir'+$this.domain+'From'+sModel+'(dominio)');
		    registraExclui(ssmodelo, ssmodelos);
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

.controller('MenuController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket', 'Menu',
	function($scope, $location,  $http, $templateCache, $routeParams, socket, Menu) {
		console.log('RelatorioController');
		
	    daoGenerics($scope, Menu, 'Menu', 'admin.jomow.com.br', []);
		$scope.recarregarMenus();
		
	
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
;

