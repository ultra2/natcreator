var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.CRMetaRow = new mongoose.Schema({ 
		_id: { type: String }
		,parentId: { type: String }
		,depth: { type: Number }
		,leaf: { type: Boolean }
		,index: { type: Number }
});

exports.CRMetaRow.plugin(commonPlugin);
