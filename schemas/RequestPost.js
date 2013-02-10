var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RequestPost = new Schema({ 
});
exports.RequestPost.plugin(commonPlugin);
