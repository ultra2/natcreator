var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPGetGithubInfo = Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
exports.RPGetGithubInfo.plugin(commonPlugin);
