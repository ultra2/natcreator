var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RGAuthGithub = new mongoose.Schema({ 
		_id: { type: String }
});

exports.RGAuthGithub.plugin(commonPlugin);
