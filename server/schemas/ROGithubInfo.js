var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.ROGithubInfo = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,isAuthorized: { type: Boolean }
		,username: { type: String }
});

exports.ROGithubInfo.plugin(commonPlugin);
