


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


// ########################## Schema de produto Imovel ###################
var imovelObjSchema = {};
imovelObjSchema.dtcreate = {type: Date,default: Date.now};
imovelObjSchema.dtupdate = {type: Date,default: Date.now};

imovelObjSchema.categorias = [String];
imovelObjSchema.numeroQuartos = "Number";
imovelObjSchema.areaUtil = "Number";
imovelObjSchema.numeroVagas = "Number";
imovelObjSchema.numeroSuite = "Number";
imovelObjSchema.valorIPTU = "Number";
imovelObjSchema.valorCondominio = "Number";
imovelObjSchema.caracteristicas = [{chave : "String",valor : "String"}];
imovelObjSchema.titulo = "String";
imovelObjSchema.descricao = "String";
imovelObjSchema.preco = "Number";
imovelObjSchema.cep = "String";
imovelObjSchema.rua = "String";
imovelObjSchema.numero = "String";
imovelObjSchema.bairro = "String";
imovelObjSchema.cidade = "String";
imovelObjSchema.UF = "String";
imovelObjSchema.Pais = "String";
imovelObjSchema.complemento = "String";
imovelObjSchema.pontoReferencia = "String";
imovelObjSchema.lat = "Number";
imovelObjSchema.lon = "Number";
imovelObjSchema.imagens = [String];
imovelObjSchema.proprietaria = {nome : "String", email : "String", telefones : [String]};


var imovelSchema = mongoose.Schema(imovelObjSchema);
module.exports.Imovel = mongoose.model('imovel', imovelSchema);


