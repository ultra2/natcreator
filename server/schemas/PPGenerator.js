var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.PPGenerator = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,name: { type: String }
		,source: { type: String }
});
