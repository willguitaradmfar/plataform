'use strict';

angular.module('app.resource', ["ngResource"])

.factory('Produto', function ($resource) {
      return $resource('/produto:s/:id', {}, {
        list: {method:'GET', params : {id : 'all', s : 's'}, isArray:true},
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
  
;
