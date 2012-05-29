var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.CRMetaPropertyRow = new mongoose.Schema({ 
		_id: { type: String }
		,parentId: { type: String }
		,depth: { type: Number }
		,leaf: { type: Boolean }
		,index: { type: Number }
		,type: { type: String }
		,value: { type: mongoose.Schema.Types.Mixed }
});

exports.DataProperty.plugin(commonPlugin);
