var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPOpenProject = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,projectId: { type: String }
});
exports.RPOpenProject.plugin(commonPlugin);
