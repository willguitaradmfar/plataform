'use strict';

angular.module('app.resource', ["ngResource", "socket-io", 'ngCookies'])
  
   .factory('Email', function ($resource) {
      return $resource('/mail', {}, {
        enviar: {method:'POST'}
      });
  })
  
   .factory('Chat', function (socket, $cookieStore) {
      if(!$cookieStore.get('chat.nickname')){        
        $cookieStore.put('chat.nickname', Math.random());
      }
      var nickname = $cookieStore.get('chat.nickname');
      return {
          enviar : function (message, to) {
              socket.emit('message', {message : message, type : 'chat', nicknameTo : to});
              socket.emit('message', {message : message, type : 'chat', nicknameTo : nickname});
          },
          entrar : function (data) {
              data.from = nickname;
              socket.emit('message', {user : data, type : 'setUsername', nickname : nickname});
          },
          receber : function (cb) {
              socket.on(nickname, function (data) {
                 cb(data); 
              });
          }
      }
  })
;
