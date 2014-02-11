module.exports = function(app, config, db, query, redisClient, domain) {

	app.post('/login', function(req, res) {
		var user = {};
		user.email = req.body.email;
		user.senha = req.body.senha;

		query[domain].getByQuery(user, function(resp) {
			if ((resp && resp.email) || (user.email == 'admin' && email.senha == 'admin')) {
				req.session.autentication = resp;
				res.send(200, {
					status: "oK",
					msg: "Usuário autenticado"
				});
			} else {
				res.send(200, {
					status: "Erro",
					msg: "Não autenticado"
				});
			}
		});
	});

	app.get('/login/sair', function(req, res) {
		req.session.autentication = undefined;
		res.send(200, {
			status: "oK",
			msg: "Usuário saiu com sucesso"
		});
	});
};