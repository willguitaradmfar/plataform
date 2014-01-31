
var express = require('express'),
        db = require('../schema/schema.js'),
        path = require('path');                
        _moduless = require('../module/_module.js');


//---------------------------------------------------------------//
moment = require('moment');
//---------------------------------------------------------------//

//---------------------------------------------------------------//
var app = express();
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);
//---------------------------------------------------------------//

//---------------------------------------------------------------//
config = require('./config.js');
//---------------------------------------------------------------//

//---------------------------------------------------------------//
var redis = require("redis"),
    redisClient = redis.createClient(config.redis.port, config.redis.host);
    
redisClient.auth(config.redis.password, function() {
    console.log('Conectado no Redis HOST: '+config.redis.host);
});
  
redisClient.on("error", function (err) {
    console.log("Error " + err);
});
//---------------------------------------------------------------//
var solr = require('solr-client');
solrClient = solr.createClient({host: config.solr.host});
//solrClient.basicAuth(config.solr.user, config.solr.password);
solrClient.autoCommit = true;

/---------------------------------------------------------------//

app.configure(function() {
        app.set('port', process.env.PORT || config.domain.port);
        app.set('views', __dirname + '/views');
        app.set('view engine', 'ejs');
        app.use(express.favicon(__dirname+'/public/favicon/favicon.png'));
        app.use(express.logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(express.cookieParser());
        app.use(express.session({
                secret: 'monkey'
        }));
        app.use(app.router);
        app.use(require('stylus').middleware(__dirname + '/public'));
        app.use(express.bodyParser({
                uploadDir: process.env.TMP
        }));
        app.use(express.static(path.join(__dirname, 'public')));
});


require('../module/apiDB.js')(app, config, db, require('../module/dao.js')(app, db, 'Produto'), redisClient, 'produto');
require('../module/emailAPI')(app, config, redisClient);
require('../module/queue.js')(config, redisClient);

server.listen(app.get('port'), function() {
    var msg = 'Projeto jomow.com.br esta executando na porta ' + app.get('port') + ' e IP '+process.env.IP +' em '+moment().format('MMMM Do YYYY, h:mm:ss a'); + '\n'
        + JSON.stringify(config);
        console.log(msg);
        redisClient.rpush('system::mail::administrator', JSON.stringify({text : msg, html : '<b>'+msg+'</b>'}));
});

