var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports.PPProjectData = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,githubToken: { type: String }
});
