


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
module.exports.Pedido = mongoose.model('pedido', pedidoSchema);



