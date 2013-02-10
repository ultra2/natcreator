var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPIsProjectNameAvailable = new Schema({ 
		projectName: { type: String }
});
exports.RPIsProjectNameAvailable.plugin(commonPlugin);
