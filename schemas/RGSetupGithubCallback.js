var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RGSetupGithubCallback = new Schema({ 
		code: { type: String }
});
exports.RGSetupGithubCallback.plugin(commonPlugin);
