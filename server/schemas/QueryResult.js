var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.QueryResult = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date, default: new Date(0) }
		,modified: { type: Date, default: new Date(0) }
		,deleted: { type: Boolean }
		,version: { type: Number }
});
exports.CRBaseObject.plugin(commonPlugin);
