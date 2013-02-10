var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RGActivate = new Schema({ 
		key: { type: String }
});
exports.RGActivate.plugin(commonPlugin);
