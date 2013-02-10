var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RGSetupGithub = new Schema({ 
});
exports.RGSetupGithub.plugin(commonPlugin);
