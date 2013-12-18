module.exports = function(app, config, passport) {

	app.get(config.public.url.site, function(req, res) {
		console.log(req.user);

		res.render('site/index', {
			config: config.public,
			env: config.env,
			session: req.user
		});
	});


};