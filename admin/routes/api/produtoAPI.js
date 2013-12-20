module.exports = function(app, config, db, query, redisClient) {

	app.get('/produtos/all', function(req, res) {
		query.produto.getProdutos(function(produto) {
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
        
		newProduto.save(function (err, produto) {
		    io.sockets.emit('produto::create', produto);
    		io.sockets.emit('notifications', {text : 'Um novo Produto foi cadastrado', obj : produto});
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
				newProduto.dtupdate = new Date();
				newProduto.save(function (err, produto) {
				    
				    io.sockets.emit('produto::update', produto);
    				io.sockets.emit('notifications', {text : 'Um Produto foi Atualizado', obj : produto});
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

			newProduto.remove(function (err, produto) {
			   	io.sockets.emit('produto::remove', newProduto);
    			io.sockets.emit('notifications', {text : 'Um Produto foi Removido', obj : newProduto});
    			redisClient.rpush('produto::remove', JSON.stringify(newProduto));
    
    			res.send(200, {
    				status: "Ok",
    				id: newProduto._id
    			}); 
			});
		});
	});
};