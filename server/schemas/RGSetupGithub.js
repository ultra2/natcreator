var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RGSetupGithub = new mongoose.Schema({ 
		_id: { type: String }
});

exports.RGSetupGithub.plugin(commonPlugin);
