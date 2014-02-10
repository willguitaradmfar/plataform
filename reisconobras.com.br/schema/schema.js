


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


// ########################## Schema de produto Contato ###################
var ContatoObjSchema = {};
ContatoObjSchema.dtcreate = {type: Date,default: Date.now};
ContatoObjSchema.dtupdate = {type: Date,default: Date.now};

ContatoObjSchema.nome = "String";
ContatoObjSchema.email = "String";
ContatoObjSchema.telefone = "String";
ContatoObjSchema.cidade = "String";
ContatoObjSchema.estado = "String";
ContatoObjSchema.mensagem = "String";


var ContatoSchema = mongoose.Schema(ContatoObjSchema);
module.exports.Contato = mongoose.model('Contato', ContatoSchema);


