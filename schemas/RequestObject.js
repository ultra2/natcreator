var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RequestObject = new Schema({ 
});
exports.RequestObject.plugin(commonPlugin);
