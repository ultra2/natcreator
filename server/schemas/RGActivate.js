var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.RGActivate = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,key: { type: String }
});
