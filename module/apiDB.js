var fs = require("fs");
var mkdirp = require('mkdirp');
var im = require('imagemagick');

module.exports = function(app, config, db, query, redisClient, domain, tenant) {

    app.get('/'+domain+'/query/:perPage/:page/:query', function(req, res) {
        try{
    		//console.log('call router query ');
    		if(!req.params.query){
    		    req.params.query = {};
    		}
    		if(!req.params.perPage){
    		    req.params.perPage = 50;
    		}
    		if(!req.params.page){
    		    req.params.page = 0;
    		}
    		//console.log(req.params.query)
    		query[domain].getPaginate(req.params.query, req.params.perPage, req.params.page, function(obj) {
    			res.send(obj);
    		});
        } catch (e) {
			res.send(200, {
				erro: {
					message: e.message
				}
			});
		}
	});

	app.get('/'+domain+'/all', function(req, res) {
	    try{
    		query[domain].get(function(obj) {
    			res.send(obj);
    		});
	    } catch (e) {
			res.send(200, {
				erro: {
					message: e.message
				}
			});
		}
	});

	app.get('/'+domain+'/:id', function(req, res) {
	    try{
    		var id = req.params.id;
    		query[domain].getById(id, function(obj) {
    			res.send(obj);
    		});
	    } catch (e) {
			res.send(200, {
				erro: {
					message: e.message
				}
			});
		}
	});
	
	app.post('/'+domain+'/uploadImg', function(req, res) {
		
		var b64string = req.body.base64;
		
		var base64 = b64string.replace(/^data:image\/(.*);base64,(.*)$/, "$2");
		var ext = b64string.replace(/^data:image\/(.*);base64,(.*)$/, "$1");
		
        var buf = new Buffer(base64, 'base64');
        
        var nameFile = new Date().getTime();
        
        var path = config.app.pathFileImg+'/'+tenant;
        var file = path+'/'+nameFile+'.'+ext;
        var thumbPath300 = path+'/thumb300'+nameFile+'.'+ext;
        var thumbPath200 = path+'/thumb200'+nameFile+'.'+ext;
        var thumbPath100 = path+'/thumb100'+nameFile+'.'+ext;
        
        fs.exists(path, function (exists) {
            //console.log(exists ? path+" exists" : path+" no exists");
            mkdirp(path, function (err) {
                   if (err) //console.error(err);
                       
                    fs.writeFile(file, buf, function(err) {
                        if(err) {
                            console.log(err);
                            var obj = {};
                            obj.err = err;
                            res.send(obj);
                        } else {
                            //---------------------------------- 300
                            im.resize({
            				  srcPath: file,
            				  dstPath: thumbPath300,
            				  width:   300
            				}, function(err, stdout, stderr){
            				    if (err) console.log(err);
            				});
            				//---------------------------------- 300
                            //---------------------------------- 200
                            im.resize({
            				  srcPath: file,
            				  dstPath: thumbPath200,
            				  width:   200
            				}, function(err, stdout, stderr){
            				    if (err) console.log(err);
            				});
            				//---------------------------------- 200
            				
            				//---------------------------------- 100 
            				im.resize({
            				  srcPath: file,
            				  dstPath: thumbPath100,
            				  width:   100
            				}, function(err, stdout, stderr){
            				    if (err) console.log(err);
            				});
            			    //---------------------------------- 100 
            			    
            			    var obj = {};
                            obj.pathHttp = '/'+tenant+'/'+nameFile+'.'+ext;
                            obj.pathHttpthumb300 = '/'+tenant+'/thumb300'+nameFile+'.'+ext;
                            obj.pathHttpthumb200 = '/'+tenant+'/thumb200'+nameFile+'.'+ext;
                            obj.pathHttpthumb100 = '/'+tenant+'/thumb100'+nameFile+'.'+ext;
                            res.send(obj);
                        }
                    });   
              });
        });
        
      
        
	});

	app.post('/'+domain, function(req, res) {
	    try{
    		//console.log(req.body);
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
		
	    } catch (e) {
			res.send(200, {
				erro: {
					message: e.message
				}
			});
		}
	});

	app.put('/'+domain+'/:id', function(req, res) {
	    try {
    		//console.log(req.body);
    
    		var id = req.params.id;
    
    		query[domain].getById(id, function(_new) {
    		
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
    		});
    		
		} catch (e) {
			res.send(200, {
				erro: {
					message: e.message
				}
			});
		}
	});

	app.delete('/'+domain+'/:id', function(req, res) {
	    try{
    		//console.log(req.body);	
    
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
      		     }else{
      		        res.send(200, {
        				status: "Ok"
        			});         
      		     }
    		});
		
	    } catch (e) {
			res.send(200, {
				erro: {
					message: e.message
				}
			});
		}
	});
};
