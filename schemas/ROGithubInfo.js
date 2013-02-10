var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.ROGithubInfo = new Schema({ 
		isAuthorized: { type: Boolean }
		,username: { type: String }
});
exports.ROGithubInfo.plugin(commonPlugin);
