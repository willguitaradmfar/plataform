module.exports = function(app, config, db, redisClient) {

	app.get('/tenant/:tenant', function(req, res) {
		console.log(req.params.tenant);
		res.send(200, {
			msg: "Set tenant "+req.params.tenant
		});
	});
};
