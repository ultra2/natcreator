var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.ROFile = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,content: { type: String }
		,name: { type: String }
});
