'use strict';

angular.module('app.resource', ["ngResource"])

.factory('Produto', function ($resource) {
      return $resource('/produto/:id', {}, {
        list: {method:'GET', params : {id : 'all'}, isArray:true},
        get: {method:'GET', params : {id : 'idPassado'}},
        save: {method:'POST'},
        update: {method:'PUT', params : {id : 'idPassado'}},
        excluir: {method:'DELETE', params : {id : 'idPassado'}}
      });
  })
  
  .factory('Login', function ($resource) {
      return $resource('/login/:id', {}, {
        sair: {method:'GET', params : {id : 'sair'}},
        logar: {method:'POST'}
      });
  })
  
   .factory('Email', function ($resource) {
      return $resource('/mail', {}, {
        enviar: {method:'POST'}
      });
  })
  
;
