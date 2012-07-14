var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.ClientDesigner = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
