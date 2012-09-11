var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPDeleteProject = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,projectId: { type: String }
});
exports.RPDeleteProject.plugin(commonPlugin);
