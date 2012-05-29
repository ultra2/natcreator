var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.AccountInfo = new mongoose.Schema({ 
		_id: { type: String }
		,username: { type: String }
		,hasGithubToken: { type: Boolean }
});

exports.DataProperty.plugin(commonPlugin);
