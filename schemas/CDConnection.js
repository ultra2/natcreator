var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.CDConnection = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,username: { type: String }
		,password: { type: String }
		,database: { type: String }
		,server: { type: String }
		,port: { type: Number }
		,url: { type: String }
});
exports.CDConnection.plugin(commonPlugin);
