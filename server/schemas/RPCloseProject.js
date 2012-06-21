var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RPCloseProject = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
});

exports.RPCloseProject.plugin(commonPlugin);
