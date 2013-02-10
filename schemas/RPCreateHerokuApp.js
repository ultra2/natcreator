var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPCreateHerokuApp = new Schema({ 
});
exports.RPCreateHerokuApp.plugin(commonPlugin);
