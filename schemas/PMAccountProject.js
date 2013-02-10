var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.PMAccountProject = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,account_id: { type: String, ref: 'PMAccount' }
		,project_id: { type: String, ref: 'PMProject' }
		,role_id: { type: String, ref: 'PMAccountProjectRole' }
		,name: { type: String }
});
exports.PMAccountProject.plugin(commonPlugin);
