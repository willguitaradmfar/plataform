
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output encoding="UTF-8"/>
<xsl:output method="html"/>
<xsl:template match="/">
<xsl:variable name="smallcase" select="'abcdefghijklmnopqrstuvwxyz'" />
<xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />
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
<xsl:for-each select="modelos/modelo">
			<xsl:variable name="nome" select='nome' />
		    <xsl:variable name="Nome" select='concat(
		                    translate(substring(nome, 1, 1), $smallcase, $uppercase),
		                    translate(substring(nome, 2), $uppercase, $smallcase))' />
.controller('<xsl:value-of select="$Nome"/>Controller', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket', 'Email', '<xsl:value-of select="$Nome"/>',
	function($scope, $location,  $http, $templateCache, $routeParams, socket, Email, <xsl:value-of select="$Nome"/>) {
		console.log('<xsl:value-of select="$Nome"/>Controller');
		
			//################################## Controle básico de <xsl:value-of select="$Nome"/> ####################################
			$scope.ui<xsl:value-of select="$nome"/> = {}
			$scope.ui<xsl:value-of select="$nome"/>.msg = {};		
			$scope.<xsl:value-of select="$nome"/> = {};
			
			$scope.recarregar<xsl:value-of select="$Nome"/>s = function(){
				$scope.<xsl:value-of select="$nome"/>s = <xsl:value-of select="$Nome"/>.list(function(res){
					return res;
				});            
			}

			$scope.salvar<xsl:value-of select="$Nome"/> = function(){
				if($scope.<xsl:value-of select="$nome"/>._id){
					<xsl:value-of select="$Nome"/>.update({id : $scope.<xsl:value-of select="$nome"/>._id}, $scope.<xsl:value-of select="$nome"/>, function(res){
						$scope.ui<xsl:value-of select="$nome"/>.msg.text = "<xsl:value-of select="$Nome"/> "+$scope.<xsl:value-of select="$nome"/>._id+" Atualizado com sucesso";
						$scope.limpar<xsl:value-of select="$Nome"/>();
						$scope.recarregar<xsl:value-of select="$Nome"/>s();
					});
				}else{
					<xsl:value-of select="$Nome"/>.save($scope.<xsl:value-of select="$nome"/>, function(res){
						$scope.ui<xsl:value-of select="$nome"/>.msg.text = "<xsl:value-of select="$Nome"/> "+$scope.<xsl:value-of select="$nome"/>._id+" Salvo com sucesso";
						$scope.limpar<xsl:value-of select="$Nome"/>();
						$scope.recarregar<xsl:value-of select="$Nome"/>s();
					});
				}
			}

			$scope.limpar<xsl:value-of select="$Nome"/> = function () {
			    $scope.<xsl:value-of select="$nome"/> = {};
			}

			$scope.excluir<xsl:value-of select="$Nome"/> = function(<xsl:value-of select="$nome"/>){ 
				if (<xsl:value-of select="$nome"/>._id){
					<xsl:value-of select="$Nome"/>.excluir({id : <xsl:value-of select="$nome"/>._id }, function () {
						$scope.limpar<xsl:value-of select="$Nome"/>();
						$scope.recarregar<xsl:value-of select="$Nome"/>s();
						$scope.ui<xsl:value-of select="$nome"/>.msg.text = "O <xsl:value-of select="$Nome"/> "+<xsl:value-of select="$nome"/>._id+" foi exluido do servidor ..";
					});
				}
			}

			$scope.seleciona<xsl:value-of select="$Nome"/> = function (<xsl:value-of select="$nome"/>) {
			    $scope.<xsl:value-of select="$nome"/> = <xsl:value-of select="$nome"/>;
			}

			if($routeParams.id){
				<xsl:value-of select="$Nome"/>.get({id : $routeParams.id}, function (<xsl:value-of select="$nome"/>) {
					$scope.seleciona<xsl:value-of select="$Nome"/>(<xsl:value-of select="$nome"/>);
					if(<xsl:value-of select="$nome"/>._id){
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
</xsl:for-each>
;
</xsl:template>
</xsl:stylesheet>
