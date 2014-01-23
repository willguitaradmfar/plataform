var express = require('express'),
	db = require('../schema/schema.js'),
	path = require('path');

//---------------------------------------------------------------//
var app = express();
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);
//---------------------------------------------------------------//

//---------------------------------------------------------------//
var config = require('../config/config');
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
//---------------------------------------------------------------//
var query = {};
query.produto = require('./routes/functions/produtoFunction')(app, db);
query.user = require('./routes/functions/userFunction')(app, db);
//---------------------------------------------------------------//

//---------------------------------------------------------------//
//---------------------------------------------------------------//

app.configure(function() {
	app.set('port', process.env.PORT || config.domain.port);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.use(express.favicon(__dirname+'/public/favicon/favicon.ico'));
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

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

//redirecionamento temporário
app.get('/', function(req, res) {
	if(process.env.REDIRECT_PATH)
		res.redirect(process.env.REDIRECT_PATH);
	else
		res.redirect("/admin/index.html");
});

app.get('/postit/config', function(req, res) {
	res.send(config.public);
});
require('./routes/api/emailAPI')(app, config, db, query, redisClient);
require('./routes/api/produtoAPI')(app, config, db, query, redisClient);
require('./routes/api/loginAPI')(app, config, db, query, redisClient);

require('../queue/queue.js')(config, db, query, redisClient);

server.listen(app.get('port'), function() {
	console.log('Projeto admin esta executando na porta ' + app.get('port') + ' e IP '+process.env.IP);
	redisClient.rpush('system::mail::administrator', JSON.stringify({text : 'Projeto admin esta executando na porta ' + app.get('port') + ' e IP '+process.env.IP, html : '<b>Projeto admin esta executando na porta ' + app.get('port') + ' e IP '+process.env.IP+'</b>'}));
});
