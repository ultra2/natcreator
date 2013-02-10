var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.CDDataType = new Schema({ 
		name: { type: String }
});
exports.CDDataType.plugin(commonPlugin);
