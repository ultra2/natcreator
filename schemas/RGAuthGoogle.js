var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RGAuthGoogle = new Schema({ 
});
exports.RGAuthGoogle.plugin(commonPlugin);
