
var mongoose = require('mongoose');

var base = "";

if(process.env.JOMOW_PRODUCAO === "JOMOW"){
    base = config.mongodb.dbName;
}else{
    base = '_'+config.mongodb.dbName;
}

mongoose.connect('mongodb://' + config.mongodb.credentials + config.mongodb.host + config.mongodb.port + '/' + base, function(err) {
    if (err) {
        console.log('POSSIVEL SOLUCAO \nsudo service mongodb stop\nsudo rm /var/lib/mongodb/mongod.lock\nsudo chown -R mongodb:mongodb /var/lib/mongodb/\nsudo service mongodb start\n');
        throw err;
    }
});

// ########################## Schema de produto Imovel ###################
var imovelObjSchema = {};
imovelObjSchema.dtcreate = {type: Date,default: Date.now};
imovelObjSchema.dtupdate = {type: Date,default: Date.now};

imovelObjSchema.titulo = "String";
imovelObjSchema.descricao = "String";
imovelObjSchema.preco = "Number";
imovelObjSchema.numeroQuartos = "Number";
imovelObjSchema.areaUtil = "Number";
imovelObjSchema.numeroVagas = "Number";
imovelObjSchema.numeroSuite = "Number";
imovelObjSchema.valorIPTU = "Number";
imovelObjSchema.valorCondominio = "Number";
imovelObjSchema.rua = "String";
imovelObjSchema.cep = "String";
imovelObjSchema.numero = "String";
imovelObjSchema.bairro = "String";
imovelObjSchema.cidade = "String";
imovelObjSchema.UF = "String";
imovelObjSchema.Pais = "String";
imovelObjSchema.complemento = "String";
imovelObjSchema.pontoReferencia = "String";
imovelObjSchema.lat = "Number";
imovelObjSchema.lon = "Number";
imovelObjSchema.proprietario = {nome : "String", email : "String", telefones : [{contato : "String", telefone : "String"}]};

imovelObjSchema.categorias = [{val : "String"}];
imovelObjSchema.caracteristicas = [{chave : "String",valor : "String"}];

imovelObjSchema.imagens = [{nome : "String", src : "String"}];

var imovelSchema = mongoose.Schema(imovelObjSchema);
module.exports.Imovel = mongoose.model('facilitiimoveis.com.br.imovel', imovelSchema);
