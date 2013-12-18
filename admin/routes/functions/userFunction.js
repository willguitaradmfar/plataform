module.exports = function(app, db) {
	return {
		getUsers: function(callback) {
			db.User.find(function(err, users) {
				if (users.length != 0) {
					callback(users);
				} else {
					callback(null);
				}
			});
		},

		getUserById: function(id, callback) {
			db.User.findOne({
				_id: id
			}, function(err, user) {
				if (user) {
					callback(user);
				} else {
					callback(user);
				}
			});
		},
		getUserByQuery: function(query, callback) {
			db.User.findOne(query, function(err, user) {
				if (user) {
					callback(user);
				} else {
					callback(user);
				}
			});
		}

	};
};