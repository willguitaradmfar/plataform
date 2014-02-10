
'use strict';

angular.module('app.resource', ["ngResource"])
  
   .factory('Email', function ($resource) {
      return $resource('/mail', {}, {
        enviar: {method:'POST'}
      });
  })  


  .factory('Post', function ($resource) {
      return $resource('/post/:id', {}, {
        list: {method:'GET', params : {id : 'all'}, isArray:true},
        get: {method:'GET', params : {id : 'idPassado'}},
        save: {method:'POST'},
        update: {method:'PUT', params : {id : 'idPassado'}},
        excluir: {method:'DELETE', params : {id : 'idPassado'}}
      });
  })

  .factory('Cliente', function ($resource) {
      return $resource('/cliente/:id', {}, {
        list: {method:'GET', params : {id : 'all'}, isArray:true},
        get: {method:'GET', params : {id : 'idPassado'}},
        save: {method:'POST'},
        update: {method:'PUT', params : {id : 'idPassado'}},
        excluir: {method:'DELETE', params : {id : 'idPassado'}}
      });
  })


;

