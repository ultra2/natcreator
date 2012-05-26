var mongoose = require('mongoose');

exports.LoginSchema = new mongoose.Schema({ 
	 	 _id: { type: String }
	 	 ,username: { type: String }
	 	 ,password: { type: String }
	 	 ,rememberMe: { type: Boolean }
});
