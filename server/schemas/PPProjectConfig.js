var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
var PPMetaProperty = require('../schemas/PPMetaProperty.js').PPMetaProperty;

exports.PPProjectConfig = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,customProperties: [PPMetaProperty]
});
