module.exports = function(app, config, db, query, redisClient, domain, tenant) {

	app.get('/', function (req, res, next) {
	    if(!req.session.autentication){        
	        res.sendfile('public/login_bg.html');
	    }else{
	        res.sendfile('public/fixed_header_sidebar.html');
	    }    
	});

	app.get('/fixed_header_sidebar.html', function (req, res, next) {
	    if(!req.session.autentication){        
	        res.sendfile('public/login_bg.html');
	    }else{
	        next();
	    }    
	});
	
	app.post('/login', function(req, res) {
		var user = {};
		user.email = req.body.email;
		user.senha = req.body.senha;		

		query[domain].getByQuery(user, function(resp) {
			if ((resp && resp.email)) {
				console.log('Usuário autenticado '+JSON.stringify(user));
				req.session.autentication = resp;
				res.send(200, {
					status: "oK",
					msg: "Usuário autenticado"
				});
			} else {
				console.log('Usuário não autenticado '+JSON.stringify(user));
				res.send(200, {
					status: "Erro",
					msg: "Não autenticado"
				});
			}
		});
	});

	app.post('/login/restaurar', function(req, res) {
		var user = {};
		user.email = req.body.email;		

		query[domain].getByQuery(user, function(resp) {
			if ((resp && resp.email)) {
				console.log('Email Existe na base de dados '+JSON.stringify(user));
				var email = {};
				email.from = "admin@jomow.com.br";
				email.to = resp.email;
				email.subject = "Restauração de senha";
				email.text = "Restauração de senha ... falta implementar senha :: "+resp.senha;

				redisClient.rpush(tenant+'::::email::send', JSON.stringify(email));
				res.send(200, {
					status: "oK",
					msg: "Senha enviada para o email"
				});
			} else {
				console.log('Não existe esse email cadastrado '+JSON.stringify(user));
				res.send(200, {
					status: "Erro",
					msg: "Não existe esse email cadastrado"
				});
			}
		});
	});

	app.get('/login', function(req, res) {
		if(req.session.autentication){
			res.send(200, {
				status: "oK",
				user: req.session.autentication
			});
		}else{
			res.send(200, {
				status: "Erro",
				msg: "Não autenticado"
			});
		}
	});



	app.get('/login/sair', function(req, res) {
		console.log('Usuário saiu '+JSON.stringify(req.session.autentication));
		req.session.autentication = undefined;
		res.send(200, {
			status: "oK",
			msg: "Usuário saiu com sucesso"
		});
	});
};