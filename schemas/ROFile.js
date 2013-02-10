var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.ROFile = new Schema({ 
		name: { type: String }
		,content: { type: String }
});
exports.ROFile.plugin(commonPlugin);
