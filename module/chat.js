
module.exports = function(config, redis, tenant) {
    
        var RedisStore = require('socket.io/lib/stores/redis');
        
        pub = redis.createClient(config.redis.port, config.redis.host);
        pub.auth(config.redis.password, function() {console.log('[PUB]Conectado no Redis HOST: '+config.redis.host);});
        pub.on("error", function (err) {console.log("Error " + err);});
        
        sub = redis.createClient(config.redis.port, config.redis.host);
        sub.auth(config.redis.password, function() {console.log('[SUB]Conectado no Redis HOST: '+config.redis.host);});
        sub.on("error", function (err) {console.log("Error " + err);});
        
        db = redis.createClient(config.redis.port, config.redis.host);
        db.auth(config.redis.password, function() {console.log('[DB]Conectado no Redis HOST: '+config.redis.host);});
        db.on("error", function (err) {console.log("Error " + err);});
        
    /*    
    io.sockets.on('connection', function (client) {
        var subscribe = tenant+"::::chat";
        console.log('channel :: '+tenant+"::::chat");
        sub.subscribe(subscribe);
        sub.on("message", function (channel, message) {
            console.log("message received on server from publish ");
            client.emit('message', message);
        });        

        client.on("message", function (msg) {
            console.log('-- >> ' + msg);
            if(msg.type == "chat"){
                pub.publish(subscribe,msg.message);
            }
            else if(msg.type == "setUsername"){
                pub.publish(subscribe,"A new user in connected:" + msg.user);           
            }
        });

        client.on('disconnect', function () {
            //sub.quit();
            pub.publish(subscribe,"Usuário Desconectado");
        });
         
      });*/


    io.sockets.on('connection', function (client) {
        
        client.on("message", function (data) {            
            if(data.type == "chat"){
                pub.publish(data.nicknameTo,JSON.stringify(data));
            }
            else if(data.type == "setUsername"){
                console.log('Usuário Entrou :: '+data.nickname);
                sub.subscribe(data.nickname);
                sub.on('message', function (channel, data) {
                    console.log('emitindo para :: '+channel);
                    var obj = JSON.parse(data);
                    client.emit(channel, obj);
                });                
            }
        });        
                 
      });        
};
