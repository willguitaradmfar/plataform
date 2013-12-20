//---------------------------------------------------------------//
var schedule = require('node-schedule');
//---------------------------------------------------------------//


module.exports = function(config, db, query, redisClient) {
    
    var indexProdutoSolr = function (produto) {
        var doc = {};
        doc.id = produto._id;
           
        solrClient.add(doc, function(err,obj){
           if(err){
              console.log("error solr : "+err);
              redisClient.rpush('produto::create', JSON.stringify(produto));
           }else{
              console.log('Solr response:' + obj);
           }
        });
    }
    
    var atualizaProdutoSolr = function (produto) {
        console.log(produto);
    }
    
    var deletaProdutoSolr = function (produto) {
        console.log(produto);
    }
    
    var queueLPOP = function (fila, cb) {
        redisClient.lpop(fila, function (err, obj) {
            if(obj){
                cb(JSON.parse(obj));
                queueLPOP(fila, cb);
            }
        });
    }
    
	var j = schedule.scheduleJob('* * * * *', function(){
        console.log("## PROCESSANDO FILA ##");
        
        queueLPOP("produto::create", indexProdutoSolr);
        
        queueLPOP("produto::update", atualizaProdutoSolr);
        
        queueLPOP("produto::remove", deletaProdutoSolr);
       
    });
};