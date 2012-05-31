var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.CRAccountProject = new mongoose.Schema({ 
		_id: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,account_id: { type: String, ref: 'CRAccount' }
		,project_id: { type: String, ref: 'CRProject' }
		,role_id: { type: String, ref: 'CRAccountProjectRole' }
});

exports.CRAccountProject.plugin(commonPlugin);
