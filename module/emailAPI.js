module.exports = function(app, config, redisClient) {

	app.post('/mail', function(req, res) {
		console.log('Email posts');
		console.log(req.body);
		    
		redisClient.rpush('email::send', JSON.stringify(req.body), function () {
		    res.send(200, {
    			status: "Ok",
    			msg : "Enviado para a Fila de Emails"
    		});    
		});
	});

};