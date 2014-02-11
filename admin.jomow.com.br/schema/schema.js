


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


// ########################## Schema de produto Pessoa ###################
var pessoaObjSchema = {};
pessoaObjSchema.dtcreate = {type: Date,default: Date.now};
pessoaObjSchema.dtupdate = {type: Date,default: Date.now};

pessoaObjSchema.nome = "String";
pessoaObjSchema.email = "String";
pessoaObjSchema.senha = "String";


var pessoaSchema = mongoose.Schema(pessoaObjSchema);
module.exports.Pessoa = mongoose.model('pessoa', pessoaSchema);


// ########################## Schema de produto Menu ###################
var menuObjSchema = {};
menuObjSchema.dtcreate = {type: Date,default: Date.now};
menuObjSchema.dtupdate = {type: Date,default: Date.now};

menuObjSchema.nome = "String";
menuObjSchema.descricao = "String";
menuObjSchema.link = "String";
menuObjSchema.class = "String";


var menuSchema = mongoose.Schema(menuObjSchema);
module.exports.Menu = mongoose.model('menu', menuSchema);

