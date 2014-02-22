module.exports = function(app, config, db, query, redisClient, domain, tenant) {

    app.get('/'+domain+'/query/:perPage/:page/:query', function(req, res) {
		console.log('call router query ');
		if(!req.params.query){
		    req.params.query = {};
		}
		if(!req.params.perPage){
		    req.params.perPage = 50;
		}
		if(!req.params.page){
		    req.params.page = 0;
		}
		console.log(req.params.query)
		query[domain].getPaginate(req.params.query, req.params.perPage, req.params.page, function(obj) {
			res.send(obj);
		});
	});

	app.get('/'+domain+'/all', function(req, res) {
		query[domain].get(function(obj) {
			res.send(obj);
		});
	});

	app.get('/'+domain+'/:id', function(req, res) {
		var id = req.params.id;
		query[domain].getById(id, function(obj) {
			res.send(obj);
		});
	});

	app.post('/'+domain, function(req, res) {
		console.log(req.body);
		var _new = new db[query.schema]();
		
		for(var i in req.body){
			if(i != '_id'){
				_new[i] = req.body[i];
			}
		}
        
		_new.save(function (err, obj) {
			if(err){
				res.send(200, {
	    			erro: err
	    		});
	    		console.log(err);
			}else{
		    	io.sockets.emit(tenant+'::::'+domain+'::create', obj);
	    		redisClient.rpush(tenant+'::::'+domain+'::create', JSON.stringify(obj));		    
	    		res.send(200, {
	    			status: "Ok",
	    			obj : obj
	    		});
	    	}
		});		
	});

	app.put('/'+domain+'/:id', function(req, res) {
		console.log(req.body);

		var id = req.params.id;

		query[domain].getById(id, function(_new) {
			try {
				for(var i in req.body){
					if(i != '_id'){
						_new[i] = req.body[i];
					}					
				}
				
				_new.dtupdate = new Date();
				_new.save(function (err, obj) {
					if(err){
						res.send(200, {
			    			erro: err
			    		});	
			    		console.log(err);
					}else{
						io.sockets.emit(tenant+'::::'+domain+'::update', obj);
	    				redisClient.rpush(tenant+'::::'+domain+'::update', JSON.stringify(obj));    
	    				res.send(200, {
	    					status: "Ok",
	    			        obj : obj
	    				});
		    		}

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

	app.delete('/'+domain+'/:id', function(req, res) {
		console.log(req.body);	

		var id = req.params.id;

		query[domain].getById(id, function(_new) {
	            if(_new){
    			_new.remove(function (err, obj) {
    			    if(err){
						res.send(200, {
			    			erro: err
			    		});	
			    		console.log(err);
        			}else{
        			   	io.sockets.emit(tenant+'::::'+domain+'::remove', _new);
            			redisClient.rpush(tenant+'::::'+domain+'::remove', JSON.stringify(_new));
            
            			res.send(200, {
            				status: "Ok"
    	       			}); 
        			}
    			});
  		     }
		});
	});
};
