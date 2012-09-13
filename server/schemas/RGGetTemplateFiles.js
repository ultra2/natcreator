var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RGGetTemplateFiles = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
exports.RGGetTemplateFiles.plugin(commonPlugin);