var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PPProjectData = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,githubToken: { type: String }
});

exports.PPProjectData.plugin(commonPlugin);
