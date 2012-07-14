var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.RPResetPassword = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,password: { type: String }
		,confirmPassword: { type: String }
});
