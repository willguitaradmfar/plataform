


var mongoose = require('mongoose');

mongoose.connect('mongodb://' + config.mongodb.credentials + config.mongodb.host + config.mongodb.port + '/' + config.mongodb.dbName, function(err) {
    if (err) {
        console.log('POSSIVEL SOLUCAO \nsudo service mongodb stop\nsudo rm /var/lib/mongodb/mongod.lock\nsudo chown -R mongodb:mongodb /var/lib/mongodb/\nsudo service mongodb start\n');
        throw err;
    }
});

/*mongoose.connect('tingodb://'+__dirname+'/data', function(err) {
    if (err) {
        console.log('POSSIVEL SOLUCAO \nsudo service mongodb stop\nsudo rm /var/lib/mongodb/mongod.lock\nsudo chown -R mongodb:mongodb /var/lib/mongodb/\nsudo service mongodb start\n');
        throw err;
    }
});*/


// ########################## Schema de produto Produto ###################
var produtoObjSchema = {};
produtoObjSchema.dtcreate = {type: Date,default: Date.now};
produtoObjSchema.dtupdate = {type: Date,default: Date.now};

produtoObjSchema.descricao = "String";
produtoObjSchema.preco = "Number";


var produtoSchema = mongoose.Schema(produtoObjSchema);
module.exports.Produto = mongoose.model('produto', produtoSchema);


// ########################## Schema de produto Contato ###################
var contatoObjSchema = {};
contatoObjSchema.dtcreate = {type: Date,default: Date.now};
contatoObjSchema.dtupdate = {type: Date,default: Date.now};

contatoObjSchema.nome = "String";
contatoObjSchema.telefone = "String";
contatoObjSchema.endereco = "String";


var contatoSchema = mongoose.Schema(contatoObjSchema);
module.exports.Contato = mongoose.model('contato', contatoSchema);


// ########################## Schema de produto Post ###################
var postObjSchema = {};
postObjSchema.dtcreate = {type: Date,default: Date.now};
postObjSchema.dtupdate = {type: Date,default: Date.now};



var postSchema = mongoose.Schema(postObjSchema);
module.exports.Post = mongoose.model('post', postSchema);


