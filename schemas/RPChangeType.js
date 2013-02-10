var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPChangeType = new Schema({ 
		classId: { type: String }
		,metaNodeId: { type: String }
		,newTypeId: { type: String }
});
exports.RPChangeType.plugin(commonPlugin);
