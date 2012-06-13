var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.CDMetaCategoryRow = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,parentId: { type: String }
		,depth: { type: Number }
		,leaf: { type: Boolean }
		,index: { type: Number }
});

exports.CDMetaCategoryRow.plugin(commonPlugin);
