var tungus = require('tungus'),
	mongoose = require('mongoose'),
	config = require('../config/config');

/*mongoose.connect('mongodb://' + config.mongodb.credentials + config.mongodb.host + config.mongodb.port + '/' + config.mongodb.dbName, function(err) {
	if (err) {
		console.log('POSSIVEL SOLUCAO \nsudo service mongodb stop\nsudo rm /var/lib/mongodb/mongod.lock\nsudo chown -R mongodb:mongodb /var/lib/mongodb/\nsudo service mongodb start\n');
		throw err;
	}
});*/

mongoose.connect('tingodb://'+__dirname+'/data', function(err) {
	if (err) {
		console.log('POSSIVEL SOLUCAO \nsudo service mongodb stop\nsudo rm /var/lib/mongodb/mongod.lock\nsudo chown -R mongodb:mongodb /var/lib/mongodb/\nsudo service mongodb start\n');
		throw err;
	}
});

var caracteristicaObjSchema = {};
caracteristicaObjSchema.caracteristica = "String";
caracteristicaObjSchema.valor = "String";

var tagObjSchema = {};
tagObjSchema.nome = "String";

var produtoObjSchema = {};
produtoObjSchema.dtcreate = {type: Date,default: Date.now};
produtoObjSchema.dtupdate = {type: Date,default: Date.now};
produtoObjSchema.nome = "String";
produtoObjSchema.codbarra = "String";
produtoObjSchema.teste = "String";
produtoObjSchema.descricao = "String";
produtoObjSchema.resumo = "String";
produtoObjSchema.unidade = "String";
produtoObjSchema.peso = "Number";
produtoObjSchema.fornecedor = "String";
produtoObjSchema.caracteristicas = [caracteristicaObjSchema];
produtoObjSchema.tags = [tagObjSchema];
var produtoSchema = mongoose.Schema(produtoObjSchema);
module.exports.Produto = mongoose.model('produto', produtoSchema);


var userObjSchema = {};
userObjSchema.dtcreate = {type: Date,default: Date.now};
userObjSchema.dtupdate = {type: Date,default: Date.now};
userObjSchema.nome = "String";
userObjSchema.email = "String";
userObjSchema.senha = "String";
var userSchema = mongoose.Schema(userObjSchema);
module.exports.User = mongoose.model('user', userSchema);