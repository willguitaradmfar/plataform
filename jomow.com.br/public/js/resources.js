'use strict';

angular.module('app.resource', ["ngResource", "socket-io"])
  
   .factory('Email', function ($resource) {
      return $resource('/mail', {}, {
        enviar: {method:'POST'}
      });
  })
  
   .factory('Chat', function (socket) {
      return {
          enviar : function (data) {
              socket.emit('message', data);
          },
          receber : function (cb) {
              socket.on('message', function (data) {
                 cb(data); 
              });
          }
      }
  })
;
