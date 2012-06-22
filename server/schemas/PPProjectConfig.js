var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');
var PPMetaProperty = require('../schemas/PPMetaProperty.js').PPMetaProperty;

exports.PPProjectConfig = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,customProperties: [PPMetaProperty]
});

exports.PPProjectConfig.plugin(commonPlugin);
