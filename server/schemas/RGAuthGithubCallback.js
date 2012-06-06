var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RGAuthGithubCallback = new mongoose.Schema({ 
		_id: { type: String }
});

exports.RGAuthGithubCallback.plugin(commonPlugin);
