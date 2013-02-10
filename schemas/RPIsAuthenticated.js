var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPIsAuthenticated = new Schema({ 
});
exports.RPIsAuthenticated.plugin(commonPlugin);
