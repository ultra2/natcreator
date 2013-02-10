var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPSetHerokuApiKey = new Schema({ 
		herokuApiKey: { type: String }
});
exports.RPSetHerokuApiKey.plugin(commonPlugin);
