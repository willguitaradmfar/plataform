
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

.controller('PostController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket', 'Email', 'Post',
	function($scope, $location,  $http, $templateCache, $routeParams, socket, Email, Post) {
		console.log('PostController');
		
			//################################## Controle básico de Post ####################################
			$scope.uipost = {}
			$scope.uipost.msg = {};		
			$scope.post = {};
			
			$scope.recarregarPosts = function(){
				$scope.posts = Post.list(function(res){
					return res;
				});            
			}

			$scope.salvarPost = function(){
				if($scope.post._id){
					Post.update({id : $scope.post._id}, $scope.post, function(res){
						$scope.uipost.msg.text = "Post "+$scope.post._id+" Atualizado com sucesso";
						$scope.limparPost();
						$scope.recarregarPosts();
					});
				}else{
					Post.save($scope.post, function(res){
						$scope.uipost.msg.text = "Post "+$scope.post._id+" Salvo com sucesso";
						$scope.limparPost();
						$scope.recarregarPosts();
					});
				}
			}

			$scope.limparPost = function () {
			    $scope.post = {};
			}

			$scope.excluirPost = function(post){ 
				if (post._id){
					Post.excluir({id : post._id }, function () {
						$scope.limparPost();
						$scope.recarregarPosts();
						$scope.uipost.msg.text = "O Post "+post._id+" foi exluido do servidor ..";
					});
				}
			}

			$scope.selecionaPost = function (post) {
			    $scope.post = post;
			}

			if($routeParams.id){
				Post.get({id : $routeParams.id}, function (post) {
					$scope.selecionaPost(post);
					if(post._id){
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

.controller('ClienteController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket', 'Email', 'Cliente',
	function($scope, $location,  $http, $templateCache, $routeParams, socket, Email, Cliente) {
		console.log('ClienteController');
		
			//################################## Controle básico de Cliente ####################################
			$scope.uicliente = {}
			$scope.uicliente.msg = {};		
			$scope.cliente = {};
			
			$scope.recarregarClientes = function(){
				$scope.clientes = Cliente.list(function(res){
					return res;
				});            
			}

			$scope.salvarCliente = function(){
				if($scope.cliente._id){
					Cliente.update({id : $scope.cliente._id}, $scope.cliente, function(res){
						$scope.uicliente.msg.text = "Cliente "+$scope.cliente._id+" Atualizado com sucesso";
						$scope.limparCliente();
						$scope.recarregarClientes();
					});
				}else{
					Cliente.save($scope.cliente, function(res){
						$scope.uicliente.msg.text = "Cliente "+$scope.cliente._id+" Salvo com sucesso";
						$scope.limparCliente();
						$scope.recarregarClientes();
					});
				}
			}

			$scope.limparCliente = function () {
			    $scope.cliente = {};
			}

			$scope.excluirCliente = function(cliente){ 
				if (cliente._id){
					Cliente.excluir({id : cliente._id }, function () {
						$scope.limparCliente();
						$scope.recarregarClientes();
						$scope.uicliente.msg.text = "O Cliente "+cliente._id+" foi exluido do servidor ..";
					});
				}
			}

			$scope.selecionaCliente = function (cliente) {
			    $scope.cliente = cliente;
			}

			if($routeParams.id){
				Cliente.get({id : $routeParams.id}, function (cliente) {
					$scope.selecionaCliente(cliente);
					if(cliente._id){
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

