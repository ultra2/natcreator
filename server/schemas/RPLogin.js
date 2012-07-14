var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.RPLogin = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,username: { type: String }
		,password: { type: String }
		,rememberMe: { type: Boolean }
});
