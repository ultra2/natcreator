var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPResetProjectConfig = new Schema({ 
});
exports.RPResetProjectConfig.plugin(commonPlugin);
