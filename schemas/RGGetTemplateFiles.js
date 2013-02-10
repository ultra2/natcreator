var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RGGetTemplateFiles = new Schema({ 
});
exports.RGGetTemplateFiles.plugin(commonPlugin);
