var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.PPGenerationStep = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,generator_id: { type: String, ref: 'PPGenerator' }
		,path: { type: String }
		,projectSetting_id: { type: String, ref: 'PPProjectSetting' }
		,deleteDirectory: { type: Boolean }
		,active: { type: Boolean }
		,params: { type: String }
});
