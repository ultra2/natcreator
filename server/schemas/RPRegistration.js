var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.RPRegistration = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,username: { type: String }
		,email: { type: String }
		,password: { type: String }
		,confirmPassword: { type: String }
});
