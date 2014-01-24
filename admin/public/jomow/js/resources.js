'use strict';

angular.module('app.resource', ["ngResource"])
  
   .factory('Email', function ($resource) {
      return $resource('/mail', {}, {
        enviar: {method:'POST'}
      });
  })
  
;
