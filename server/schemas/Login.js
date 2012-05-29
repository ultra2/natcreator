var mongoose = require('mongoose');

exports.Login = new mongoose.Schema({ 
		_id: { type: String }
		,username: { type: String }
		,password: { type: String }
		,rememberMe: { type: Boolean }
});
