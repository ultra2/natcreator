var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.ClientWeb = new Schema({ 
});
exports.ClientWeb.plugin(commonPlugin);
