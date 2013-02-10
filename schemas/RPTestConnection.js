var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPTestConnection = new Schema({ 
		username: { type: String }
		,password: { type: String }
		,server: { type: String }
		,database: { type: String }
		,port: { type: Number }
});
exports.RPTestConnection.plugin(commonPlugin);
