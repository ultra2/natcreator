var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.CDMetaPropertyRow = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,parentId: { type: String }
		,depth: { type: Number }
		,leaf: { type: Boolean }
		,index: { type: Number }
		,type: { type: String }
		,value: { type: mongoose.Schema.Types.Mixed }
});

exports.CDMetaPropertyRow.plugin(commonPlugin);
