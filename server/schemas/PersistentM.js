var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PersistentM = new mongoose.Schema({ 
		_id: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
});

exports.PersistentM.plugin(commonPlugin);
