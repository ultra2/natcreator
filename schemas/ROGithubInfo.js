var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.ROGithubInfo = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,isAuthorized: { type: Boolean }
		,username: { type: String }
});
exports.ROGithubInfo.plugin(commonPlugin);
