var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPOpenProject = new Schema({ 
		projectId: { type: String }
});
exports.RPOpenProject.plugin(commonPlugin);
