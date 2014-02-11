
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
		
	}
])

.controller('PessoaController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket', 'Email', 'Login',
	function($scope, $location,  $http, $templateCache, $routeParams, socket, Email, Login) {
		console.log('PessoaController');
		
		$scope.autenticar = function () {
		    console.log($scope.pessoa)
		    Login.logar($scope.pessoa, function (res) {
		        console.log(res);
		    })
		}
		
		
	}
])

.controller('MenuController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket', 'Email', 'Menu',
	function($scope, $location,  $http, $templateCache, $routeParams, socket, Email, Menu) {
		console.log('MenuController');
		
			//################################## Controle básico de Menu ####################################
			$scope.uimenu = {}
			$scope.uimenu.msg = {};		
			$scope.menu = {};
			
			$scope.recarregarMenus = function(){
				$scope.menus = Menu.list(function(res){
					return res;
				});            
			}

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

			$scope.selecionaMenu = function (menu) {
			    $scope.menu = menu;
			}

			if($routeParams.id){
				Menu.get({id : $routeParams.id}, function (menu) {
					$scope.selecionaMenu(menu);
					if(menu._id){
						console.log('Função não implementada');
					}
				});
			}
        

		//Exemplo de Envio de Email
		$scope.enviarEmail = function () {
		    
		    var msg = 'Nome : '+$scope.contato.nome
		            + '\nLocal : '+$scope.contato.local
		            + '\nEmail : '+$scope.contato.email
		            + '\nMensagem : '+$scope.contato.mensagem;
		    
		     Email.enviar({
                from : 'contato@jomow.com.br',
                to : 'willguitaradmfar@gmail.com, weslleytiu@gmail.com',
                subject : 'Contato '+$scope.contato.nome,
                text : msg
            }, function (data) {
                console.log(data);
                if(data.status)
                	if(data.status == "Ok"){
	                    $scope.contato = {};
	                    $scope.contato.msg = data.msg;
	                    $scope.contato.enviado = true;
	                }
            })
		};
		
		/*$scope.notificacoes = [];
		socket.on('produto::create', function(data) {
		    data.text = "Um Produto foi adicionado";
		    data.entidade = "produto";
		    data.nivel = "success";
            $scope.notificacoes.push(data)
        });*/
	}
])

;

