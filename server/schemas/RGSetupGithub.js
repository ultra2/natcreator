var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RGSetupGithub = Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
exports.RGSetupGithub.plugin(commonPlugin);
