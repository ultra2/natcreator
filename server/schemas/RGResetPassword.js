var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.RGResetPassword = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,key: { type: String }
});
