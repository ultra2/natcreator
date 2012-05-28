var mongoose = require('mongoose');

exports.Registration = new mongoose.Schema({ 
		_id: { type: String }
		,username: { type: String }
		,email: { type: String }
		,password: { type: String }
		,confirmPassword: { type: String }
});
