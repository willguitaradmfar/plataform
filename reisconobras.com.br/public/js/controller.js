
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

.controller('ServicosController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket',
	function($scope, $location,  $http, $templateCache, $routeParams, socket) {
		console.log('JomowController');
		
	}
])
.controller('ClientesController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket',
	function($scope, $location,  $http, $templateCache, $routeParams, socket) {
		console.log('JomowController');
		
	}
])
.controller('ObrasController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket',
	function($scope, $location,  $http, $templateCache, $routeParams, socket) {
		console.log('JomowController');
		
	}
])

.controller('ContatoController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket', 'Email', 'Contato',
	function($scope, $location,  $http, $templateCache, $routeParams, socket, Email, Contato) {
		console.log('ContatoController');
		
			//################################## Controle básico de Contato ####################################
			$scope.uiContato = {}
			$scope.uiContato.msg = {};		
			$scope.Contato = {};
			
			$scope.recarregarContatos = function(){
				$scope.Contatos = Contato.list(function(res){
					return res;
				});            
			}

			$scope.salvarContato = function(){
				if($scope.Contato._id){
					Contato.update({id : $scope.Contato._id}, $scope.Contato, function(res){
						$scope.uiContato.msg.text = "Contato "+$scope.Contato._id+" Atualizado com sucesso";
						$scope.limparContato();
						$scope.recarregarContatos();
					});
				}else{
					Contato.save($scope.Contato, function(res){
						$scope.uiContato.msg.text = "Contato "+$scope.Contato._id+" Salvo com sucesso";
						$scope.limparContato();
						$scope.recarregarContatos();
					});
				}
			}

			$scope.limparContato = function () {
			    $scope.Contato = {};
			}

			$scope.excluirContato = function(Contato){ 
				if (Contato._id){
					Contato.excluir({id : Contato._id }, function () {
						$scope.limparContato();
						$scope.recarregarContatos();
						$scope.uiContato.msg.text = "O Contato "+Contato._id+" foi exluido do servidor ..";
					});
				}
			}

			$scope.selecionaContato = function (Contato) {
			    $scope.Contato = Contato;
			}

			if($routeParams.id){
				Contato.get({id : $routeParams.id}, function (Contato) {
					$scope.selecionaContato(Contato);
					if(Contato._id){
						console.log('Função não implementada');
					}
				});
			}
        

		//Exemplo de Envio de Email
		$scope.enviarEmail = function () {
		    
		    var msg = 'Nome : '+$scope.contato.nome
		            + '\nTelefone : '+$scope.contato.telefone
		            + '\nEmail : '+$scope.contato.email
		            + '\nEstado : '+$scope.contato.estado
		            + '\nCidade : '+$scope.contato.cidade
		            + '\nMensagem : '+$scope.contato.mensagem;
		    
		     Email.enviar({
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

