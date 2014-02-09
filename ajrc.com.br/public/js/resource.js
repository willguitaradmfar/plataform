
'use strict';

angular.module('app.resource', ["ngResource"])

   .factory('Pedido', function ($resource) {
      return $resource('/pedido/:id', {}, {
        list: {method:'GET', params : {id : 'all'}, isArray:true},
        get: {method:'GET', params : {id : 'idPassado'}},
        save: {method:'POST'},
        update: {method:'PUT', params : {id : 'idPassado'}},
        excluir: {method:'DELETE', params : {id : 'idPassado'}}
      });
  })
;
