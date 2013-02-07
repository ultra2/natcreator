var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.PPProjectData = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,deployToHerokuStatus: { type: String }
});
exports.PPProjectData.plugin(commonPlugin);
