
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

.controller('ProdutoController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket', 'Email', 'Produto',
	function($scope, $location,  $http, $templateCache, $routeParams, socket, Email, Produto) {
		console.log('ProdutoController');
		
			//################################## Controle básico de Produto ####################################
			$scope.uiproduto = {}
			$scope.uiproduto.msg = {};		
			$scope.produto = {};
			
			$scope.recarregarProdutos = function(){
				$scope.produtos = Produto.list(function(res){
					return res;
				});            
			}

			$scope.salvarProduto = function(){
				if($scope.produto._id){
					Produto.update({id : $scope.produto._id}, $scope.produto, function(res){
						$scope.uiproduto.msg.text = "Produto "+$scope.produto._id+" Atualizado com sucesso";
						$scope.limparProduto();
						$scope.recarregarProdutos();
					});
				}else{
					Produto.save($scope.produto, function(res){
						$scope.uiproduto.msg.text = "Produto "+$scope.produto._id+" Salvo com sucesso";
						$scope.limparProduto();
						$scope.recarregarProdutos();
					});
				}
			}

			$scope.limparProduto = function () {
			    $scope.produto = {};
			}

			$scope.excluirProduto = function(produto){ 
				if (produto._id){
					Produto.excluir({id : produto._id }, function () {
						$scope.limparProduto();
						$scope.recarregarProdutos();
						$scope.uiproduto.msg.text = "O Produto "+produto._id+" foi exluido do servidor ..";
					});
				}
			}

			$scope.selecionaProduto = function (produto) {
			    $scope.produto = produto;
			}

			if($routeParams.id){
				Produto.get({id : $routeParams.id}, function (produto) {
					$scope.selecionaProduto(produto);
					if(produto._id){
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

.controller('ContatoController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket', 'Email', 'Contato',
	function($scope, $location,  $http, $templateCache, $routeParams, socket, Email, Contato) {
		console.log('ContatoController');
		
			//################################## Controle básico de Contato ####################################
			$scope.uicontato = {}
			$scope.uicontato.msg = {};		
			$scope.contato = {};
			
			$scope.recarregarContatos = function(){
				$scope.contatos = Contato.list(function(res){
					return res;
				});            
			}

			$scope.salvarContato = function(){
				if($scope.contato._id){
					Contato.update({id : $scope.contato._id}, $scope.contato, function(res){
						$scope.uicontato.msg.text = "Contato "+$scope.contato._id+" Atualizado com sucesso";
						$scope.limparContato();
						$scope.recarregarContatos();
					});
				}else{
					Contato.save($scope.contato, function(res){
						$scope.uicontato.msg.text = "Contato "+$scope.contato._id+" Salvo com sucesso";
						$scope.limparContato();
						$scope.recarregarContatos();
					});
				}
			}

			$scope.limparContato = function () {
			    $scope.contato = {};
			}

			$scope.excluirContato = function(contato){ 
				if (contato._id){
					Contato.excluir({id : contato._id }, function () {
						$scope.limparContato();
						$scope.recarregarContatos();
						$scope.uicontato.msg.text = "O Contato "+contato._id+" foi exluido do servidor ..";
					});
				}
			}

			$scope.selecionaContato = function (contato) {
			    $scope.contato = contato;
			}

			if($routeParams.id){
				Contato.get({id : $routeParams.id}, function (contato) {
					$scope.selecionaContato(contato);
					if(contato._id){
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

;

