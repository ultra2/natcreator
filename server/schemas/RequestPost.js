var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RequestPost = new mongoose.Schema({ 
		_id: { type: String }
});

exports.RequestPost.plugin(commonPlugin);
