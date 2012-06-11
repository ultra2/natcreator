var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');
var PPDataProperty = require('../schemas/PPDataProperty.js').PPDataProperty;

exports.PPSchema = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,isHierarchy: { type: Boolean }
		,parentId: { type: String }
		,leaf: { type: Boolean }
		,depth: { type: Number }
		,index: { type: Number }
		,properties: [PPDataProperty]
		,name: { type: String }
		,strParam1: { type: String }
});

exports.PPSchema.plugin(commonPlugin);
