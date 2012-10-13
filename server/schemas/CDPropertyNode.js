var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.CDPropertyNode = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,name: { type: String }
		,type: { type: String }
		,value: { type: mongoose.Schema.Types.Mixed }
		,values: { type: mongoose.Schema.Types.Mixed }
});
exports.CDPropertyNode.plugin(commonPlugin);
