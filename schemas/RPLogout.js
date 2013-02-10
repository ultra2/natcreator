var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPLogout = new Schema({ 
});
exports.RPLogout.plugin(commonPlugin);
