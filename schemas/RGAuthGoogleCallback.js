var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RGAuthGoogleCallback = new Schema({ 
});
exports.RGAuthGoogleCallback.plugin(commonPlugin);
