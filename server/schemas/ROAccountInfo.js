var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.ROAccountInfo = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,username: { type: String }
		,hasGithubToken: { type: Boolean }
});

exports.ROAccountInfo.plugin(commonPlugin);
