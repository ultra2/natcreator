var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RQCloseProject = new mongoose.Schema({ 
		_id: { type: String }
});

exports.RQCloseProject.plugin(commonPlugin);
