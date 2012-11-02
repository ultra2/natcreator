var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.PMProject = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,name: { type: String }
		,description: { type: String }
		,isTemplate: { type: Boolean }
		,template_id: { type: String, ref: 'PMProject' }
		,guide: { type: String }
		,connectionUrl: { type: String }
});
exports.PMProject.plugin(commonPlugin);
