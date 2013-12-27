module.exports = function(app, config, db, query, redisClient) {

	app.get('/produtos/all', function(req, res) {
		query.produto.getProdutosPaginate(10, 0, function(produto) {
			res.send(produto);
		});
	});

	app.get('/produto/:id', function(req, res) {
		var id = req.params.id;
		query.produto.getProdutoById(id, function(produto) {
			res.send(produto);
		});
	});

	app.post('/produto', function(req, res) {
		console.log('Produtos posts');
		console.log(req.body);

		var newProduto = new db.Produto();
		req.body._id = newProduto._id;

		newProduto.nome = req.body.nome;
		newProduto.codbarra = req.body.codbarra;
		newProduto.teste = req.body.teste;
		newProduto.descricao = req.body.descricao;
		newProduto.resumo = req.body.resumo;
		newProduto.unidade = req.body.unidade;
		newProduto.peso = req.body.peso;
		newProduto.fornecedor = req.body.fornecedor;
		newProduto.caracteristicas = req.body.caracteristicas;
		newProduto.tags = req.body.tags;
        
		newProduto.save(function (err, produto) {
		    io.sockets.emit('produto::create', produto);
    		redisClient.rpush('produto::create', JSON.stringify(produto));
            
    		res.send(200, {
    			status: "Ok",
    			id: produto._id
    		});
		});

		
	});

	app.put('/produto/:id', function(req, res) {
		console.log('Produtos put');
		console.log(req.body);
		console.log(req.params.id);

		var id = req.params.id;

		query.produto.getProdutoById(id, function(newProduto) {
			try {
				newProduto.nome = req.body.nome;
				newProduto.codbarra = req.body.codbarra;
				newProduto.teste = req.body.teste;
				newProduto.descricao = req.body.descricao;
				newProduto.resumo = req.body.resumo;
				newProduto.unidade = req.body.unidade;
				newProduto.peso = req.body.peso;
				newProduto.fornecedor = req.body.fornecedor;
				newProduto.caracteristicas = req.body.caracteristicas;
				newProduto.tags = req.body.tags;
				
				newProduto.dtupdate = new Date();
				newProduto.save(function (err, produto) {
				    
				    io.sockets.emit('produto::update', produto);
    				redisClient.rpush('produto::update', JSON.stringify(produto));
    
    				res.send(200, {
    					status: "Ok",
    					id: produto._id
    				});
				});

				
			} catch (e) {
				res.send(500, {
					error: {
						message: e.message
					}
				});
			}
		});
	});

	app.delete('/produto/:id', function(req, res) {
		console.log('Produtos delete');
		console.log(req.body);
		console.log(req.params.id);

		var id = req.params.id;

		query.produto.getProdutoById(id, function(newProduto) {
            if(newProduto){
    			newProduto.remove(function (err, produto) {
    			   	io.sockets.emit('produto::remove', newProduto);
        			redisClient.rpush('produto::remove', JSON.stringify(newProduto));
        
        			res.send(200, {
        				status: "Ok",
        				id: newProduto._id
        			}); 
    			});
            }
		});
	});
};