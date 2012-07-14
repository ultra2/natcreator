var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.PPBooleanProperty = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,index: { type: Number }
		,isKey: { type: Boolean }
		,isDebug: { type: Boolean }
		,isNullable: { type: Boolean }
		,isArray: { type: Boolean }
		,name: { type: String }
		,isPersistent: { type: Boolean, default: true }
		,defaultValue: { type: Boolean }
});
