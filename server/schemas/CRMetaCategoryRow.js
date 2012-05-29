var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.CRMetaCategoryRow = new mongoose.Schema({ 
		_id: { type: String }
		,parentId: { type: String }
		,depth: { type: Number }
		,leaf: { type: Boolean }
		,index: { type: Number }
});

exports.DataProperty.plugin(commonPlugin);
