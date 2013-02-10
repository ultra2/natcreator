var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPCloseProject = new Schema({ 
});
exports.RPCloseProject.plugin(commonPlugin);
