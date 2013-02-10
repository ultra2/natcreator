var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPGetTemplateProjectGithubZipUrl = new Schema({ 
});
exports.RPGetTemplateProjectGithubZipUrl.plugin(commonPlugin);
