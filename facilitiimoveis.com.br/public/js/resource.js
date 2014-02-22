
'use strict';

angular.module('app.resource', ["ngResource"])
  
   .factory('Email', function ($resource) {
      return $resource('/mail', {}, {
        enviar: {method:'POST'}
      });
  })  


  .factory('Imovel', function ($resource) {
      return $resource('/imovel/:id/:perPage/:page/:query', {}, {
        query: {method:'GET', params : {id : 'query', perPage : 50, page : 0, query : "{}"}, isArray:true},
        list: {method:'GET', params : {id : 'all'}, isArray:true},
        get: {method:'GET', params : {id : 'idPassado'}},
        save: {method:'POST'},
        update: {method:'PUT', params : {id : 'idPassado'}},
        excluir: {method:'DELETE', params : {id : 'idPassado'}}
      });
  })


;

