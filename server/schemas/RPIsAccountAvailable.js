var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPIsAccountAvailable = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,username: { type: String }
});
exports.RPIsAccountAvailable.plugin(commonPlugin);
