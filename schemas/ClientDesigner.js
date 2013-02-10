var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.ClientDesigner = new Schema({ 
});
exports.ClientDesigner.plugin(commonPlugin);
