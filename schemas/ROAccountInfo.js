var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.ROAccountInfo = new Schema({ 
		username: { type: String }
		,hasGithubToken: { type: Boolean }
});
exports.ROAccountInfo.plugin(commonPlugin);
