var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.ROFile = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,content: { type: String }
		,name: { type: String }
});
exports.CRBaseObject.plugin(commonPlugin);
