var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPGetTemplateProjectGithubZipUrl = Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
exports.RPGetTemplateProjectGithubZipUrl.plugin(commonPlugin);
