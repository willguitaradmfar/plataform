<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output encoding="UTF-8"/>
<xsl:output method="html"/>
<xsl:template match="/">
<xsl:variable name="smallcase" select="'abcdefghijklmnopqrstuvwxyz'" />
<xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />

//---------------------------------------------------------------//
config = require('./config.js');
//---------------------------------------------------------------//

var _tenant = "";

if(process.env.JOMOW_PRODUCAO === "JOMOW"){
    _tenant = config.app.tenant;
}else{
    _tenant = '_'+config.app.tenant;
}
console.log('tenant '+_tenant);

var express = require('express'),
        db = require('./schema/schema.js'),
        RedisStore = require("connect-redis")(express),
        path = require('path');                
        _moduless = require('../module/_module.js');

//---------------------------------------------------------------//
moment = require('moment');
//---------------------------------------------------------------//

//---------------------------------------------------------------//
var app = express();
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);
    io.set('log level', 1); // reduce logging
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

/---------------------------------------------------------------//
//DEVELOPER MODE
require('../module/live-reload.js')(__dirname+'/public', io, _tenant);

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
                secret: _tenant,
                store: new RedisStore({ host: config.redis.host, port: config.redis.port, client: redisClient })
        }));
        app.use(app.router);
        app.use(require('stylus').middleware(__dirname + '/public'));   
        app.use(express.bodyParser({
                uploadDir: process.env.TMP
        }));
        app.use(express.static(path.join(__dirname, 'public')));
});
<xsl:for-each select="modelos/modelo">
    <xsl:variable name="nome" select='nome' />
    <xsl:variable name="Nome" select='concat(
                    translate(substring(nome, 1, 1), $smallcase, $uppercase),
                    translate(substring(nome, 2), $uppercase, $smallcase))' />
require('../module/apiDB.js')(app, config, db, require('../module/dao.js')(app, db, '<xsl:value-of select="$Nome"/>'), redisClient, '<xsl:value-of select="$nome"/>', _tenant);
</xsl:for-each>

require('../module/emailAPI')(app, config, redisClient, _tenant);
require('../module/queue.js')(config, redisClient, _tenant);
require('../module/chat.js')(config, redis, _tenant);

server.listen(app.get('port'), function() {
    var msg = 'Projeto '+_tenant+' esta executando na porta ' + app.get('port') + ' e IP '+process.env.IP +' em '+moment().format('MMMM Do YYYY, h:mm:ss a'); + '\n'
        + JSON.stringify(config);
        console.log(msg);
        redisClient.rpush(_tenant+'::::system::mail::administrator', JSON.stringify({text : msg, html : '<b>'+msg+'</b>'}));
});
</xsl:template>
</xsl:stylesheet>
