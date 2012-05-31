var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.Communication = new mongoose.Schema({ 
		_id: { type: String }
});

exports.Communication.plugin(commonPlugin);
