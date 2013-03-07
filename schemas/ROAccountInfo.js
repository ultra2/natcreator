var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.ROAccountInfo = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,username: { type: String }
		,hasGithubToken: { type: Boolean }
});
exports.ROAccountInfo.plugin(commonPlugin);
