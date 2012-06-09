var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RGAuthGoogleCallback = new mongoose.Schema({ 
		_id: { type: String }
});

exports.RGAuthGoogleCallback.plugin(commonPlugin);
