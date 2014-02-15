
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

.controller('ImovelController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket', 'Email', 'Imovel',
	function($scope, $location,  $http, $templateCache, $routeParams, socket, Email, Imovel) {
		console.log('ImovelController');
		
			//################################## Controle básico de Imovel ####################################
			$scope.uiimovel = {}
			$scope.uiimovel.msg = {};		
			$scope.imovel = {};
			
			$scope.recarregarImovels = function(){
				$scope.imovels = Imovel.list(function(res){
					return res;
				});            
			}

			$scope.salvarImovel = function(){
				if($scope.imovel._id){
					Imovel.update({id : $scope.imovel._id}, $scope.imovel, function(res){
						$scope.uiimovel.msg.text = "Imovel "+$scope.imovel._id+" Atualizado com sucesso";
						$scope.limparImovel();
						$scope.recarregarImovels();
					});
				}else{
					Imovel.save($scope.imovel, function(res){
						$scope.uiimovel.msg.text = "Imovel "+$scope.imovel._id+" Salvo com sucesso";
						$scope.limparImovel();
						$scope.recarregarImovels();
					});
				}
			}

			$scope.limparImovel = function () {
			    $scope.imovel = {};
			}

			$scope.excluirImovel = function(imovel){ 
				if (imovel._id){
					Imovel.excluir({id : imovel._id }, function () {
						$scope.limparImovel();
						$scope.recarregarImovels();
						$scope.uiimovel.msg.text = "O Imovel "+imovel._id+" foi exluido do servidor ..";
					});
				}
			}

			$scope.selecionaImovel = function (imovel) {
			    $scope.imovel = imovel;
			}

			if($routeParams.id){
				Imovel.get({id : $routeParams.id}, function (imovel) {
					$scope.selecionaImovel(imovel);
					if(imovel._id){
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

