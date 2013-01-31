var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RGSetupGithubCallback = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,code: { type: String }
});
exports.RGSetupGithubCallback.plugin(commonPlugin);
