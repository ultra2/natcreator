var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPIsAccountAvailable = new Schema({ 
		username: { type: String }
});
exports.RPIsAccountAvailable.plugin(commonPlugin);
