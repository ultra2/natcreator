var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.Client = new mongoose.Schema({ 
		_id: { type: String }
});

exports.Client.plugin(commonPlugin);
