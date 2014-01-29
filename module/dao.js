module.exports = function(app, db, schema) {
	var query = {};
	query.schema = schema;
	query[schema.toLowerCase()] =  {
		get: function(callback) {
			db[schema].find(function(err, objs) {
			    if(err)console.error(err);
				if (objs && objs.length != 0) {
					callback(objs);
				} else {
					callback(null);
				}
			});
		},
		
		getPaginate: function(perPage, page, callback) {
			db[schema].find(function(err, objs) {
			    if(err)console.error(err);
				if (objs && objs.length != 0) {
					callback(objs);
				} else {
					callback(null);
				}
			}).limit((perPage));
		},
		
		getById: function(id, callback) {
			db[schema].findOne({
				_id: id
			}, function(err, obj) {
				if (obj) {
					callback(obj);
				} else {
					callback(obj);
				}
			});
		},
		getByQuery: function(query, callback) {
			db[schema].findOne(query, function(err, obj) {
				if (obj) {
					callback(obj);
				} else {
					callback(obj);
				}
			});
		}

	};
	return query;
};
