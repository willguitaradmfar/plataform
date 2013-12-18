module.exports = function(app, config, db, query) {

	app.post('/login', function(req, res) {
		var user = {};
		user.email = req.body.email;
		user.senha = req.body.senha;

		query.user.getUserByQuery(user, function(resp) {
			if (resp && resp.email) {
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

	app.post('/login/sair', function(req, res) {
		req.session.autentication = undefined;
		res.send(200, {
			status: "oK",
			msg: "Usuário saiu com sucesso"
		});
	});
};