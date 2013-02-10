var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPGetGithubInfo = new Schema({ 
});
exports.RPGetGithubInfo.plugin(commonPlugin);
