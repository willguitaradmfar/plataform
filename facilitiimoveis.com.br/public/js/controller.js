
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

.controller('JomowController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket', 'Imovel',
	function($scope, $location,  $http, $templateCache, $routeParams, socket, Imovel) {
		console.log('JomowController');
		
		$scope.page = 0;
		$scope.perPage = 50;
		
		var imoveisDestaque = {};
		
		var listar = function () {
		    $scope.imovelsDestaque = Imovel.query({perPage : $scope.perPage, page : $scope.page, query : JSON.stringify(imoveisDestaque)}, function (res) {
    		    return res;
    		});    
		}
		listar();
		
	
	}
])

.controller('ImovelController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket', 'Email', 'Imovel',
	function($scope, $location,  $http, $templateCache, $routeParams, socket, Email, Imovel) {
		console.log('ImovelController');
		var imovel = {};
		imovel.id = $routeParams.id;
		$scope.imovel = Imovel.get(imovel, function (res) {
		    return res;
		})
	}
])

.controller('ImoveisController', ['$scope','$location', '$http', '$templateCache', '$routeParams', 'socket', 'Email', 'Imovel',
	function($scope, $location,  $http, $templateCache, $routeParams, socket, Email, Imovel) {
		console.log('ImovelController');
		jomowModel(Imovel, $scope);
		$scope.imovel = new Imovel();
		$scope.imovel.reloadAll('imovelsDestaque');
		
		$scope.pesquisar = function () {
		    
		    var pesquisa = {};
		    
		    if($scope.pesquisa.text){
        		var titulo = {
        		    titulo : {$regex :'.*'+$scope.pesquisa.text+'.*', $options: 'i'}
        		};
        		var descricao = {
        		    descricao : {$regex :'.*'+$scope.pesquisa.text+'.*', $options: 'i'}
        		};
		    }
    		
    		//pedidoFilter.codigo = {"$gt" : 10, "$lt" : 21};
    		
    		if($scope.pesquisa.precoDeAte && $scope.pesquisa.precoDeAte.length > 0){
    		    pesquisa.preco = {"$gt" : $scope.pesquisa.precoDeAte.split('|')[0], "$lt" : $scope.pesquisa.precoDeAte.split('|')[1]};
    		}
    		
    		if($scope.pesquisa.numeroQuartos && $scope.pesquisa.numeroQuartos > 0){
    		    pesquisa.numeroQuartos = $scope.pesquisa.numeroQuartos;
    		}
    		
    		pesquisa.$or = [titulo, descricao];
    		
		    $scope.imovelsPesquisa = Imovel.query({query : JSON.stringify(pesquisa)}, function (res) {
    		    return res;
    		});    
    		
		}
		
	}
])

;

