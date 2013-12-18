var express = require('express'),
	db = require('../schema/schema.js'),
	path = require('path');

var app = express();
server = require('http').createServer(app),
io = require('socket.io').listen(server);

var config = require('../config/config');

var query = {};
query.produto = require('./routes/functions/produtoFunction')(app, db);
query.user = require('./routes/functions/userFunction')(app, db);

app.configure(function() {
	app.set('port', process.env.PORT || config.domain.port);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.use(express.favicon()); //'public/stylesheets/img/favicon.ico'
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

app.get('/postit/config', function(req, res) {
	res.send(config.public);
});

require('./routes/views/index')(app, config);
require('./routes/api/produtoAPI')(app, config, db, query);
require('./routes/api/loginAPI')(app, config, db, query);

server.listen(app.get('port'), function() {
	console.log('Projeto admin esta executando na porta ' + app.get('port'));
});