var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPDeleteProject = new Schema({ 
		projectId: { type: String }
});
exports.RPDeleteProject.plugin(commonPlugin);
