module.exports = function(app, config, db, query) {

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

		newProduto.nome = req.body.nome
		newProduto.codbarra = req.body.codbarra
		newProduto.descricao = req.body.descricao
		newProduto.resumo = req.body.resumo
		newProduto.unidade = req.body.unidade
		newProduto.peso = req.body.peso
		newProduto.fornecedor = req.body.fornecedor

		newProduto.save();

		io.sockets.emit('produto::create', newProduto);
		io.sockets.emit('notifications', '');

		res.send(200, {
			status: "Ok",
			id: req.body._id
		});
	});

	app.put('/produto/:id', function(req, res) {
		console.log('Produtos put');
		console.log(req.body);
		console.log(req.params.id);

		var id = req.params.id;

		query.produto.getProdutoById(id, function(newProduto) {
			try {

				newProduto.nome = req.body.nome
				newProduto.codbarra = req.body.codbarra
				newProduto.descricao = req.body.descricao
				newProduto.resumo = req.body.resumo
				newProduto.unidade = req.body.unidade
				newProduto.peso = req.body.peso
				newProduto.fornecedor = req.body.fornecedor
				newProduto.dtupdate = new Date();
				newProduto.save();

				io.sockets.emit('produto::update', newProduto);
				io.sockets.emit('notifications', '');

				res.send(200, {
					status: "Ok"
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
			io.sockets.emit('notifications', '');

			newProduto.remove();

			io.sockets.emit('produto::remove', id);

			res.send(200, {
				status: "Ok"
			});
		});
	});
};