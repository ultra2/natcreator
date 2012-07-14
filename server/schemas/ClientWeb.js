var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.ClientWeb = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
