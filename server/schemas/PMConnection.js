var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.PMConnection = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,username: { type: String }
		,password: { type: String }
		,database: { type: String }
		,server: { type: String }
		,port: { type: Number }
		,url: { type: String }
});
exports.PMConnection.plugin(commonPlugin);