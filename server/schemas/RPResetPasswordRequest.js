var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.RPResetPasswordRequest = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,email: { type: String }
});
