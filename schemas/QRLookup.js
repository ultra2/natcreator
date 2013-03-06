var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.QRLookup = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,_created: { type: Date, default: new Date(0) }
		,_modified: { type: Date, default: new Date(0) }
		,_deleted: { type: Boolean }
		,_version: { type: Number }
		,name: { type: String }
});
exports.QRLookup.plugin(commonPlugin);
