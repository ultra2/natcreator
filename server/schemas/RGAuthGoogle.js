var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.RGAuthGoogle = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
