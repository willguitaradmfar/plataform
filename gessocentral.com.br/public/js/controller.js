
'use strict';

angular.module('app.controllers', ['socket-io'])

.controller('JomowController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket', 'Email',
	function($scope, $location,  $http, $templateCache, $routeParams, socket, Email) {
		console.log('JomowController');
		
		
		
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
