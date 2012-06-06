var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PersistentProject = new mongoose.Schema({ 
		_id: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
});

exports.PersistentProject.plugin(commonPlugin);
