var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RPGetGithubInfo = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
});

exports.RPGetGithubInfo.plugin(commonPlugin);
