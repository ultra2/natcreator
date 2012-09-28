var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.CDComponentEditor = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
exports.CDComponentEditor.plugin(commonPlugin);
