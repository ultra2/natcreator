var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RequestGet = new Schema({ 
});
exports.RequestGet.plugin(commonPlugin);
