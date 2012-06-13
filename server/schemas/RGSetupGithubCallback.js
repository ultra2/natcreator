var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RGSetupGithubCallback = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,code: { type: String }
});

exports.RGSetupGithubCallback.plugin(commonPlugin);
