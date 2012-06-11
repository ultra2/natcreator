var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RPOpenProject = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,projectId: { type: String }
});

exports.RPOpenProject.plugin(commonPlugin);
