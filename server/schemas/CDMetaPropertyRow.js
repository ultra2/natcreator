var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.CDMetaPropertyRow = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,parentId: { type: String }
		,depth: { type: Number }
		,leaf: { type: Boolean }
		,index: { type: Number }
		,name: { type: String }
		,type: { type: String }
		,value: { type: mongoose.Schema.Types.Mixed }
});
exports.CRBaseObject.plugin(commonPlugin);
