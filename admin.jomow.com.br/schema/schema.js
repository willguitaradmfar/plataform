
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

// ########################## Schema de produto Menu ###################
var menuObjSchema = {};
menuObjSchema.dtcreate = {type: Date,default: Date.now};
menuObjSchema.dtupdate = {type: Date,default: Date.now};

menuObjSchema.nome = "String";
menuObjSchema.icone = "String";
menuObjSchema.url = "String";
menuObjSchema.controller = "String";
menuObjSchema.partial = "String";


var menuSchema = mongoose.Schema(menuObjSchema);
module.exports.Menu = mongoose.model('admin.jomow.com.br.menu', menuSchema);

// ########################## Schema de produto Pessoa ###################
var pessoaObjSchema = {};
pessoaObjSchema.dtcreate = {type: Date,default: Date.now};
pessoaObjSchema.dtupdate = {type: Date,default: Date.now};

pessoaObjSchema.nome = "String";
pessoaObjSchema.email = "String";
pessoaObjSchema.senha = "String";

pessoaObjSchema.dominios = [{nome : "String", menus : [menuObjSchema]}];

var pessoaSchema = mongoose.Schema(pessoaObjSchema);
module.exports.Pessoa = mongoose.model('admin.jomow.com.br.pessoa', pessoaSchema);


// ########################## Schema de produto Imovel ###################
var imovelObjSchema = {};
imovelObjSchema.dtcreate = {type: Date,default: Date.now};
imovelObjSchema.dtupdate = {type: Date,default: Date.now};

imovelObjSchema.transacao = "String";
imovelObjSchema.tipo = "String";

imovelObjSchema.codigoRef = "String"

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

imovelObjSchema.imagens = [{nome : "String", src : "String", src100 : "String", src200 : "String", src300 : "String"}];


var imovelSchema = mongoose.Schema(imovelObjSchema);
module.exports.Imovel = mongoose.model('facilitiimoveis.com.br.imovel', imovelSchema);



// ########################## Schema de produto AJRC ###################
var pedidoObjSchema = {};
pedidoObjSchema.dtcreate = {type: Date,default: Date.now};
pedidoObjSchema.dtupdate = {type: Date,default: Date.now};
pedidoObjSchema.condicaoDePagamento = "String";
pedidoObjSchema.dataPedido = "Date";
pedidoObjSchema.telefone = "String";
pedidoObjSchema.endereco = "String";
pedidoObjSchema.bairro = "String";
pedidoObjSchema.cidade = "String";
pedidoObjSchema.cliente = "String";
pedidoObjSchema.userSystem = "String";
pedidoObjSchema.codigo = "Number";
pedidoObjSchema.nomeCliente = "String";
pedidoObjSchema.referenciaEndereco = "String";
pedidoObjSchema.troco = "Number";
pedidoObjSchema.txEntrega = "Number";
pedidoObjSchema.valorCompra = "Number";
pedidoObjSchema.qtde = "Number";
pedidoObjSchema.codigoProduto = "String";
pedidoObjSchema.descricaoProduto = "String";
pedidoObjSchema.valorProduto = "Number";
pedidoObjSchema.horarioPedido = "String";
pedidoObjSchema.total = "Number";
pedidoObjSchema.status = "String";

var pedidoSchema = mongoose.Schema(pedidoObjSchema);
module.exports.Pedido = mongoose.model('ajrc.com.br.pedido', pedidoSchema);



