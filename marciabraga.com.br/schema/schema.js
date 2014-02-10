


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


// ########################## Schema de produto Post ###################
var postObjSchema = {};
postObjSchema.dtcreate = {type: Date,default: Date.now};
postObjSchema.dtupdate = {type: Date,default: Date.now};

postObjSchema.descricao = "String";
postObjSchema.fotoUrl = "String";
postObjSchema.arquivado = "Boolean";
postObjSchema.autor = "String";
postObjSchema.tag = "String";


var postSchema = mongoose.Schema(postObjSchema);
module.exports.Post = mongoose.model('post', postSchema);


// ########################## Schema de produto Cliente ###################
var clienteObjSchema = {};
clienteObjSchema.dtcreate = {type: Date,default: Date.now};
clienteObjSchema.dtupdate = {type: Date,default: Date.now};

clienteObjSchema.nome = "String";
clienteObjSchema.email = "String";
clienteObjSchema.telefone = "String";


var clienteSchema = mongoose.Schema(clienteObjSchema);
module.exports.Cliente = mongoose.model('cliente', clienteSchema);


