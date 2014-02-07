module.exports = function(app, config, db, query, redisClient, domain, tenant) {

	app.get('/'+domain+'/all', function(req, res) {
		query[domain].getPaginate(10, 0, function(obj) {
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
	    			status: "Ok"
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
	    					status: "Ok"
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
    			   	io.sockets.emit(tenant+'::::'+domain+'::remove', _new);
        			redisClient.rpush(tenant+'::::'+domain+'::remove', JSON.stringify(_new));
        
        			res.send(200, {
        				status: "Ok"
	       			}); 
    			});
  		     }
		});
	});
};
