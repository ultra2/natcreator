var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RQOpenProject = new mongoose.Schema({ 
		_id: { type: String }
		,projectId: { type: String }
});

exports.RQOpenProject.plugin(commonPlugin);
