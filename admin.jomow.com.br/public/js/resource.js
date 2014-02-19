
'use strict';

angular.module('app.resource', ["ngResource"])
  
   .factory('Email', function ($resource) {
      return $resource('/mail', {}, {
        enviar: {method:'POST'}
      });
  })  

 .factory('Login', function ($resource) {
      return $resource('/login/:id', {}, {
        sair: {method:'GET', params : {id : 'sair'}},
        get: {method:'GET', params : {id : ''}},
        restaurar: {method:'POST', params : {id : 'restaurar'}},
        logar: {method:'POST'}
      });
  })

  .factory('Pessoa', function ($resource) {
      return $resource('/pessoa/:id', {}, {
        query: {method:'GET', params : {id : 'query', perPage : 50, page : 0, query : "{}"}, isArray:true},
        list: {method:'GET', params : {id : 'all'}, isArray:true},
        get: {method:'GET', params : {id : 'idPassado'}},
        save: {method:'POST'},
        update: {method:'PUT', params : {id : 'idPassado'}},
        excluir: {method:'DELETE', params : {id : 'idPassado'}}
      });
  })

  .factory('Menu', function ($resource) {
      return $resource('/menu/:id', {}, {
        query: {method:'GET', params : {id : 'query', perPage : 50, page : 0, query : "{}"}, isArray:true},
        list: {method:'GET', params : {id : 'all'}, isArray:true},
        get: {method:'GET', params : {id : 'idPassado'}},
        save: {method:'POST'},
        update: {method:'PUT', params : {id : 'idPassado'}},
        excluir: {method:'DELETE', params : {id : 'idPassado'}}
      });
  })
  
  .factory('Imovel', function ($resource) {
      return $resource('/imovel/:id', {}, {
        query: {method:'GET', params : {id : 'query', perPage : 50, page : 0, query : "{}"}, isArray:true},
        list: {method:'GET', params : {id : 'all'}, isArray:true},
        get: {method:'GET', params : {id : 'idPassado'}},
        save: {method:'POST'},
        update: {method:'PUT', params : {id : 'idPassado'}},
        excluir: {method:'DELETE', params : {id : 'idPassado'}}
      });
  })


;

