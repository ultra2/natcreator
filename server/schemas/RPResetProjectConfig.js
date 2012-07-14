var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.RPResetProjectConfig = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
